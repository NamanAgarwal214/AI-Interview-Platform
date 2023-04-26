import React, { useState, useEffect } from "react";
import "../styles/Login.css";
import { useParams } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { whoIsIt } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    // if whoIsIt is candidate - candidate axios req
    // if whoIsIt is company - company axios req
  };

  useEffect(() => {
    setFormData({
      email: email,
      password: password,
    });
  }, [email, password]);

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <p className="welcome-text">Signin</p>
          <form onSubmit={handleSubmit}>
            <div className="input-types">
              <div className="input-field">
                <img src={""} alt="email" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <img src={""} alt="password" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <button className="submit-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
