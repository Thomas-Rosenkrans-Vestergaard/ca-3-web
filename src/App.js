import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import './App.css';

import Holidays from './pages/Holidays';
import Home from './pages/Home';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div id="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>Home</NavLink>
              </li>
              <li>
                <NavLink to="/holidays">Holidays</NavLink>
              </li>
            </ul>
          </nav>
          <div id="contents">
            <Route path="/" exact component={Home} />
            <Route path="/holidays" component={Holidays} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
