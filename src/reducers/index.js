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
  let newState = {...state}

  let {
    grid,
    position,
    shadowPosition,
    currentShape,
    gameStatus,
    speed
  } = newState

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
        shadowPosition: dropPosition(action.shape, [0, 5], state.grid),
        newShape: false
      }
    case 'DROP':
      position[0] += 1

      grid = clearLines(state.grid)

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
          grid: position[0] <= -1 ? grid : newGrid,
          newShape: position[0] <= -1 ? false : true,
          currentShape: [],
          gameStatus: position[0] <= -1 ? 'GAME_OVER' : state.gameStatus
        }
      }

      return {
        ...state,
        position: position,
        shadowPosition: dropPosition(state.currentShape, position, state.grid),
        grid
      }
    case 'HARD_DROP':
      if (state.gameStatus === 'STOP' || state.gameStatus === 'GAME_OVER') {
        return state
      }
      position = dropPosition(state.currentShape, state.position, state.grid)
      grid = addToGrid(
        state.currentShape,
        position,
        state.grid)

      grid = clearLines(grid)

      return {
        ...state,
        grid,
        position: position,
        newShape: true,
        currentShape: []
      }

    case 'SHIFT':
      if (state.gameStatus === 'STOP' || state.gameStatus === 'GAME_OVER') {
        return state
      }

      position[1] += action.payload

      if (state.position[0] < 0) {
        return {
          ...state,
          position: position,
          shadowPosition: dropPosition(state.currentShape, position, state.grid),
        }
      }


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
      if (state.gameStatus === 'STOP' || state.gameStatus === 'GAME_OVER') {
        return state
      }

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
      if (state.gameStatus === 'STOP' || state.gameStatus === 'GAME_OVER') {
        return state
      }
      return {
        ...state,
        accelerate: true
      }
    case 'DECELERATE':
      if (state.gameStatus === 'STOP' || state.gameStatus === 'GAME_OVER') {
        return state
      }
      return {
        ...state,
        accelerate: false
      }
    default:
      return state
  }
}

export default rootReducer