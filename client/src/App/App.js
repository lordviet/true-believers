import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Home />
      </div>
    </Router>
  );
}

export default App;
