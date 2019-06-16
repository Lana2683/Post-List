import { 
    GET_COMMENTS,
    ADD_COMMENT 
} from './types';
import axios from 'axios';

export const getComments = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
    dispatch({
        type: GET_COMMENTS,
        payload: res.data
    })
}

export const addComment = post => async dispatch => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/comments', post);
    dispatch({
        type: ADD_COMMENT,
        payload: res.data
    });
}
