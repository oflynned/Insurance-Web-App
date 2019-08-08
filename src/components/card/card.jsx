import React, { Component } from "react";

import "./card.css";

class Card extends Component {
  render () {
    const { theme } = this.props;
    return (
      <div className={"card " + (theme ? theme : "")}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
