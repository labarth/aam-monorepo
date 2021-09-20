import { ActionType, createReducer } from 'typesafe-actions';
import { setUser } from '../actions';
import {User} from '../interfaces';

type Actions = ActionType<typeof setUser>;

type UserState = User | {};

const initialState = {};

export const userReducer = createReducer<UserState, Actions>(initialState)
  .handleAction(setUser, (state, { payload }) => payload);