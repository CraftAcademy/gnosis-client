import React, { Component } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  injectStripe
} from "react-stripe-elements";
import axios from "axios";
import { Form, Button, Card, Container } from "semantic-ui-react";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      failed: false,
      renderStripeForm: true
    };
    this.submitPayment = this.submitPayment.bind(this);
  }

  async submitPayment() {
    let token = await this.props.stripe.createToken();
    let response = await axios.post("/subscriptions", {
      body: token.id
    });
    console.log(response)
    debugger
    if (response.data.message) {
      this.setState({ 
        complete: true,
        renderStripeForm: false
      });
    }

    if (response.data.error) {
      this.setState({ failed: true });
    }
  }

  render() {
    let stripeForm
    let paymentStatus

    if (this.state.renderStripeForm) {
      stripeForm = (
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
            <Button
              onClick={this.submitPayment}
              id="submit-payment-button"
            >
              Proceed with Payment
            </Button>
          </Form.Field>
        </Form>
      );
    }

    if (this.state.complete) {
      paymentStatus = (
        <Card>
          <Card.Content header="Payment successful!" />
        </Card>
      );
      }
        
    if (this.state.failed) {
      paymentStatus = (
        <Card>
          <Card.Content header="Payment failed!" />
        </Card>
      )
    }
    return (
      <Container>  
        {paymentStatus} 
        {stripeForm}
      </Container>
    );
  }
}

export default injectStripe(CheckoutForm);
