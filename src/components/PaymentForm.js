import React, { Component }from "react"; 

export class PaymentFields extends Component {
  render() {
    return (
      <form id="payment-form">
        <label />
        <select id="Payment-Type">
          Please select your Payment method:
          <option className="options" value="Card-Payment">
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
