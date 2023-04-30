import React from "react";
import { useRecordWebcam } from "react-record-webcam";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const Record = () => {
  const recordWebcam = useRecordWebcam({
    fileName: "test",
    fileType: "video/mp4",
    width: 600,
    height: 800,
    disableLogs: true,
  });

  const handle = useFullScreenHandle();

  //   useEffect(() => {
  //     if (!handle.active) {
  //       recordWebcam.stop();
  //     }
  //   }, []);

  const getRecordingFile = async () => {
    const blob = await recordWebcam.getRecording();
    console.log({ blob });

    const newFile = new File([blob], "video-title.mp4", {
      type: "video/mp4",
    });
    const reader = new FileReader(newFile);
    reader.readAsDataURL(newFile);
    reader.onloadend = () => {
      if (reader.readyState == 2) {
        const dataURL = reader.result;
        console.log(dataURL);
      }
      // use the data URL to display or upload the video
    };

    // const reader = new FileReader();
    // reader.readAsDataURL(blob);
    // reader.onloadend = () => {
    //   const dataURL = reader.result;
    //   console.log(dataURL);
    //   // use the data URL to display or upload the video
    // };
  };

  return (
    <div>
      <FullScreen handle={handle}>
        <div>
          <div>
            <button
              disabled={
                recordWebcam.status === "OPEN" ||
                recordWebcam.status === "RECORDING" ||
                recordWebcam.status === "PREVIEW"
              }
              onClick={() => {
                handle.enter();
                recordWebcam.open();
              }}
            >
              Open camera
            </button>

            <button
              disabled={recordWebcam.status === "CLOSED"}
              onClick={recordWebcam.close}
            >
              Close camera
            </button>
            <button
              disabled={
                recordWebcam.status === "CLOSED" ||
                recordWebcam.status === "RECORDING" ||
                recordWebcam.status === "PREVIEW"
              }
              onClick={recordWebcam.start}
            >
              Start recording
            </button>
            <button
              disabled={recordWebcam.status !== "RECORDING"}
              onClick={() => {
                recordWebcam.stop();
                handle.exit();
              }}
            >
              Stop recording
            </button>
            <button
              disabled={recordWebcam.status !== "PREVIEW"}
              onClick={recordWebcam.retake}
            >
              Retake
            </button>
            <button
              disabled={recordWebcam.status !== "PREVIEW"}
              onClick={recordWebcam.download}
            >
              Download
            </button>
            <button
              disabled={recordWebcam.status !== "PREVIEW"}
              onClick={getRecordingFile}
            >
              Get recording
            </button>
          </div>
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
          <video
            ref={recordWebcam.previewRef}
            style={{
              display: `${
                recordWebcam.status === "PREVIEW" ? "block" : "none"
              }`,
            }}
            autoPlay
            loop
            muted={recordWebcam.status !== "PREVIEW"}
          />
        </div>
      </FullScreen>
    </div>
  );
};

export default Record;
