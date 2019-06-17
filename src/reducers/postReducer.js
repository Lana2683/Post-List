import { 
    GET_POSTS, 
    ADD_POST, 
    DELETE_POST, 
    GET_POST, 
    UPDATE_POST,
} from '../actions/types'

const initialState = {
    posts: [],
    post: {},
    filteredPosts: [],
    searchText: ''
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case GET_POST:
            return {
                ...state,
                post: action.payload
            };
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(post => 
                    post.id === action.payload.id 
                    ? (post = action.payload) : post)
            };
        case  ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => 
                    post.id !== action.payload)
            }   
        default:
            return state;
    }
}
