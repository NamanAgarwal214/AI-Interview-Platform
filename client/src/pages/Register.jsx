import React from "react";
import CompanyRegister from "../components/CompanyRegister";
import { useParams } from "react-router-dom";
import AdminRegister from "../components/AdminRegister";

const Register = () => {
  const { whoIsIt } = useParams();
  console.log(whoIsIt, "WHi");
  return (
    <>
      {whoIsIt === "company" ? (
        <CompanyRegister whoIsIt={whoIsIt} />
      ) : (
        <AdminRegister whoIsIt={whoIsIt} />
      )}
    </>
  );
};

export default Register;
