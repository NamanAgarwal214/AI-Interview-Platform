import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/QuestionPage.css";
import { useRecordWebcam } from "react-record-webcam";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SideNavbar from "./SideNavbar";

const QuestionPage = () => {
  const { state } = useLocation();

  const [url, setUrl] = useState("");

  const handle = useFullScreenHandle();
  const recordWebcam = useRecordWebcam({
    fileName: "test",
    mimeType: "video/x-matroska;codecs=avc1",
    disableLogs: true,
  });

  const submitHandler = async () => {
    const blob = await recordWebcam.getRecording();
    console.log(blob);
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const dataURL = reader.result;
      setUrl(dataURL);
      console.log(dataURL);
      // use the data URL to display or upload the video
    };

    const token = JSON.parse(localStorage.getItem("applicantToken"));

    const data = new FormData();
    data.append("solutionVideo", url);
    data.append("solution", state._id);
    data.append("question", state.question);

    const res = await axios.post("/applicant/submitVideo", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const evalData = new FormData();
    evalData.append("solution", state._id);
    evalData.append("question", state.question);
    const evalRes = await axios.post("/applicant/evaluateScore", evalData);
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
              <div className="no-of-questions">{12}</div>
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
              <div className="question-no">1</div>
              <div className="question-statement">
                Where do you see yourself five years from now?bh bahb gabgb sgb
                shhs snhsb sb sb bs sbhbshbshbsh sb sb sbs bgsb gsb hjs jisbjh
                kbg b?hbhjb ghbgv gcdaszweaeas fgfhjgkjhfy thdtrcgh hbhmhv fcfcd
                fcvygbh bhhnn?
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
              display: `block`,
              width: "70%",
              margin: "2rem auto",
            }}
            autoPlay
            loop
            muted
          />
          <div className="question-buttons">
            <button className="button" onClick={submitHandler}>
              Upload
            </button>
            <button
              className="button"
              onClick={() => {
                handle.enter();
                recordWebcam.open();
              }}
            >
              Reattempt
            </button>
            <button className="button">Next</button>
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
              <div className="box-value">12</div>
            </div>
            <div className="info-box">
              <div className="box-label">Attempted:</div>
              <div className="box-value">4</div>
            </div>
          </div>
        </div>
        <div className="question-status">
          {[...Array(4).keys()].map((i) => (
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
          {[...Array(8).keys()].map((i) => (
            <div className="each-question">
              <div className="question-info">
                <div className="question-number">Question {i + 5}</div>
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
