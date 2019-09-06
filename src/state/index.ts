import { createStore, Store, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { CUserState } from './cUser/types';
import { FileState } from './files/types';

const sagaMiddleware = createSagaMiddleware();

export interface ApplicationState {
  cUser: CUserState;
  files: FileState;
}

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
