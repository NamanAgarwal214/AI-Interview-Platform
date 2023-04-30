import React from "react";
import "../styles/CompaniesTablePage.css";
import SideNavbar from "../components/SideNavbar";
import CompaniesTable from "../components/CompaniesTable";
const CompaniesTablePage = () => {
  return (
    <div className="companies-table-page">
      <SideNavbar />
      <CompaniesTable />
    </div>
  );
};

export default CompaniesTablePage;
