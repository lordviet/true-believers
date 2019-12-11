import React from 'react';
import './available.css';

function Available(info){
    return <div className="available-comics">
    <p>Comics: {info.comics.available}</p>
    <p>Events: {info.events.available}</p>
    <p>Series: {info.series.available}</p>
    <p>Stories: {info.stories.available}</p>
</div>
}

export default Available;