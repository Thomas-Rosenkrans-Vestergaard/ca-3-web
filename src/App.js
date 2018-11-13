import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
                <Link to="/" exact>Home</Link>
              </li>
              <li>
                <Link to="/holidays">Holidays</Link>
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
