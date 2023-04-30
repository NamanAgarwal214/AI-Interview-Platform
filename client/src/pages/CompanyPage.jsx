import React, { useEffect, useState } from "react";
import SideNavbar from "../components/SideNavbar";
import "../styles/CompanyPage.css";
import CompanyProfile from "../components/CompanyProfile";
// import StartTest from "../components/StartTest";
// import QuestionPage from "../components/QuestionPage";
import JobsPostedCompany from "../components/JobsPostedCompany";

const CompanyPage = () => {
  const [companyData, setCompanyData] = useState({
    name: "",
    email: "",
    address: "",
    isVerified: false,
    logo: "",
    certificate: "",
  });
  const [activeState, setActiveState] = useState("companyProfile");

  useEffect(() => {
    const company = JSON.parse(localStorage.getItem("company"));
    setCompanyData({
      name: company?.name,
      email: company?.email,
      address: company?.address,
      isVerified: company?.isVerified,
      logo: company?.companyLogo,
      certificate: company?.companyCertificate,
    });
  }, []);

  return (
    <div className="company-page">
      <SideNavbar
        person={"company"}
        activeState={activeState}
        setActiveState={setActiveState}
      />
      {activeState === "companyProfile" && (
        <CompanyProfile companyData={companyData} />
      )}
      {activeState === "jobsPosted" && <JobsPostedCompany />}
    </div>
  );
};

export default CompanyPage;
