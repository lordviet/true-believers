import React from 'react';
import '../shared/styles/login-register.css';
import { Link as ReactRouterDomLink } from 'react-router-dom';
// import userService from '../services/user-service';

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
        // const { username, password } = this.state;
        // console.log(username, password);
        // userService.register({...this.state}).catch(err => console.log(err));
        fetch('http://localhost:8080/api/user/register', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    this.props.history.push('/login');
                } else {
                    const error = new Error(res.error);
                    console.log(error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error with registration please try again');
            });
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
                    <button type="submit">Register</button>
                </div>
                <p>Already have an account?
                <ReactRouterDomLink className="login-register-link" to="/login">Sign in</ReactRouterDomLink>
                </p>
            </form>
        </div>
    }
}

export default Register;