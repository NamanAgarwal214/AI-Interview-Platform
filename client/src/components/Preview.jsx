import React from "react";
import Navbar from "./Navbar";

const Preview = ({ formData, logo, certificate, prevStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
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
