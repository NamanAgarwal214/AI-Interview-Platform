import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginNew.css";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { whoIsIt } = useParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.info("Please fill out all fields");
    } else {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);
      try {
        setEmail("");
        setPassword("");
        axios
          .post(`/${whoIsIt}/login`, data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            if (res.data.token)
              localStorage.setItem(
                `${whoIsIt}Token`,
                JSON.stringify(res.data.token)
              );
            if (res.data.user)
              localStorage.setItem(`${whoIsIt}`, JSON.stringify(res.data.user));
            navigate(`/${whoIsIt}/dashboard`);
            toast.success("Logged in successfully");
          })
          .catch((err) => {
            toast.error(err.message);
          });
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-page-image">
        <img src="/images/login-image.jpg" alt="" />
      </div>
      <div className="login-page-right">
        <div className="login-box">
          <div className="logo-login"></div>
          <div className="gratitude">
            <div className="hello-msg">Hello Again!</div>
            <div className="gratitude-msg">
              {" "}
              Login your {whoIsIt} to have a look to your dashboard.
            </div>
          </div>
          <div className="login-form-box">
            <div className="login-details">
              <div className="input-box">
                <div className="field-label"> Email </div>
                <input
                  type="text"
                  className="field-input"
                  name="email"
                  value={email}
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-box">
                <div className="field-label"> Password </div>
                <input
                  type="password"
                  className="field-input"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="login-footer">
              <div className="login-button">
                <button className="button" onClick={handleSubmit}>
                  Login
                </button>
              </div>
              {(whoIsIt === "company" || whoIsIt === "applicant") && (
                <div className="sign-up-message">
                  <div className="msg-left"> Don't have an account yet?</div>
                  <Link
                    to={`/register/${whoIsIt}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="sign-up"> Sign Up </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
