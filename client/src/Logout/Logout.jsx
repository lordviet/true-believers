import React from 'react';
import userService from '../services/user-service';

class Logout extends React.Component {
    logout = () => {
        userService.logout().then(() => {
            this.props.setLoggedIn(false);
            this.props.history.push('/');
        });
    }
    render(){
        this.logout();
        return null;
    }
}

export default Logout;