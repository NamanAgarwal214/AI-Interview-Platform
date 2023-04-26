import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-form">
        <p className="welcome-text">Welcome to IntelliHire</p>
        <p className="signin-text">Signin as a</p>
        <div className="user-types">
          <Link to="/login/candidate">
            <div className="user-type">
              <img alt="candidate" src={""} />
              Candidate
            </div>
          </Link>
          <Link to="/login/company">
            <div className="user-type">
              <img alt="company" src={""} />
              Company
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
