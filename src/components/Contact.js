import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p>Address: 123 Fitness St, Healthy City, Gymland</p>
        <p>Phone: +1 234 567 890</p>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
