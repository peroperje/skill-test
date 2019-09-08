import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { ApplicationState } from './types';

export const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
