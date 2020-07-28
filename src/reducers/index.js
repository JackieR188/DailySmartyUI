import { combineReducers } from 'redux';

import { reducer as form } from 'react-redux';

import posts from './postsReducer';

const rootReducer = combineReducers({
  form,
  posts
});

export default rootReducer;