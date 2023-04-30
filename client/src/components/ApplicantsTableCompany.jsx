import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { toast } from "react-toastify";
import "../styles/TablePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const ApplicantsTableCompany = ({ view, setView, report, setReport }) => {
  const [columns, setColumns] = useState();
  const [rowData, setRowData] = useState();
  console.log(report, "report");
  useEffect(() => {
    console.log(report, "report22");
    if (report) {
      setRowData(() => {
        const data = [];
        report.forEach((i) => {
          i?.applicant !== null && data.push(i?.applicant);
        });
        return data;
      });
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
        {
          name: "Action",
          cell: (row) => (
            <button
              className="jobs-button"
              onClick={() => {
                setView({ type: "responses", id: row._id });
              }}
            >
              <div> Responses</div>
            </button>
          ),
        },
      ]);
    }
  }, [report]);
  console.log(rowData, "Rowdata");
  return (
    <div className="table-page">
      <div className="table-box">
        <div className="table-heading">
          <div className="table-heading-left">
            <div className="heading">Applicants</div>
            <div className="table-subtext">This is the list of applicants.</div>
          </div>
          <button
            onClick={() => {
              setView({ type: "jobs" });
            }}
            className="back-button"
          >
            <div>back</div>
          </button>
        </div>
        <div className="table">
          <DataTable
            columns={columns}
            data={rowData}
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

export default ApplicantsTableCompany;
