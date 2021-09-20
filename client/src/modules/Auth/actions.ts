import { createAction } from 'typesafe-actions';
import { SignInPayload, SignUpPayload, ErrorPayload } from 'modules/Auth/interfaces';
import { User } from 'modules/Auth/interfaces';

export const signInAction = createAction('sign_in')<SignInPayload>();

export const signUpAction = createAction('sign_up')<SignUpPayload>();

export const signOutAction = createAction('sign_out')();

export const setError = createAction('set_error')<ErrorPayload>();

export const setUser = createAction('set_user')<User>();
