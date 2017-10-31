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
      willCollide = checkCollisions(
        action.shape,
        [0, 5],
        state.grid)

      if (willCollide) {
        return {
          ...state,
          gameStatus: 'GAME_OVER',
          newShape: false
        }
      }

      return {
        ...state,
        currentShape: action.shape,
        position: [-2, 5],
        shadowPosition: dropPosition(action.shape, [0, 5], state.grid),
        newShape: false
      }
    case 'DROP':
      if (state.gameStatus === 'STOP' || state.gameStatus === 'GAME_OVER') {
        return state
      }
      newPosition[0] += 1

      newGrid = clearLines(state.grid)

      if (newPosition[0] === state.shadowPosition[0]) {
        console.log("collide at the end")
        newGrid = addToGrid(
              state.currentShape,
              newPosition,
              state.grid)
              newGrid = clearLines(state.grid)
              return {
                    ...state,
                    grid: newGrid,
                    newShape: true,
                    currentShape: []
                  }
      }

      // willCollide = checkCollisions(
      //   state.currentShape,
      //   newPosition,
      //   state.grid)

      // newGrid = clearLines(state.grid)

      // if (willCollide) {
      //   newGrid = addToGrid(
      //     state.currentShape,
      //     state.position,
      //     state.grid)

      //   return {
      //     ...state,
      //     grid: newGrid,
      //     newShape: true,
      //     currentShape: []
      //   }
      // }

      return {
        ...state,
        position: newPosition,
        shadowPosition: dropPosition(state.currentShape, newPosition, state.grid),
        grid: newGrid
      }
    case 'HARD_DROP':
      if (state.gameStatus === 'STOP' || state.gameStatus === 'GAME_OVER') {
        return state
      }
      newPosition = dropPosition(state.currentShape, state.position, state.grid)
      newGrid = addToGrid(
        state.currentShape,
        newPosition,
        state.grid)

      newGrid = clearLines(newGrid)

      return {
        ...state,
        grid: newGrid,
        position: newPosition,
        newShape: true,
        currentShape: []
      }

    case 'SHIFT':
      if (state.gameStatus === 'STOP' || state.gameStatus === 'GAME_OVER') {
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
        position: newPosition,
        shadowPosition: dropPosition(state.currentShape, newPosition, state.grid),
      }
    case 'ROTATE':
      if (state.gameStatus === 'STOP' || state.gameStatus === 'GAME_OVER') {
        return state
      }

      newShape = rotateMatrix(state.currentShape)

      willCollide = checkCollisions(
        newShape,
        state.position,
        state.grid)

      newPosition = checkBoundaries(newShape, state.position, state.grid)

      if (willCollide) {
        return {
          ...state,
          position: newPosition,
          shadowPosition: dropPosition(state.currentShape, newPosition, state.grid)
        }
      }
      else {
        return {
          ...state,
          currentShape: newShape,
          shadowPosition: dropPosition(state.currentShape, state.position, state.grid)
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

  return newPosition[0] >= 0 ? newPosition : [0, position[1]]
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

const clearLines = (originalGrid) => {
  const grid = [...originalGrid]
  for (let row = 0; row < originalGrid.length; row++) {
    let toClear = true
    for (let col = 0; col < originalGrid[row].length; col++) {
      if (originalGrid[row][col] === 0) {
        toClear = false
        break
      }
    }
    if (toClear) {
      grid.splice(row, 1)
      grid.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    }
  }

  return grid
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