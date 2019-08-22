import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

class PaymentForm extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_7rIPo7H0D768Gw8L7YdJqLAv">
        <div>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default PaymentForm;
