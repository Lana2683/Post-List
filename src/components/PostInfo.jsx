import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletePost, getPost } from '../actions/postActions';
import { getComments } from '../actions/commentAction'
import Comment from './Comment';
import InputGroup from './InputGroup';
import { addComment } from '../actions/commentAction';

class PostInfo extends PureComponent {
    state = {
        title: '',
        body: '',
        id: '',
        userId: '',
        showAddComment: false,
        name:'',
        email:'',
        commentBody:'',
        like: false,
        dislike: false
    }
    render() {
        const { id, userId, title, body } = this.props.post;
        const { comments } = this.props;
        const { showAddComment, name, email, commentBody, like, dislike } = this.state;

        const arr=comments.filter(comment => comment.postId === id);
        return (
        <div className="post-info">
            <div className="icons">
                <Link to={`edit-post/${id}`} className='item link'>
                   Edit Post
                </Link>
                <span className='item'>
                    <i className="far fa-trash-alt" onClick={this.onDeletePost.bind(this, id)} />
                </span>
            </div>
            <br/>
            <div className='post-link'>{title}</div>
            <div>
                <p className="post-body">{body}</p>
                <p>Author: {userId}</p>
            </div>
            <span>
                <i className={like ? 'enabled far fa-thumbs-up item' : 'far fa-thumbs-up item'} onClick={() =>
                        this.setState({
                        like: !this.state.like,
                        dislike: false
                        })} />
                <i className={dislike ? 'enabled far fa-thumbs-down item' : 'far fa-thumbs-down item'} onClick={() =>
                        this.setState({
                            dislike: !this.state.dislike,
                            like: false
                        })}/>
            </span>
            <div className='comments'>
                <span className='cmmnt'>
                    <p className='brand'>Comments:</p>
                    <button onClick={() =>
                        this.setState({
                        showAddComment: !this.state.showAddComment
                        })} className='btn-add-cmmnt'>
                    Add new comment
                    </button>
                </span>
                {showAddComment ? (
                <div>
                    <form onSubmit={this.onSubmit}>
                        <InputGroup 
                        name="commentBody"
                        placeholder='Enter Comment'
                        value={commentBody}
                        onChange={this.onChange}
                        />
                        <InputGroup 
                        name="name"
                        placeholder='Enter Name'
                        value={name}
                        onChange={this.onChange}
                        /> 
                        <InputGroup 
                        name="email"
                        placeholder='Enter Email'
                        value={email}
                        onChange={this.onChange}
                        />
                        <input type='submit' value='Add New Comment' className='add-btn' />  
                    </form>
                </div>
                ) : null}
                {arr.map(comment => (
                <Comment
                    key={comment.id}
                    comment={comment}
                    name={comment.name}
                    email={comment.email}
                    commentBody={comment.body}
                />
                ))}
            </div>   
        </div>         
        )
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, email, commentBody } = this.state;
        const postid = this.props.post.id;
        const newComment = {
          postId: postid,
          name,
          email,
          body: commentBody 
        }
        this.props.addComment(newComment);
        this.setState({
            name: '',
            email:'',
            commentBody: ''
        });
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
    this.props.getComments();
}

onDeletePost = id => {
    this.props.deletePost(id);
    this.props.history.push('/');
}

}

const mapStateToProps = state => ({
    post: state.post.post,
    comments: state.comment.comments
});


PostInfo.propTypes = {
    deletePost: PropTypes.func.isRequired
}


export default connect(mapStateToProps,  {deletePost, getPost, addComment, getComments})(PostInfo);