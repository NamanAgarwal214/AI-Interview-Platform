import React from "react";
import { toast } from "react-toastify";

const Two = ({ prevStep, nextStep, formData, changeHandler }) => {
  const { address, country } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!address || !country) {
      toast.error("Please fill out all fields");
    } else {
      toast.success("On to the next one to upload some documents!");
      setTimeout(() => {
        nextStep();
      }, 2000);
    }
    // nextStep();
  };

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
              <div className="field-label"> Address of the Company </div>
              <input
                name="address"
                value={address}
                className="field-input"
                onChange={changeHandler}
                type="text"
                placeholder="Address of Company Headquarters"
              />
            </div>
            <div className="company-step-input-box">
              <div className="field-label"> Country </div>
              <input
                name="country"
                value={country}
                className="field-input"
                onChange={changeHandler}
                type="text"
                placeholder="Country"
              />
            </div>
          </div>
          <div className="buttons">
            <button className="back-button" type="back" onClick={prevStep}>
              Back
            </button>

            <button className="next-button" type="next" onClick={handleSubmit}>
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Two;
