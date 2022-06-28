import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';


const composeEnchenser = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  })
  : compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  composeEnchenser(applyMiddleware(sagaMiddleware)),
);

export default store;
