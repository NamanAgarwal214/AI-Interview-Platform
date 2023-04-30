import React, { useState } from "react";
import "../styles/CompanyRegister.css";
import CompanyRegisterLeft from "./CompanyRegisterLeft";
import CompanyRegisterRight from "./CompanyRegisterRight";

const AdminRegister = ({ whoIsIt }) => {
  const [step, setStep] = useState(1);
  return (
    <div className="company-register-multistep">
      <CompanyRegisterLeft step={step} whoIsIt={whoIsIt} />
      <CompanyRegisterRight whoIsIt={whoIsIt} step={step} setStep={setStep} />
    </div>
  );
};

export default AdminRegister;
