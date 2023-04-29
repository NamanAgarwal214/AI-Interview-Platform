import React from "react";
import "../styles/Sample.css";
import SideNavbar from "../components/SideNavbar";
import StartTest from "../components/StartTest";

const SamplePage = () => {
  return (
    <div className="sample-page">
      <SideNavbar />
      <StartTest />
    </div>
  );
};

export default SamplePage;
