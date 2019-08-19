import React, { Component } from "react";

export class PaymentFields extends Component {
  render() {
    return (
      <form id="payment-form">
        <label />
        <select id="payment-type">
          Please select your Payment method:
          <option id="card-payment" value="card-payment">
            Pay with card
          </option>
        </select>
        <label>Name on card</label>
        <input id="card-owner" />
        <label>Card Number</label>
        <input id="card-number" />
        <label>Expiration Date</label>
        <input id="expiration date" />
        <label>CVC</label>
        <input id="CVC" />
        <input id="submit-payment-button" value="pay" type="submit" />
      </form>
    );
  }
}

export default PaymentFields;
