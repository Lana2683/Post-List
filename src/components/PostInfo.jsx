import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletePost, getPost } from '../actions/postActions';



class PostInfo extends PureComponent {
    state = {
        title: '',
        body: '',
        id: '',
        userId: ''
    }


    componentWillReceiveProps(nextProps, nextState){
        const { title, body } = nextProps.post;
        this.setState({
            title,
            body
        });
    }
    
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.getPost(id);
    }

    render() {
        const { id, userId, title, body } = this.state;

         return (
            <div className="post">
                <div className="post-title">
                    <a href='/' className='post-link'>{title}</a>
                    <span className="icons">
                        <Link to={`/edit-post/${id}`}>
                            <i className="fas fa-pencil-alt"></i>
                        </Link>
                        <span>
                        <i className="far fa-trash-alt" onClick={this.onDeletePost} />
                        </span>
                    </span>
                </div>
                
                    <div>
                        <p className="post-body">{body}</p>
                        <p>User: {userId}</p>
                        <p>id: {id}</p>
                    </div>
                
            </div>
                  
        )
    }

onDeletePost = (id) => {
    this.props.deletePost(id)
}

}


PostInfo.propTypes = {
    deletePost: PropTypes.func.isRequired
}


export default connect(null, {deletePost, getPost})(PostInfo);