import React, { useState } from "react";
import JobPostLeft from "./JobPostLeft";
import JobPostRight from "./JobPostRight";
import "../styles/CreateJob.css";

const CreateJob = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="job-register-multistep">
      <JobPostLeft step={step} />
      <JobPostRight step={step} setStep={setStep} />
    </div>
  );
};

export default CreateJob;
