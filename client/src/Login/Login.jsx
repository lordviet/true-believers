import React from 'react';
import '../shared/styles/login-register.css';

function Login() {
    return <form className="login">
        <div className="#">
            <label>Username</label>
            <input type="text" />
        </div>
        <div className="#">
            <label>Password</label>
            <input type="password" />
        </div>
        <div className="#">
            <button type="submit">Login</button>
        </div>
    </form>;
}

export default Login;