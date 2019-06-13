import React, { PureComponent } from 'react'
import Comment  from './Comment';
import { connect } from 'react-redux';
import { getComments } from '../actions/commentAction'

class Comments extends PureComponent {
  
    render() {
        const { comments } = this.props;
        return (   
            <>
            { comments.map(comment => (
                <Comment
                    key={comment.id}
                    comment={comment}
                    name={comment.name}
                    email={comment.email}
                    postId={comment.postId}
                    x={x}
               />
            ))}
            </>       
        )
    
}
componentDidMount() {
    this.props.getComments();
}

}
const mapStateToProps = state => ({
    comments: state.comment.comments
})





export default connect(mapStateToProps, {getComments})(Comments)
