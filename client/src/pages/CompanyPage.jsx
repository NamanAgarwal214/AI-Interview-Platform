import React, { useEffect, useState } from "react";
import SideNavbar from "../components/SideNavbar";
import "../styles/CompanyPage.css";
import CompanyProfile from "../components/CompanyProfile";
import StartTest from "../components/StartTest";

const CompanyPage = () => {
  const [companyData, setCompanyData] = useState({
    name: "",
    email: "",
    address: "",
    isVerified: false,
    logo: "",
    certificate: "",
  });

  useEffect(() => {
    const company = JSON.parse(localStorage.getItem("company"));
    setCompanyData({
      name: company.name,
      email: company.email,
      address: company.address,
      isVerified: company.isVerified,
      logo: company.companyLogo,
      certificate: company.companyCertificate,
    });
  }, []);

  return (
    <div className="company-page">
      <SideNavbar />
      <CompanyProfile companyData={companyData} />
    </div>
  );
};

export default CompanyPage;
