import { combineReducers } from 'redux'

import shapes from './shapes'
import grid from './grid'

const rootReducer = combineReducers({shapes, grid})

export default rootReducer