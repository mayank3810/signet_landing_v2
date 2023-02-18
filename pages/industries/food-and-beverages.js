import CallToAction from "@/components/CallToAction";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import React from "react";
import { useInView } from "react-intersection-observer";
import Benefits from "@/components/Benefits";

function FoodAndBeverages() {
  const [containerRef, inContainerView] = useInView({ rootMargin: "-350px" });

  return (
    <>
      <Header scroll={inContainerView} />
      <PageTitle
        image="/images/industries/food_banner.jpg"
        title={"Food And Beverages"}
        subtitle={"No credit card required. Change or cancel your plan anytime"}
      />
      <div ref={containerRef}>
        <section
          id="content-3"
          className="content-3 wide-60 content-section division"
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
                      src="/images/digital-experience.jpg"
                      alt="content-image"
                    />
                  </div>
                </div>
                {/* TEXT BLOCK */}
                <div className="col-md-7 col-lg-6">
                  <div className="txt-block right-column wow fadeInLeft">
                    {/* Title */}
                    <h2 className="h2-xs">Authenticity solution for Food and Beverages</h2>
                    {/* Text */}
                    <p className="p-lg">
                      Authenticity is a critical issue in the food and beverage industry, as consumers rely on the authenticity of the products they buy. Using Signet Tags
                      Consumers can identify instantaneously food and beverages authenticity with a tap of their smartphone, using a direct NFC connection.
                    </p>

                    <p className="p-lg">
                      Our app or a direct NFC connection allows consumers to
                      check the authenticity of each single purchase they are
                      about to make. A simple tap grants instant access to
                      product history, certifications and intended applications.
                      Follow each product, and enable customers and third parties to read the product history at any time.
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
                    How does it help <br />
                  </h2>
                  <p className="p-xl">
                    Tag your premium product with a unique tamper-proof ID that tracks the entire product journey and protect against fraudulent refilling.
                    Provide customers with product assurance via secure physical-digital seals and tamper-proof technology.
                    Follow each product, and enable customers and third parties to read the product history at any time.
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
                    <h5 className="h5-md mt-4 ">Brand Protection</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Defend your IPRs and your Brand Equity. Feel free to
                      develop and promote new products safely
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
                    <h5 className="h5-md mt-4">Marketing Insights</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Track your products until the final customer. Detect
                      product infiltrations and original stolen products
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
                    <h5 className="h5-md mt-4 ">Connect directly</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Connect directly to your customers using push
                      notifications and alerts. Collect valuable feedbacks
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
                    Plain packaging doesn't work anymore.
                  </h2>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                      Our technology can be used to create a tamper-proof record of a product's journey from the source to the end consumer. This can help to ensure the authenticity of the product and provide transparency to consumers.
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                      By implementing a robust product traceability system, food and beverage companies can track the entire journey of the product from the source to the end consumer. 
                      A traceability system allows for the identification and isolation of any issues that may arise in the supply chain.
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

        <section
          id="statistic-2"
          className="wide-100 statistic-section division"
        >
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6">
                <div className="txt-block right-column wow fadeInLeft">
                  <h3 className="h3-xs">
                    {" "}
                    The international counterfeit makeup trade was estimated to
                    be worth $5.4 billion. Still increasing.{" "}
                  </h3>
                </div>
              </div>
              <div className="col-sm-5 col-md-4 col-lg-3 offset-sm-2 offset-md-3 offset-lg-2">
                <div className="statistic-block wow fadeInUp">
                  <h2 className="h2-title-xs statistic-number">
                    <span className="count-element">7.8%</span>
                  </h2>
                  <p className="p-lg mt-20">
                    annual sales in the personal care sector is lost due to
                    counterfeiting
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </section>

        <CallToAction />
      </div>
    </>
  );
}

export default FoodAndBeverages;
