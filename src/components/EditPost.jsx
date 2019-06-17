import React, { PureComponent } from 'react';
import TextareaGroup  from './TextareaGroup';
import { connect } from 'react-redux';
import { getPost, updatePost } from '../actions/postActions'

class EditPost extends PureComponent {
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
                    Edit Post
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
                    <input type='submit' value='Edit Post' className='add-btn' />  
                </form>
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

    onSubmit = (e) => {
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

        const { id } = this.props.match.params;
        const updPost = {
            id,
            title,
            body
        }
        this.props.updatePost(updPost)
       
        this.setState({
            title: '',
            body: '',
            id: '',
            errors: {}
        });

        this.props.history.push('/');
    }
    
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
}

const mapStateToProps = state => ({
    post: state.post.post
})

export default connect(mapStateToProps, { getPost, updatePost })(EditPost);
