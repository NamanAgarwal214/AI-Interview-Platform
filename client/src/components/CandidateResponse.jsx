import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/CandidateResponse.module.css";
import SideNavbar from "./SideNavbar";

function CandidateResponse({ report, view }) {
  console.log(view, report, "Heuyhbhbhb ");
  const [response, setResponse] = useState();
  // const [question, setQuestion] = useState("This is a good question");
  // const [videoUrl, setVideoUrl] = useState(
  //   "https://intellihire.s3.amazonaws.com//644d68c6aa16df1a586f2b4f/6448e1e4a2f56e7ab8f8cfbd/644cc57bf8cd533f393f1eb9?AWSAccessKeyId=AKIATEMK7QGX5ZX3MXF4&Expires=1683044763&Signature=KjmPxwHCPz7vLRVtzjy6HLb5tjg%3D"
  // );
  // const [text, setText] = useState(
  //   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam laudantium sed labore, culpa impedit reprehenderit odit soluta magni consequatur natus ipsum, eum quidem exercitationem dolorum aut corrupti! Accusamus eos ipsam nulla saepe culpa quasi repudiandae quaerat adipisci omnis. Nobis, saepe?"
  // );

  // const [candidateName, setcandidateName] = useState("Shivansh Joshi");
  // const [candidateRole, setcandidateRole] = useState("SDE Intern");
  // const [similarityScore, setsimilarityScore] = useState(0.823);
  useEffect(() => {
    if (view?.id && report) {
      const resp = report.filter(
        (i) => i?.applicant != null && i.applicant._id === view?.id
      );
      setResponse(resp[0]);
    }
  }, [view, report]);
  console.log(response, "resp2888888888");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "90vh",
        padding: "30px",
        width: "90%",
        overflowY: "scroll",
      }}
    >
      <div className={styles.Header}>
        <h1 className={styles.Title}>Interview Response</h1>
        <div className={styles.CandidateDetails}>
          <p className={styles.CandidateName}>{response?.applicant.name}</p>
        </div>
      </div>
      {response?.questions?.map((q, i) => {
        return (
          <div className={styles.questionpage}>
            <h2>
              Question {i + 1} (Similarity -{" "}
              {response?.solutionScore?.[i] ?? "Not Answered"})
            </h2>
            <h3>{q?.question}</h3>
            <div className={styles.videoresponse}>
              <video
                src={response?.solutionVideos?.[i] ?? "Not Answered"}
                controls
              />
            </div>
            <h2>Transcribed Text</h2>
            <div className={styles.text}>
              {response?.solutionTexts?.[i] ?? "Not Answered"}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CandidateResponse;
