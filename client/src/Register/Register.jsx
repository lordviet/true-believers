import React from 'react';
import '../shared/styles/login-register.css';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import * as yup from 'yup';

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            rePassword: '',
            usernameErr: '',
            passwordErr: '',
            rePasswordErr: '',
            isValid: false
        }
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    validateUsername = () => {
        const { username } = this.state;
        return schema.fields['username'].validate(username, { abortEarly: false })
            .then(res => {
                this.setState({ usernameErr: '' })
            })
            .catch(err => {
                this.setState({ usernameErr: err.errors[0] })
            });
    }

    validatePassword = () => {
        const { password } = this.state;
        return schema.fields['password'].validate(password, { abortEarly: false })
            .then(res => {
                this.setState({ passwordErr: '' })
            })
            .catch(err => {
                this.setState({ passwordErr: err.errors[0] })
            });
    }

    validateRePassword = () => {
        const { password, rePassword } = this.state;

        if (password !== rePassword) {
            this.setState({ rePasswordErr: 'Password mismatch' })
            return;
        } else {
            this.setState({ rePasswordErr: '' })
        }

        return schema.fields['rePassword'].validate(rePassword, { abortEarly: false })
            .then(res => {
                this.setState({ rePasswordErr: '' })
            })
            .catch(err => {
                this.setState({ rePasswordErr: err.errors[0] })
            });
    }


    onSubmit = (event) => {
        event.preventDefault();
        const { usernameErr, passwordErr, rePasswordErr } = this.state;
        const isValid = !usernameErr && !passwordErr && !rePasswordErr;
        if (isValid) {
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
                    alert('Username already exists, try again');
                });
        }
    }


    render() {
        return <div className="register">
            <img src="deadpool.jpg" alt="Marvel Characters" />
            <form onSubmit={this.onSubmit} className="registerForm">
                <h2>Member Register</h2>
                {this.state.usernameErr}
                <div className="form-input">
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        onBlur={this.validateUsername}
                        required
                        autoFocus />
                </div>
                {this.state.passwordErr}
                <div className="form-input">
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        onBlur={this.validatePassword}
                        required />
                </div>
                {this.state.rePasswordErr}
                <div className="form-input">
                    <input
                        name="rePassword"
                        type="password"
                        placeholder="Password"
                        value={this.state.rePassword}
                        onChange={this.handleInputChange}
                        onBlur={this.validateRePassword}
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

const schema = yup.object({
    username: yup
        .string('Username must be a string!')
        .required('Username is required')
        .min(6, 'Username should be at least 6 chars'),
    password: yup
        .string('Password must be a string!')
        .required('Password is required')
        .min(6, 'Password should be at least 6 chars'),
    rePassword: yup.string('Repeat Password must be a string')
        .required('Repeat password is required')
        .min(6, 'Repeat Password should be at least 6 chars'),
});


export default Register;