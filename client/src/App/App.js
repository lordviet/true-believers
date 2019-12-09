import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ComicDetails from '../ComicDetails/ComicDetails';
import withAuth from '../shared/withAuth/withAuth';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/comics/:id' component={withAuth(ComicDetails)}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
