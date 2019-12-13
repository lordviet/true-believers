import React from 'react';
import './navigation.css';
import Link from '../shared/Link/Link';


function Navigation({ loggedIn }) {
    return <nav className="navigation">
        <ul>
            <Link to="/" ><h2 className="logo">True Believers</h2></Link>
            <nav className="navbar">
                {!loggedIn && <Link to="/login">Log in</Link>}
                {!loggedIn && <Link to="/register">Register</Link>}
                {loggedIn && <Link to="/collection">My Collection</Link>}
                {loggedIn && <Link to="/logout">Logout</Link>}
            </nav>
        </ul>
    </nav>;
};

export default Navigation;