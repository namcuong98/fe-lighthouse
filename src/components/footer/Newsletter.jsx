import React from "react";
import InputSubscribe from "./InputSubscribe";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Sign up to Newsletter</h1>
      <span>
        Join 20.000+ subscribers and get a new discount coupon on every
        Saturday. Updates information on Sales and Offers.
      </span>
      <InputSubscribe />
      <p>Subscribe for Uminex and get 20% off your first purchase.</p>
    </div>
  );
};

export default Newsletter;
