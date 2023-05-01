import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

const JobFormTwo = ({
  prevStep,
  changeHandler,
  formData,
  questions,
  applicants,
}) => {
  const token = JSON.parse(localStorage.getItem("companyToken"));
  const navigate = useNavigate();

  const uploadApplicants = async (id) => {
    try {
      axios
        .post(
          "/jobs/addApplicants",
          { data: applicants, job: id },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((applicantsRes) => {
          console.log(applicantsRes);
          if (applicantsRes.status === 200) {
            toast.success(applicantsRes.data.message);
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const uploadQuestion = async (id) => {
    try {
      axios
        .post(
          "/question/create",
          { data: questions, job: id },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((questionsRes) => {
          console.log(questionsRes);
          if (questionsRes.status === 200) {
            toast.success(questionsRes.data.message);
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, description, duration } = formData;

    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("duration", duration);

    // console.log(applicants);

    try {
      axios
        .post("/jobs/create", data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            toast.success(res.data.message);
            if (applicants.length > 0) uploadApplicants(res.data.data._id);
            if (questions.length > 0) uploadQuestion(res.data.data._id);
            navigate("/company/dashboard");
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } catch (error) {
      toast.error(error.message);
    }
    // }
  };

  return (
    <>
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
              <button
                className="back-button-job"
                type="back"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                className="next-button"
                type="next"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobFormTwo;
