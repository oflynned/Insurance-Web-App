import React, { PureComponent } from "react";

import Card from "./card";
import SelectableButton from "../buttons/selectableButton";

import "./planCard.css";

class PlanCard extends PureComponent {
  formatCurrency = (rawNumber, showCurrency = true, showDecimals = false) => {
    const formattedCurrency = rawNumber.toLocaleString("de-DE", {
      currency: "EUR",
      style: "currency",
      minimumFractionDigits: showDecimals ? 2 : 0
    });

    return showCurrency ? formattedCurrency : formattedCurrency.replace("€", "");
  };

  render () {
    const { isMonthlySelected, selected, plan, onClick } = this.props;
    return (
      <Card theme={selected ? "aqua" : "white"}>
        <div className={"content"}>
          <h2>{plan.title}</h2>
          <div className={"selected-price-showcase"}>
            <h1>{this.formatCurrency(isMonthlySelected ? plan.annualCost / 12 : plan.annualCost, false, true)}<sup>€</sup>
            </h1>
            <p>{isMonthlySelected ? "MONTHLY" : "YEARLY"} INCL. TAXES</p>
          </div>
          <div className={"benefits-list"}>
            <h3><strong>Maximum duration travel</strong> of <strong>{plan.travelDurationDays} days</strong></h3>
            <h3>
              <strong>Medical expenses reimbursement</strong> up to <strong>
              {this.formatCurrency(plan.medicalReimbursement)}
            </strong>
            </h3>
            <h3><strong>Personal assistance abroad</strong> up to <strong>
              {this.formatCurrency(plan.personalAssistanceAbroad)}
            </strong></h3>
            <h3><strong>Travel assistance abroad</strong> up to <strong>
              {this.formatCurrency(plan.travelAssistanceAbroad)}
            </strong>
              <br/>per insured per travel
            </h3>
            <h3><strong>Coverage duration: {plan.duration.length} {plan.duration.unit}</strong></h3>
          </div>
          <SelectableButton selected={selected} onClick={onClick}/>
        </div>
      </Card>
    );
  }
}

export default PlanCard;
