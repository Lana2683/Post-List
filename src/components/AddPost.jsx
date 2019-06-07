import React, { PureComponent } from 'react';
import InputGroup from './InputGroup';
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
        <div className='post'>
            <div className="post-header">
                Add Post
            </div>
            <div className='post-body'>
                <form onSubmit={this.onSubmit}>
                    <InputGroup 
                    name="title"
                    placeholder='Enter Titled'
                    value={title}
                    onChange={this.onChange}
                    error={errors.title}
                    /> 
                    <InputGroup 
                    name="body"
                    placeholder='Enter Post'
                    value={body}
                    onChange={this.onChange}
                    error={errors.body}
                    />
                    <input type='submit' value='Add New Post' className='add-btn' />  
                </form>
            </div>
        </div>
        )
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
       
        const { title, body } = this.state;

        if (title === '' || title.length > 100) {
            this.setState({errors: { title: 'Please, enter title'}});
            return;
        }

        if (body === '' || body.length > 400) {
            this.setState({errors: { body: 'Please, enter post'}});
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
