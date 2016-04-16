import { combineReducers } from 'redux';
import tweetReducer from './tweets';
import routeReducer from './route';

const rootReducer = combineReducers({
  tweets: tweetReducer,
  route: routeReducer
});

export default rootReducer;
