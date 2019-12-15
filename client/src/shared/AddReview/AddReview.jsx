import React, { useState } from 'react';
import './add-review.css';
import reviewService from '../../services/review-service';
import Review from '../Review/Review';

function AddReview(props) {

    const [review, setReview] = useState('');
    const [hasPosted, setHasPosted] = useState(false);

    const submitReview = (e) => {
        e.preventDefault();
        reviewService.addReview({ comicId: props.comicId, review });
        setHasPosted(true);
    }

    const editReview = (e) => {
        e.preventDefault();
        reviewService.editReview(props.comicId, review);
        setHasPosted(true);
    }
    const renderReview = () => {
        if (hasPosted) {
            let details = { comicId: props.comicId, review }
            return <Review isCreator={true} details={details} setReviewStatus={props.setReviewStatus} />
        }
        else {
            return < form action="" className="add-review-form" >
                <h2>Write a review</h2>
                <textarea onChange={(e) => setReview(e.target.value)} defaultValue={props.review ? props.review : ''}>
                </textarea>
                {props.review ? <button onClick={editReview}>Edit Review</button> :
                    <button onClick={submitReview}>Publish</button>}
            </form >
        }
    }
    return <React.Fragment>{renderReview()}</React.Fragment>
}
export default AddReview;