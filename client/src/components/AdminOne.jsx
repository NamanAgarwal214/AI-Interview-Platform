import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminOne = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      toast.info("Please fill out all fields");
    } else {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);

      axios
        .post("/admin/register", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.status === 200) {
            toast.success("Admin registered successfully");
            setFormData({ email: "", password: "" });
            localStorage.setItem("adminToken", JSON.stringify(res.data.token));
            <Navigate to={"/admin/dashboard"} />;
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  return (
    <div className="company-register-info-side">
      <div className="company-register-info-box">
        <div className="company-register-info-icon">
          {/* <FontAwesomeIcon icon={faCaretUp} size="3x" /> */}
        </div>
        <div className="company-register-info">
          <div className="company-step-info">
            <div className="company-step-name"> Admin Information</div>
            <div className="company-step-description">
              {" "}
              Enter the admin information to get familiar with you.{" "}
            </div>
          </div>
          <div className="company-step-input">
            <div className="company-step-input-box">
              <div className="field-label"> Email </div>
              <input
                type="email"
                className="field-input"
                name="email"
                value={formData.email}
                placeholder="Email address"
                onChange={changeHandler}
              />
            </div>
            <div className="company-step-input-box">
              <div className="field-label"> Password </div>
              <input
                type="password"
                className="field-input"
                name="password"
                value={formData.password}
                placeholder="Create a password"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="buttons">
            <button className="next-button" type="next" onClick={handleSubmit}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOne;
