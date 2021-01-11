import React from 'react';

import './Comment.css';

const Comment = () => {
    return(
        <div className='CommentContainer'>
            <p className='Name_For_CommentContainer'>Jon Doe</p>
            <p  className='Comment_For_CommentContainer'>Excelent Product :O</p>
            <hr className='Line_For_Comment'></hr>
        </div>
    );
};

export default Comment;