import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import EditText from "../components/input/editText";
import Checkbox from "../components/input/checkbox";
import Button from "../components/buttons/button";

import "./login.css";
import { getKey, saveKey } from "../common/savedPrefs";

const { REACT_APP_USERNAME, REACT_APP_PASSWORD } = process.env;

class Login extends Component {
  constructor () {
    super();
    this.state = {
      username: null,
      password: null,
      loggedIn: false
    };
  }

  componentDidMount () {
    if (!!getKey("username") && !!getKey("password")) {
      this.setState({ loggedIn: true });
    }
  }

  onUsernameEntered = e => {
    this.setState({ username: e.target.value });
  };

  onPasswordEntered = e => {
    this.setState({ password: e.target.value });
  };

  showError = error => {
    this.setState({ error });
  };

  logIn = (username, password) => {
    saveKey("username", username);
    saveKey("password", password);
    this.setState({ loggedIn: true, error: null });
  };

  onSignInRequested = () => {
    const { username, password } = this.state;
    if (!(username === REACT_APP_USERNAME && password === REACT_APP_PASSWORD)) {
      this.showError("bad_credentials");
      return;
    }

    this.logIn(username, password);
  };

  render () {
    return (
      this.state.loggedIn ?
        <Redirect to="/quote"/> :
        <div className={"login gradient"}>
          <div className={"nav-bar"}>
            <div className={"action"}>
              {/*<span>&lt;</span><span>QOVER.ME</span>*/}
            </div>
          </div>

          <div className={"content"}>
            <img src={require("../assets/images/qover-logo.svg")} alt={"qover logo"}/>
            <form className={"card shadow"}>
              <div className={"card-content"}>
                <h3>Welcome to Qover</h3>
                <EditText label={"Email"} type={"text"} onChange={this.onUsernameEntered}/>
                <EditText label={"Password"} type={"password"} onChange={this.onPasswordEntered}/>
                <div className={"account-actions"}>
                  <Checkbox label={"Remember me"}/>
                  <a className={"forgotten-password"}>Forgot your password?</a>
                </div>
                <Button label={"Sign into your account"} theme={"primary"}
                        onClick={() => this.onSignInRequested()}/>
              </div>
            </form>

            <Button label={"Don't have an account? Ask for access"} theme={"outline"}/>
          </div>

          <div className={"footer"}>
            <div className={"line"}/>
            <p>&copy; Qover 2017</p>
          </div>
        </div>
    );
  }
}

export default Login;
