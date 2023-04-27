import React from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <form className="contact" id="contact">
      <div className="contact__heading">Contact Us</div>
      <div className="contact__main">
        <div className="contact__form">
          <div className="input__name">
            <div className="input_container">
              <img src={""} alt="first-name" />
              <input
                type="text"
                className="contact__form__name"
                placeholder="FirstName"
              />
            </div>
            <div className="input_container">
              <img src={""} alt="last-name" />
              <input
                type="text"
                className="contact__form__name"
                placeholder="LastName"
              />
            </div>
          </div>
          <div className="input_container">
            <img src={""} alt="email" />
            <input
              type="email"
              className="contact__form__email"
              placeholder="Email"
            />
          </div>
          <div className="input_container">
            <img src={""} alt="subject" />
            <input
              type="text"
              className="contact__form__subject"
              placeholder="Subject"
            />
          </div>
          <div className="input_container">
            <img src={""} alt="message" />
            <textarea
              className="contact__form__message"
              placeholder="Message"
            />
          </div>
          <button className="contact__form__button" type="submit">
            Contact
          </button>
        </div>
        <div className="contact__rightImage">
          <img src={""} alt="contact-us" width="500" height="500" />
        </div>
      </div>
    </form>
  );
};

export default ContactUs;
