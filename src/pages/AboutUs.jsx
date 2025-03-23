import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Passionate about great food and unforgettable experiences.</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, we started with a mission to deliver delicious and
            high-quality food that brings people together. With a team of
            expert chefs and food lovers, we ensure that every dish is crafted
            with passion and perfection.
          </p>
        </div>
        <img src="/us.jpg" alt="Our Team" className="about-image" />
      </section>

      <section className="our-values">
        <h2>Our Values</h2>
        <div className="values-container">
          <div className="value-box">
            <h3>Quality Ingredients</h3>
            <p>We use only the freshest and finest ingredients.</p>
          </div>
          <div className="value-box">
            <h3>Customer First</h3>
            <p>Your satisfaction is our top priority.</p>
          </div>
          <div className="value-box">
            <h3>Fast & Reliable</h3>
            <p>On-time delivery, every time.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
