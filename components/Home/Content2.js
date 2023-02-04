import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Content2() {
  // const [containerRef, inContainerView] = useInView({ threshold: 0.2 });
  // const inContainerView = true;
  const [init, setInit] = useState(true);
  // useEffect(() => {
  //   if (!init && inContainerView) {
  //     setInit(true);
  //   }
  // }, [inContainerView]);

  return (
    <section
      // ref={containerRef}
      id="content-2"
      className="content-2 wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6">
            <div
              className={
                init
                  ? "rel img-block left-column animate__animated animate__slideInUp"
                  : "rel img-block left-column animate__animated"
              }
              style={{ animationDuration: "1.75s" }}
            >
              <img
                className="img-fluid"
                src="/images/scanning-theme.png"
                alt="content-image"
              />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6">
            <div
              className={
                init
                  ? "txt-block right-column animate__animated animate__slideInUp"
                  : "txt-block right-column animate__animated"
              }
              style={{ animationDuration: "1.75s" }}
            >
              {/* Title */}
              <h2 className="h2-xs">Proof of authenticity in seconds</h2>
              {/* Text */}
              <p className="p-lg">
                Signet tags with direct NFC connection provides an easy and
                quick way to check product authenticity and integrity.
                Interacting with the product directly grants access to its
                history, characteristics and sustainability certifications.
              </p>
              {/* Text */}
              <p className="p-lg">
                Our solution is faster and safer than any solution based on QR
                code or image recognition. No App download required.
              </p>
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
}

export default Content2;
