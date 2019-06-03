import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Post extends Component {
    render() {
        const { 
            userId,
            id,
            title,
            body
        } = this.props
        return (
            <div>
               <h4>{title}</h4>
               <p>{body}</p>
               <p>User: {userId}</p>
               <p>id: {id}</p>
            </div>
        )
    }
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default Post;
