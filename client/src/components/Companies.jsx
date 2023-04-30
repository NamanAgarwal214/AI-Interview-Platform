import axios from "axios";
import React, { useEffect, useState } from "react";
import Jobs from "./Jobs";
import CompaniesTable from "./CompaniesTable";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [view, setView] = useState("companies");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("adminToken"));
    axios
      .get("/admin/companies", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setCompanies(res.data.data);
      });
  }, []);

  return (
    <>
      <CompaniesTable data={companies} view={view} setView={setView} />
      {/* {view === "jobs" && <JobsTableAdmin data={companies} />} */}
      {/* {view === "applicants" && <ApplicantsTable data={companies} />} */}
    </>
  );
};

export default Companies;
