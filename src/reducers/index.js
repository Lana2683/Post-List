import { combineReducers } from 'redux';
import postReducer from './postReducer';
import commentReduser from './commentReduser'

export default combineReducers({
    post: postReducer,
    comment: commentReduser
});
