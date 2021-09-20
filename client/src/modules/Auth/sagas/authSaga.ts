import { takeLatest, call, put, select, delay } from 'redux-saga/effects';
import { signInAction, signOutAction, setUser, signUpAction, setError } from 'modules/Auth/actions';
import { ROUTES_PATH } from 'common/constants';
import { SignInPayload, SignUpPayload } from 'modules/Auth/interfaces';
import { isAuthService, signInService, signUpService } from 'modules/Auth/services';
import { push } from 'connected-react-router';
import { currentLocationSelector } from 'common/selectors/selectors';

interface SignInSaga {
  payload: SignInPayload;
}

function *signInSaga({ payload }: SignInSaga) {
  try {
    const { data: user } = yield call(signInService, payload);
    localStorage.setItem('token', user.token);
    yield put(setUser(user));
    yield put(push('/'));
  } catch(e: any) {
    yield put(setError(e.response.data));
  }
}

export function *signOutSaga() {
  localStorage.removeItem('token');
  yield put(push('/signin'));
}

export function *redirectToSignIn() {
  const location: string = yield select(currentLocationSelector);

  if (location !== ROUTES_PATH.SIGN_UP) {
    yield delay(0);
    yield put(push('/signin'));
  }
}

export function *authorizeSaga() {
  try {
    const token: string | null  = localStorage.getItem('token');

    if (token) {
      const { data: user } = yield call(isAuthService, token);
      localStorage.setItem('token', user.token);
      yield put(setUser(user));
      yield put(push('/'));
    } else {
      yield call(redirectToSignIn);
    }
  } catch (e) {
    yield call(redirectToSignIn);
  }
}

interface SignUpSaga {
  payload: SignUpPayload;
}

export function *signUpSaga({ payload } : SignUpSaga) {
  try {
    yield call(signUpService, payload);
    yield put(push('/signin'));
  } catch (e: any) {
    yield put(setError(e.response.data));
  }
}

export function *SignInSagaWatcher() {
  yield takeLatest(signInAction, signInSaga);
  yield takeLatest(signUpAction, signUpSaga);
  yield takeLatest(signOutAction, signOutSaga);
}