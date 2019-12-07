import React from 'react';
import './navigation.css';
import Link from '../shared/Link/Link';


function Navigation() {
    return <nav className="navigation">
        <ul>
            <Link to="/" ><img src="logo.png" alt="True Believers Logo" className="logo" /></Link>
            <nav className="navbar">
                <Link to="/login">Log in</Link>
                <Link to="/register">Register</Link>
            </nav>
        </ul>
    </nav>;
};

export default Navigation;