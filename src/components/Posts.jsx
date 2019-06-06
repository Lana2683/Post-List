import React, { Component } from 'react';
import Post from './Post';
// import PostPage from './PostPage'
import { Consumer } from '../context'

class Posts extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { posts } = value;
                    return (
                        <>
                        {posts.map(post => (
                            <Post 
                                key={post.id}
                                post={post}
                            />
                        ))}
                        {/* {posts.map(post => (
                            <PostPage 
                                key={post.id}
                                post={post}
                            />
                        ))} */}
                        </> 
                    )
                }}
            </Consumer>
        )
      
    }
}

export default Posts
