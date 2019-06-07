import React, { PureComponent } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts } from '../actions/postActions'


class Posts extends PureComponent {
    componentDidMount() {
        this.props.getPosts();
    }
    render() {
        const { posts } = this.props;
        return (   
            <>
            {posts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                />
            ))}
            </>       
        )
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
