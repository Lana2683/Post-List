import React, { PureComponent } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts } from '../actions/postActions'


class Posts extends PureComponent {
    state = {
        searchText: '',
        showSortedPosts: false,
    }
    render() {
        const { posts } = this.props;
        const { searchText, showSortedPosts } = this.state;
        let filteredPosts = posts.filter(post => post.body.indexOf(searchText)!==-1 || post.title.indexOf(searchText)!==-1)
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
                           
                    <span className="link tooltip">
                        <i className="far fa-thumbs-up" />
                        <span className="tooltiptext">sort by likes</span>
                    </span>
                        </li>
                        <li className="item">
                            <span className="link tooltip">
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
            {showSortedPosts ?
            ( posts.sort((a, b) => {
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
                    like={post.like}
                    key={post.id}
                    post={post}
                    title={post.title}
                    />)))
                    :
            (filteredPosts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                    like={post.like}
                    title={post.title}
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
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    posts: state.post.posts
})


export default connect(mapStateToProps, {getPosts})(Posts)
