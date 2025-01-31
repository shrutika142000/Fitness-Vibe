import React from "react";
import "../styles/Offer.css";

const Offer = () => {
  return (
    <section id="offer" className="offer-section text-center">
      <div className="container">
        <h2 className="section-title">Special Offers</h2>
        <p>
          Sign up today and get a free consultation and one-month trial
          membership.
        </p>
        <a href="#contact" className="btn btn-warning btn-lg">
          Join Now
        </a>
      </div>
    </section>
  );
};

export default Offer;
