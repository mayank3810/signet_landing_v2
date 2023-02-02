import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Features() {
  const [containerRef, inContainerView] = useInView({ threshold: 0.2 });

  const [init, setInit] = useState(false);
  useEffect(() => {
    if (!init && inContainerView) {
      setInit(true);
    }
  }, [inContainerView]);

  return (
    <section
      ref={containerRef}
      id="features-2"
      className="wide-60 features-section division"
    >
      <div className="container">
        {/* FEATURES-2 WRAPPER */}
        <div className="fbox-2-wrapper text-center">
          <div className="row row-cols-1 row-cols-md-3">
            {/* FEATURE BOX #1 */}
            <div className="col">
              <div
                className={
                  init
                    ? "fbox-2 mb-40 animate__animated animate__fadeInUp"
                    : "fbox-2 mb-40 animate__animated"
                }
                style={{ animationDuration: "1.75s" }}
              >
                {/* Icon */}
                <div className="fbox-ico-center ico-65 shape-ico dark-color">
                  <img
                    className="ico-bkg"
                    src="/images/ico-bkg.png"
                    alt="ico-bkg"
                  />
                  <span>
                    <img
                      src="/images/icons8-blockchain-technology-80.png"
                      alt="ico-bkg"
                    />
                  </span>
                </div>
                {/* Text */}
                <div className="fbox-txt-center">
                  {/* Title */}
                  <h5 className="h5-md">Powered by Blockchain</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Signet Tags utilizes the full potential of blockchain
                    technology to create unique, uncloneable & verifiable tags
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURE BOX #2 */}
            <div className="col">
              <div
                className={
                  init
                    ? "fbox-2 mb-40 animate__animated animate__fadeInUp"
                    : "fbox-2 mb-40 animate__animated"
                }
                style={{ animationDuration: "1.75s" }}
              >
                {/* Icon */}
                <div className="fbox-ico-center ico-65 shape-ico dark-color">
                  <img
                    className="ico-bkg"
                    src="/images/ico-bkg.png"
                    alt="ico-bkg"
                  />
                   <span>
                    <img
                      src="/images/icons8-clone-64.png"
                      alt="ico-bkg"
                    />
                  </span>
                </div>
                {/* Text */}
                <div className="fbox-txt-center">
                  {/* Title */}
                  <h5 className="h5-md">Clone Resistant</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Signet Tags uses secure, unclonable NFC tags which ensure
                    physical product authentication & security.
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURE BOX #3 */}
            <div className="col">
              <div
                className={
                  init
                    ? "fbox-2 mb-40 animate__animated animate__fadeInUp"
                    : "fbox-2 mb-40 animate__animated"
                }
                style={{ animationDuration: "1.75s" }}
              >
                {/* Icon */}
                <div className="fbox-ico-center ico-65 shape-ico dark-color">
                  <img
                    className="ico-bkg"
                    src="/images/ico-bkg.png"
                    alt="ico-bkg"
                  />
                  <span>
                    <img
                      src="/images/without-app.png"
                      alt="ico-bkg"
                    />
                  </span>
                </div>
                {/* Text */}
                <div className="fbox-txt-center">
                  {/* Title */}
                  <h5 className="h5-md">Works without App</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Signet authentication doesnot require users to download any
                    app and works directly on tapping the tag.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* END FEATURES-2 WRAPPER */}
      </div>{" "}
      {/* End container */}
    </section>
  );
}

export default Features;
