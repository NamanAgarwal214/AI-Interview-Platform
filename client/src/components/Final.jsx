import React from "react";
import Navbar from "./Navbar";

const Final = ({
  logoPreview,
  certificatePreview,
  changeHandler,
  nextStep,
  formData,
  prevStep,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
    console.log(formData);
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
              <img src={logoPreview} alt="logo" />
              <input
                name="logo"
                onChange={changeHandler}
                type="file"
                placeholder="Logo"
              />
            </div>
            <div className="input-field">
              <img src={certificatePreview} alt="certificate" />
              <input
                name="certificate"
                onChange={changeHandler}
                type="file"
                placeholder="Certificate"
              />
            </div>
          </div>
          <div className="btn-field">
            <button className="register-button" onClick={prevStep}>
              Previous
            </button>
          </div>
          <div className="btn-field">
            <button className="register-button">Next</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Final;
