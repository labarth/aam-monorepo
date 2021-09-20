import { ActionType, createReducer } from 'typesafe-actions';
import { AuthState } from 'modules/Auth/interfaces';
import { setError } from '../actions';


type AuthActions = ActionType<typeof setError>;

const initialState = {
  error: {},
};


export const authReducer = createReducer<AuthState, AuthActions>(initialState)
  .handleAction(
    setError,
    (state, { payload }) => {
      return {
        ...state,
        error: payload,
      }
    }
  );