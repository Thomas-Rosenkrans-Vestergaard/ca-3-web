import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import "./App.css";

import Holidays from "./components/pages/Holidays";
import Home from "./components/pages/Home";
import Upload from "./components/pages/Upload";
import Dogs from "./components/pages/Dogs";
import Hearthstone from "./components/pages/Hearthstone";
import Ghibli from "./components/pages/Ghibli";
import Jokes from "./components/pages/Jokes";
import StarWars from "./components/pages/StarWars";
import Login from './components/login/Login';

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
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/holidays">Holidays</NavLink>
              </li>
              <li>
                <NavLink to="/upload-files">Upload files</NavLink>
              </li>
              <li>
                <NavLink to="/dogs">Dogs</NavLink>
              </li>
              <li>
                <NavLink to="/hearthstone">HearthStone</NavLink>
              </li>
              <li>
                <NavLink to="/jokes">Jokes</NavLink>
              </li>
              <li>
                <NavLink to="/ghibli">Ghibli</NavLink>
              </li>
              <li>
                <NavLink to="/star-wars">Star Wars</NavLink>
              </li>
            </ul>
          </nav>
          <div id="contents">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/holidays" component={Holidays} />
            <Route path="/upload-files" component={Upload} />
            <Route path="/dogs" component={Dogs} />
            <Route path="/hearthstone" component={Hearthstone} />
            <Route path="/ghibli" component={Ghibli} />
            <Route path="/jokes" component={Jokes} />
            <Route path="/star-wars" component={StarWars} />
            <Route component={Error} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
