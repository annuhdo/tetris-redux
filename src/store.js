import { createStore, compose } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';
import {O, I, Z, T, L} from './components/Tetromino'

// create an object for the default data
const defaultState = {
  shapes: [new O(5,5, '#33FF9F'), new L(1,4, '#6133FF')]
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, defaultState, enhancers);

export default store;