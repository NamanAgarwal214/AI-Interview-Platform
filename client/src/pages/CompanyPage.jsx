import React from "react";
import SideNavbar from "../components/SideNavbar";
import "../styles/CompanyPage.css";
import CompanyProfile from "../components/CompanyProfile";
import StartTest from "../components/StartTest";
import QuestionPage from "../components/QuestionPage";

const CompanyPage = () => {
  return (
    <div className="company-page">
      <SideNavbar />
      <QuestionPage />
    </div>
  );
};

export default CompanyPage;
