// https://github.com/reactjs/redux/blob/master/examples/real-world/src/store/configureStore.prod.js

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk)
);
