import React, { useState } from "react";
import axios from "axios";
import "../styles/StartTest.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const StartTest = ({ jobData }) => {
  const navigate = useNavigate();

  const startHandler = async (id) => {
    console.log(id);
    const data = new FormData();
    data.append("job", id);
    const token = JSON.parse(localStorage.getItem("applicantToken"));
    axios
      .post("/applicant/startQuiz", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("started");
        console.log(res);
        navigate("/question", { state: res.data.data });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="start-test-page">
      <div className="start-test-left">
        <div className="test-job-info">
          <div className="job-type">Jobs</div>
          {jobData.map((job) => (
            <div className="about-job-card">
              <div className="about-job-info">
                <div className="heading-about-job">{job.title}</div>
                <div className="job-description">{job.description}</div>
              </div>
              <div className="company-logo-box">
                {/* <div className="company-logo-test">
                <img src="/images/google.png" alt="" />
              </div> */}
                {/* <div className="start-test-box"> */}
                <button
                  className="start-test-button"
                  onClick={() => startHandler(job._id)}
                >
                  Start Test
                </button>
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="test-activity">
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
        </div> */}
        {/* <div className="start-test-box">
          <button className="start-test-button" onClick={startHandler}>
            Start Test
          </button>
        </div> */}
      </div>
      {/* <div className="start-test-right">
        <img src="/images/start-test.png" alt="" />
      </div> */}
    </div>
  );
};

export default StartTest;
