import CallToAction from "@/components/CallToAction";
import Header from "@/components/Header";
import Stats from "@/components/Stats";
import PageTitle from "@/components/PageTitle";
import Testimonials from "@/components/Testimonials";
import React from "react";
import { useInView } from "react-intersection-observer";
import Brands from "@/components/Brands";
import Benefits from "@/components/Benefits";

function CosmeticsAndPerfumes() {
  const [containerRef, inContainerView] = useInView({ rootMargin: "-350px" });

  return (
    <>
      <Header scroll={inContainerView} />
      <PageTitle
        image="/images/industries/cosmetics_banner.jpg"
        title={"Cosmetics And Perfumes"}
        subtitle={"No credit card required. Change or cancel your plan anytime"}
      />
      <div ref={containerRef}>
        <section
          id="content-3"
          className="bg-snow content-3 wide-60 content-section division"
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
                      src="/images/img-09.png"
                      alt="content-image"
                    />
                  </div>
                </div>
                {/* TEXT BLOCK */}
                <div className="col-md-7 col-lg-6">
                  <div className="txt-block right-column wow fadeInLeft">
                    {/* Section ID */}
                    <span className="section-id txt-upcase">
                      Totally Optimized
                    </span>
                    {/* Title */}
                    <h2 className="h2-xs">
                      Work smarter with powerful features
                    </h2>
                    {/* Text */}
                    <p className="p-lg">
                      Quaerat sodales sapien euismod blandit at vitae ipsum
                      primis undo and cubilia laoreet augue and luctus magna
                      dolor luctus at egestas sapien vitae nemo egestas volute
                      and turpis dolores aliquam quaerat sodales a sapien
                    </p>
                    {/* Tools List */}
                    <div className="tools-list ico-40 mt-30">
                      {/* Text */}
                      <h6 className="h6-xl">Technologies We Use:</h6>
                      {/* Icons */}
                      <span className="flaticon-html-5 text-black-50" />
                      <span className="flaticon-css-3 text-black-50" />
                      <span className="flaticon-wordpress-logo text-black-50" />
                      <span className="flaticon-js text-black-50" />
                      <span className="flaticon-diamond-1 text-black-50" />
                    </div>
                  </div>
                </div>
                {/* END TEXT BLOCK */}
              </div>
            </div>
            {/* END TOP ROW */}
            {/* BOTTOM ROW */}
            <div className="bottom-row">
              <div className="row d-flex align-items-center">
                {/* TEXT BLOCK */}
                <div className="col-lg-6 order-last order-lg-2">
                  <div className="txt-block slim-column left-column wow fadeInRight">
                    {/* TEXT BOX */}
                    <div className="txt-box mb-20">
                      {/* Title */}
                      <h5 className="h5-lg">Advanced Performance Made Easy</h5>
                      {/* Text */}
                      <p className="p-lg">
                        Quaerat sodales sapien euismod blandit at vitae ipsum
                        primis undo and cubilia laoreet augue and luctus magna
                        dolor luctus at egestas sapien vitae nemo egestas volute
                        and turpis dolores aliquam quaerat sodales a sapien
                      </p>
                    </div>
                    {/* TEXT BOX */}
                    <div className="txt-box">
                      {/* Title */}
                      <h5 className="h5-lg">The Complete Software Solution</h5>
                      {/* List */}
                      <ul className="simple-list">
                        <li className="list-item">
                          <p className="p-lg">
                            Fringilla risus, luctus mauris auctor euismod an
                            iaculis luctus magna purus pretium ligula purus and
                            quaerat
                          </p>
                        </li>
                        <li className="list-item">
                          <p className="p-lg">
                            Nemo ipsam egestas volute turpis dolores undo
                            ultrice aliquam quaerat at sodales sapien purus
                          </p>
                        </li>
                      </ul>
                    </div>
                    {/* END TEXT BOX */}
                  </div>
                </div>
                {/* END TEXT BLOCK */}
                {/* CB WRAPPER */}
                <div className="col-lg-6 order-first order-lg-2">
                  <div className="cb-wrapper">
                    {/* CB HOLDER */}
                    <div className="cb-holder wow fadeInLeft">
                      {/* CB BOX #1 */}
                      <div className="cb-single-box">
                        <p className="p-lg cb-header">New Customers</p>
                        <h2 className="h2-title-xs statistic-number">
                          <sup>+</sup>
                          <span className="count-element">784</span>
                        </h2>
                        <p className="p-md mt-5 ico-10">
                          <span className="green-color">
                            <span className="flaticon-" /> 4.6%
                          </span>
                          vs last 7 days
                        </p>
                      </div>
                      <hr className="divider" />
                      {/* CB BOX #2 */}
                      <div className="cb-single-box">
                        <ul className="simple-list">
                          <li className="list-item">
                            <p className="p-md">
                              Fringilla risus luctus mauris auctor and purus
                              euismod purus
                            </p>
                          </li>
                          <li className="list-item">
                            <p className="p-md">
                              Nemo ipsam volute turpis dolores ut quaerat
                              sodales sapien
                            </p>
                          </li>
                        </ul>
                      </div>
                      {/* CB BOX #3 */}
                      <div className="cb-single-box cb-box-rounded bg-green white-color mt-25">
                        <h4 className="h4-lg">98.245</h4>
                        <p className="p-lg">Ligula risus auctor tempus</p>
                      </div>
                    </div>
                    {/* END CB HOLDER */}
                    {/* CB SHAPE */}
                    <div className="cb-shape-1">
                      <img
                        className="img-fluid"
                        src="/images/bg-shape-1.png"
                        alt="content-image"
                      />
                    </div>
                    {/* CB SHAPE */}
                    <div className="cb-shape-2">
                      <img
                        className="img-fluid"
                        src="/images/bg-shape-2.png"
                        alt="content-image"
                      />
                    </div>
                  </div>
                </div>
                {/* END CB WRAPPER */}
              </div>
            </div>
            {/* END BOTTOM ROW */}
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
                  <h2 className="h2-md">We’re Better. Here’s Why…</h2>
                  {/* Text */}
                  <p className="p-xl">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis a libero tempus, blandit and cursus varius and
                    magnis sapien
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
