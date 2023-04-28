import React from "react";
import SideNavbar from "../components/SideNavbar";
import "../styles/ApplicantPage.css";
import ApplicantProfile from "../components/ApplicantProfile";

const ApplicantPage = () => {
  return (
    <div className="applicant-page">
      <SideNavbar />
      <ApplicantProfile />
    </div>
  );
};

export default ApplicantPage;
