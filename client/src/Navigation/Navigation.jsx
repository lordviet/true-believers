import React from 'react';
import './navigation.css';
import Link from '../shared/Link/Link';


function Navigation({ loggedIn }) {
    return <nav className="navigation">
        <ul>
            <Link to="/" ><img src="logo.png" alt="True Believers Logo" className="logo" /></Link>
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