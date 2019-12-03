import React from 'react';
import '../shared/styles/login-register.css';

function Register() {
    return <form className="register">
        <div className="#">
            <label>Username</label>
            <input type="text" />
        </div>
        <div className="#">
            <label>Password</label>
            <input type="password" />
        </div>
        <div className="#">
            <label>Repeat Password</label>
            <input type="password" />
        </div>
        <div className="#">
            <button type="submit">Register</button>
        </div>
    </form>;
}

export default Register;