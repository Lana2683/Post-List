import React from 'react'

const Comment = ({
    name,
    email,
    commentBody
}) => { 
return (
<div className="post">
            <p>{commentBody}</p>
            <p>{name}</p>
            <p>{email}</p>
                
           
    </div>

    )
}

export default Comment;

