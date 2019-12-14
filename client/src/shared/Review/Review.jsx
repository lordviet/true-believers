import React from 'react';
import './review.css';
import CreatorReview from './CreatorReview/CreatorReview'

function Review(props) {
    return <div className="review">
        {props.isCreator ?
            <CreatorReview setReviewStatus={props.setReviewStatus} comicId={props.details.comicId} review={props.details.review}/> :
            <React.Fragment>
                <h3>{props.details.user.username}</h3>
                <p>{props.details.review}</p>
            </React.Fragment>}
        {/* Make a condition to render a textarea if edit btn is pushed */}
    </div>
}

export default Review;