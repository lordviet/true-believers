import React from 'react';
import './home.css';
import SearchBar from '../shared/SearchBar/SearchBar'
// import marvelAPI from '../services/marvel-api'
function Home() {
    // marvelAPI.characters.findByName('spider-man')
    //     .then(res => console.log(res))
    //     .fail(console.error)
    //     .done()
    // state = {
    //     searchedCharacter: ''
    // }
    return <section className="home">
        <h1>Marvel Character Search</h1>
        <SearchBar />
    </section>
}

export default Home;
