import React from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

const Final = ({ logo, certificate, changeHandler, nextStep, prevStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!logo || !certificate) {
      toast.error("Please fill out all fields");
    } else {
      toast.success("On to the next one!");
      setTimeout(() => {
        nextStep();
      }, 2000);
    }
    // nextStep();
  };

  return (
    <div className="company-register-info-side">
      <div className="company-register-info-box">
        <div className="company-register-info-icon">
          <FontAwesomeIcon
            icon={faBuilding}
            style={{ color: "#f7f9fc", width: "40px", height: "40px" }}
          />
        </div>
        <div className="company-register-info">
          <div className="company-step-info">
            <div className="company-step-name">
              {" "}
              Company Logo and Information
            </div>
            <div className="company-step-description">
              {" "}
              Enter your company information to get familiar with you.{" "}
            </div>
          </div>
          <div>
            <div className="cover">
              <div className="cert">
                <img src={certificate} alt="Certificate" className="certi" />
              </div>

              <input
                type="file"
                className="file-input"
                name="certificate"
                title=""
                placeholder="Certificate of the company"
                onChange={changeHandler}
                required
              />
              <div>
                <img src={logo} alt="logo" className="log" />
              </div>
              <input
                type="file"
                className="logo-input"
                name="logo"
                title=""
                placeholder="Logo of the Company"
                onChange={changeHandler}
                required
              />
            </div>
          </div>
          {/* <div className="company-step-input">
            <div className="company-step-input-box">
              <div className="field-label"> Company Logo </div>
              <img src={logo} alt={formData.name + "-logo"} />
              <div className="border">
                <input
                  type="file"
                  className="field-input"
                  name="logo"
                  title={"Hello"}
                  placeholder="Logo of the Company"
                  onChange={changeHandler}
                  required
                />
              </div>
            </div>
            <div className="company-step-input-box">
              <div className="field-label"> Company Certificate </div>
              <img src={certificate} alt={formData.name + "-certificate"} />
              <input
                type="file"
                className="field-input"
                name="certificate"
                placeholder="Certificate of the company"
                onChange={changeHandler}
                required
              />
            </div>
          </div> */}
          <div className="buttons">
            <button className="back-button-comp" type="back" onClick={prevStep}>
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

export default Final;
