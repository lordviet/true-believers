import React from 'react';
import '../shared/styles/login-register.css';
import { Link as ReactRouterDomLink } from 'react-router-dom';

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            rePassword: ''
        }
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        alert('Authentication coming soon!');
    }

    render() {
        return <div className="register">
            <img src="deadpool.jpg" alt="Marvel Characters" />
            <form onSubmit={this.onSubmit} className="registerForm">
                <h2>Member Register</h2>
                <div className="form-input">
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        required
                        autoFocus />
                </div>
                <div className="form-input">
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required />
                </div>
                <div className="form-input">
                <input
                        name="rePassword"
                        type="password"
                        placeholder="Password"
                        value={this.state.rePassword}
                        onChange={this.handleInputChange}
                        required />
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
}

export default Register;