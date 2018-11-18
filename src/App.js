import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import "./App.css";

import Holidays from "./components/pages/Holidays";
import Upload from "./components/pages/Upload";
import Dogs from "./components/pages/Dogs";
import Hearthstone from "./components/pages/Hearthstone";
import Ghibli from "./components/pages/Ghibli";
import Jokes from "./components/pages/Jokes";
import StarWars from "./components/pages/StarWars";
import Login from './components/pages/Login';

import urls from './assets/urls.js';

class App extends Component {
  constructor(props) {
    super(props);

    let user = localStorage.getItem("user");
    if(user != undefined)
      user = JSON.parse(user);

    this.state = { user: user, token: localStorage.getItem("token") };
  }

  authenticate = (email, password) => {
    return fetch(urls.authentication, {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then(response => response.json());
  }

  onLogin = (email, password) => {
    this.authenticate(email, password).then(result => {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", result.token);
      this.setState({ user: result.user, token: result.token })
    })
  }

  onLogout = () => {
    this.setState({ user: null, token: null });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    document.location.href = "holidays";
  }

  render() {
    return (
      <Router>
        <div id="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/holidays">Holidays</NavLink>
              </li>
              <li>
                {this.state.user != null && <NavLink to="/upload-files">Upload files</NavLink>}
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
            <Login state={this.state} onLogin={this.onLogin} onLogout={this.onLogout} />
            <Switch>
              <Route path="/holidays" component={Holidays} />
              <Route path="/upload-files" component={() => <Upload state={this.state}/>} />
              <Route path="/dogs" component={Dogs} />
              <Route path="/hearthstone" component={Hearthstone} />
              <Route path="/ghibli" component={Ghibli} />
              <Route path="/jokes" component={Jokes} />
              <Route path="/star-wars" component={StarWars} />

            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
