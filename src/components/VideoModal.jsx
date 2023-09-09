import React from "react";

const VideoModal = ({ isOpen, onClose }) => {
  return (
    <div className={`video-modal ${isOpen ? "open" : ""}`}>
      <div className="video-content">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=wFENndMUVIk"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default VideoModal;
