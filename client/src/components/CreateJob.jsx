import React, { useEffect, useState } from "react";
import "../styles/Job.css";

const CreateJob = () => {
  const [jobData, setJobData] = useState();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(jobData);
  };

  useEffect(() => {
    setJobData({
      text,
      title,
      duration,
    });
  }, [title, text, duration]);

  return (
    <div className="job-registration">
      <h2 className="heading">Add Job</h2>
      <form
        onSubmit={(e) => {
          handleSubmit();
          e.preventDefault();
        }}
        className="registration-body"
      >
        <div className="job-registration-form">
          <div className="input-field">
            <img src={""} alt="title" />
            <input
              value={title}
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Title"
            />
          </div>
          <div className="input-field">
            <img src={""} alt="description" />
            <textarea
              placeholder="Write detailed description about the Job"
              onChange={(e) => {
                setText(e.target.value);
              }}
              value={text}
            />
          </div>

          <div className="input-field">
            <img src={""} alt="duration" />
            <input
              value={duration}
              type="number"
              onChange={(e) => {
                setDuration(e.target.value);
              }}
              placeholder="Duration"
            />
          </div>
        </div>
        <div className="btn-field">
          <button className="register-button" type="submit">
            Add Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateJob;
