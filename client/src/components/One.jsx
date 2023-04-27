import React, { useState } from "react";
import { toast } from "react-toastify";

const One = ({ nextStep, formData, changeHandler }) => {
  const [confirmPassword, setConfirmPassword] = useState("");

  const { name, email, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill out all fields");
    } else if (password !== confirmPassword) {
      toast.error("Please check the passwords");
    } else {
      toast.success("On to the next one!");
      setTimeout(() => {
        nextStep();
      }, 2000);
    }
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
              <div className="field-label"> Company Name </div>
              <input
                type="text"
                className="field-input"
                name="name"
                value={name}
                placeholder="Name of the company"
                onChange={changeHandler}
              />
            </div>
            <div className="company-step-input-box">
              <div className="field-label"> Email </div>
              <input
                type="email"
                className="field-input"
                name="email"
                value={email}
                placeholder="Official email address of the company"
                onChange={changeHandler}
              />
            </div>
            <div className="company-step-input-box">
              <div className="field-label"> Password </div>
              <input
                type="password"
                className="field-input"
                name="password"
                value={password}
                placeholder="Create a password"
                onChange={changeHandler}
              />
            </div>
            <div className="company-step-input-box">
              <div className="field-label"> Confirm Password </div>
              <input
                type="password"
                className="field-input"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
              />
            </div>
          </div>
          <div className="buttons">
            <button className="next-button" type="next" onClick={handleSubmit}>
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;
