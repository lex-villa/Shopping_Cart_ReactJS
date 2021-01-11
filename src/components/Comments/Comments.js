import React from 'react';

import Comment from './Comment/Comment';

import './Comments.css';

const Comments = () => {
    return (
        <div className='CommentsConatiner'>
            <p className='Title_For_CommentsConatiner'>Comments:</p>
            <div className='CommentContainer_ForCommentsConatiner'>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    )
};

export default Comments;