import React from 'react';
import './Comment.css'
const Comment = (props) => {
    const { name, body, email, ratings } = props.comment
    return (
        <div className='comment'>
            <h4 className='text-2xl'>name: {name}</h4>
            <p><strong>email: {email}</strong></p>
            <p><strong>what says:</strong> {body}</p>
            <p><strong>ratings: </strong>{ratings}</p>

        </div>
    );
};

export default Comment;