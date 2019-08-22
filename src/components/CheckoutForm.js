import React, { Component } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  injectStripe
} from "react-stripe-elements";
import { Form } from "semantic-ui-react";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
  }

  render() {
    return (
      <div>
        <Form id="payment-form">
          <Form.Field>
            <label>Select your subscription type:</label>
            <Form.Field>
              <input type="radio" name="subscriptionType" />
              Yearly - 10,000SEK/each
            </Form.Field>
          </Form.Field>
          <Form.Field>
            <CardNumberElement />
          </Form.Field>
          <Form.Field>
            <CardExpiryElement />
          </Form.Field>
          <Form.Field>
            <CardCvcElement />
          </Form.Field>
          <Form.Field>
            <button onClick={this.submit}>Send</button>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
