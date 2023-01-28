import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Content4() {
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
      id="content-3"
      className="content-3 wide-60 content-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md">Security, Simplicity, Easiness</h2>
              {/* Text */}
              <p className="p-xl">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis a libero tempus, blandit and cursus varius and magnis
                sapien
              </p>
            </div>
          </div>
        </div>
        {/* TOP ROW */}
        <div className="top-row pb-50">
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
                  src="/images/img-05.png"
                  alt="content-image"
                />
              </div>
            </div>
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div
                className={
                  init
                    ? "txt-block right-column left-column animate__animated animate__slideInUp"
                    : "txt-block right-column left-column animate__animated"
                }
                style={{ animationDuration: "1.75s" }}
              >
                {/* TEXT BOX */}
                <div className="txt-box mb-20">
                  {/* Title */}
                  <h5 className="h5-lg">Chat with your friends easily</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Quaerat sodales sapien euismod blandit at vitae ipsum primis
                    undo and cubilia laoreet augue and luctus magna dolor luctus
                    at egestas sapien vitae nemo egestas volute and turpis
                    dolores aliquam quaerat sodales a sapien
                  </p>
                </div>
                {/* TEXT BOX */}
                <div className="txt-box">
                  {/* Title */}
                  <h5 className="h5-lg">Advanced performance made easy</h5>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Fringilla risus, luctus mauris auctor euismod an iaculis
                        luctus magna purus pretium ligula purus and quaerat
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Nemo ipsam egestas volute turpis dolores undo ultrice
                        aliquam quaerat at sodales sapien purus
                      </p>
                    </li>
                  </ul>
                </div>{" "}
                {/* END TEXT BOX */}
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
          </div>
        </div>{" "}
        {/* END TOP ROW */}
        {/* BOTTOM ROW */}
        <div className="bottom-row">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6 order-last order-md-2">
              <div className="txt-block left-column wow fadeInRight">
                {/* Title */}
                <h2 className="h2-xs">Work smarter with powerful automation</h2>
                {/* Text */}
                <p className="p-lg">
                  Quaerat sodales sapien euismod blandit purus a purus ipsum
                  primis in cubilia laoreet augue luctus magna dolor luctus and
                  egestas sapien egestas vitae nemo volute
                </p>
                {/* CONTENT BOX #1 */}
                <div className="cbox-2 mt-20 mb-30">
                  {/* Icon */}
                  <div className="cbox-2-ico">
                    <div className="ico-40 dark-color">
                      <span className="flaticon-speech-bubble-4" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="cbox-2-txt">
                    <h5 className="h5-xs">Send Group Messages</h5>
                    <p className="p-lg">to your lists of contacts</p>
                  </div>
                </div>
                {/* CONTENT BOX #2 */}
                <div className="cbox-2">
                  {/* Icon */}
                  <div className="cbox-2-ico">
                    <div className="ico-40 dark-color">
                      <span className="flaticon-analytics-4" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="cbox-2-txt">
                    <h5 className="h5-xs">Lowest Data Usage</h5>
                    <p className="p-lg">with Encrypted Messaging</p>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6 order-first order-md-2">
              <div className="img-block right-column wow fadeInLeft">
                <img
                  className="img-fluid"
                  src="/images/img-02.png"
                  alt="content-image"
                />
              </div>
            </div>
          </div>
        </div>{" "}
        {/* END BOTTOM ROW */}
      </div>{" "}
      {/* End container */}
    </section>
  );
}

export default Content4;
