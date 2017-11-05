import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import the root reducer
import rootReducer from './reducers'
import { resetGrid } from './helpers'

// create an object for the default data
export const initialState = {
  grid: resetGrid(),
  position: [-2, 5],
  shadowPosition: [-2, 5],
  currentShape: [],
  newShape: true,
  gameStatus: 'STOP',
  accelerate: false,
  score: 0
}

const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware
  ),
)

// const enhancers = compose(
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// );
const store = createStore(rootReducer, initialState, enhancer);

export default store;