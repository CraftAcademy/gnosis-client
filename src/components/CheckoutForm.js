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
      success: "",
      error: "",
      renderStripeForm: true
    };
    this.submitPayment = this.submitPayment.bind(this);
  }

  async submitPayment() {
    let token = await this.props.stripe.createToken();
    let response = await axios.post("/subscriptions", {
      body: token.id
    });
    
    if (response.data.message) {
      this.setState({
        success: `${response.data.message}`,
        renderStripeForm: false
      });
    }

    if (response.data.error) {
      this.setState({ error: `${response.data.error}` });
    }
  }

  render() {
    let stripeForm;
    let paymentStatus;

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
            <Button onClick={this.submitPayment} id="submit-payment-button">
              Proceed with Payment
            </Button>
          </Form.Field>
        </Form>
      );
    }

    if (this.state.success !== "") {
      paymentStatus = (
        <Card>
          <Card.Content header={this.state.success} />
        </Card>
      );
    }

    if (this.state.error !== "") {
      paymentStatus = (
        <Card>
          <Card.Content header={this.state.error} />
        </Card>
      );
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
