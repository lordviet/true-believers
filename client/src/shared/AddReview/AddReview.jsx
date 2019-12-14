import React, { useState } from 'react';
import './add-review.css';
import reviewService from '../../services/review-service';

function AddReview(props) {

    const [review, setReview] = useState('');
    
    const submitReview = (e) => {
        e.preventDefault();
        reviewService.addReview({ comicId: props.comicId, review });
        props.setReviewStatus(true);

    }
    return <form action="" className="add-review-form">
        <h2>Write a review</h2>
        <textarea onChange={(e) => setReview(e.target.value)}></textarea>
        <button onClick={submitReview}>Publish</button>
    </form>
}

export default AddReview;