import Link from 'next/link';
import React from 'react';

function CallToAction() {
	return (
    <section id="cta-4" className="cta-section division pt-4">
      <div className="container">
        <div className="bg-white cta-4-wrapper ">
          <div className="row d-flex align-items-center">
            {/* CALL TO ACTION TEXT */}
            <div className="col-lg-7 col-lg-8">
              <div className="cta-4-txt">
                <h4 className="h4-xl">Need Help Getting Started?</h4>
                <p>
                  Our experts are here to help your organization figure out your
                  first move.
                </p>
              </div>
            </div>
            {/* CALL TO ACTION BUTTON */}
            <div className="col-lg-4">
              <div className="text-end">
                <div className="cta-4-btn text-center">
                  <Link href={"/request-demo"}>
                    <button className="btn btn-yellow tra-yellow-hover">
                      Request a Demo
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
    </section>
  );
}

export default CallToAction;
