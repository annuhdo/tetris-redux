import { O } from '../components/Tetromino'

function shapes(state = [], action) {
  switch (action.type) {
    case 'TICK':
      const newState = [...state]
      newState.push(new O(action.row*2, action.col*2, action.color))
      return newState
    default:
      return state
  }
  return state
}

export default shapes