import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { toast } from "react-toastify";
import "../styles/TablePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
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
          selector: (row) =>
            row.isVerified ? (
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "#2ac11f", width: "30px", height: "30px" }}
              />
            ) : (
              <button
                className="verify-button"
                onClick={() => {
                  verifyHandler(row?._id);
                }}
              >
                <div> Verify</div>
              </button>
            ),
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
            <button
              className="jobs-button"
              onClick={() => {
                setView("applicants");
                setApplicants(row?.applicants);
              }}
            >
              <div> Applicants</div>
            </button>
          ),
        },
      ]);
      setRowData(jobs);
    } else {
      setColumns([
        {
          name: "Applicant Name",
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
      ]);
      setRowData(applicants);
    }
  }, [view, data, jobs]);
  const verifyHandler = async (id) => {
    const token = JSON.parse(localStorage.getItem("adminToken"));
    try {
      const response = await axios.patch(
        `/admin/verifyCompany?id=${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Company Verified!");
      window.location.reload();
    } catch (error) {
      toast.error(error.message);
    }
  };
  console.log(columns, rowdata, data, "Comp");
  return (
    <div className="table-page">
      <div className="table-box">
        <div className="table-heading">
          <div className="table-heading-left">
            <div className="heading">
              {view === "companies"
                ? "Companies"
                : view === "jobs"
                ? "Jobs"
                : "Applicants"}
            </div>
            <div className="table-subtext">
              {view === "companies"
                ? "These are the companies which have registered."
                : view === "jobs"
                ? "This is the job list."
                : "This is the applicants list."}
            </div>
          </div>

          {view !== "companies" && (
            <button
              onClick={() => {
                setView((prev) => (prev === "jobs" ? "companies" : "jobs"));
              }}
              className="back-button"
            >
              <div>back</div>
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
