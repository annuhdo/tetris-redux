import { createStore, compose } from 'redux'

// import the root reducer
import rootReducer from './reducers'

import {I} from './components/model'

// create an object for the default data
const defaultState = {
  shapes: [],
  grid: [],
  position: [1,1],
  currentShape: new I().shape(),
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, defaultState, enhancers);

export default store;