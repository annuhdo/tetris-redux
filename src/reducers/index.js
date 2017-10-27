//import { combineReducers } from 'redux'
import { initialState } from '../store'
import { Shapes } from '../components/model'
import { resetGrid, rotateMatrix, checkCollisions } from '../helpers'

function rootReducer(state = initialState, action) {
  const newState = {...state}
  let willCollide = false
  let newPosition = [...state.position]
  let newShape

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
      const shapes = new Shapes()
      newShape = shapes.getRandom()
      return {
        ...state,
        currentShape: newShape,
        position: [0, 0],
        newShape: false
      }
    case 'DROP':
      newPosition[0] += 1
      willCollide = checkCollisions(
        state.currentShape,
        newPosition,
        state.grid)

      if (willCollide) {
        let newGrid = addToGrid(state.currentShape, newPosition, state.position, state.grid)
        return {
          ...state,
          grid: newGrid,
          newShape: true
        }
      }

      return {
        ...state,
        position: newPosition
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

// const rootReducer = combineReducers(
//   {
//     shapes,
//     grid: grid,
//     position: move,
//     currentShape: rotate
//   }
// )

export default rootReducer