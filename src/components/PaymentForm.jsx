import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentForm = ({ total }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      alert(`Payment of $${total} successful!`);
    } else {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <h2>Pay ${total}</h2>
      <CardElement />
      <button type="submit" style={{ marginTop: "10px", padding: "10px", background: "#4CAF50", color: "white", border: "none" }}>
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;
