import React from 'react';
import './container.css';
import Image from '../Image/Image';
import Available from '../Available/Available';
import ContainerList from '../Container/ContainerList/ContainerList';
import AddButton from '../AddButton/AddButton';
// import AddReview from '../AddReview/AddReview';
import ReviewHandler from '../ReviewHandler/ReviewHandler';
function Container(info) {
    console.log(info);
    return <div>
        <div className="details">
            {!info.startYear ? <Image {...info.thumbnail} /> : null}
            <div className="details-info">
                {info.title ? <h2>{info.title}</h2> : null}
                {info.fullName ? <h2>{info.fullName}</h2> : null}
                {info.details ? <p>{info.details}</p> : null}
                {info.characters ? <ContainerList items={info.characters.items} heading="Characters" /> : null}
                {info.creators ? <ContainerList items={info.creators.items} heading="Creators" /> : null}
                {info.comics ? <Available {...info} /> : null}
                {info.comics ? <ContainerList items={info.comics.items} heading="Comics" /> : null}
                {!info.startYear ? <div className="additional-links">
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    {info.urls[1] ? <a className="linkButton" href={info.urls[1].url} target="_blank">Purchase</a> : null}
                    {info.creators ? <AddButton comicId={info.id} name={info.title} /> : null}
                </div> : null}
            </div>
        </div>
        {/* Make a review component that renders if the user already has published */}
        {/* {info.title ? <AddReview comicId={info.id} /> : null} */}
        {info.title ? <ReviewHandler comicId={info.id} /> : null}
    </div>
}
export default Container;