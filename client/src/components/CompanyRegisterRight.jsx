import React, { useState } from "react";
import "../styles/CompanyRegister.css";
import One from "./One";
import Two from "./Two";
import Final from "./Final";
import Preview from "./Preview";

const CompanyRegisterRight = ({ step, setStep }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    address: "",
  });

  const [logo, setLogo] = useState("");
  const [fileTypeLogo, setFileTypeLogo] = useState("");
  const [fileTypeCerti, setFileTypeCerti] = useState("");

  const [certificate, setCertificate] = useState("");

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const changeHandler = (e) => {
    if (e.target.name === "logo") {
      const reader = new FileReader();
      console.log(e.target.files[0]);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setLogo(reader.result);
        }
      };
      setFileTypeLogo(e.target.files[0].type);
      reader.readAsDataURL(e.target.files[0]);
    } else if (e.target.name === "certificate") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setCertificate(reader.result);
        }
      };
      setFileTypeCerti(e.target.files[0].type);
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  switch (step) {
    case 1:
      return (
        <One
          nextStep={nextStep}
          formData={formData}
          changeHandler={changeHandler}
        />
      );
    case 2:
      return (
        <Two
          prevStep={prevStep}
          nextStep={nextStep}
          formData={formData}
          changeHandler={changeHandler}
        />
      );
    case 3:
      return (
        <Final
          prevStep={prevStep}
          logo={logo}
          certificate={certificate}
          changeHandler={changeHandler}
          nextStep={nextStep}
          formData={formData}
        />
      );
    case 4:
      return (
        <Preview
          prevStep={prevStep}
          logo={logo}
          certificate={certificate}
          fileTypeLogo={fileTypeLogo}
          fileTypeCerti={fileTypeCerti}
          formData={formData}
        />
      );
  }
};

export default CompanyRegisterRight;
