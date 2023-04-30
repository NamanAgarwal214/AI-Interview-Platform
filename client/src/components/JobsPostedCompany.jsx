import React, { useEffect, useState } from "react";
import axios from "axios";
import JobsTable from "./JobsTable";

const JobsPostedCompany = () => {
  const [view, setView] = useState({ type: "jobs" });
  // useEffect(() => {
  //   const token = JSON.parse(localStorage.getItem("adminToken"));
  //   axios
  //     .get("/admin/companies", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setCompanies(res.data.data);
  //     });
  // }, []);

  return view?.type === "jobs" ? (
    <JobsTable setView={setView} />
  ) : (
    view?.type === "applicants" && <div>JobsPostedCompany</div>
  );
};

export default JobsPostedCompany;
