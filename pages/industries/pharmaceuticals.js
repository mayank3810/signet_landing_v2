import CallToAction from "@/components/CallToAction";
import Header from "@/components/Header";
import Stats from "@/components/Stats";
import PageTitle from "@/components/PageTitle";
import Testimonials from "@/components/Testimonials";
import React from "react";
import { useInView } from "react-intersection-observer";
import Brands from "@/components/Brands";
import Benefits from "@/components/Benefits";

function Pharmaceuticals() {
  const [containerRef, inContainerView] = useInView({ rootMargin: "-350px" });

  return (
    <>
      <Header scroll={inContainerView} />
      <PageTitle
        image="/images/industries/pharma_banner.jpg"
        title={"Pharmaceuticals"}
        subtitle={"Add product traceability and unique digital identities to your packaging with secure NFC tags"}
      />
      <div ref={containerRef}>
        <section
          id="content-3"
          className="bg-whitesmoke content-3 wide-60 content-section division"
        >
          <div className="container">
            {/* TOP ROW */}
            <div className="top-row pb-50">
              <div className="row d-flex align-items-center">
                {/* IMAGE BLOCK */}
                <div className="col-md-5 col-lg-6">
                  <div className="img-block left-column wow fadeInRight">
                    <img
                      className="img-fluid"
                      src="/images/pharma/pharma-authenticity.jpg"
                      alt="content-image"
                    />
                  </div>
                </div>
                {/* TEXT BLOCK */}
                <div className="col-md-7 col-lg-6">
                  <div className="txt-block right-column wow fadeInLeft">
                    {/* Title */}
                    <h2 className="h2-xs">Anti-Counterfeit and traceability solution for Pharma</h2>
                    {/* Text */}
                    <p className="p-lg">
                      Anti-counterfeit and traceability solutions are essential in the pharmaceutical industry to ensure the authenticity and safety of drugs.
                      Our patent pending NFC tag leverages encrypted
                      tamper-proof blockchain technology to track each single
                      item from production to product opening and features
                      refilling protection and anti-peeling.
                    </p>

                    <p className="p-lg">
                      Our app or a direct NFC connection allows consumers to
                      check the authenticity of each single purchase they are
                      about to make. A simple tap grants instant access to
                      product history, certifications and intended applications.
                      Faster and safer than any solution based on QR code or
                      image recognition.
                    </p>

                    <p className="p-lg">
                      Tamper-evident packaging: Tamper-evident packaging can help to prevent counterfeiting and tampering with products.
                      Our Tag tampering solution can easily detect if a package has been opened or tampered with.
                    </p>
                  </div>
                </div>
                {/* END TEXT BLOCK */}
              </div>
            </div>
          </div>
          {/* End container */}
        </section>

        <section
          id="content-9"
          className="content-9 bg-01 pt-100 content-section division"
        >
          <div className="container white-color">
            {/* SECTION TITLE */}
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8">
                <div className="section-title title-02 mb-60">
                  <h2 className="h2-xs">
                    The real problem <br />
                  </h2>
                  <p className="p-xl">
                    The pharma industry has been hit hard by counterfeiters,
                    who are taking advantage of the gaps between skyrocketing demand and
                    severe supply chain disruptions related to the pandemic.
                  </p>
                </div>
              </div>
            </div>
            {/* IMAGE BLOCK */}
            <div className="row">
              <div className="col">
                <div className="content-9-img video-preview wow fadeInUp">
                  <iframe
                    style={{ borderRadius: "20px" }}
                    width="860"
                    height="515"
                    src="https://www.youtube.com/embed/YQUjE2koNRI"
                    title="Signet Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          {/* End container */}
        </section>

        <section id="features-8" className="wide-60 features-section division">
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="section-title title-01 mb-70">
                  {/* Title */}
                  <h2 className="h2-md">Why Signet Tags</h2>
                  {/* Text */}
                  <p className="p-xl">
                    While other authentication companies protect the package,
                    Signet Tags protects the product against fraudulent
                    refilling and allows instantaneous verification without the
                    need for specific tools or expertise in the field
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURES-8 WRAPPER */}
            <div className="fbox-8-wrapper text-center">
              <div className="row row-cols-1 row-cols-md-3">
                {/* FEATURE BOX #1 */}
                <div className="col">
                  <div className="fbox-8 mb-40 wow fadeInUp">
                    {/* Image */}
                    <img
                      className="img-fluid rounded"
                      src="/images/industries/brand-protection.jpg"
                      alt="feature-icon"
                    />
                    {/* Title */}
                    <h5 className="h5-md mt-4 ">Anti-counterfeiting</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Allow Health Care Professionals (HCPs) and Authorities to instantly check product authenticity and integrity.
                    </p>
                  </div>
                </div>
                {/* FEATURE BOX #2 */}
                <div className="col">
                  <div className="fbox-8 mb-40 wow fadeInUp">
                    {/* Image */}
                    <img
                      className="img-fluid rounded"
                      src="/images/industries/marketing.jpg"
                      alt="feature-icon"
                    />
                    {/* Title */}
                    <h5 className="h5-md mt-4">Tracking</h5>
                    {/* Text */}
                    <p className="p-lg">
                    End-to-end product traceability to follow each single item in real time along the supply chain, integrating multiple environmental sensors.
                    </p>
                  </div>
                </div>
                {/* FEATURE BOX #3 */}
                <div className="col">
                  <div className="fbox-8 mb-40 wow fadeInUp">
                    <img
                      className="img-fluid rounded"
                      src="/images/industries/feedback.jpg"
                      alt="feature-icon"
                    />
                    <h5 className="h5-md mt-4 ">Patient Engagement</h5>
                    {/* Text */}
                    <p className="p-lg">
                    Revolutionize patient experience enabling drugs’ instant authenticity check. Collect valuable feedbacks
                      directly from customers.
                    </p>
                  </div>
                </div>
              </div>
              {/* End row */}
            </div>
            {/* END FEATURES-8 WRAPPER */}
          </div>
          {/* End container */}
        </section>

        <section
          id="content-1"
          className="content-1 pb-100 content-section division"
        >
          <div className="container">
            <div className="row d-flex align-items-center">
              {/* TEXT BLOCK */}
              <div className="col-md-7 col-lg-6 order-last order-md-2">
                <div className="txt-block left-column wow fadeInRight">
                  {/* Section ID */}
                  <span className="section-id txt-upcase">
                    SMART NFC PACKAGING
                  </span>
                  {/* Title */}
                  <h2 className="h2-xs">
                    Added value for everyone.
                  </h2>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                      Proof of authenticity verification and  Product opening detection.
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                      1-click report in case of opened/fake product. 
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                      Instant access to drug electronic leaflet and Real time update of e-leaflets
                      </p>
                    </li>

                    <li className="list-item">
                      <p className="p-lg">
                      Easily send product recall alerts and Automatic product recall management.
                      </p>
                    </li>

                    <li className="list-item">
                      <p className="p-lg">
                      Increased demand predictability with positive impacts on production efficiency.
                      </p>
                    </li>

                    <li className="list-item">
                      <p className="p-lg">
                      Protect your brand and create a moment of trust with your customers.
                      </p>
                    </li>

                  </ul>
                </div>
              </div>
              {/* END TEXT BLOCK */}
              {/* IMAGE BLOCK */}
              <div className="col-md-5 col-lg-6 order-first order-md-2">
                <div className="rel img-block right-column wow fadeInLeft">
                  <img
                    className="img-fluid"
                    src="/images/signet-mobile-app.jpg"
                    alt="content-image"
                  />
                </div>
              </div>
            </div>
            {/* End row */}
          </div>
          {/* End container */}
        </section>

        <Benefits />


        <CallToAction />
      </div>
    </>
  );
}

export default Pharmaceuticals;
