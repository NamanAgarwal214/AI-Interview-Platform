import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faAddressCard,
  faRightFromBracket,
  faUser,
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/SideNavbar.css";
const SideNavbar = ({ person }) => {
  const menuItemStyles = {
    root: {
      fontSize: "17px",
      fontWeight: 400,
      color: "#fff",
    },
    button: ({ active }) => {
      // [`&.${menuClasses.disabled}`]: {
      //   color: themes[theme].menu.disabled.color,
      // },
      return {
        margin: "4px 8px",
        borderRadius: "10px",
        fontWeight: active ? 500 : undefined,
        backgroundColor: active ? "#676AD8" : undefined,
        "&:hover": {
          backgroundColor: "#676AD8",
          borderRadius: "10px",
          color: "#fff",
          fontWeight: 500,
        },
      };
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };
  return (
    <Sidebar breakPoint="lg" backgroundColor="#3339CD">
      <div className="sidebar">
        <div className="sidebar-head">
          <div className="logo-navbar">Intellihire</div>
          <Menu menuItemStyles={menuItemStyles}>
            {/* <SubMenu label="Company">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu> */}
            {person === "admin" && (
              <MenuItem
                icon={
                  <FontAwesomeIcon
                    icon={faBuilding}
                    style={{ color: "#f7f9fc", width: "20px", height: "20px" }}
                  />
                }
              >
                {" "}
                Companies{" "}
              </MenuItem>
            )}
            {person === "company" && (
              <>
                <MenuItem
                  icon={
                    <FontAwesomeIcon
                      icon={faBuilding}
                      style={{
                        color: "#f7f9fc",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  }
                  active={true}
                >
                  {" "}
                  Company Profile{" "}
                </MenuItem>
                <MenuItem
                  icon={
                    <FontAwesomeIcon
                      icon={faAddressCard}
                      style={{
                        color: "#f7f9fc",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  }
                >
                  {" "}
                  Jobs Posted{" "}
                </MenuItem>
              </>
            )}
            {person === "applicant" && (
              <>
                <MenuItem
                  icon={
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{
                        color: "#f7f9fc",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  }
                >
                  {" "}
                  Applicant Profile{" "}
                </MenuItem>
                <MenuItem
                  icon={
                    <FontAwesomeIcon
                      icon={faSquarePollVertical}
                      style={{
                        color: "#f7f9fc",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  }
                >
                  {" "}
                  Results{" "}
                </MenuItem>
              </>
            )}

            <MenuItem
              icon={
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  style={{ color: "#f7f9fc", width: "20px", height: "20px" }}
                />
              }
            >
              {" "}
              Logout{" "}
            </MenuItem>
          </Menu>
        </div>
        <div className="sidebar-footer">
          <div className="about-company">
            <div className="company-logo">
              <img src="/images/google.png" alt="" />
            </div>
            <div className="company-info">
              <div className="company-name">Google</div>
              <div className="company-email">google.com</div>
            </div>
          </div>
        </div>
      </div>
      {/**
       *  You can add the content of the sidebar ex: menu, profile details, ...
       */}
      {/**
       *  You can add a footer for the sidebar ex: copyright
       */}
    </Sidebar>
  );
};

export default SideNavbar;
