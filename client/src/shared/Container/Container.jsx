import React from 'react';
import './container.css';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';

function Container(info) {
    console.log(info);
    let characterIds = {};
    if (info.characters) info.characters.items.forEach(el => characterIds[el.name] = el.resourceURI.split('/').pop());

    let creatorIds = {};
    if (info.creators) info.creators.items.forEach(el => creatorIds[el.name] = el.resourceURI.split('/').pop());

    return <div className="details">
        <Image {...info.thumbnail} />
        <div className="details-info">
            <h2>{info.title}</h2>
            {info.details ? <p>{info.details}</p> : null}
            {info.characters ?
                <div className="container-list">
                    <h3>Characters:</h3>
                    {info.characters.items.map(character =>
                        <Link className="container-item" to={{
                            pathname: `/characters/${characterIds[character.name]}`,
                            state: { characterId: characterIds[character.name] }
                        }}
                            key={characterIds[character.name]}>
                            {character.name}</Link>)}
                </div>
                : null
            }
            {info.creators ?
                <div className="container-list">
                    <h3>Creators: </h3>
                    {info.creators.items.map(creator =>
                        <Link className="container-item" to={{
                            pathname: `/creators/${creatorIds[creator.name]}`,
                            state: { creatorId: creatorIds[creator.name] }
                        }}
                            key={creatorIds[creator.name]}>
                            {creator.name} ({creator.role})</Link>)}
                </div>
                : null
            }
            <div className="additional-links">
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                {info.urls[1] ? <a className="linkButton" href={info.urls[1].url} target="_blank">Purchase</a> : null}
            </div>
        </div>
    </div>
}
export default Container;