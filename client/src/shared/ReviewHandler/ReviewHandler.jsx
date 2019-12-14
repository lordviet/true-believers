import React, { useState, useEffect } from 'react';
import reviewService from '../../services/review-service';
import AddReview from '../AddReview/AddReview';
import Review from '../Review/Review';
import './review-container.css';
function ReviewHandler(props) {
    const [reviewStatus, setReviewStatus] = useState(false);
    const [result, setResult] = useState({});

    useEffect(() => {
        reviewService.getUserReview(props.comicId)
            .then(res => res.length ? (setReviewStatus(true), setResult(res)) : setReviewStatus(false))
            .catch(err => console.log(err));
    }, [props.comicId]);

    const renderComponent = (status) => {
        const id = props.comicId;
        if (!status) return <AddReview comicId={id} />;
        else if (status && Object.keys(result).length) return <Review isCreator={true} details={result[0]}/>;
    }

    return <div className="review-container">
        {renderComponent(reviewStatus)}
    </div>
}

export default ReviewHandler;
