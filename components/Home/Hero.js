import React, { useEffect, useState } from "react";

function Hero() {
  // const [containerRef, inContainerView] = useInView({ threshold: 0.1 });

  const [addclass, setAddClass] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAddClass(true);
    }, 300);
  }, []);

  return (
    <section id="hero-1" className="bg-scroll hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO TEXT */}
          <div className="col-md-7 col-lg-6">
            <div
              className="hero-1-txt white-color animate__animated animate__fadeInRight"
              style={
                addclass ? { visibility: "visible" } : { visibility: "hidden" }
              }
            >
              {/* Title */}
              <h2 className="h2-md">Authenticity and Customer Engagment</h2>
              {/* Text */}
              <p className="p-xl">
                Signet tags links your products with blockchain-proven
                ownership. The blockchain solution to ensure authenticity and
                increase customer engagement.
              </p>
              {/* Buttons Group */}
              <div className="btns-group mb-20">
                <a
                  href="#content-3"
                  className="btn btn-orange-red tra-white-hover mr-15"
                >
                  Schedule a Demo
                </a>
                <a
                  href="https://www.youtube.com/watch?v=YQUjE2koNRI"
                  className="video-popup2 btn btn-md btn-transparent ico-20 ico-left"
                >
                  <span className="flaticon-play" /> See Signet in Action
                </a>
              </div>
              {/* Advantages List */}
              <ul className="advantages">
                <li className="first-li">
                  <p>14 days free trial</p>
                </li>
                <li className="last-li">
                  <p>No credit card</p>
                </li>
              </ul>
            </div>
          </div>{" "}
          {/* END HERO TEXT */}
          {/* HERO IMAGE */}
          <div className="col-md-5 col-lg-6">
            <div
              className="hero-1-img animate__animated animate__fadeInLeft"
              style={
                addclass ? { visibility: "visible" } : { visibility: "hidden" }
              }
            >
              <img
                className="img-fluid"
                src="/images/hero-1-img.png"
                alt="hero-image"
              />
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
      {/* WAVE SHAPE BOTTOM */}
      <div className="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130">
          <path
            fill="#ffffff"
            fillOpacity={1}
            d="M0,64L120,80C240,96,480,128,720,128C960,128,1200,96,1320,80L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
