import React, { useEffect, useState } from "react";
import VideoPopup from "../VideoPopup";

function Hero() {
  // const [containerRef, inContainerView] = useInView({ threshold: 0.1 });

  const [addclass, setAddClass] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAddClass(true);
    }, 300);
  }, []);

  return (
    <>
      {open && (
        <VideoPopup
          open={open}
          setOpen={setOpen}
          link={"https://www.youtube.com/embed/YQUjE2koNRI"}
        />
      )}

      <section id="hero-23" className="bg-scroll hero-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* HERO TEXT */}
            <div className="col-lg-6">
              <div
                className="hero-23-txt white-color wow fadeInRight"
                style={{ visibility: "visible", animationName: "fadeInRight" }}
              >
                {/* Title */}
                <h2 className="h2-sm">
                  Anti counterfeit,
                  <br />
                  Authenticity and <br />
                  Customer Engagment{" "}
                </h2>
                {/* Text */}
                <p className="p-xl">
                  Signet tags links your products with blockchain-proven
                  ownership. The blockchain solution to ensure authenticity and
                  increase customer engagement.
                </p>
                {/* Button */}
                <a href="#" className="btn btn-yellow tra-white-hover">
                  Try Signet for Free
                </a>
              </div>
            </div>{" "}
            {/* END HERO TEXT */}
            {/* HERO IMAGE */}
            <div className="col-lg-6">
              <div
                className="hero-23-img video-preview wow fadeInLeft"
                style={{ visibility: "visible", animationName: "fadeInLeft" }}
              >
                {/* Play Icon */}
                <a onClick={() => setOpen(!open)} className="video-popup1">
                  <div className="video-btn video-btn-xl bg-deepyellow ico-90">
                    <div className="video-block-wrapper">
                      <span className="flaticon-play-button" />
                    </div>
                  </div>
                </a>
                {/* Preview Image */}
                <img
                  className="img-fluid hero-23-img"
                  src="/images/proof_authenticity.jpeg"
                  alt="video-preview"
                />
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}

export default Hero;
