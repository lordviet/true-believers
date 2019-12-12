import React from 'react';
import './image.css'

function Image(props) {
    const image = props.path + '.' + props.extension;
    const characterClassName = props.isCharacter ? 'characterImg' : '';
    return <img src={image} className={characterClassName} alt="" />
}

export default Image;