import React from "react";
import "../styles/LoginNew.css";

const LoginPage = () => {
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
              Login with your company to have a look to your dashboard.
            </div>
          </div>
          <div className="login-form-box">
            <div className="login-details">
              <div className="input-box">
                <div className="field-label"> Email </div>
                <input
                  type="text"
                  className="field-input"
                  name="name"
                  placeholder="Email"
                />
              </div>
              <div className="input-box">
                <div className="field-label"> Password </div>
                <input
                  type="text"
                  className="field-input"
                  name="name"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="login-footer">
              <div className="login-button">
                <button className="button">Login</button>
              </div>
              <div className="sign-up-message">
                <div className="msg-left"> Don't have an account yet?</div>
                <div className="sign-up"> Sign Up </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
