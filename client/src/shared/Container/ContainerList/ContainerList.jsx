import React from 'react';
import './container-list.css';
import { Link } from 'react-router-dom';

function ContainerList(props) {
    const items = props.items;
    let ids = {};

    if (items.length) {
        items[0].resourceURI ?
            items.forEach(el => ids[el.name] = el.resourceURI.split('/').pop()) :
            items.forEach(el => ids[el.name] = el.comicId);
    }
    
    return <div className="container-list">
        <h3>{props.heading}</h3>
        {items.map(el =>
            <Link className="container-item" to={{
                pathname: `/${props.heading.toLowerCase()}/${ids[el.name]}`,
                state: { id: ids[el.name] }
            }}
                key={ids[el.name]}>
                {el.name} {el.role ? `(${el.role})` : null}</Link>)}
    </div>
}

export default ContainerList;