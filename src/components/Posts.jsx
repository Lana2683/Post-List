import React, { PureComponent } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts } from '../actions/postActions'


class Posts extends PureComponent {
    state = {
        searchText:''
    }
    render() {
        const { posts } = this.props;
        const { searchText } = this.state;
        let filteredPosts =  posts.filter(post => post.body.indexOf(searchText)!==-1 || post.title.indexOf(searchText)!==-1)
        return (   
            <>
            <div className='search'>
                <input type="text" 
                       name="filter" 
                       id="filter" 
                       className='filter'
                       placeholder='Search Posts'
                       value={searchText}
                       onChange={this.getFilteredPosts} />
            </div>
            {
            filteredPosts.map(post => (
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

getFilteredPosts = (e) => {
    this.setState({
        showFilteredPosts: !this.state.showFilteredPosts, 
        searchText: e.target.value
        })
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
