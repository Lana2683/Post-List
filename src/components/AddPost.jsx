import React, { PureComponent } from 'react';
import TextareaGroup from './TextareaGroup';
import { connect } from 'react-redux';
import { addPost } from '../actions/postActions';
import PropTypes from 'prop-types';

class AddPost extends PureComponent {
    state = {
        title: '',
        body: '',
        errors: {}
    }
    
    render() {
        const { title, body, errors } = this.state;
        return (
            <div className='post-body'>
                <div className="post-header">
                    Add Post
                </div>
                <form onSubmit={this.onSubmit}>
                    <TextareaGroup  
                    name="title"
                    placeholder='Enter Titled'
                    value={title}
                    onChange={this.onChange}
                    error={errors.title}
                    /> 
                    <TextareaGroup  
                    name="body"
                    placeholder='Enter Post'
                    value={body}
                    onChange={this.onChange}
                    error={errors.body}
                    />
                    <input type='submit' value='Add New Post' className='add-btn' />  
                </form>
            </div>
        )
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
       
        const { title, body } = this.state;

        if (title === '') {
            this.setState({errors: { title: 'Please, enter title'}});
            return;
        }

        if (body === '' ) {
            this.setState({errors: { body: 'Please, enter post'}});
            return;
        }

        if (title.length > 100) {
            this.setState({errors: { title: 'Title is to long'}});
            return;
        }

        if (body.length > 200) {
            this.setState({errors: { body: 'Post is to long'}});
            return;
        }

        const newPost = {
          title,
          body  
        }

        this.props.addPost(newPost);
        this.setState({
            title: '',
            body: '',
            id: '',
            errors: {}
        });

        this.props.history.push('/');
    }
}

AddPost.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null, { addPost })(AddPost);
