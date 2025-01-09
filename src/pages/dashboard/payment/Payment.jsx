import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./stripe/CheckoutForm";
import Heading from "../../../components/shared/heading/Heading";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_payment_gatway_pk);
//
const Payment = () => {

  return (
    <>
      <Heading title={"Payment"} subTitle={"Want to eat ?"}/>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </>
  );
};

export default Payment;
