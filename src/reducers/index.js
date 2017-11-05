//import { combineReducers } from 'redux'
import { initialState } from '../store'
import {
  resetGrid,
  rotateMatrix,
  checkCollisions,
  outOfBoundsPosition,
  clearLines,
  addToGrid,
  dropPosition,
} from '../helpers'

function rootReducer(state = initialState, action) {
  let willCollide = false
  let clearedGrid = {}
  let grid = [...state.grid]
  let position = [...state.position]
  let currentShape = [...state.currentShape]
  let gameStatus = state.gameStatus
  let score = state.score

  switch (action.type) {
    case 'RESET_GAME':
      return {
        ...state,
        grid: resetGrid(),
        currentShape: [],
        newShape: true,
        gameStatus: 'STOP',
        score: 0
      }
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
        shadowPosition: dropPosition(action.shape, [0, 5], state.grid),
        newShape: false
      }
    case 'DROP':
      position[0] += 1

      clearedGrid = clearLines(state.grid)
      grid = clearedGrid.grid
      score = clearedGrid.score

      willCollide = checkCollisions(
        state.currentShape,
        position,
        grid)

      if (willCollide) {
        position[0] -= 1 // backtrack
        let newGrid = addToGrid(
          state.currentShape,
          position,
          state.grid)

        return {
          ...state,
          grid: position[0] < -1 ? grid : newGrid,
          newShape: position[0] < -1 ? false : true,
          currentShape: [],
          gameStatus: position[0] < -1 ? 'GAME_OVER' : gameStatus,
          score: state.score + score
        }
      }

      return {
        ...state,
        position: position,
        shadowPosition: dropPosition(state.currentShape, position, state.grid),
        grid,
        score: state.score + score + 2
      }
    case 'HARD_DROP':
      position = dropPosition(state.currentShape, state.position, state.grid)
      grid = addToGrid(
        state.currentShape,
        position,
        state.grid)

      clearedGrid = clearLines(grid)
      grid = clearedGrid.grid
      score = clearedGrid.score

      return {
        ...state,
        grid,
        position: position,
        newShape: true,
        currentShape: [],
        score: state.score + score
      }

    case 'SHIFT':
      position[1] += action.payload

      willCollide = checkCollisions(
        state.currentShape,
        position,
        state.grid)

      if (willCollide) {
        return state
      }

      return {
        ...state,
        position: position,
        shadowPosition: dropPosition(state.currentShape, position, state.grid),
      }
    case 'ROTATE':
      currentShape = rotateMatrix(state.currentShape)

      willCollide = checkCollisions(
        currentShape,
        state.position,
        state.grid)

      position = outOfBoundsPosition(currentShape, state.position, state.grid)

      if (willCollide) {
        return {
          ...state,
          position: position,
          shadowPosition: dropPosition(state.currentShape, position, state.grid)
        }
      }
      else {
        return {
          ...state,
          currentShape,
          shadowPosition: dropPosition(state.currentShape, state.position, state.grid)
        }
      }
    case 'ACCELERATE':
      return {
        ...state,
        accelerate: true
      }
    case 'DECELERATE':
      return {
        ...state,
        accelerate: false
      }
    default:
      return state
  }
}

export default rootReducer