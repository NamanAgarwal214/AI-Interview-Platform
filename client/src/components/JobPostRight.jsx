import React, { useState } from "react";
import JobFormOne from "./JobFormOne";
import JobFormTwo from "./JobFormTwo";
import * as XLSX from "xlsx";
import "../styles/CreateJob.css";

const JobPostRight = ({ step, setStep }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: 0,
  });

  const [applicants, setApplicants] = useState([]);
  const [questions, setQuestions] = useState([]);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const changeHandler = (e) => {
    if (e.target.files && e.target.name === "applicants") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        setApplicants(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    } else if (e.target.files && e.target.name === "questions") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        setQuestions(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    } else setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <JobFormOne
          nextStep={nextStep}
          formData={formData}
          changeHandler={changeHandler}
        />
      );
    case 2:
      return (
        <JobFormTwo
          prevStep={prevStep}
          formData={formData}
          applicants={applicants}
          questions={questions}
          changeHandler={changeHandler}
        />
      );
  }
};

export default JobPostRight;
