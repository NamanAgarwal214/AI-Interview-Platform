import React, { useEffect, useState } from "react";
import SideNavbar from "../components/SideNavbar";
import "../styles/ApplicantPage.css";
import ApplicantProfile from "../components/ApplicantProfile";
import StartTest from "../components/StartTest";

const ApplicantPage = () => {
  const [applicantData, setApplicantData] = useState({
    name: "",
    email: "",
    address: "",
    job: [],
  });

  useEffect(() => {
    const applicant = JSON.parse(localStorage.getItem("company"));
    setApplicantData({
      name: applicant.name,
      email: applicant.email,
      address: applicant.address,
      job: applicant.job,
    });
  }, []);

  return (
    <div className="applicant-page">
      <SideNavbar />
      {/* <ApplicantProfile /> */}
      <StartTest jobData={applicantData.job} />
    </div>
  );
};

export default ApplicantPage;
