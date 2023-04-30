import React, { useState } from "react";
import SideNavbar from "../components/SideNavbar";
import "../styles/CompanyPage.css";
import CompanyProfile from "../components/CompanyProfile";
import Companies from "../components/Companies";

const AdminPage = () => {
  const [activeState, setActiveState] = useState("companies");
  // person === "admin"
  //   ? "companies"
  //   : person === "company"
  //   ? "companyProfile"
  //   : "applicantProfile";
  return (
    <div className="company-page">
      <SideNavbar
        person={"admin"}
        activeState={activeState}
        setActiveState={setActiveState}
      />
      <Companies />
      {/* <CompanyProfile /> */}
    </div>
  );
};

export default AdminPage;
