import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import './App.css';

import Holidays from './pages/Holidays';
import Home from './pages/Home';
import Upload from './pages/Upload';

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
                <NavLink to="/upload-files">Upload files</NavLink>
              </li>
            </ul>
          </nav>
          <div id="contents">
            <Route path="/" exact component={Home} />
            <Route path="/holidays" component={Holidays} />
            <Route path="/upload-files" component={Upload} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
