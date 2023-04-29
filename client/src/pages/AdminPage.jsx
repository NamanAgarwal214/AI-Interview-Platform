import React from "react";
import SideNavbar from "../components/SideNavbar";
import "../styles/CompanyPage.css";
import CompanyProfile from "../components/CompanyProfile";
import Companies from "../components/Companies";

const AdminPage = () => {
  return (
    <div className="company-page">
      <SideNavbar />
      <Companies />
      {/* <CompanyProfile /> */}
    </div>
  );
};

export default AdminPage;
