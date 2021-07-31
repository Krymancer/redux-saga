import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

/**
 *
 * @param {any} initialSate
 * @return {Object} top
 */
export default function configureStore(): any {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
