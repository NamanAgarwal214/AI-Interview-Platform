import React from "react";
import SideNavbar from "../components/SideNavbar";
import "../styles/CompanyPage.css";
import CompanyProfile from "../components/CompanyProfile";

const AdminPage = () => {
  return (
    <div className="company-page">
      <SideNavbar />
      <CompanyProfile />
    </div>
  );
};

export default AdminPage;
