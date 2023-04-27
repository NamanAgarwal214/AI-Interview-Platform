import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const JobFormTwo = ({
  prevStep,
  changeHandler,
  formData,
  questions,
  applicants,
}) => {
  const token = localStorage.getItem("token");
  const uploadApplicants = async () => {
    const applicantsData = new FormData();
    applicantsData.append("applicants", applicants);

    try {
      const applicantsRes = await axios.post(
        "/jobs/addApplicants",
        applicantsData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(applicantsRes);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const uploadQuestion = async () => {
    const questionsData = new FormData();
    questionsData.append("questions", questions);

    try {
      const questionsRes = await axios.post("/question/create", questionsData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(questionsRes);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, description, duration } = formData;

    if (applicants.length() == 0 || questions.length() == 0) {
      toast.error("Upload file with some data");
    } else {
      const data = new FormData();
      data.append("title", title);
      data.append("description", description);
      data.append("duration", duration);

      uploadApplicants();
      uploadQuestion();

      try {
        const res = await axios.post("/jobs/create", data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res);
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="job-register-info-side">
      <div className="job-register-info-box">
        <div className="job-register-info-icon"></div>
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
              <div className="field-label"> Job Applicants </div>
              <input
                type="file"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                className="field-input"
                name="applicants"
                placeholder="Applicants for the job"
                onChange={changeHandler}
              />
            </div>
            <div className="job-step-input-box">
              <div className="field-label">
                {" "}
                Interview Questions along with Answers{" "}
              </div>
              <input
                type="file"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                className="field-input"
                name="questions"
                placeholder="Questions and Answers for the job interview"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="buttons">
            <button className="back-button" type="back" onClick={prevStep}>
              Back
            </button>
            <button className="next-button" type="next" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFormTwo;
