import { 
    GET_COMMENTS
} from './types';
import axios from 'axios';

export const getComments = () => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
    dispatch({
        type: GET_COMMENTS,
        payload: res.data
    })
}
