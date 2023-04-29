import React, { useEffect, useRef, useState } from "react";
import "../styles/CompanyProfile.css";
import axios from "axios";

const CompanyProfile = ({ companyData }) => {
  const imgRef = useRef(false);
  const certificateRef = useRef(false);

  const verifyHandler = async () => {
    const token = localStorage.getItem("adminToken");
    try {
      const response = await axios.patch(
        "/admin/verifyCompany",
        {
          isVerified: true,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleImageChange = (e) => {
    const [file] = e.target.files;
    if (file) {
      // to update the image displayed in the modal
      imgRef.current.src = URL.createObjectURL(file);
    }
    e.target.value = null;
  };

  const handleCertificateChange = (e) => {
    const [file] = e.target.files;
    if (file) {
      // to update the image displayed in the modal
      certificateRef.current.src = URL.createObjectURL(file);
    }
    e.target.value = null;
  };

  return (
    <div className="visible-area">
      <div className="company-profile">
        <div className="heading-box">
          <div className="heading">Company profile</div>
          <div className="about-heading">
            Update your company photo and details here.
          </div>
        </div>
        <div className="divider"></div>
        <div className="field-box">
          <div className="field-left">
            <div className="field">Company Logo</div>
            <div className="field-detail">Update your company logo here.</div>
          </div>
          <div className="field-right">
            <div className="image">
              <img src={companyData.logo} alt="" ref={imgRef} />
              <input
                type="file"
                id="profile-picture"
                hidden
                onChange={handleImageChange}
              />
              <label className="fileLabel" htmlFor="profile-picture"></label>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="field-box">
          <div className="field-left">
            <div className="field">Company Name</div>
            <div className="field-detail">
              Update the name of your company here.
            </div>
          </div>
          <div className="field-right">
            <input
              type="text"
              className="field-input-profile"
              name="name"
              value={companyData.name}
              placeholder="Name of the company"
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className="field-box">
          <div className="field-left">
            <div className="field">Company Address</div>
            <div className="field-detail">
              Update the address of your company here.
            </div>
          </div>
          <div className="field-right">
            <input
              type="text"
              className="field-input-profile"
              name="address"
              value={companyData.address}
              placeholder="Address of the company"
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className="field-box">
          <div className="field-left">
            <div className="field">Company Email</div>
            <div className="field-detail">Enter the email of your company.</div>
          </div>
          <div className="field-right">
            <input
              type="text"
              className="field-input-profile"
              name="email"
              value={companyData.email}
              placeholder="Email of the company"
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className="field-box">
          <div className="field-left">
            <div className="field">Company Certificate</div>
            <div className="field-detail">
              Upload your certificate to proof the genuinity of the company.
            </div>
          </div>
          <div className="field-right">
            <div className="certificate-image">
              <img src={companyData.certificate} alt="" ref={certificateRef} />
              <input
                type="file"
                id="certificate"
                hidden
                onChange={handleCertificateChange}
              />
              <label className="fileLabelCerti" htmlFor="certificate"></label>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        {companyData.isVerified ? (
          <button className="verification-button" type="verifybutton">
            <div>Verified</div>
          </button>
        ) : (
          <button
            className="verification-button"
            type="verifybutton"
            onClick={verifyHandler}
          >
            <div>Verify</div>
          </button>
        )}
      </div>
    </div>
  );
};

export default CompanyProfile;
