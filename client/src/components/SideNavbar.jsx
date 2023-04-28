import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "../styles/SideNavbar.css";
const SideNavbar = () => {
  const menuItemStyles = {
    root: {
      fontSize: "15px",
      fontWeight: 400,
      color: "#fff",
    },
    button: {
      // [`&.${menuClasses.disabled}`]: {
      //   color: themes[theme].menu.disabled.color,
      // },
      "&:hover": {
        backgroundColor: "rgb(33, 42, 62,0.1)",
        color: "black",
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };
  return (
    <Sidebar breakPoint="lg" backgroundColor="#212a3e">
      <div className="sidebar">
        <div className="sidebar-head">
          <div className="logo-navbar">Logo</div>
          <Menu menuItemStyles={menuItemStyles}>
            {/* <SubMenu label="Company">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu> */}
            <MenuItem> Company </MenuItem>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
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
