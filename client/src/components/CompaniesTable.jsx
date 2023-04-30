import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "../styles/TablePage.css";
const CompaniesTable = ({ data, view, setView }) => {
  const [columns, setColumns] = useState();
  const [rowdata, setRowData] = useState();
  const [jobs, setJobs] = useState([]);
  const [applicants, setApplicants] = useState([]);
  useEffect(() => {
    if (view === "companies") {
      setColumns([
        {
          name: "Company Logo",
          selector: (row) => (
            <img width={50} height={50} src={row.companyLogo} alt={"Logo"} />
          ),
        },
        {
          name: "Company name",
          selector: (row) => row.name,
        },
        {
          name: "Email",
          selector: (row) => row.email,
        },
        {
          name: "Address",
          selector: (row) => row.address,
        },
        {
          name: "Verified",
          selector: (row) => (row.isVerified ? "true" : "false"),
        },
        {
          name: "Action",
          cell: (row) => (
            <button
              className="jobs-button"
              onClick={() => {
                setView("jobs");
                setJobs(row?.jobs);
              }}
            >
              <div> Jobs</div>
            </button>
          ),
        },
      ]);
      setRowData(data);
    } else if (view === "jobs") {
      setColumns([
        {
          name: "Job title",
          selector: (row) => row.title,
        },
        {
          name: "Description",
          selector: (row) => row.description,
        },
        {
          name: "Duration",
          selector: (row) => row.duration,
        },
        {
          name: "Action",
          cell: (row) => (
            <button className="jobs-button" onClick={() => {}}>
              <div> Applicants</div>
            </button>
          ),
        },
      ]);
      setRowData(jobs);
    }
  }, [view, data, jobs]);
  // const handleCompanyClick = (row) => {
  //   setColumns([
  //     {
  //       name: "Job title",
  //       selector: (row) => row.title,
  //     },
  //     {
  //       name: "Description",
  //       selector: (row) => row.description,
  //     },
  //     {
  //       name: "Duration",
  //       selector: (row) => row.duration,
  //     },
  //     {
  //       name: "Action",
  //       cell: (row) => (
  //         <button className="jobs-button" onClick={() => {}}>
  //           <div> Applicants</div>
  //         </button>
  //       ),
  //     },
  //   ]);
  //   setRowData(row?.jobs);
  //   setJobs(row?.jobs);
  // };
  console.log(columns, rowdata, data, "Comp");
  return (
    <div className="table-page">
      <div className="table-box">
        <div className="table-heading">
          <div className="heading">Companies</div>
          <div className="table-subtext">
            These are the companies which have registered.
          </div>
          {view !== "companies" && (
            <button
              onClick={() => {
                setView((prev) => (prev === "jobs" ? "companies" : "jobs"));
              }}
            >
              back
            </button>
          )}
        </div>
        <div className="table">
          <DataTable
            columns={columns}
            data={rowdata}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="90%"
            highlightOnHover
          />
        </div>
      </div>
    </div>
  );
};

export default CompaniesTable;
