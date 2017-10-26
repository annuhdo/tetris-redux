//import { combineReducers } from 'redux'
import { initialState } from '../store'
import {I, O} from '../components/model'
import { resetGrid, rotateMatrix, checkCollisions } from '../helpers'

function rootReducer(state = initialState, action) {
  const newState = {...state}
  let willCollide = false

  switch (action.type) {
    case 'START_GAME':
    return {
      ...state,
      newShape: false
    }
    case 'STOP_GAME':
      return {
        ...state,
        newShape: true
      }
    case 'DROP':
      willCollide = checkCollisions(
        state.currentShape,
        [
          state.position[0] + 1,
          state.position[1]
        ],
        state.grid)

      if (willCollide) {
        return {
          ...state,
          newShape: true
        }
      }

      return {
        ...state,
        position: [
          state.position[0] + 1,
          state.position[1]
        ]
      }
    case 'SHIFT':
      willCollide = checkCollisions(
        state.currentShape,
        [
          state.position[0],
          state.position[1] + action.payload
        ],
        state.grid)

      if (willCollide) {
        return state
      }

      return {
        ...state,
        position: [
          state.position[0],
          state.position[1] + action.payload
        ]
      }
    case 'ROTATE':
      return {
        ...state,
        currentShape: rotateMatrix(state.currentShape)
      }
    default:
      return state
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