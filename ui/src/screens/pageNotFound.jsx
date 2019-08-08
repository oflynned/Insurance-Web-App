import React, { Component } from "react";

import Emoji from "../components/common/emoji";

import "./pageNotFound.css";

class PageNotFound extends Component {
  constructor () {
    super();
    this.state = {
      redirecting: false
    };
  }

  onClick = () => {
    this.setState({ redirecting: true });
  };

  render () {
    return (
      <div className={"page-not-found"}>
        <div>
          <div>
            <span>Hmm... This page doesn't seem to exist <Emoji symbol="🤔"/></span>
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
