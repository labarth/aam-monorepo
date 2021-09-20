import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { appLoadingReducer } from 'common/reducers/reducers';
import { userReducer } from 'modules/Auth/reducers/userReducer';
import { authReducer } from 'modules/Auth/reducers/authReducer';

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  appLoading: appLoadingReducer,
  user: userReducer,
  auth: authReducer,
});

export default createRootReducer