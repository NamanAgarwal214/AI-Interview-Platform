import React from "react";
import "../styles/Sample.css";
import SideNavbar from "../components/SideNavbar";
import StartTest from "../components/StartTest";
import QuestionPage from "../components/QuestionPage";

const SamplePage = () => {
  return (
    <div className="sample-page">
      <SideNavbar person={"applicant"} />
      <QuestionPage />
    </div>
  );
};

export default SamplePage;
