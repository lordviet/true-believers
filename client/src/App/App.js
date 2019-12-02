import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
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
        <h1>Hi there</h1>
      </div>
    </Router>
  );
}

export default App;
