import React, { useEffect, useRef, useState } from "react";
import "../styles/ApplicantProfile.css";
import axios from "axios";

const ApplicantProfile = () => {
  const resumeRef = useRef(false);

  const [applicantData, setApplicantData] = useState({
    name: "",
    email: "",
    address: "",
    resume: "",
  });

  useEffect(() => {
    // axios.get("/applicant/getDetails").then((res) => {
    //   setApplicantData({
    //     name: res.data.name,
    //     email: res.data.email,
    //     address: res.data.address,
    //     resume: res.data.resume
    //   });
    // });
  }, []);

  const handleResumeChange = (e) => {
    const [file] = e.target.files;
    if (file) {
      // to update the image displayed in the modal
      resumeRef.current.src = URL.createObjectURL(file);
    }
    e.target.value = null;
  };

  return (
    <div className="visible-area">
      <div className="applicant-profile">
        <div className="heading-box">
          <div className="heading">Your profile</div>
          <div className="about-heading">
            View your details provided by company here.
          </div>
        </div>

        <div className="divider"></div>
        <div className="field-box">
          <div className="field-left">
            <div className="field">Your Name</div>
            <div className="field-detail">
              Update the name of your company here.
            </div>
          </div>
          <div className="field-right">
            <input
              type="text"
              className="field-input-profile"
              name="name"
              value={applicantData.name}
              placeholder="Name of the company"
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className="field-box">
          <div className="field-left">
            <div className="field">Your Address</div>
            <div className="field-detail">
              Update the address of your company here.
            </div>
          </div>
          <div className="field-right">
            <input
              type="text"
              className="field-input-profile"
              name="address"
              value={applicantData.address}
              placeholder="Address of the company"
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className="field-box">
          <div className="field-left">
            <div className="field">Your Email</div>
            <div className="field-detail">Enter the email of your company.</div>
          </div>
          <div className="field-right">
            <input
              type="text"
              className="field-input-profile"
              name="email"
              value={applicantData.email}
              placeholder="Email of the company"
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className="field-box">
          <div className="field-left">
            <div className="field">Your resume</div>
            <div className="field-detail">
              Upload your certificate to proof the genuinity of the company.
            </div>
          </div>
          <div className="field-right">
            <div className="resume-image">
              <img src={applicantData.resume} alt="" ref={resumeRef} />
              <input
                type="file"
                id="resume"
                accept="application/pdf"
                hidden
                onChange={handleResumeChange}
              />
              <label className="fileLabelResume" htmlFor="resume"></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantProfile;
