import React, { Component } from 'react';
import Post from './Post';
import { Consumer } from '../context'

class Posts extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { posts } = value;
                    return (
                        <React.Fragment>
                        {posts.map(post => (
                            <Post 
                                key={post.id}
                                post={post}
                                deleteClickHandler={this.deletePost.bind(this,post.id)}
                            />
                        ))}
                        </React.Fragment> 
                    )
                }}
            </Consumer>
        )
      
    }
    deletePost = (id) => {
        const { posts } = this.state;

        const newPosts = posts.filter(post => post.id !== id);

        this.setState({
            posts: newPosts
        })
    }
}

export default Posts
