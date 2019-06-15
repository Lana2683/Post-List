import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { likePost } from '../actions/postActions'



class Post extends PureComponent {
    state = {
        like: false,
        dislike: false
    }
    render() {
        const { id, title, body } = this.props.post;
        const { like, dislike } = this.state;
     console.log(state)
            return (
                <div className="post">
                    <div className="post-title">
                        <Link to={`post-info/${id}`} className='post-link'>
                        {title}
                        </Link>
                    </div>  
                    <p>{body}</p> 
                    <i className={like ? 'enabled far fa-thumbs-up item' : 'far fa-thumbs-up item'} onClick={() =>
                        likePost(id)}/>
                    <i className={dislike ? 'enabled far fa-thumbs-down item' : 'far fa-thumbs-down item'} onClick={() =>
                        this.setState({
                            dislike: !this.state.dislike,
                            like: false
                        })}/>
                </div>
                
        )
    }
}

Post.propTypes = {
    post: PropTypes.object.isRequired
}
const mapDispatchToProps = dispatch => {
    return {
        likePost: id => {
            dispatch(likePost(id))
        },
    }
}

export default connect( mapDispatchToProps, {likePost})(Post)