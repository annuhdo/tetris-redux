import { O } from '../components/model'

function shapes(state = [], action) {
  switch (action.type) {
    case 'TICK':
      const newState = [...state]
      newState.push(new O().shape())
      return newState
    default:
      return state
  }
}

export default shapes