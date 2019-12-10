import React, { useState } from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import Register from '../Register/Register';
import ComicDetails from '../ComicDetails/ComicDetails';
import withAuth from '../shared/withAuth/withAuth';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function parseCookies() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
}


function App() {
  let cookie = parseCookies();
  const [loggedIn, setLoggedIn] = useState(!!Object.keys(cookie)[0]);

  return (
    <Router>
      <div className="App">
        <Navigation {...{ loggedIn }} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/login' render={(props) => <Login {...{ setLoggedIn, ...props }} />} />
          <Route path='/register' component={Register} />
          <Route path='/logout' render={(props) => <Logout {...{ setLoggedIn, ...props }} />} />
          <Route path='/comics/:id' component={withAuth(ComicDetails)} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
