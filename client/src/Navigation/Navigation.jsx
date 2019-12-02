import React from 'react';
import './navigation.css';
import Link from '../shared/Link/Link'


function Navigation() {
    return <nav className="">
        <ul>
            <Link to="/">True Believers</Link>
            <Link to="/login">Log in</Link>
            <Link to="/register">Register</Link>
        </ul>
    </nav>;
};

export default Navigation;