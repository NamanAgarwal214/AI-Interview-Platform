import React from "react";
import "../styles/CompanyRegister.css";

const CompanyRegisterRight = () => {
  return (
    <div className="company-register-info-side">
      <div className="company-register-info-box">
        <div className="company-register-info-icon"></div>
        <div className="company-register-info">
          <div className="company-step-info">
            <div className="company-step-name"> Your Company Information</div>
            <div className="company-step-description">
              {" "}
              Enter your company information to get familiar with you.{" "}
            </div>
          </div>
          <div className="company-step-input">
            <div className="company-step-input-box">
              <div className="field-label"> Company Name </div>
              <input
                type="text"
                className="field-input"
                name="name"
                placeholder="Name of the company"
              />
            </div>
            <div className="company-step-input-box">
              <div className="field-label"> Email </div>
              <input
                type="email"
                className="field-input"
                name="name"
                placeholder="Official email address of the company"
              />
            </div>
            <div className="company-step-input-box">
              <div className="field-label"> Password </div>
              <input
                type="text"
                className="field-input"
                name="name"
                placeholder="Create a password"
              />
            </div>
            <div className="company-step-input-box">
              <div className="field-label"> Confirm Password </div>
              <input
                type="text"
                className="field-input"
                name="name"
                placeholder="Confirm your password"
              />
            </div>
          </div>
          <div className="buttons">
            <button className="back-button" type="back">
              Back
            </button>
            <button className="next-button" type="next">
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegisterRight;
