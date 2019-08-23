import React, { Component } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  injectStripe
} from "react-stripe-elements";
import axios from "axios";
import { Form, Button, Card } from "semantic-ui-react";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      complete: false, 
      failed: false 
    };
    this.submitPayment = this.submitPayment.bind(this);
  }

  async submitPayment() {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await axios.post("/subscriptions", {
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.status === 200) {
      this.setState({ complete: true });
    }

    if (response.status === 422) {
      this.setState({ failed: true });
    }
  }

  render() {
    if (this.state.complete) return <h1>Payment successful!</h1>;
    if (this.state.failed) return <h1>Payment failed!</h1>;
    return (
      <div>
        <Form id="payment-form">
          <Form.Field>
            <label>Select your subscription type:</label>
            <Form.Field>
              <Card>
                <Card.Content header="Yearly" />
                <Card.Content description="10 000 SEK" />
              </Card>
            </Form.Field>
          </Form.Field>
          <Form.Field>
            <label>Credit Card Number:</label>
            <Form.Field>
              <CardNumberElement />
            </Form.Field>
          </Form.Field>
          <Form.Field>
            <label>Expire Date:</label>
            <Form.Field>
              <CardExpiryElement />
            </Form.Field>
          </Form.Field>
          <Form.Field>
            <label>CVC Number:</label>
            <Form.Field>
              <CardCvcElement />
            </Form.Field>
          </Form.Field>
          <Form.Field>
            <Button onClick={this.submitPayment} id="submit-payment-button">
              Proceed with Payment
            </Button>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
