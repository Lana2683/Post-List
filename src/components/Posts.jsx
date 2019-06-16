import React, { PureComponent } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts } from '../actions/postActions'


class Posts extends PureComponent {
    state = {
        newPosts:[]
    }
    render() {
        const { posts } = this.props;
        return (   
            <>
            <div className='search'>
                <input type="text" name="filter" id="filter" className='filter' placeholder='Filter Posts'
                 onChange={this.onChange}/>
            </div>
            {posts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                />
            ))}
            </>       
        )
    }

    onChange = (e) => {
    // let arr = this.state
    let { newPosts }=this.state;
    const { posts } = this.props;
    newPosts = posts.filter(post => post.body.indexOf(e.target.value.toLowerCase()) != -1)
    // return arr
    this.setState({posts:newPosts})
//    posts.forEach(function(post){
    console.log(newPosts)
    
    // const item = post.value;
    // if(post.body.indexOf(e.target.value.toLowerCase()) != -1){
    // console.log(post.body)
    // return post
    // }
    
    // else {
    //   post.body.style={{display:'block'}};
    // }
//   });
    }

componentDidMount() {
    this.props.getPosts();
}
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    posts: state.post.posts
})


export default connect(mapStateToProps, {getPosts})(Posts)
