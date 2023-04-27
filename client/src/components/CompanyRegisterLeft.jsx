import React from "react";
import "../styles/CompanyRegister.css";

const CompanyRegisterLeft = () => {
  return (
    <div className="company-register-steps-side">
      <div className="logo">Logo</div>
      <div className="steps-box">
        <div className="company-register-steps">
          <div className="step-name-heading">Step 1</div>
          <div className="step-info">
            {" "}
            Enter the information about your company to get more familiar
          </div>
          <div className="steps-group">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-name"> Company Information</div>
            </div>
            <div className="step-separator-box">
              <div className="step-separator-outside">
                <div className="step-separator"></div>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-name"> Company Location</div>
            </div>
            <div className="step-separator-box">
              <div className="step-separator-outside">
                <div className="step-separator"></div>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-name"> Company Logo</div>
            </div>
            <div className="step-separator-box">
              <div className="step-separator-outside">
                <div className="step-separator"></div>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-name"> Company Information Preview</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegisterLeft;
