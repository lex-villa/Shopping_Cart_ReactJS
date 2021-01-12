import React from 'react';

import './Comment.css';

const Comment = ({user, comment}) => {
    return(
        <div className='CommentContainer'>
            <p className='Name_For_CommentContainer'>{user}</p>
            <p  className='Comment_For_CommentContainer'>{comment}</p>
            <hr className='Line_For_Comment'></hr>
        </div>
    );
};

export default Comment;