import React from 'react';
import './container.css';
import Image from '../Image/Image';
import Available from '../Available/Available';
import ContainerList from '../Container/ContainerList/ContainerList';
import AddButton from '../AddButton/AddButton';

function Container(info) {
    console.log(info);
    return <div className="details">
        <Image {...info.thumbnail} />
        <div className="details-info">
            {info.title ? <h2>{info.title}</h2> : null}
            {info.fullName ? <h2>{info.fullName}</h2> : null}
            {info.details ? <p>{info.details}</p> : null}
            {info.characters ? <ContainerList items={info.characters.items} heading="Characters"/> : null}
            {info.creators ? <ContainerList items={info.creators.items} heading="Creators"/> : null}
            {info.comics ? <Available {...info} /> : null}
            {info.comics ? <ContainerList items={info.comics.items} heading="Comics"/> : null}
            {/* Add to collection button if comics */}
            <div className="additional-links">
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                {info.urls[1] ? <a className="linkButton" href={info.urls[1].url} target="_blank">Purchase</a> : null}
                {info.creators ? <AddButton comicId={info.id} name={info.title}/> : null}
            </div>
        </div>
    </div>
}
export default Container;