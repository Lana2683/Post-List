import React, { PureComponent } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts } from '../actions/postActions'


class Posts extends PureComponent {
    render() {
        const { posts } = this.props;
        return (   
            <>
            <div className='search'>
                <input type="text" name="filter" id="filter" className='filter'/>
                <label for="filter">&nbsp;Filter Posts</label>
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
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    posts: state.post.posts
})


export default connect(mapStateToProps, {getPosts})(Posts)
