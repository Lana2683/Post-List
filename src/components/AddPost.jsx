import React, { Component } from 'react';
import {Consumer} from '../context';
import uuid from 'uuid';

class AddPost extends Component {
    state = {
        title: '',
        body: ''
    }
    render() {
        const { title, body } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='post'>
                        <div className="post-header">Add Post</div>
                        <div className='post-body'>
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                <input type='text' name='title' className='' placeholder='Enter Heading' value={title}
                                onChange={this.onChange}/>
                                <input type='text-area' name='body' className='' placeholder='Enter Post' value={body}
                                onChange={this.onChange}/>
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

        const newPost = {
          id: uuid(),
          title,
          body  
        }
        dispatch({type: 'ADD_POST', payload: newPost})
        
        this.setState({
            title: '',
            body: '',
            id: ''
        })
    }
}

export default AddPost;
