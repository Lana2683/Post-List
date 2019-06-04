import React, { Component } from 'react';
import Post from './Post'

class Posts extends Component {
   state = {
            posts: [
            {
                userId: 1,
                id: 1,
                title: "eveniet quod temporibus", 
                body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"  
            },
            {
                userId: 1,
                id: 2,
                title: "qui est esse", 
                body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"  
            },
            {
                userId: 1,
                id: 3,
                title: "ea molestias quasi exercitationem repellat qui ipsa sit aut", 
                body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"  
            },
            ]        
    };

    render() {
        const { posts } = this.state;
        return (
            <div>
                { posts.map(post => (
                    <Post 
                        key={post.id}
                        post={post}
                    />
                ))}
            </div>
        )
    }
}

export default Posts
