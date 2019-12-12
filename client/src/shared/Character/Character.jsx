import React from 'react';
import './character.css';
import ComicsList from '../SearchBar/Comics/ComicsList/ComicsList';
import Available from '../Available/Available';
import Image from '../Image/Image';

function Character(characterInfo) {
    return <div className="queryResult">
        <div className="character">
            <Image {...characterInfo.thumbnail} isCharacter={true} />
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