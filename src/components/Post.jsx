import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Post extends Component {
    render() {
        const { post } = this.props
        return (
            <div className="post">
               <a href="/" onClick={this.onClick}><h4>{post.title}</h4></a>
               <p className="post-body">{post.body}</p>
               <p>User: {post.userId}</p>
               <p>id: {post.id}</p>
            </div>
        )
    }
    onClick = () => {
        console.log('ururkkww')
    }
}



Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post;
