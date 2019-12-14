import React, { useState } from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import Register from '../Register/Register';
import withAuth from '../shared/withAuth/withAuth';
import Details from '../Details/Details';
import Collection from '../Collection/Collection';
import Series from '../Series/Series';
import NotFound from '../NotFound/NotFound';

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
  const [background, changeBackground] = useState('');

  return (
    <Router>
      <div className={background}>
        <Navigation {...{ loggedIn }} />
        <Switch>
          <Route exact path="/" render={props => <Home {...{ changeBackground, ...props }} />} />
          <Route path='/login' render={props => <Login {...{ setLoggedIn, ...props }} />} />
          <Route path='/logout' render={props => <Logout {...{ setLoggedIn, ...props }} />} />
          <Route path='/register' component={Register} />
          <Route path='/series' component={withAuth((props) => { return <Series {...{ changeBackground, ...props }} /> })} />
          <Route path='/collection' component={withAuth((props) => { return <Collection {...{ changeBackground, ...props }} /> })} />
          <Route path='/comics/:id' component={withAuth((props) => { return <Details criteria='comics' {...{ changeBackground, ...props }} /> })} />
          <Route path='/creators/:id' component={withAuth((props) => { return <Details criteria='creators' {...{ changeBackground, ...props }} /> })} />
          <Route path='/characters/:id' component={withAuth((props) => { return <Details criteria='characters' {...{ changeBackground, ...props }} /> })} />
          <Route path='/*' component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
