import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <Navbar />
      <LoginForm />
    </>
  );
};

export default Login;
