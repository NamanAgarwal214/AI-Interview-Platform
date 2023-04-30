import React, { useEffect, useState } from "react";
import axios from "axios";
import JobsTable from "./JobsTable";
import ApplicantsTableCompany from "./ApplicantsTableCompany";
import QuestionPage from "./QuestionPage";
import CandidateResponse from "./CandidateResponse";

const JobsPostedCompany = () => {
  const [view, setView] = useState({ type: "jobs" });
  const [report, setReport] = useState();
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
  useEffect(() => {
    if (view?.type === "applicants" && view?.id) {
      const token = localStorage.getItem("companyToken");
      axios
        .post(
          "/company/report",
          {
            job: view?.id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setReport(res.data.data);
        });
    }
  }, [view?.id]);

  return view?.type === "jobs" ? (
    <JobsTable setView={setView} />
  ) : view?.type === "applicants" ? (
    <ApplicantsTableCompany
      view={view}
      setView={setView}
      report={report}
      setReport={setReport}
    />
  ) : (
    <CandidateResponse report={report} view={view} />
  );
};

export default JobsPostedCompany;
