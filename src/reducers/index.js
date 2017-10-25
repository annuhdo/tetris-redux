import { combineReducers } from 'redux'

import shapes from './shapes'
import grid from './grid'
import { move, rotate } from './moves'

const rootReducer = combineReducers(
  {
    shapes,
    grid,
    position: move,
    currentShape: rotate
  }
)

export default rootReducer