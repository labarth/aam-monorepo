import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, compose } from 'redux';
import { StateType } from 'typesafe-actions';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './reducers';
import mainSaga from './sagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const rootReducer = createRootReducer(history);

export type RootState = StateType<typeof rootReducer>;

export default function configureStore() {
  let enhancer = null;

  if (process.env.NODE_ENV === 'development') {
    enhancer = composeWithDevTools(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history),
      ),
    );
  } else {
    enhancer = compose(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history),
      )
    );
  }

  return createStore(rootReducer, enhancer);
}

export const store = configureStore();

sagaMiddleware.run(mainSaga);