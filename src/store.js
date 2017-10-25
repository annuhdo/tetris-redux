import { createStore, compose } from 'redux'
import { O } from './components/Tetromino'

// import the root reducer
import rootReducer from './reducers';

// create an object for the default data
const defaultState = {
  shapes: [],
  grid: []
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, defaultState, enhancers);

export default store;