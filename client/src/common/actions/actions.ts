import { createAction } from 'typesafe-actions';

export const setAppLoading = createAction('set_app_loading')<boolean>();