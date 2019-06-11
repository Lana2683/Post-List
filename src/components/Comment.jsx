import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'

// const Comment = ({
//     name,
//     dd,
//     postId,
//     email,
//     body
// }) => {    
// return (
// <div className="post">
//                      <div className="post-title">
//                          <p>{dd}</p>
//                          <p>{postId}</p>
//                          <p>{name}</p>
//                          <p>{email}</p>
//                          <p>{body}</p>
//                    </div>    
//               </div>

//     )
// }
class Comment extends PureComponent {
    // state = {
    //     id: '',
    //     body: '',
    //     email: '',
    //     postId: '',
    //     name: '',
    // }
    render() {
        const { id, postId, name, email, body} = this.props.comment;
        const { dd } = this.props;
        return (
                <div className="post">
                    <div className="post-title">
                        <p>{dd}</p>
                        <p>{postId}</p>
                        <p>{name}</p>
                        <p>{email}</p>
                        <p>{body}</p>
                    </div>    
                </div>
                
        )
    }
}

// Post.propTypes = {
//     post: PropTypes.object.isRequired
// }

export default Comment;

