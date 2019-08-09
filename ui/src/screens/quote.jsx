import React, { Component } from "react";

import carBrands from "../common/carBrands";

import Card from "../components/card/card";
import Button from "../components/buttons/button";
import TextField from "../components/input/textField";

import "./quote.css";
import Spinner from "../components/input/spinner";

class Quote extends Component {
  constructor () {
    super();
    this.state = {
      error: null,
      errorFields: [],
      driverAge: null,
      carBrand: "audi",
      purchasePrice: null
    };
  }

  onAgeChange = e => {
    this.setState({ driverAge: parseInt(e.target.value) || null });
  };

  onCarBrandChange = e => {
    console.log(e.target.value);
    this.setState({ carBrand: e.target.value });
  };

  onPurchasePriceChange = e => {
    this.setState({ purchasePrice: parseInt(e.target.value) || null });
  };

  requestQuotePlan = () => {
    const { driverAge, carBrand, purchasePrice } = this.state;
    if (driverAge < 18) {
      this.setState({
        error: "Sorry! The driver is too young",
        errorFields: ["driver-age"]
      });
      return;
    }

    if (driverAge < 25 && carBrand === "porsche") {
      this.setState({
        error: "Sorry! We cannot accept this particular risk",
        errorFields: ["driver-age", "car-brand"]
      });
      return;
    }

    if (purchasePrice < 5000) {
      this.setState({
        error: "Sorry! The price of the car is too low",
        errorFields: ["purchase-price"]
      });
      return;
    }

    this.setState({ error: null, errorFields: [] });
    // age is irrelevant to processing a quote cost
    this.props.processQuote(carBrand, purchasePrice);
  };

  render () {
    const { error, errorFields } = this.state;
    return (
      <div className={"quote gradient"}>
        <Card>
          <form className={"quote-content"}>
            <TextField fieldName={"driver-age"}
                       label={"Age of the Driver"}
                       type={"number"}
                       showError={errorFields.includes("driver-age")}
                       onChange={this.onAgeChange}/>

            <Spinner fieldName={"car-brand"}
                     label={"Car"}
                     listContents={carBrands}
                     onChange={this.onCarBrandChange}
                     showError={errorFields.includes("car-brand")}/>

            <TextField fieldName={"purchase-price"}
                       label={"Purchase Price"}
                       type={"number"}
                       descriptor={"€"}
                       showError={errorFields.includes("purchase-price")}
                       onChange={this.onPurchasePriceChange}/>
            {error && <h3 className={"error"}>{error}</h3>}
            <Button label={"Get a price"} theme={"aqua"} onClick={() => this.requestQuotePlan()}/>
          </form>
        </Card>
      </div>
    );
  }
}

export default Quote;
