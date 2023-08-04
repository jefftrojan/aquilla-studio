import React from "react";
import { Link } from "react-scroll";
import "../styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
      <h3> Kindly send us a message and we will get back to you as soon as possible!</h3>

      <div className="contact-form" id="contactForm">
      
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
