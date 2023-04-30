import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
import "../styles/Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <div className="navbar__slogan">
          {/* <div className="navbar__slogan__logo">
            <img src="" alt="logo" />
          </div> */}
          <div className="navbar__slogan__name">IntelliHire</div>
        </div>
      </Link>
      <div className="navbar__links">
        <ul>
          <li>
            <Link smooth to="/">
              Home
            </Link>
          </li>
          {/* <li>
            <Link smooth to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link smooth to="/contact">
              Contact Us
            </Link>
          </li> */}
          <li>
            <Link
              onClick={(e) => {
                setDropdownActive((prev) => !prev);
              }}
            >
              Login
            </Link>
            <div className="dropdown">
              <div
                className={`${"dropDownMenu"} ${dropdownActive && "is-active"}`}
              >
                <button
                  className="dropdownBtn"
                  onClick={() => navigate("/login/company")}
                >
                  <div>Company</div>
                </button>
                <button
                  className="dropdownBtn"
                  onClick={() => navigate("/login/applicant")}
                >
                  <div>Applicant</div>
                </button>
                <button
                  className="dropdownBtn"
                  onClick={() => navigate("/login/admin")}
                >
                  <div>Admin</div>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div
        className="navbar__hamburger-menu"
        onClick={() => setShowMenu((value) => !value)}
      >
        <div className="navbar__hamburger-menu-container">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={`navbar__mobile-side-nav ${
          showMenu ? "navbar__mobile-side-nav--show" : ""
        }`}
      >
        <div
          className="navbar__mobile-side-nav__exit"
          onClick={() => setShowMenu(false)}
        >
          X
        </div>
        <div className="navbar__mobile-side-nav-container">
          <ul>
            <li>
              <Link smooth to="/" onClick={() => setShowMenu(!showMenu)}>
                Home
              </Link>
            </li>
            <li>
              <Link smooth to="/about" onClick={() => setShowMenu(!showMenu)}>
                About Us
              </Link>
            </li>
            <li>
              <Link smooth to="/contact" onClick={() => setShowMenu(!showMenu)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`navbar__shadow ${showMenu ? "navbar__shadow--show" : ""}`}
        onClick={() => setShowMenu(false)}
      ></div>
    </nav>
  );
};

export default Navbar;
