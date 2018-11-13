import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import './App.css';

import Holidays from './pages/Holidays';
import Home from './pages/Home';
import Dogs from './pages/Dogs';

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
              <li>
                <NavLink to="/dogs">Dogs</NavLink>
              </li>
            </ul>
          </nav>
          <div id="contents">
            <Route path="/" exact component={Home} />
            <Route path="/holidays" component={Holidays} />
            <Route path="/dogs" component={Dogs} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
