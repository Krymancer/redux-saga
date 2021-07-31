import {combineReducers} from 'redux';
import user from './user/user';
import {dashboard, dashboard2, dashboard3} from './dashboard/dashboard';

const rootReducer = combineReducers({
  user,
  dashboard,
  dashboard2,
  dashboard3,
});

export default rootReducer;
