import React from "react";
import Navbar from "./Navbar";

const Two = ({ prevStep, nextStep, formData, changeHandler }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    nextStep();
  };
  return (
    <>
      <Navbar />
      <div className="company-registration">
        <h2 className="heading">Company Registration</h2>
        <form
          className="registration-body"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="company-registration-form">
            <div className="input-field">
              <img src={""} alt="address" />
              <input
                name="address"
                value={formData.address}
                onChange={changeHandler}
                type="text"
                placeholder="Address of Company Headquarters"
              />
            </div>
            <div className="input-field">
              <img src={""} alt="country" />
              <input
                name="country"
                value={formData.country}
                onChange={changeHandler}
                type="text"
                placeholder="Country"
              />
            </div>
          </div>
          <div className="btn-field">
            <button className="register-button" onClick={prevStep}>
              Previous
            </button>
          </div>
          <div className="btn-field">
            <button className="register-button">Continue</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Two;
