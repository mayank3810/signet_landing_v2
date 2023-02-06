import CallToAction from "@/components/CallToAction";
import Header from "@/components/Header";
import Stats from "@/components/Stats";
import PageTitle from "@/components/PageTitle";
import Testimonials from "@/components/Testimonials";
import React from "react";
import { useInView } from "react-intersection-observer";
import Brands from "@/components/Brands";
import Benefits from "@/components/Benefits";
import Link from "next/link";

function CosmeticsAndPerfumes() {
  const [containerRef, inContainerView] = useInView({ rootMargin: "-350px" });

  return (
    <>
      <Header scroll={inContainerView} />
      <PageTitle
        image="/images/industries/cosmetics_banner.jpg"
        title={"Cosmetics And Perfumes"}
        subtitle={"Engage your consumers with fun, informative, smart packaging that also protects your brand"}
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
                      src="/images/nfc-blockchain.jpg"
                      alt="content-image"
                    />
                  </div>
                </div>
                {/* TEXT BLOCK */}
                <div className="col-md-7 col-lg-6">
                  <div className="txt-block right-column wow fadeInLeft">

                    {/* Title */}
                    <h2 className="h2-xs">
                      Tag, track and authenticate
                    </h2>
                    {/* Text */}
                    <p className="p-lg">
                      Our patent pending NFC tag leverages encrypted tamper-proof blockchain technology to track each single item from production to product opening and features refilling protection and anti-peeling.
                      Its style can be customized for a perfect integration with your label, package or bottle design.

                    </p>

                    <p className="p-lg">
                      Our app or a direct NFC connection allows consumers to check the authenticity of each single purchase they are about to make.
                      A simple tap grants instant access to product history, certifications and intended applications. Faster and safer than any solution based on QR code or image recognition.
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
                  7.8% of annual sales in the personal care sector is lost due to counterfeiting
                  According to the OECD, in 2016 the international counterfeit makeup trade was estimated to be worth $5.4 billion. Today it is still increasing.
                  
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
                  <h2 className="h2-md">Solutions to protect your products</h2>
                  {/* Text */}
                  <p className="p-xl">
                  Protect your product against fraudulent refilling and allow instantaneous verification without the need for any app or downloads
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
                    <div className="fbox-img bg-whitesmoke-gradient">
                      <img
                        className="img-fluid"
                        src="/images/img-21.png"
                        alt="feature-icon"
                      />
                    </div>
                    {/* Title */}
                    <h5 className="h5-md">Friendly Interface</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Feugiat primis ultrice semper lacus cursus feugiat undo
                      primis ultrice a ligula an auctor tempus magnis
                    </p>
                  </div>
                </div>
                {/* FEATURE BOX #2 */}
                <div className="col">
                  <div className="fbox-8 mb-40 wow fadeInUp">
                    {/* Image */}
                    <div className="fbox-img bg-whitesmoke-gradient">
                      <img
                        className="img-fluid"
                        src="/images/img-22.png"
                        alt="feature-icon"
                      />
                    </div>
                    {/* Title */}
                    <h5 className="h5-md">Extremely Flexible</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Feugiat primis ultrice semper lacus cursus feugiat undo
                      primis ultrice a ligula an auctor tempus magnis
                    </p>
                  </div>
                </div>
                {/* FEATURE BOX #3 */}
                <div className="col">
                  <div className="fbox-8 mb-40 wow fadeInUp">
                    {/* Image */}
                    <div className="fbox-img bg-whitesmoke-gradient">
                      <img
                        className="img-fluid"
                        src="/images/img-24.png"
                        alt="feature-icon"
                      />
                    </div>
                    {/* Title */}
                    <h5 className="h5-md">Easy To Customize</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Feugiat primis ultrice semper lacus cursus feugiat undo
                      primis ultrice a ligula an auctor tempus magnis
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
                  <span className="section-id txt-upcase">Pixel Perfect</span>
                  {/* Title */}
                  <h2 className="h2-xs">
                    We're making design better for everyone
                  </h2>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Fringilla risus, luctus mauris orci auctor euismod
                        iaculis luctus magna purus pretium ligula purus undo
                        quaerat tempor sapien rutrum mauris quaerat ultrice
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Quaerat sodales sapien euismod purus blandit
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Nemo ipsam egestas volute turpis dolores undo ultrice
                        aliquam quaerat at sodales sapien purus
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
                    src="/images/img-07.png"
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
        <Stats
          tagLine={
            "More than 65,000 users around the world are already suffering due to counterfeit"
          }
          amount={"65K"}
          rating={4}
        />

        <Testimonials />
        <Brands />
        <CallToAction />
        {/* END TESTIMONIALS-1 */}
      </div>
    </>
  );
}

export default CosmeticsAndPerfumes;
