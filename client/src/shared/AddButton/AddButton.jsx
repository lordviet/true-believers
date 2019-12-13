import React, { useState, useEffect } from 'react';
import './add-button.css';
import postService from '../../services/post-service';

function AddButton(props) {
    const [status, setStatus] = useState(null);
    // props should be comicId, comicName
    useEffect(() => {
        postService.getComic(props.comicId)
            .then(res => res.length ?
                setStatus('Remove from Collection') :
                setStatus('Add to Collection'));
    }, [props.comicId]);
    
    const addToCollection = (e) => {
        e.preventDefault();
        if (status === 'Add to Collection') {
            postService.addToCollection({ ...props });
            setStatus('Remove from Collection');
        }
        else {
            postService.deleteFromCollection(props.comicId);
            setStatus('Add to Collection');
        }
    }

    return <button className='add-button' onClick={addToCollection}>
        {status}
    </button>
}

export default AddButton;