import { createStore, compose } from 'redux'

// import the root reducer
import rootReducer from './reducers'
import {I, O} from './components/model'
import { resetGrid } from './helpers'

// create an object for the default data
export const initialState = {
  shapes: [],
  grid: resetGrid(),
  position: [0, 0],
  currentShape: new I().shape(),
  newShape: false
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, initialState, enhancers);

export default store;