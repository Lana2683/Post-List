import { 
    GET_POSTS, 
    ADD_POST, 
    DELETE_POST, 
    GET_POST, 
    UPDATE_POST,
} from './types';
import axios from 'axios';

export const getPosts = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
        type: GET_POSTS,
        payload: res.data
    })
}

export const getPost = (id) => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch({
        type: GET_POST,
        payload: res.data
    })
}

export const addPost = post => async dispatch => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
    dispatch({
        type: ADD_POST,
        payload: res.data
    });
}

export const deletePost = (id) => async dispatch => {
    try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch({
        type: DELETE_POST,
        payload: id
    });
    } catch {
        dispatch({
            type: DELETE_POST,
            payload: id
        });
    }
}

export const updatePost = post => async dispatch => {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
    dispatch({
        type: UPDATE_POST,
        payload: res.data
    });
};
