import React, { Component } from 'react'

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

export default Post;
