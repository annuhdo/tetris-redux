import { createStore, compose } from 'redux'

// import the root reducer
import rootReducer from './reducers'
import { resetGrid } from './helpers'

// create an object for the default data
export const initialState = {
  shapes: [],
  grid: resetGrid(),
  position: [-2, 5],
  shadowPosition: [-2, 5],
  currentShape: [],
  newShape: true,
  gameStatus: 'STOP'
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, initialState, enhancers);

export default store;