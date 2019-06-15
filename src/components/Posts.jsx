import React, { PureComponent } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts } from '../actions/postActions'


class Posts extends PureComponent {
    state = {
        searchText: '',
        showSortedPosts: false,
        like: false,
        dislike: false    
    }
    render() {
        const { posts } = this.props;
        const { searchText, showSortedPosts, like, dislike } = this.state;
        let filteredPosts = posts.filter(post => post.body.indexOf(searchText)!==-1 || post.title.indexOf(searchText)!==-1);
        let likedPosts = posts.filter(post => (post.like)?post:null)
        let dislikedPosts = posts.filter(post => (post.dislike)?post:null)
        console.log(likedPosts, dislikedPosts)
        return (   
            <>
            <div className='navbar'>
                <input type="text" 
                       name="filter" 
                       id="filter" 
                       className='filter'
                       placeholder='Search Posts'
                       value={searchText}
                       onChange={this.getFilteredPosts} />
                <ul>       
                       <li className="item">
                           
                    <span className="link tooltip" onClick={() =>
                        this.setState({
                        like: !this.state.like
                        })} >
                        <i className="far fa-thumbs-up" />
                        <span className="tooltiptext">sort by likes</span>
                    </span>
                        </li>
                        <li className="item">
                            <span className="link tooltip" onClick={() =>
                        this.setState({
                            dislike: !this.state.dislike
                        })}>
                                <i className="far fa-thumbs-down" />
                                <span className="tooltiptext">sort by dislikes</span>
                            </span>
                        </li>
                        <li className="item"> 
                            <span  className="link tooltip" onClick={() =>
                        this.setState({
                        showSortedPosts: !this.state.showSortedPosts
                        })} >
                                <i className="fas fa-sort-alpha-down" />
                                <span className="tooltiptext">sort A-Z</span>
                            </span>
                        </li>
                    </ul>
            </div>
            {like ? (likedPosts.map(post => (
                <Post  
                    key={post.id}
                    post={post}
                    posts={posts}
                    like={post.like}
                    dislike={post.dislike}
                    onClickLike={() => this.onClickLike(post.id)}
                    onClickDisLike={() => this.onClickDisLike(post.id)}
                />
            ))): 
            dislike ? (dislikedPosts.map(post => (
                <Post  
                    key={post.id}
                    post={post}
                    posts={posts}
                    like={post.like}
                    dislike={post.dislike}
                    onClickLike={() => this.onClickLike(post.id)}
                    onClickDisLike={() => this.onClickDisLike(post.id)}
                />
            ))):
            showSortedPosts ?
            (posts.sort((a, b) => {
                let cmprs = 0;
                if (a.title > b.title) {
                    cmprs = 1;
                } 
                else {
                    cmprs = -1;
                }
                return cmprs;
            }),
            posts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                    posts={posts}
                    like={post.like}
                    dislike={post.dislike}
                    onClickLike={() => this.onClickLike(post.id)}
                    onClickDisLike={() => this.onClickDisLike(post.id)}
                    />)))
                    :
            (filteredPosts.map(post => (
                <Post  
                    key={post.id}
                    post={post}
                    posts={posts}
                    like={post.like}
                    dislike={post.dislike}
                    onClickLike={() => this.onClickLike(post.id)}
                    onClickDisLike={() => this.onClickDisLike(post.id)}
                />
            )))}
            </>       
        )
    }
componentDidMount() {
    this.props.getPosts();
}

getFilteredPosts = (e) => {
    this.setState({
        searchText: e.target.value
        })
}

onClickLike = (id) => {
    const { posts } = this.props;
    const f = posts.map(post => {
        if(post.id === id){ 
            post.like = !post.like;
            post.dislike = false;
            }
            return post
    })
    this.setState({f})
}

onClickDisLike = (id) => {
    const { posts } = this.props;
    const s = posts.map(post => {
        if(post.id === id){ 
            post.dislike =  !post.dislike;
            post.like = false
            }
            return post
    })
    this.setState({s})
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
