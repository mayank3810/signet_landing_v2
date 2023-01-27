import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Content3() {
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
      id="content-5"
      className="content-5 ws-wrapper content-section division"
    >
      <div className="container">
        <div className="content-5-wrapper bg-whitesmoke">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div className="txt-block left-column">
                {/* CONTENT BOX #1 */}
                <div
                  className={
                    init
                      ? "cbox mb-40 animate__animated animate__fadeInLeft"
                      : "cbox mb-40 animate__animated"
                  }
                  style={{ animationDuration: "1s" }}
                >
                  {/* Icon */}
                  <div className="cbox-ico">
                    <div className="orange-red-color ico-65">
                      <span className="flaticon-speech-bubble-2" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="cbox-txt">
                    <h5 className="h5-md">Text, Voice &amp; Video Calls</h5>
                    <p className="p-lg">
                      Ligula risus auctor tempus dolor feugiat undo lacinia
                      purus lipsum quaerat primis ultrice tellus and viverra
                      purus suscipit
                    </p>
                  </div>
                </div>
                {/* CONTENT BOX #2 */}
                <div
                  className={
                    init
                      ? "cbox mb-40 animate__animated animate__fadeInLeft"
                      : "cbox mb-40 animate__animated"
                  }
                  style={{ animationDuration: "1.5s" }}
                >
                  {/* Icon */}
                  <div className="cbox-ico">
                    <div className="orange-red-color ico-65">
                      <span className="flaticon-tongue" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="cbox-txt">
                    <h5 className="h5-md">Stickers, Emojis, Themes</h5>
                    <p className="p-lg">
                      Ligula risus auctor tempus dolor feugiat undo lacinia
                      purus lipsum quaerat primis ultrice tellus and viverra
                      purus suscipit
                    </p>
                  </div>
                </div>
                {/* CONTENT BOX #3 */}
                <div
                  className={
                    init
                      ? "cbox mb-40 animate__animated animate__fadeInLeft"
                      : "cbox mb-40 animate__animated"
                  }
                  style={{ animationDuration: "1.75s" }}
                >
                  {/* Icon */}
                  <div className="cbox-ico">
                    <div className="orange-red-color ico-65">
                      <span className="flaticon-shield-2" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="cbox-txt">
                    <h5 className="h5-md">Spam Protection</h5>
                    <p className="p-lg">
                      Ligula risus auctor tempus dolor feugiat undo lacinia
                      purus lipsum quaerat primis ultrice tellus and viverra
                      purus suscipit
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div
                className={
                  init
                    ? "img-block right-column animate__animated animate__fadeIn"
                    : "img-block right-column animate__animated"
                }
                style={{ animationDelay: "0.75s" }}
              >
                <img
                  className="img-fluid"
                  src="/images/img-12.png"
                  alt="content-image"
                />
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
}

export default Content3;
