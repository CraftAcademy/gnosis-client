import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";
import { Container } from "semantic-ui-react";

class PaymentForm extends Component {
  render() {
    return (
      <Container>
        <StripeProvider apiKey="pk_test_7rIPo7H0D768Gw8L7YdJqLAv">
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
