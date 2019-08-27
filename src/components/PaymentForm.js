import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";
import { Container } from "semantic-ui-react";

class PaymentForm extends Component {
  render() {
    let stripeApiKey = process.env.REACT_APP_API_STRIPE_KEY
    return (
      <Container>
        <StripeProvider apiKey={stripeApiKey}>
          <div>
            <Elements>
              <CheckoutForm />
            </Elements>
          </div>
        </StripeProvider>
      </Container>
    );
  }
}

export default PaymentForm;
