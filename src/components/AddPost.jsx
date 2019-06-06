import React, { Component } from 'react';
import {Consumer} from '../context';
import axios from 'axios'
import AddInputGroup from './AddInputGroup';

class AddPost extends Component {
    state = {
        title: '',
        body: '',
        errors: {}
    }
    
    render() {
        const { title, body, errors } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='post'>
                        <div className="post-header">Add Post</div>
                        <div className='post-body'>
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                              <AddInputGroup 
                                name="title"
                                placeholder='Enter Titled'
                                value={title}
                                onChange={this.onChange}
                                error={errors.title}
                              /> 
                              <AddInputGroup 
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
                }}
            </Consumer>
        )
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();
       
        const { title, body } = this.state;
        if (title === '') {
            this.setState({errors: { title: 'Please, enter title'}});
            return;
        }

        if (body === '') {
            this.setState({errors: { body: 'Please, enter post'}});
            return;
        }
        const newPost = {
          title,
          body  
        }

        axios.post('https://jsonplaceholder.typicode.com/posts', newPost).then(res => dispatch({type: 'ADD_POST', payload: res.data}))

        this.setState({
            title: '',
            body: '',
            id: '',
            errors: {}
        });

        this.props.history.push('/');
    }
}

export default AddPost;
