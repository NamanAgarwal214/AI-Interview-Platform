import React from "react";
import "../styles/StartTest.css";

const StartTest = () => {
  return (
    <div className="start-test-page">
      <div className="start-test-left">
        <div className="test-job-info">
          <div className="job-type">Software Engineer Test</div>
          <div className="about-job-card">
            <div className="about-job-info">
              <div className="heading-about-job">About Job</div>
              <div className="job-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
              </div>
            </div>
            <div className="company-logo-box">
              <div className="company-logo-test">
                <img src="/images/google.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="test-activity">
          <div className="test-activity-heading">Activity</div>
          <div className="test-activity-card">
            <div className="activity-box">
              <div className="question-icon"></div>
              <div className="activity-info">
                <div className="activity-name">Total Questions</div>
                <div className="activity-name-info">100</div>
              </div>
            </div>
            <div className="activity-box">
              <div className="attempted-icon"></div>
              <div className="activity-info">
                <div className="activity-name">Attempted</div>
                <div className="activity-name-info">50</div>
              </div>
            </div>
            <div className="activity-box">
              <div className="deadline-icon"></div>
              <div className="activity-info">
                <div className="activity-name">Days left</div>
                <div className="activity-name-info">2</div>
              </div>
            </div>
          </div>
        </div>
        <div className="start-test-box">
          <button className="start-test-button">Start Test</button>
        </div>
      </div>
      <div className="start-test-right">
        {/* <div className="image-upper">
          <img src="/images/interview.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default StartTest;
