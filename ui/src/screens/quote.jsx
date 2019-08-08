import React, { Component } from "react";

import carBrands from "../common/cardBrands";

import Card from "../components/card/card";
import Button from "../components/buttons/button";
import TextField from "../components/input/textField";

import "./quote.css";

class Quote extends Component {
  constructor () {
    super();
    this.state = {
      errors: {},
      driverAge: null,
      carBrand: null,
      purchasePrice: null
    };
  }

  onAgeChange = e => {
    this.setState({ driverAge: e.target.value });
  };

  onCarBrandChange = e => {

  };

  onPurchasePriceChange = e => {
    const purchasePrice = e.target.value;
    if (!purchasePrice) {

    }

    this.setState({ purchasePrice });
  };

  render () {
    const { errors } = this.state;
    return (
      <div className={"quote gradient"}>
        <Card>
          <form className={"quote-content"}>
            <TextField fieldName={"driver-age"}
                       label={"Age of the Driver"}
                       type={"number"}
                       onChange={this.onAgeChange}/>
            <div className={"car-brand"}>
              <label htmlFor={"car-brand"}>Car</label>
              <select className={"car-brand"} name={"car-brand"} required>
                {carBrands.map((brand, index) => <option key={index} value={brand.toLowerCase()}>{brand}</option>)}
              </select>
            </div>
            <TextField fieldName={"purchase-price"}
                       label={"Purchase Price"}
                       type={"number"}
                       descriptor={"€"}
                       error={errors.error}
                       onChange={this.onPurchasePriceChange}/>
            <Button label={"Get a price"} theme={"aqua"}/>
          </form>
        </Card>
      </div>
    );
  }
}

export default Quote;
