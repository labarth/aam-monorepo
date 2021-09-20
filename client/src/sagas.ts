import { fork, call, put } from 'redux-saga/effects';
import { authorizeSaga, SignInSagaWatcher } from 'modules/Auth/sagas/authSaga';
import { setAppLoading } from 'common/actions/actions';

function *initAppSaga() {
  yield put(setAppLoading(true));
  yield call(authorizeSaga);
  yield put(setAppLoading(false));
}


export default function* mainSaga() {
  yield fork(initAppSaga);
  yield fork(SignInSagaWatcher);
}