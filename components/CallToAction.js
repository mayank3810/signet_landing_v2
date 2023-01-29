import React from "react";

function CallToAction() {
  return (
    <section id="cta-4" className="cta-section division">
      <div className="cta-4-holder bg-snow">
        <div className="container">
          <div className="bg-white cta-4-wrapper">
            <div className="row d-flex align-items-center">
              {/* CALL TO ACTION TEXT */}
              <div className="col-lg-7 col-lg-8">
                <div className="cta-4-txt">
                  <h4 className="h4-xl">
                    Try Signet free for 14 days. Start your trial now and pick a
                    plan later
                  </h4>
                </div>
              </div>
              {/* CALL TO ACTION BUTTON */}
              <div className="col-lg-4">
                <div className="text-end">
                  <div className="cta-4-btn text-center">
                    <a
                      href="pricing.html"
                      className="btn btn-yellow tra-yellow-hover"
                    >
                      Get Started Now
                    </a>
                    <p>
                      <a href="faqs.html">Read The FAQs</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </div>
    </section>
  );
}

export default CallToAction;
