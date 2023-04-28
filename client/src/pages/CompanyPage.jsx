import React from "react";
import SideNavbar from "../components/SideNavbar";
import "../styles/CompanyPage.css";
import CompanyProfile from "../components/CompanyProfile";
import StartTest from "../components/StartTest";

const CompanyPage = () => {
  return (
    <div className="company-page">
      <SideNavbar />
      <StartTest />
    </div>
  );
};

export default CompanyPage;
