import React from 'react';
import './comic.css';

function Comic(comicInfo) {
    // console.log(comicInfo);
    const comicImg = comicInfo.thumbnail.path + '.' + comicInfo.thumbnail.extension;
    return <div className="comic flip-container">
        <div className="flipper">
            <div className="front">
                <img src={comicImg} alt="" />
            </div>
            <div className="back">
                <h3>{comicInfo.title}</h3>
                <p>Pages: {comicInfo.pageCount}</p>
                <p>Price: {comicInfo.prices[0].price}$</p>
                <button type="button">More details</button>
            </div>
        </div>
    </div>
}

export default Comic;