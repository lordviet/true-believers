import React from 'react';
import './character.css';
import Comics from '../Comics/Comics';
function Character(characterInfo) {
    const characterImg = characterInfo.thumbnail.path + '.' + characterInfo.thumbnail.extension;
    // let comics = characterInfo.comics.items;
    return <div className="queryResult">
        <div className="character">
            <img className="characterImg" src={characterImg} alt="" />
            <div className="characterInfo">
                <h2>{characterInfo.name}</h2>
                <p>{characterInfo.description}</p>
                <div className="characterAppearances">
                    <p>Comics: {characterInfo.comics.available}</p>
                    <p>Events: {characterInfo.events.available}</p>
                    <p>Series: {characterInfo.series.available}</p>
                    <p>Stories: {characterInfo.stories.available}</p>
                </div>
            </div>
        </div>
        <Comics characterId={characterInfo.id} />
    </div>;
}

export default Character;