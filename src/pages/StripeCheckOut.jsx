import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLISHABLE_KEY");

const StripeCheckout = ({ total }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm total={total} />
    </Elements>
  );
};

export default StripeCheckout;
