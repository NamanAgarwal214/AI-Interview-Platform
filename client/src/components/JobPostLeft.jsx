import React from "react";
import "../styles/CreateJob.css";

const JobPostLeft = ({ step }) => {
  return (
    <div className="job-register-steps-side">
      <div className="logo">Logo</div>
      <div className="steps-box">
        <div className="job-register-steps">
          <div className="step-name-heading">Step {step}</div>
          <div className="step-info">
            {" "}
            Enter the information about the job vacancy to get more familiar
          </div>
          <div className="steps-group">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-name"> Job Information</div>
            </div>
            <div className="step-separator-box">
              <div className="step-separator-outside">
                <div className="step-separator"></div>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-name"> job Location</div>
            </div>
            <div className="step-separator-box">
              <div className="step-separator-outside">
                <div className="step-separator"></div>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-name"> job Logo</div>
            </div>
            <div className="step-separator-box">
              <div className="step-separator-outside">
                <div className="step-separator"></div>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-name"> job Information Preview</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostLeft;
