//import { combineReducers } from 'redux'
import { initialState } from '../store'
import { resetGrid, rotateMatrix, checkCollisions } from '../helpers'

function rootReducer(state = initialState, action) {
  const newState = {...state}
  let willCollide = false
  let newPosition = [...state.position]
  let newShape = state.currentShape 

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
        position: [-3, 5],
        newShape: false
      }
    case 'DROP':
      newPosition[0] += 1
      willCollide = checkCollisions(
        state.currentShape,
        newPosition,
        state.grid)

      if (willCollide) {
        let newGrid = addToGrid(
          state.currentShape,
          newPosition,
          state.position,
          state.grid)

          const filled = filledLines(newGrid)
          const clearShape = [...state.currentShape]
          if (filled > 0) {
              clearLines(newGrid, filled)
              clearLines(clearShape, filled)
          }

        return {
          ...state,
          grid: newGrid,
          newShape: true,
          currentShape: clearShape
        }
      }

      const grid = [...state.grid]
      const filled = filledLines(grid)
      if (filled > 0) {
          clearLines(grid, filled)
      }

      return {
        ...state,
        position: newPosition,
        grid: grid
      }
    case 'SHIFT':
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
      newShape = rotateMatrix(state.currentShape)
      willCollide = checkCollisions(
        newShape,
        state.position,
        state.grid)

      if (willCollide) {
        return state
      }
      return {
        ...state,
        currentShape: newShape
      }
    default:
      return state
  }
}

const addToGrid = (shape, newPosition, position, grid) => {
  const newGrid = [...grid]
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col] !== 0) {
        newGrid[row + position[0]][col + position[1]] = shape[row][col]
      }
    }
  }
  return newGrid
}

const filledLines = (grid) => {
  let lines = 0
  for (let row = grid.length - 1; row >= 0; row--) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 0) {
        return lines
      }
    }
    lines += 1
  }

  return lines
}

const clearLines = (grid, lines) => {
  const line = []
  for (let j = 0; j < grid[0].length; j++) {
    line.push(0)
  }
  for (let i = 0; i < lines; i++) {
    grid.pop()
    grid.unshift(line)
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