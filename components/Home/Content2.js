import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Content2() {
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
                src="/images/img-09.png"
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
              <h2 className="h2-xs">Share files, media, and locations</h2>
              {/* Text */}
              <p className="p-lg">
                Quaerat sodales sapien euismod blandit purus a purus ipsum
                primis in cubilia laoreet augue luctus magna dolor luctus and
                egestas sapien egestas vitae nemo volute
              </p>
              {/* Text */}
              <p className="p-lg">
                Quaerat sodales sapien euismod blandit at vitae ipsum primis
                undo and cubilia laoreet augue and luctus magna dolor luctus at
                egestas sapien vitae nemo egestas volute and turpis dolores
                aliquam quaerat sodales a sapien
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
