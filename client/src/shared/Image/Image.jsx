import React from 'react';
import './image.css'

function Image(thumbnail) {
    const image = thumbnail.path + '.' + thumbnail.extension;
    return <img src={image} alt="" />
}

export default Image;