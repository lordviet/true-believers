import React from 'react'
import './search-bar.css';

function SearchBar(){
    return <form action="" className="search-bar">
        <input type="text" placeholder="(ex. Hulk, Spider-man, Iron man)"/>
        <button type="submit">Search</button>
    </form>
}

export default SearchBar;