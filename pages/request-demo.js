import CallToAction from "@/components/CallToAction";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import React from "react";

function RequestDemo() {
  return (
    <>
      <Header scroll={true} />
      <section
        id="content-3"
        className="bg-snow content-3 wide-60 content-section division"
      >
        <div className="container">
          <div className="row pb-50">
            <iframe
              src="https://calendly.com/mayank-gauatm/30min"
              width={1000}
              height={700}
            />
          </div>
        </div>
      </section>

      <Testimonials />
      <CallToAction />
    </>
  );
}

export default RequestDemo;
