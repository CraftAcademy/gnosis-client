import React, { Component } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  injectStripe
} from "react-stripe-elements";
import axios from "axios";
import { Form } from "semantic-ui-react";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submitPayment = this.submitPayment.bind(this);
  }

  async submitPayment() {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await axios.post("/subscriptions", {
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.status === 200) this.setState({ complete: true });
  }

  render() {
    if (this.state.complete) return <h1>Payment successful!</h1>;
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
            <button onClick={this.submitPayment} id="submit-payment-button">
              Proceed with Payment
            </button>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
