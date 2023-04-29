import React, { useEffect, useRef, useState } from "react";
import "../styles/ApplicantProfile.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const ApplicantProfile = () => {
  const resumeRef = useRef(false);

  const [applicantData, setApplicantData] = useState({
    name: "",
    email: "",
    address: "",
    resume: "",
  });
  const [fileType, setFileType] = useState("");

  useEffect(() => {
    const applicant = JSON.parse(localStorage.getItem("applicant"));
    setApplicantData({
      name: applicant.name,
      email: applicant.email,
      address: applicant.address,
      resume: applicant.resume,
    });
  }, []);

  const [file, setFile] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleResumeChange = (e) => {
    setFile(true);
    const reader = new FileReader();
    console.log(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        console.log(reader.result);
        setApplicantData({ ...applicantData, [e.target.name]: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setFileType(e.target.files[0].type);
  };

  const base64toBlob = (data) => {
    const base64WithoutPrefix = data.substr(
      "data:application/pdf;base64,".length
    );

    const bytes = atob(base64WithoutPrefix);
    let length = bytes.length;
    let out = new Uint8Array(length);

    while (length--) {
      out[length] = bytes.charCodeAt(length);
    }

    return new Blob([out], { type: "application/pdf" });
  };
  const blob = base64toBlob(applicantData.resume);
  const url = URL.createObjectURL(blob);
  console.log(url);

  const submitHandler = async () => {
    const token = localStorage.getItem("applicantToken");
    const { name, email, address, resume } = applicantData;

    if (!token) {
      toast.error("There is some error please login again!!");
      <Navigate to={"/login/applicant"} />;
    } else if (!name || !email || !address) {
      toast.error("All fields are compulsory...Please fill these out");
    } else {
      const data = new FormData();
      data.append("name", name);
      data.append("email", email);
      data.append("address", address);
      data.append("resume", resume);
      data.append("file_type_resume", fileType);
      try {
        const response = await axios.post("/applicant/editProfile", data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
      } catch (error) {}
    }
  };

  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div>
          {url && (
            <div
              style={{
                border: "1px solid rgba(0, 0, 0, 0.3)",
                height: "750px",
              }}
            >
              <Viewer fileUrl={url} />
            </div>
          )}
        </div>
        {/* {file && <Viewer fileUrl={applicantData.resume} />} */}
      </Worker>
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
              <div className="field-detail">
                Enter the email of your company.
              </div>
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
                  name="resume"
                  accept="application/pdf"
                  onChange={handleResumeChange}
                />
                <label className="fileLabelResume" htmlFor="resume"></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicantProfile;
