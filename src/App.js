import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import "./App.css";

import Holidays from "./pages/Holidays";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Dogs from "./pages/Dogs";
import Hearthstone from "./pages/Hearthstone";
import Ghibli from "./pages/Ghibli";
import Jokes from "./pages/Jokes";
import StarWars from "./pages/StarWars";

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
            <Route path="/" exact component={Home} />
            <Route path="/holidays" component={Holidays} />
            <Route path="/upload-files" component={Upload} />
            <Route path="/dogs" component={Dogs} />
            <Route path="/hearthstone" component={Hearthstone} />
            <Route path="/ghibli" component={Ghibli} />
            <Route path="/jokes" component={Jokes} />
            <Route path="/star-wars" component={StarWars} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
