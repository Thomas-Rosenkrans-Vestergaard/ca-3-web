import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


class Login extends Component {

  constructor(props) {
    super(props);


    this.state = { email: "", password: "", showLogin: false };
  }

  onLogin = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    this.setState({showLogin: false});
    this.props.onLogin(this.state.email, this.state.password);
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {

    const { showLogin } = this.state;

    return (
      <div id="authentication">
        {this.props.state.user == null &&
          <div className="Login">
            <div>
              <p>You are not logged in.</p>
              <button onClick={() => this.setState({ showLogin: !this.state.showLogin })}>{showLogin ? "Hide form" : "Show form"}</button>
            </div>
            {showLogin && <form onSubmit={this.onLogin}>
              <div className="row">
                <div className="col s12 input-field">
                    <input name="email" type="email" value={this.state.email} onChange={this.onChange} id="email-input"/>
                    <label htmlFor="email-input">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="col s12 input-field">
                    <input name="password" type="password" value={this.state.password} onChange={this.onChange} id="password-input"/>
                    <label htmlFor="password-input">Password</label>
                </div>
              </div>
             <input type="submit" className="btn-large" value="Log in"/>
            </form>}
          </div>}
        {this.props.state.user != null &&
          <div>
            <p>You are logged in as {this.props.state.user.email}</p>
            <button onClick={this.props.onLogout}>Log out</button>
          </div>
        }
      </div>
    )
  }
}

export default Login;