import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const Preview = ({
  formData,
  logo,
  certificate,
  prevStep,
  fileTypeLogo,
  fileTypeCerti,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await axios();
    console.log(fileTypeLogo);
    const { name, email, password, address, country } = formData;
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("address", address);
    data.append("password", password);
    data.append("country", country);
    data.append("logo", logo);
    data.append("certificate", certificate);
    data.append("file_type_logo", fileTypeLogo);
    data.append("file_type_certi", fileTypeCerti);

    axios
      .post("/company/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        // <Navigate to={"/verify"} />;
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div>
      <Navbar />
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Country</th>
          <th>Logo</th>
          <th>Certificate</th>
        </tr>
        <tr>
          <td>{formData.name}</td>
          <td>{formData.email}</td>
          <td>{formData.address}</td>
          <td>{formData.country}</td>
          <td>
            <img src={logo} alt="logo" />
          </td>
          <td>
            <img src={certificate} alt="certificate" />
          </td>
        </tr>
      </table>
      <form
        className="registration-body"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="btn-field">
          <button className="register-button" onClick={prevStep}>
            Edit
          </button>
        </div>
        <div className="btn-field">
          <button className="register-button" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Preview;
