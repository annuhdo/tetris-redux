//import { combineReducers } from 'redux'
import { initialState } from '../store'
import { resetGrid, rotateMatrix, checkCollisions } from '../helpers'

function rootReducer(state = initialState, action) {
  const newState = { ...state }
  let newPosition = [...state.position]
  let newShape = [...state.currentShape]
  let newGrid = [...state.grid]
  let filledRows = []
  let willCollide = false

  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        gameStatus: 'START'
      }
    case 'STOP_GAME':
      return {
        ...state,
        gameStatus: 'STOP'
      }
    case 'NEW_SHAPE':
      return {
        ...state,
        currentShape: action.shape,
        position: [-2, 5],
        newShape: false
      }
    case 'DROP':
      newPosition[0] += 1

      if (newPosition[0] < -2) {
        console.log("GAME OVER")
      }

      willCollide = checkCollisions(
        state.currentShape,
        newPosition,
        state.grid)

      if (willCollide) {
        newGrid = addToGrid(
          state.currentShape,
          state.position,
          state.grid)

        filledRows = filledLines(newGrid)
        if (filledRows.length > 0) {
          clearLines(newGrid, filledRows)
        }

        return {
          ...state,
          grid: newGrid,
          newShape: true,
          currentShape: []
        }
      }

      filledRows = filledLines(newGrid)
      if (filledRows.length > 0) {
        clearLines(newGrid, filledRows)
      }

      return {
        ...state,
        position: newPosition,
        grid: newGrid
      }
    case 'HARD_DROP':
      if (newPosition[0] < 0) {
        return state
      }
      newPosition = dropPosition(state.currentShape, state.position, state.grid)

      if (newPosition[0] < -2) {
        // GAME OVER
        return {
          ...state,
          gameStatus: 'STOP'
        }
      }
      newGrid = addToGrid(
        state.currentShape,
        newPosition,
        state.grid)

      filledRows = filledLines(newGrid)
      if (filledRows.length > 0) {
        clearLines(newGrid, filledRows)
      }

      return {
        ...state,
        grid: newGrid,
        position: newPosition,
        newShape: true,
        currentShape: []
      }

    case 'SHIFT':
      if (state.gameStatus === 'STOP') {
        return state
      }

      newPosition[1] += action.payload

      willCollide = checkCollisions(
        state.currentShape,
        newPosition,
        state.grid)

      if (willCollide) {
        return state
      }

      return {
        ...state,
        position: newPosition
      }
    case 'ROTATE':
      if (state.gameStatus === 'STOP') {
        return state
      }

      newShape = rotateMatrix(state.currentShape)

      willCollide = checkCollisions(
        newShape,
        state.position,
        state.grid)

      newPosition = checkBoundaries(newShape, state.position, state.grid)

      if (willCollide) {
        console.log("rotate collision")
        return {
          ...state,
          position: newPosition
        }
      }
      else {
        return {
          ...state,
          currentShape: newShape
        }
      }
    default:
      return state
  }
}

const dropPosition = (shape, position, grid) => {
  const newPosition = [...position]

  while (!checkCollisions(shape, newPosition, grid)) {
    newPosition[0] += 1
  }

  newPosition[0] -= 1

  return newPosition[0] >= -2 ? newPosition : [Number.MIN_SAFE_INTEGER, position[1]]

}

const checkBoundaries = (shape, position, grid) => {
  let newPosition = position
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col] !== 0) {
        if (col + position[1] >= grid[row].length) {
          const diff = Math.abs(grid[row].length - 1 - (col + position[1]))
          newPosition[1] = newPosition[1] - diff
        }
        if (col + position[1] < 0) {
          newPosition[1] = newPosition[1] + Math.abs(col + position[1])
        }
      }
    }
  }
  return newPosition
}

const addToGrid = (shape, position, grid) => {
  const newGrid = [...grid]
  console.log({ newGrid })
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col] !== 0) {
        if (row + position[0] < 0 || row + position[0] >= grid.length) {
          return newGrid
        }
        newGrid[row + position[0]][col + position[1]] = shape[row][col]
      }
    }
  }
  return newGrid
}

const filledLines = (grid) => {
  let rows = []
  for (let row = 0; row < grid.length; row++) {
    let toClear = true
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 0) {
        toClear = false
        break
      }
    }
    if (toClear) {
      rows.push(row)
    }
  }

  return rows
}

const clearLines = (grid, rows) => {
  console.log(rows)
  for (let row = 0; row < rows.length; row++) {
    grid.splice(rows[0], 1)
    grid.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  }
}

// const rootReducer = combineReducers(
//   {
//     shapes,
//     grid: grid,
//     position: move,
//     currentShape: rotate
//   }
// )

export default rootReducer