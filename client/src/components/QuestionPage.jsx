import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/QuestionPage.css";
import { useRecordWebcam } from "react-record-webcam";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import SideNavbar from "./SideNavbar";

const QuestionPage = () => {
  const { state } = useLocation();

  const [url, setUrl] = useState("");

  const [active, setActive] = useState(0);
  const [next, setNext] = useState(false);

  const navigate = useNavigate();

  const handle = useFullScreenHandle();
  const recordWebcam = useRecordWebcam({
    fileName: "test",
    mimeType: "video/mp4",
    disableLogs: true,
  });

  const submitHandler = async () => {
    const blob = await recordWebcam.getRecording();
    console.log(blob);
    const newFile = new File([blob], "video-title.mp4", {
      type: "video/mp4",
    });
    let dataURL = "";
    const reader = new FileReader(newFile);
    reader.readAsDataURL(newFile);
    reader.onloadend = () => {
      if (reader.readyState == 2) {
        dataURL = reader.result;
        console.log(dataURL);
        setUrl(reader.result);
      }
      // use the data URL to display or upload the video
    };
    // const reader = new FileReader();
    // reader.readAsDataURL(blob);
    // reader.onloadend = () => {
    //   const dataURL = reader.result;
    //   console.log();
    //   setUrl(dataURL);
    // };

    const token = JSON.parse(localStorage.getItem("applicantToken"));
    console.log(url);
    // console.log(url, state._id, state.questions[active]._id, blob.type);
    axios
      .post(
        "/applicant/submitVideo",
        {
          solutionVideo: url,
          solution: state._id,
          question: state.questions[active]._id,
          file_type: "video/mp4",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  };

  const evaluateHander = async () => {
    setActive(active + 1);
    recordWebcam.status = "CLOSED";
    axios
      .post("/applicant/evaluateScore", {
        solution: state._id,
        question: state.questions[active]._id,
      })
      .then((evalRes) => {
        if (active === state.questions.length - 1)
          navigate("/applicant/dashboard", { state: { submit: true } });
        console.log(evalRes);
      });
  };

  useEffect(() => {
    if (!handle.active) {
      recordWebcam.stop();
    }
  }, [handle.active]);

  return (
    <div className="question-page">
      <div className="scroll-container">
        <div className="question-page-left">
          <div className="question-page-header">
            <div className="question-icon">
              <img src="/images/question-page.png" alt="" />
            </div>
            <div className="question-heading-box">
              <div className="question-heading">Questions</div>
              <div className="no-of-questions">{state.questions.length}</div>
            </div>
            <div className="question-subtext">
              These are the questions corresponding to the job you have applied
              for, answer them one by one.{" "}
            </div>
          </div>
          <div className="question-card">
            <div className="question-card-header">
              <div className="asked-from-box">
                <div className="asked-from-heading">Asked for:</div>
                <div className="role">SDE</div>
              </div>
              <div className="video-duration-box">
                <div className="video-duration-heading">Duration(min):</div>
                <div className="video-duration">30</div>
              </div>
            </div>
            <div className="question">
              <div className="question-no">{active + 1}</div>
              <div className="question-statement">
                {state.questions[active].question}
              </div>
            </div>
          </div>
          <FullScreen handle={handle}>
            <video
              ref={recordWebcam.webcamRef}
              style={{
                display: `${
                  recordWebcam.status === "OPEN" ||
                  recordWebcam.status === "RECORDING"
                    ? "block"
                    : "none"
                }`,
                width: "100vw",
                height: "90vh",
              }}
              autoPlay
              muted
            />
            {handle.active && (
              <>
                <button
                  disabled={
                    recordWebcam.status === "CLOSED" ||
                    recordWebcam.status === "RECORDING" ||
                    recordWebcam.status === "PREVIEW"
                  }
                  onClick={recordWebcam.start}
                >
                  start
                </button>
                <button
                  disabled={recordWebcam.status !== "RECORDING"}
                  onClick={handle.exit}
                >
                  Stop recording
                </button>
              </>
            )}
          </FullScreen>
          <video
            ref={recordWebcam.previewRef}
            style={{
              display: `${
                recordWebcam.status === "PREVIEW" ? "block" : "none"
              }`,
              width: "70%",
              margin: "2rem auto",
            }}
            autoPlay
            loop
            muted={recordWebcam.status !== "PREVIEW"}
          />
          <div className="question-buttons">
            <button
              className="button"
              onClick={() => {
                submitHandler();
                setNext(true);
              }}
            >
              Upload
            </button>
            <button
              className="button"
              onClick={() => {
                handle.enter();
                recordWebcam.open();
              }}
            >
              Attempt
            </button>
            {next && (
              <button
                className="button"
                onClick={() => {
                  evaluateHander();
                  setNext(false);
                }}
                // onClick={() => {
                //   setActive(active + 1);
                //   recordWebcam.status = "CLOSED";
                // }}
                style={{
                  display: `${
                    active === state.questions.length - 1 ? "none" : "initial"
                  }`,
                }}
              >
                {active === state.questions.length - 1 ? "Submit" : "Next"}
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="question-page-right">
        <div className="question-status-header">
          <div className="header-image">
            <img src="/images/question-status.png" alt="" />
          </div>
          <div className="status-heading">Questions status</div>
          <div className="attempted-info">
            <div className="info-box">
              <div className="box-label">Questions:</div>
              <div className="box-value">{state.questions.length}</div>
            </div>
            <div className="info-box">
              <div className="box-label">Attempted:</div>
              <div className="box-value">{active}</div>
            </div>
          </div>
        </div>
        <div className="question-status">
          {[...Array(active).keys()].map((i) => (
            <div className="each-question">
              <div className="question-info">
                <div className="question-number">Question {i + 1}</div>
                <div className="question-attempts">
                  Number of attempts left : 2
                </div>
              </div>
              <div className="q-icon">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2ac11f", width: "30px", height: "30px" }}
                />
              </div>
            </div>
          ))}
          {[...Array(state.questions.length - active).keys()].map((i) => (
            <div className="each-question">
              <div className="question-info">
                <div className="question-number">Question {1 + active + i}</div>
                <div className="question-attempts">
                  Number of attempts left : 3
                </div>
              </div>
              <div className="q-icon">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  style={{ color: "#ea1010", width: "30px", height: "30px" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
