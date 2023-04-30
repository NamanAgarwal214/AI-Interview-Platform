import React, { useState, useEffect } from 'react';
import styles from '../styles/CandidateResponse.module.css'

function CandidateResponse() {
  const [question, setQuestion] = useState('This is a good question');
  const [videoUrl, setVideoUrl] = useState('https://intellihire.s3.amazonaws.com//644d68c6aa16df1a586f2b4f/6448e1e4a2f56e7ab8f8cfbd/644cc57bf8cd533f393f1eb9?AWSAccessKeyId=AKIATEMK7QGX5ZX3MXF4&Expires=1683044763&Signature=KjmPxwHCPz7vLRVtzjy6HLb5tjg%3D');
  const [text, setText] = useState('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam laudantium sed labore, culpa impedit reprehenderit odit soluta magni consequatur natus ipsum, eum quidem exercitationem dolorum aut corrupti! Accusamus eos ipsam nulla saepe culpa quasi repudiandae quaerat adipisci omnis. Nobis, saepe?');


  return (
    <div className={styles.body}>
      <h1>{question}</h1>
      <video src={videoUrl} controls></video>
      <p>{text}</p>
    </div>
  );
}

export default CandidateResponse;
