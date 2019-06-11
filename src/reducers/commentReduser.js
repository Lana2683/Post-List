import { 
    GET_COMMENTS,
    GET_COMMENT
         } from '../actions/types';

const initialState = {
    comments: [],
    comment: {},
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            };
        case GET_COMMENT:
        return {
                ...state,
                comment: action.payload
            };
            default:
                return state;
        }
    }