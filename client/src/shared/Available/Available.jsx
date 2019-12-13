import React from 'react';
import './available.css';

function Available(info) {
    return <div className="available-comics">
        <p>Comics: {info.comics.available}</p>
        <p>Events: {info.events.available}</p>
        {info.series ? <p>Series: {info.series.available}</p> : null}
        <p>Stories: {info.stories.available}</p>
    </div>
}

export default Available;