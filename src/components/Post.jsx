import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import {Consumer} from '../context';


class Post extends Component {
    // state = {
    //     showPost: false
    // }
    render() {
        const { id, userId, title, body } = this.props.post;
        // const { showPost } =this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="post">
                            <div className="">
                                {/* <a onClick={()=>this.setState({ showPost: !this.state.showPost})}>{title}</a> */}
                                <Link to='/post-page'  onClick={()=>this.setState({ showPost: !this.state.showPost})} className="link">
                                    {title}
                                </Link>
                                <i className="fas fa-times" onClick={this.onDeletePost.bind(this, id, dispatch)}/>
                            </div>
                            
                            {/* {showPost ? (
                                <div>
                                    <p className="post-body">{body}</p>
                                    <p>User: {userId}</p>
                                    <p>id: {id}</p>
                                </div>
                            ) : null} */}
                            
                        </div>
                    )
                }}
            </Consumer>     
        )
    }
onDeletePost = (id, dispatch) => {
    dispatch({type: 'DELETE_POST', payload: id})
}
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
}

export default Post;
