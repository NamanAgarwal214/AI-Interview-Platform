import React from "react";
import "../styles/Sample.css";
import SideNavbar from "../components/SideNavbar";
import StartTest from "../components/StartTest";
import QuestionPage from "../components/QuestionPage";
import Sample from "../components/Sample";

const SamplePage = () => {
  return (
    <div className="sample-page">
      <SideNavbar person={"applicant"} />
      <QuestionPage />
      {/* <Sample /> */}
    </div>
  );
};

export default SamplePage;
