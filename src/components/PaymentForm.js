import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";
import { Container } from "semantic-ui-react";

class PaymentForm extends Component {
  render() {
    return (
      <Container>
        <StripeProvider apiKey="pk_test_zxc8b5IX4U2OFSnqMAY2XN4i00tZz2JAqX">
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
