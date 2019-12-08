import React from 'react';
import './container.css';

function Container(info) {
    const img = info.thumbnail.path + '.' + info.thumbnail.extension;
    console.log(info);
    return <div className="details">
        <img src={img} alt="" />
        <div className="details-info">
            <h2>{info.title}</h2>
            {/* <ul>
                {info.creators.items.map(creator => <li>{creator.role}: {creator.name}</li>)}
            </ul> */}
        </div>
    </div>
}
export default Container;