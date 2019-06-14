import React, { PureComponent } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts, filterPosts } from '../actions/postActions'


class Posts extends PureComponent {
    state = {
        searchText:''
    }
    render() {
        const { posts } = this.props;
        return (   
            <>
            <div className='search'>
                <input type="text" 
                       name="filter" 
                       id="filter" 
                       className='filter'
                       placeholder='Filter Posts'
                       value={this.state.searchText}
                       onChange={this.getFilteredPosts}/>
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
componentDidMount() {
    this.props.getPosts();
}


// filter = (e) => {
//     const { body, title } = this.state;
//     const { posts } = this.props;
//     let arr = posts.filter(post => post.body.indexOf(e.target.value.toLowerCase()) !== -1);
//     this.setState({body, title})
//     console.log(arr)
// }


}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    posts: state.post.posts
})


export default connect(mapStateToProps, {getPosts, filterPosts})(Posts)
