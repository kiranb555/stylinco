import React from "react";
import "./contactForm.css";
function ContactForm() {
  return (
    <div className="contact-form-cls">
      <h2>Tell Us About Your Case</h2>
      <div className="note">Note : Bold labels Required</div>
      <form>
        <input type="text" placeholder="Name" required />
        <br />
        <input type="email" placeholder="Email Address" required />
        <br />
        <input type="phone" placeholder="Phone" required />
        <br />
        <textarea rows="4" cols="50" name="comment" required />
        <br />
        <div>
          <input type="checkbox" name="vehicle1" value="Bike" required /> I have
          read
          <span>disclaimer.</span>
          <span>Privacy Policy</span>
        </div>
        <br />
        <button type="submit" value="submit">
          Get Answer
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
