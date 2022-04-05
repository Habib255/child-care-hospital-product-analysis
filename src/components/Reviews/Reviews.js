import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';
import './Reviews.css'

const Reviews = () => {
    const [comments, setCommentes] = useState([])
    useEffect(() => {
        fetch('comment-data.json')
            .then(res => res.json())
            .then(data => setCommentes(data))
    }, [])
    return (
        <div className='grid'>

            {comments.map(comment => <Comment key={comment.id}
                comment={comment}></Comment>)}


        </div>
    );
};

export default Reviews;