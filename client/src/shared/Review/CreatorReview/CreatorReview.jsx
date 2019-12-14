import React, { useState } from 'react';
import './creator-review.css';
import reviewService from '../../../services/review-service';
import AddReview from '../../AddReview/AddReview';

function CreatorReview(props) {
    const [hasBeenDeleted, setHasBeenDeleted] = useState(false);

    const deleteReview = () => {
        reviewService.deleteReview(props.comicId);
        setHasBeenDeleted(true);
    }

    const render = () => {
        if (hasBeenDeleted) {
            return <AddReview comicId={props.comicId} />
        }
        return (<React.Fragment>
            <div className="creator-review-heading">
                <h3>My review</h3>
                {/* <button className="review-btn">
                    <i className="fa fa-edit"></i>
                </button> */}
                <button className="review-btn" onClick={deleteReview}>
                    <i className="fa fa-trash"></i>
                </button>
            </div>
            <p>{props.review}</p>
        </React.Fragment>)

    }
    return <React.Fragment>{render()}</React.Fragment>
}

export default CreatorReview;