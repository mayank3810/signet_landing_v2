import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function CustomerEngagement() {
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
      id="content-6"
      className="content-6 pb-60 pt-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-6 col-lg-5">
            <div className="txt-block left-column wow fadeInRight">
              {/* Title */}
              <h2 className="h2-xs">Increase customer engagement by 100X</h2>
              {/* Text */}
              <p className="p-lg">
                Signet tags with direct NFC connection allows an immediate check
                of product authenticity and integrity. An instant interaction
                with the product grants access to its history, characteristics
                and sustainability certifications. Faster and safer than any
                solution based on QR code or image recognition.
              </p>
            </div>
          </div>
          {/* IMAGE BLOCK */}
          <div className="col-md-6 col-lg-7">
            <div className="img-block right-column wow fadeInLeft">
              {/* <img
                className="img-fluid"
                src="/images/img-20.png"
                alt="content-image"
              /> */}
              <div className="masonry-container">
                <div className="masonry-custom ">
                  {/* <div className="brick pull-up">
                    <img src="https://dummyimage.com/600x200/000/fff" />
                  </div> */}
                  <div className="brick height-100"></div>
                  <div className="brick">
                    <img
                      className={
                        init
                          ? "animate__animated animate__fadeIn"
                          : "animate__animated"
                      }
                      src="/images/customers/6.png"
                      style={{ animationDelay: "2s" }}
                    />
                  </div>
                  <div className="brick height-100"></div>
                  {/* <div className="brick">
                    <img src="/images/elements/design_1.png" />
                  </div> */}
                  <div className="brick">
                    <img
                      className={
                        init
                          ? "animate__animated animate__fadeIn"
                          : "animate__animated"
                      }
                      style={{ animationDelay: "1.75s" }}
                      src="/images/customers/8.png"
                    />
                  </div>

                  <div className="brick">
                    <img
                      className={
                        init
                          ? "animate__animated animate__fadeIn"
                          : "animate__animated"
                      }
                      style={{ animationDuration: "1s" }}
                      src="/images/customers/7.png"
                    />
                  </div>
                  <div className="brick height-100"></div>
                  <div className="brick height-100"></div>
                  <div className="brick">
                    <img
                      className={
                        init
                          ? "animate__animated animate__fadeIn"
                          : "animate__animated"
                      }
                      style={{ animationDelay: "1.25s" }}
                      src="/images/customers/9.png"
                    />
                  </div>
                  <div className="brick">
                    <img
                      className={
                        init
                          ? "animate__animated animate__fadeIn"
                          : "animate__animated"
                      }
                      style={{ animationDelay: "1.75s" }}
                      src="/images/customers/10.png"
                    />
                  </div>
                </div>
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

export default CustomerEngagement;
