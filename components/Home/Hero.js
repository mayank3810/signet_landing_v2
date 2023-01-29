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

      <section id="hero-20" className="bg-fixed hero-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* HERO TEXT */}
            <div className="col-md-8 col-lg-6">
              <div className="hero-20-txt white-color">
                {/* Title */}
                <h2 className="h2-md">
                  Protect yourself from counterfeits and fake products
                </h2>
                {/* Text */}
                <p className="p-xl">
                  Signet tags links your products with blockchain-proven
                  ownership. The blockchain solution to ensure authenticity and
                  increase customer engagement.
                </p>
                {/* Buttons Group */}
                <div className="btns-group">
                  <a
                    href="#cta-3"
                    className="btn btn-yellow tra-yellow-hover color-white mr-15"
                  >
                    Get Started
                  </a>
                  <a
                    onClick={() => setOpen(!open)}
                    className="video-popup2 btn btn-md btn-transparent ico-20 ico-left"
                  >
                    <span className="flaticon-play" /> See Signet in Action
                  </a>
                </div>
              </div>
            </div>{" "}
            {/* END HERO TEXT */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}

export default Hero;
