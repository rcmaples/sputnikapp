import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import followersReducer from './followersReducer';
import watchersReducer from './watchersReducer';
import starredReducer from './starredReducer';
import reposReducer from './reposReducer';
import trendingReducer from './trendingReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  followers: followersReducer,
  watching: watchersReducer,
  starred: starredReducer,
  repos: reposReducer,
  trending: trendingReducer
});
