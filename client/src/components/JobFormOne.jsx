import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
// import { toast } from "react-toastify";

const jobFormOne = ({ formData, nextStep, changeHandler }) => {
  const { title, description, duration } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!title || !description || !duration) {
    //   toast.error("Please fill out all fields");
    // } else {
    //   toast.success("On to the next one!");
    //   setTimeout(() => {
    //     nextStep();
    //   }, 2000);
    // }
    nextStep();
  };

  return (
    <div className="job-register-info-side">
      <div className="job-register-info-box">
        <div className="job-register-info-icon">
          <FontAwesomeIcon
            icon={faAddressCard}
            style={{
              display: "flex",
              alignSelf: "center",
              color: "#f7f9fc",
              width: "40px",
              height: "40px",
            }}
          />
        </div>
        <div className="job-register-info">
          <div className="job-step-info">
            <div className="job-step-name"> Your job Information</div>
            <div className="job-step-description">
              {" "}
              Enter the job information to get familiar with you.{" "}
            </div>
          </div>
          <div className="job-step-input">
            <div className="job-step-input-box">
              <div className="field-label"> job Title </div>
              <input
                type="text"
                className="field-input"
                name="title"
                value={title}
                placeholder="Title of the job"
                onChange={changeHandler}
              />
            </div>
            <div className="job-step-input-box">
              <div className="field-label"> job description </div>
              <input
                type="text"
                className="field-input"
                name="description"
                value={description}
                placeholder="Official email address of the job"
                onChange={changeHandler}
              />
            </div>
            <div className="job-step-input-box">
              <div className="field-label"> Duration of the job </div>
              <input
                type="number"
                className="field-input"
                name="duration"
                value={duration}
                placeholder="Mention the description"
                onChange={changeHandler}
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

export default jobFormOne;
