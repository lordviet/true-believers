import React from 'react';
import './character.css';
import ComicsList from '../Comics/ComicsList/ComicsList';
import Available from '../../Available/Available';

function Character(characterInfo) {
    const characterImg = characterInfo.thumbnail.path + '.' + characterInfo.thumbnail.extension;
    return <div className="queryResult">
        <div className="character">
            <img className="characterImg" src={characterImg} alt="" />
            <div className="characterInfo">
                <h2>{characterInfo.name}</h2>
                <p>{characterInfo.description}</p>
                <Available {...characterInfo} />
            </div>
        </div>
        <ComicsList characterId={characterInfo.id} />
    </div>;
}

export default Character;