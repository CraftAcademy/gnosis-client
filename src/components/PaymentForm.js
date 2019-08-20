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
            Monthly - 5,000SEK/each
          </Form.Field>
          <Form.Field>
            <input type="radio" name="subscriptionType" />
            Yearly - 10,000SEK/each
          </Form.Field>
          <Form.Field>
            <input type="radio" name="subscriptionType" />
            Lifetime - 100,000SEK
          </Form.Field>
        </Form.Field>

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
      </Form>
    );
  }
}

export default PaymentFields;
