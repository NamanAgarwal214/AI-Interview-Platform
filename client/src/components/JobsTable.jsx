import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";

import "../styles/TablePage.css";

const JobsTable = ({ setView }) => {
  const [columns, setColumns] = useState();
  const [rowdata, setRowData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
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
              setView({ type: "applicants", id: row._id });
            }}
          >
            <div> Applicants</div>
          </button>
        ),
      },
    ]);
    setRowData(JSON.parse(localStorage.getItem("company")).jobs);
  }, []);

  console.log(columns, rowdata, "Comp");
  return (
    <div className="table-page">
      <div className="table-box">
        <div className="table-heading">
          <div className="table-heading-left">
            <div className="heading">Jobs</div>
            <div className="table-subtext">This is the job list.</div>
          </div>
          <button
            onClick={() => {
              navigate("/addJob");
            }}
            className="back-button"
          >
            <div>Create Job</div>
          </button>
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

export default JobsTable;
