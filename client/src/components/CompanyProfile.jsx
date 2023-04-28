import React, { useRef } from "react";
import "../styles/CompanyProfile.css";
const CompanyProfile = () => {
  const imgRef = useRef(false);
  const certificateRef = useRef(false);

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
              <img src="" alt="" ref={imgRef} />
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
              name="email"
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
              <img src="" alt="" ref={certificateRef} />
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
        <button className="verification-button" type="verifybutton">
          <div>Verify</div>
        </button>
      </div>
    </div>
  );
};

export default CompanyProfile;
