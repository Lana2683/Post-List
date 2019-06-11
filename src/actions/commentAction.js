import { 
    GET_COMMENTS,
    GET_COMMENT 
} from './types';
import axios from 'axios';

export const getComments = () => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${''}`);
    dispatch({
        type: GET_COMMENTS,
        payload: res.data
    })
}

export const getComment = (id) => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
    dispatch({
        type: GET_COMMENT,
        payload: res.data
    })
}