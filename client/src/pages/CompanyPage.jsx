import React from "react";
import SideNavbar from "../components/SideNavbar";
import "../styles/CompanyPage.css";
import CompanyProfile from "../components/CompanyProfile";

const CompanyPage = () => {
  return (
    <div className="company-page">
      <SideNavbar />
      <CompanyProfile />
    </div>
  );
};

export default CompanyPage;
