import React, { Component } from "react";
import { buildPlan } from "../common/planFactory";
import Quote from "./quote";
import Plans from "./plans";

class Dashboard extends Component {
  constructor () {
    super();
    this.state = {
      plans: []
    };
  }

  processQuote = (carBrand, purchasePrice) => {
    try {
      const plans = buildPlan(carBrand, purchasePrice);
      this.setState({ plans });
    } catch (err) {
      console.error(err);
    }
  };

  render () {
    const { plans } = this.state;
    return plans.length > 0 ?
      <Plans plans={plans}/> :
      <Quote processQuote={this.processQuote}/>;
  }
}

export default Dashboard;
