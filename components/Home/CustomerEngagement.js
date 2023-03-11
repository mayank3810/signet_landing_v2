import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function CustomerEngagement() {
  const [containerRef, inContainerView] = useInView({ threshold: 0.2 });
  const [init, setInit] = useState(false);
  useEffect(() => {
    if (!init && inContainerView) {
      setInit(true);
    }
  }, [inContainerView]);

  return (
    <section ref={containerRef} id="content-6" className="content-6 pb-60 pt-60 content-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-lg-6">
            <div className="txt-block left-column wow fadeInRight">
              <h2 className="h2-xs">Increase customer engagement by 100X</h2>

              <p className="p-lg">
                Engage with your consumers like never before with Signet Tags. With our innovative solution, you'll always be able to keep track of your customers and never lose touch again.
              </p>

              <p className="p-lg">
                Signet Tags directly triggers consumer engagement. 
                Consumers can use their smartphones to scan products at the point of sale and, once connected to our dashboard, you can use those interactions to create valuable consumer profiles. These profiles will help your brand deliver targeted marketing initiatives.
                
              </p>

             

            
            </div>
          </div>
          {/* IMAGE BLOCK */}
          <div className="col-md-6 col-lg-6">
            <div className="img-block right-column wow fadeInLeft">
              {/* <img
                className="img-fluid"
                src="/images/img-20.png"
                alt="content-image"
              /> */}
              {/* <div className="masonry-container">
                <div className="masonry-custom ">

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
              </div> */}

              <img className="img-fluid" src="images/img-20.webp" alt="customers-image" />
            </div>
          </div>
        </div>{' '}
        {/* End row */}
      </div>{' '}
      {/* End container */}
    </section>
  );
}

export default CustomerEngagement;
