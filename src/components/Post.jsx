import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


class Post extends PureComponent {
    render() {
        const { id, title } = this.props.post;
     
            return (
                <div className="post">
                    <div className="post-title">
                        <Link to={`post-info/${id}`}>
                        {title}
                        </Link>
                    </div>    
                </div>
                
        )
    }
}

Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post;
