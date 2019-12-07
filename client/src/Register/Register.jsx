import React from 'react';
import '../shared/styles/login-register.css';
import { Link as ReactRouterDomLink } from 'react-router-dom';

function Register() {
    return <div className="register">
        <img src="deadpool.jpg" alt="Marvel Characters" />
        <form className="registerForm">
            <h2>Member Register</h2>
            <div className="form-input">
                <input type="text" placeholder="Username" autoFocus />
            </div>
            <div className="form-input">
                <input type="password" placeholder="Password" />
            </div>
            <div className="form-input">
                <input type="password" placeholder="Repeat Password" />
            </div>
            <div className="form-input">
                <button type="button">Register</button>
            </div>
            <p>Already have an account?
                <ReactRouterDomLink className="login-register-link" to="/login">Sign in</ReactRouterDomLink>
            </p>
        </form>
    </div>
}

export default Register;