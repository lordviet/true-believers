import React, { useState, useEffect } from 'react';
import reviewService from '../../services/review-service';
import AddReview from '../AddReview/AddReview';
import Review from '../Review/Review';

function ReviewHandler(props) {
    const [reviewStatus, setReviewStatus] = useState(false);
    const [result, setResult] = useState({});
    // props.comicId
    useEffect(() => {
        reviewService.getUserReview(props.comicId)
            .then(res => res.length ? (setReviewStatus(true), setResult(res)) : setReviewStatus(false))
            .catch(err => console.log(err));
    }, [props.comicId, setReviewStatus]);


    const renderComponent = (status) => {
        const id = props.comicId;
        if (!status) return <AddReview comicId={id} setReviewStatus={setReviewStatus} />;
        if (Object.keys(result).length) return <Review isCreator={true} details={result[0]} />;
    }

    return <React.Fragment>
        {renderComponent(reviewStatus)}
    </React.Fragment>
}

export default ReviewHandler;