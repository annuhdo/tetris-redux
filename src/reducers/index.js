import { combineReducers } from 'redux'

import shapes from './shapes'
import grid from './landed'
import { move, rotate } from './moves'

const rootReducer = combineReducers(
  {
    shapes,
    grid: grid,
    position: move,
    currentShape: rotate
  }
)

export default rootReducer