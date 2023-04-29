import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    <Navigate to={"/login/company"} replace />;
  }
  return children;
};

export default Protected;
