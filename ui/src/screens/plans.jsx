import React, { Component } from "react";

import Col from "../components/common/col";
import Row from "../components/common/row";
import Switch from "../components/input/switch";
import PlanCard from "../components/card/planCard";

import plans from "../assets/json/insurancePlans";

import "./plans.css";

class Plans extends Component {
  constructor () {
    super();
    this.state = {
      isMonthlySelected: false,
      selectedIndex: 0,
    };
  }

  onSelectPlan = index => {
    this.setState({ selectedIndex: index });
  };

  onSwitchChange = () => {
    const { isMonthlySelected } = this.state;
    this.setState({ isMonthlySelected: !isMonthlySelected });
  };

  render () {
    const { selectedIndex, isMonthlySelected } = this.state;
    return (
      <div className={"plans"}>
        <img className={"skewed-background"} alt={"qover background"}
             src={require("../assets/images/background-travel.svg")}/>
        <div className={"container"}>
          <h1 className={"heading"}>Select a plan</h1>
          <div className={"payment-frequency"}>
            <h3 className={"switch"}>PAY MONTHLY</h3>
            <Switch checked={!isMonthlySelected} onChange={this.onSwitchChange}/>
            <h3 className={"switch"}>PAY YEARLY</h3>
          </div>
          <Row>
            {
              plans.map((plan, index) =>
                <Col>
                  <PlanCard plan={plan}
                            selected={index === selectedIndex}
                            isMonthlySelected={isMonthlySelected}
                            onClick={() => this.onSelectPlan(index)}/>
                </Col>
              )
            }
          </Row>

          <div className={"link-container"}>
            <a className={"link"}>Show me the full comparison table</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Plans;
