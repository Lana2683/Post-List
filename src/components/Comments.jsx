import React, { PureComponent } from 'react'
import Comment  from './Comment';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { getComments } from '../actions/commentAction'


class Comments extends PureComponent {
    // onClickDone = (id) => { 
    //     const todoList = this.state.todoList.map(todoItem => {
    //       if(todoItem.id === id){
    //         todoItem.done = !todoItem.done
    //         todoItem.doneAtdate = new Date();
    //       }
    //       return todoItem
    //     })
    //     this.setState({todoList})
    //   }
    render() {
        const { comments} = this.props;
        return (   
            <>
            { comments.map(comment => (
                <Comment
                    key={comment.id}
                    comment={comment}
                    // postId={comment.postId}
                    // dd={dd}
               />
            ))}
            </>       
        )
    
}
componentDidMount() {
    // const { postId } = this.props.match.params;
    // console.log(postId)
    this.props.getComments();
}

}
// Posts.propTypes = {
//     posts: PropTypes.array.isRequired,
//     getPosts: PropTypes.func.isRequired
// }
const mapStateToProps = state => ({
    comments: state.comment.comments
})

// componentWillReceiveProps(nextProps){
//     const { title, body } = nextProps.post;
//     this.setState({
//         title,
//         body
//     });
// }

// componentDidMount() {
//     const { id } = this.props.match.params;
//     this.props.getPost(id);
// }



// const mapStateToProps = state => ({
//     post: state.post.post
// });




export default connect(mapStateToProps, {getComments})(Comments)
