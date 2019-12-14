import React from 'react';
import './review.css';

function Review(props) {
    const creator = (<div className="creator-review-heading">
        <h3>My review</h3>
        <button class="review-btn">
            <i className="fa fa-edit"></i>
        </button>
        <button class="review-btn">
            <i className="fa fa-trash"></i>
        </button>
    </div>)

    return <div className="review">
        {props.isCreator ?
            creator :
            <h3>{props.details.user.username}</h3>}
        <p>{props.details.review}</p>
    </div>
}

export default Review;