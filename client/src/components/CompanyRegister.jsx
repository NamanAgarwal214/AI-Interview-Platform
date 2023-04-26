import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/Register.css";
import One from "./One";
import Two from "./Two";
import Final from "./Final";
import Preview from "./Preview";

const CompanyRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    address: "",
  });
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [country, setCountry] = useState();
  // const [address, setAddress] = useState();
  const [logo, setLogo] = useState("");
  const [logoPreview, setLogoPreview] = useState("");

  const [certificate, setCertificate] = useState("");
  const [certificatePreview, setCertificatePreview] = useState("");

  const [step, setstep] = useState(1);

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const changeHandler = (e) => {
    if (e.target.name === "logo") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          console.log(reader);
          setLogo(reader.result);
          setLogoPreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else if (e.target.name === "certificate") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setCertificate(reader.result);
          setCertificatePreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  switch (step) {
    case 1:
      return (
        <One
          nextStep={nextStep}
          formData={formData}
          changeHandler={changeHandler}
        />
      );
      break;
    case 2:
      return (
        <Two
          prevStep={prevStep}
          nextStep={nextStep}
          formData={formData}
          changeHandler={changeHandler}
        />
      );
      break;
    case 3:
      return (
        <Final
          prevStep={prevStep}
          logoPreview={logoPreview}
          certificatePreview={certificatePreview}
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
          formData={formData}
        />
      );
  }
};

export default CompanyRegister;
