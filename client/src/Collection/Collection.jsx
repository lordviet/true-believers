import React, { useState, useEffect } from 'react';
import './collection.css';
import postService from '../services/post-service';
import ContainerList from '../shared/Container/ContainerList/ContainerList'

function Collection(props) {
    props.changeBackground('details-collection-bg');
    const [comics, setComics] = useState([]);
    useEffect(() => {
        postService.getAllComics()
            .then(res => setComics(res))
            .catch(err => console.log(err));
    }, []);

    return <div className="user-comics">
        <h2>My Collection</h2>
        {comics.length ? <ContainerList items={comics} heading={'Comics'}/> : <h3>No comics yet</h3>}
    </div>
}

export default Collection;