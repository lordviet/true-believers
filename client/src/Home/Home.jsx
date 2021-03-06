import React from 'react';
import './home.css';
import SearchBar from '../shared/SearchBar/SearchBar';

function Home(props) {
    props.changeBackground('');
    return <section className="home">
        <h1>Marvel Character Search</h1>
        <SearchBar />
    </section>
}

export default Home;
