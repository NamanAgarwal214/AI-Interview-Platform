import React from "react";
import Navbar from "./Navbar";

const One = ({ nextStep, formData, changeHandler }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    nextStep();
  };

  return (
    <>
      <Navbar />
      <div className="company-registration">
        <h2 className="heading">Company Registration</h2>
        <form className="registration-body" onSubmit={handleSubmit}>
          <div className="company-registration-form">
            <div className="input-field">
              <img src={""} alt="first-name" />
              <input
                name="name"
                value={formData.name}
                onChange={(e) => changeHandler(e)}
                type="text"
                placeholder="Name of the Company"
              />
            </div>
            <div className="input-field">
              <img src={""} alt="email" />
              <input
                name="email"
                value={formData.email}
                onChange={(e) => changeHandler(e)}
                type="email"
                placeholder="Official email address of the company"
              />
            </div>
            <div className="input-field">
              <img src={""} alt="password" />
              <input
                name="password"
                value={formData.password}
                onChange={(e) => changeHandler(e)}
                type="password"
                placeholder="Create a password"
              />
            </div>
          </div>
          <div className="btn-field">
            <button className="register-button">Continue</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default One;
