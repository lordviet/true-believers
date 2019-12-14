import React from 'react';
import './creator-review.css';
import reviewService from '../../../services/review-service';

function CreatorReview(props) {
    const deleteReview = () => {
        reviewService.deleteReview(props.comicId);
        props.setReviewStatus(false);
    }

    return <React.Fragment>

        <div className="creator-review-heading">
            <h3>My review</h3>
            <button className="review-btn">
                <i className="fa fa-edit"></i>
            </button>
            <button className="review-btn" onClick={deleteReview}>
                <i className="fa fa-trash"></i>
            </button>
        </div>
        <p>{props.review}</p>
    </React.Fragment>
}

export default CreatorReview;