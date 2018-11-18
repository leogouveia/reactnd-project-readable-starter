import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import posts from './posts';
import comments from './comments';
import categories from './categories';

export default combineReducers({
  posts,
  comments,
  categories,
  loadingBar: loadingBarReducer,
});