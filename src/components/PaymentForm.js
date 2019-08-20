import React, { Component } from "react";
import { Form, Button } from 'semantic-ui-react';

export class PaymentFields extends Component {
  render() {
    return (
      <Form id="payment-form">
        <Form.Field>
        <label>Please select your Payment method:</label>
        <select id="payment-type">
          Please select your Payment method:
          <option id="card-payment" value="card-payment">
            Pay with card
          </option>
        </select>
        </Form.Field>

        <Form.Field>
        <label>Name on card</label>
        <input id="card-owner" />
        </Form.Field>

        <Form.Field>
        <label>Card Number</label>
        <input id="card-number" />
        </Form.Field>

        <Form.Field>
        <label>Expiration Date</label>
        <input id="expiration date" />
        </Form.Field>

        <Form.Field>
        <label>CVC</label>
        <input id="CVC" />
        </Form.Field>

        <Button id="submit-payment-button" type="submit" >Pay Subscription</Button>
      </Form>
    );
  }
}

export default PaymentFields;
