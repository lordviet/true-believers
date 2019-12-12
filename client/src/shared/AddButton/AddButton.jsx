import React, { useState, useEffect } from 'react';
import './add-button.css';
import postService from '../../services/post-service';

function AddButton(props) {
    const [status, setStatus] = useState(null);
    // props should be comicId, comicName
    console.log(props.comicId, props.name);
    useEffect(() => {
        // Make initial request to db
        setStatus('Add to Collection');
    }, []);
    // Otherwise set status to remove from collection

    // const changeStatus = () => {
    //     status ? 'Add to Collection'
    // }

    const addToCollection = (e) => {
        e.preventDefault();
        // set status and create or delete
        if(status === 'Add to Collection'){
            postService.addToCollection({...props})
            setStatus('Remove from Collection');
        } 
        else {
            setStatus('Add to Collection');
        }
    }
    
    return <button className='add-button' onClick={addToCollection}>
        {status}
    </button>
}

export default AddButton;