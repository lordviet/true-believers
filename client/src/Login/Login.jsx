import React from 'react';
import '../shared/styles/login-register.css';
import { Link as ReactRouterDomLink } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
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
        console.log(this.props.history);
        return <div className="login">
            <img src="marvelAvengers.png" alt="Marvel Avengers" />
            <form onSubmit={this.onSubmit} className="loginForm">
                <h2>Member Login</h2>
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
                    <button type="submit">Login</button>
                </div>
                <p>Don't have an account?
                <ReactRouterDomLink className="login-register-link" to="/register">Sign up</ReactRouterDomLink>
                </p>
            </form>
        </div>
    }
}

export default Login;