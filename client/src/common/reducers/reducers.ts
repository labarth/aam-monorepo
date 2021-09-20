import { createReducer, ActionType } from 'typesafe-actions';
import { setAppLoading } from '../actions/actions';

type Action = ActionType<typeof setAppLoading>;

const initialState = false;

export const appLoadingReducer = createReducer<boolean, Action>(initialState)
  .handleAction(setAppLoading, (state: boolean, { payload } : { payload: boolean }) => payload);