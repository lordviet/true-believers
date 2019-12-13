import React, { useState, useEffect } from 'react';
import './search-nav.css';
import marvelAPI from '../../services/marvel-api';
import { Redirect } from 'react-router-dom';

function Search() {
    const [comic, setComic] = useState('');
    const [result, setResult] = useState([]);
    // const [err, setError] = useState('');

    const submitSearch = (e) => {
        console.log(e);
        e.preventDefault();
        marvelAPI.series.findByTitle(comic)
            .then(res => res.data.length ?
                setResult(res.data) :
                (setResult({}), alert('No results found')))
            .fail(console.error);
    }
    useEffect(() => {
        if (result.length) setResult([]);
    }, [result]);

    const render = (res) => {
        // If error render an error page 
        // if(err) console.log(err);
        if (res.length) {
            return <Redirect to={
                {
                    pathname: "/series",
                    state: { series: res }
                }
            } />
        }
    }
    return <form className="search-nav-form">
        <input type="text" placeholder="Comic search..." onChange={(e) => setComic(e.target.value)} />
        <button type="submit" onClick={submitSearch}><i className="fa fa-search"></i></button>
        {render(result)}
    </form>
}

export default Search;