import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletePost, getPost } from '../actions/postActions';
import Comments from './Comments';

class PostInfo extends PureComponent {
    state = {
        title: '',
        body: '',
        id: '',
        userId: ''
    }
    render() {
        const { id, userId, title, body } = this.props.post;
         return (
            <div className="post-info">
                    <span className="icons">
                        <Link to={`edit-post/${id}`}>
                            <i className="fas fa-pencil-alt"></i>
                        </Link>
                        <span>
                        <i className="far fa-trash-alt" onClick={this.onDeletePost.bind(this, id)} />
                        </span>
                    </span>
                    <p className='post-link'>{title}</p>
                    <div>
                        <p className="post-body">{body}</p>
                        <p>User: {userId}</p>
                        <p>id: {id}</p>
                    </div>
                <div className='comments'>
                    <Link to={`/comments?postId=${userId}`}>
                    <i className="far fa-comment"></i>
                    </Link>
                   {/* <Comments postId={userId}/> */}
                </div>   
            </div>         
        )
    }

componentWillReceiveProps(nextProps){
    const { title, body } = nextProps.post;
    this.setState({
        title,
        body
    });
}

componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
}

onDeletePost = id => {
    this.props.deletePost(id);
    this.props.history.push('/');
}

}

const mapStateToProps = state => ({
    post: state.post.post
});


PostInfo.propTypes = {
    deletePost: PropTypes.func.isRequired
}


export default connect(mapStateToProps, {deletePost, getPost})(PostInfo);