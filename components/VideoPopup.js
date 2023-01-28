import React from "react";

function VideoPopup({ open, setOpen, link }) {
  return (
    <>
      {open && (
        <>
          <div className="mfp-bg mfp-ready" />

          <div
            className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready animate__animated animate__fadeIn"
            tabIndex={-1}
            style={{ overflow: "hidden auto" }}
          >
            <div className="mfp-container mfp-s-ready mfp-iframe-holder">
              <div className="mfp-content">
                <div className="mfp-iframe-scaler">
                  <button
                    title="Close (Esc)"
                    type="button"
                    className="mfp-close"
                    onClick={() => setOpen(false)}
                  >
                    ×
                  </button>
                  <iframe
                    className="mfp-iframe"
                    src={link}
                    frameBorder={0}
                    allowFullScreen=""
                  />
                </div>
              </div>
              <div className="mfp-preloader">Loading...</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default VideoPopup;
