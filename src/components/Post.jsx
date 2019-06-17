import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Post extends PureComponent {
    render() {
        const { id, title, body, like, dislike } = this.props.post;
        const { onClickLike, onClickDisLike }=this.props
            return (
                <div className="post">
                    <div className="post-title">
                        <Link to={`post-info/${id}`} className='post-link'>
                        {title}
                        </Link>
                    </div>  
                    <p>{body}</p> 
                    <hr/>
                    <i className={like ? 'enabled far fa-thumbs-up item' :
                         'far fa-thumbs-up item'} onClick={()=>onClickLike(id)}/>
                    <i className={dislike ? 'enabled far fa-thumbs-down item' :
                         'far fa-thumbs-down item'} onClick={()=>onClickDisLike(id)}/>
                </div>      
        )
    }
}

export default Post;
