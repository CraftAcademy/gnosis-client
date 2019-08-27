import React, { Component } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  injectStripe
} from "react-stripe-elements";
import axios from "axios";
import { connect } from "react-redux";
import { Form, Button, Card, Container } from "semantic-ui-react";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderStripeForm: true
    };
  }

  submitPayment = async ev => {
    ev.preventDefault();
    await this.props.stripe.createToken().then(({ token }) => {
      token
        ? this.stripePayment(token.id)
        : this.props.dispatchFlash(
            "Something went wrong, please try again.",
            "error"
          );
    });
  };

  stripePayment = async stripeToken => {
    try {
      let response = await axios.post("/subscriptions", {
        stripeToken
      });
      if (response.status === 200) {
        this.props.dispatchFlash(response.data.message, "success");
        this.setState({
          renderStripeForm: false
        });
      }
    } catch (error) {
      this.props.dispatchFlash(error.response.data.errors, "error");
    }
  };

  render() {
    let stripeForm;

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
    return <Container>{stripeForm}</Container>;
  }
}

const mapDispatchToProps = {
  dispatchFlash: (message, status) => ({
    type: "SHOW_FLASH_MESSAGE",
    payload: { flashMessage: message, status: status }
  })
};

export default injectStripe(
  connect(
    null,
    mapDispatchToProps
  )(CheckoutForm)
);
