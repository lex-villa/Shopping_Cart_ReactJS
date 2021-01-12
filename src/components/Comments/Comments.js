import React from 'react';

import Comment from './Comment/Comment';

import './Comments.css';

const Comments = (props) => {
    const { comments } = props;

    let commentsToRender = [];
    if(comments) {
        commentsToRender = comments;
    }

    return (
        <div className='CommentsConatiner'>
            <p className='Title_For_CommentsConatiner'>Comments:</p>
            <div className='CommentContainer_ForCommentsConatiner'>
                {commentsToRender.map((comment) => {
                    return (
                        <Comment 
                            user={comment.user}
                            comment={comment.comment}
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default Comments;