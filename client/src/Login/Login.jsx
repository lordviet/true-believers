import React from 'react';
import '../shared/styles/login-register.css';
import { Link as ReactRouterDomLink } from 'react-router-dom';

function Login() {
    return <div className="login">
        <img src="marvelAvengers.png" alt="Marvel Avengers" />
        <form className="loginForm">
            <h2>Member Login</h2>
            <div className="form-input">
                <input type="text" placeholder="Username" autoFocus />
            </div>
            <div className="form-input">
                <input type="password" placeholder="Password" />
            </div>
            <div className="form-input">
                <button type="button">Login</button>
            </div>
            <p>Don't have an account?
                <span>
                    <ReactRouterDomLink to="/register">Sign up</ReactRouterDomLink>
                </span>
            </p>
        </form>
    </div>
}

export default Login;