import React, { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const ScreenRecording = ({
  screen,
  audio,
  video,
  downloadRecordingPath,
  downloadRecordingType,
  emailToSupport,
}) => {
  const [recordingNumber, setRecordingNumber] = useState(0);
  const RecordView = () => {
    const {
      status,
      startRecording: startRecord,
      stopRecording: stopRecord,
      mediaBlobUrl,
    } = useReactMediaRecorder({ screen, audio, video });
    const startRecording = () => {
      return startRecord();
    };
    const stopRecording = () => {
      const currentTimeSatmp = new Date().getTime();
      setRecordingNumber(currentTimeSatmp);
      return stopRecord();
    };
    const viewRecording = () => {
      window.open(mediaBlobUrl, "_blank").focus();
    };

    return (
      <div>
        <div span="12" style={{ lineHeight: "24px" }}>
          {status && status !== "stopped" && (
            <h3>Screen Recording Status: {status && status.toUpperCase()}</h3>
          )}
          {status && status === "recording" && (
            <div
              className="screen-recording-badge"
              color="#faad14"
              status="processing"
              offset={[2, 0]}
              style={{
                marginLeft: "5px",
              }}
            />
          )}
        </div>
        <div span="12" style={{ textAlign: "right" }}>
          {status && status !== "recording" && (
            <button
              size="small"
              onClick={startRecording}
              type="primary"
              icon="play-circle"
              className="margin-left-sm"
              ghost
            >
              {mediaBlobUrl ? "Record again" : "Record your Problem"}
            </button>
          )}
          {status && status === "recording" && (
            <button
              size="small"
              onClick={stopRecording}
              type="danger"
              icon="stop"
              className="margin-left-sm"
              ghost
            >
              Stop Recording
            </button>
          )}
          {mediaBlobUrl && status && status === "stopped" && (
            <button
              size="small"
              onClick={viewRecording}
              type="primary"
              icon="picture"
              className="viewRecording margin-left-sm"
            >
              View
            </button>
          )}
        </div>
      </div>
    );
  };
  return (
    <div className="Scren-Record-Wrapper" style={{ padding: "5px 20px" }}>
      {RecordView()}
    </div>
  );
};
export default ScreenRecording;
