import React, { Component } from "react";

import EditText from "../components/input/editText";
import Checkbox from "../components/input/checkbox";
import Button from "../components/buttons/button";

import "./login.css";

const { USERNAME, PASSWORD } = process.env;

class Login extends Component {
  constructor () {
    super();
    this.state = {};
  }

  render () {
    return (
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
              <h3>Welcome at Qover</h3>
              <EditText label={"Email"} type={"text"}/>
              <EditText label={"Password"} type={"password"}/>
              <div className={"account-actions"}>
                <Checkbox label={"Remember me"}/>
                <a className={"forgotten-password"}>Forgot your password?</a>
              </div>
              <Button label={"Sign into your account"} theme={"primary"}/>
            </div>
          </form>

          <Button label={"Don't have an account? Ask access"} theme={"outline"}/>
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
