import React, { Component } from "react";
import { Form } from "semantic-ui-react";

export class PaymentFields extends Component {
  render() {
    return (
      <Form id="payment-form">
        <Form.Field>
          <label>Select your subscription type:</label>
          <Form.Field>
            <input type="radio" name="subscriptionType" />
            Yearly - 10,000SEK/each
          </Form.Field>
        </Form.Field>
      </Form>
    );
  }
}

export default PaymentFields;
