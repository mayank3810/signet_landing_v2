import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Content2 from "@/components/Home/Content2";
import Content3 from "@/components/Home/Content3";
import Content4 from "@/components/Home/Content4";
import CustomerEngagement from "@/components/Home/CustomerEngagement";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import { Inter } from "@next/font/google";
import { useInView } from "react-intersection-observer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [headerRef, inHeaderView] = useInView();

  return (
    <>
      <div id="page" className="page">
        <Header scroll={inHeaderView} />
        <Hero />
        <div ref={headerRef}>
          <Features />
          <hr className="divider" />
          <Content2 />
          <Content3 />
          <Content4 />
          <hr className="divider" />
          <CustomerEngagement />

          <section
            id="content-10"
            className="content-10 wide-100 content-section division"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                  <div className="section-title title-01 mb-70">
                    {/* Title */}
                    <h2 className="h2-md">Flexible and scalable across industries</h2>
                    {/* Text */}
                    <p className="p-xl">
                      Our product authentication solution is flexible and scalable across industries
                    </p>
                  </div>
                </div>
              </div>
              {/* IMAGE BLOCK */}
              <div className="row">
                <div className="col">
                  <div className="img-block text-center wow fadeInUp">
                    <img
                      className="img-fluid"
                      src="/images/social-networks.png"
                      alt="content-image"
                    />
                  </div>
                </div>
              </div>
              {/* ACTION BUTTON */}
              <div className="row">
                <div className="col">
                  <div className="content-10-btn">
                    {/* Button */}
                    <a
                      href="https://www.youtube.com/watch?v=7e90gBu4pas"
                      className="video-popup2 btn btn-md btn-orange-red tra-grey-hover ico-15 ico-left"
                    >
                      <span className="flaticon-play" /> See Signet in Action
                    </a>
                    {/* Advantages List */}
                    <ul className="advantages mt-25 clearfix">
                      <li className="first-li">
                        <p>Free 30 days trial</p>
                      </li>
                      <li>
                        <p>Exclusive Support</p>
                      </li>
                      <li className="last-li">
                        <p>No Fees</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>{" "}
          </section>{" "}

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
                      Get started with a free trial account. <br />
                    </h2>
                    <p className="p-xl">
                      Get a Free Authenticity Tags Kit to experience the technology yourself before you decide to scale.
                      The NFC Starter Kit comes with 10-20 secure, unclonable NXP 424 DNA NFC tags, a free account on the Qliktag Platform & links to online help resources,
                      documentation on encoding the tags and all you would need to to setup a small pilot with your own products & custom experiences.
                    </p>
                  </div>
                </div>
              </div>
              {/* IMAGE BLOCK */}
              <div className="row">
                <div className="col">
                  <div className="content-9-img video-preview wow fadeInUp">
                    {/* Play Icon */}
                    <a
                      className="video-popup1"
                      href="https://www.youtube.com/embed/SZEflIVnhH8"
                    >
                      <div className="video-btn video-btn-xl bg-orange-red ico-90">
                        <div className="video-block-wrapper">
                          <span className="flaticon-play-button" />
                        </div>
                      </div>
                    </a>
                    {/* Preview Image */}
                    <img
                      className="img-fluid"
                      src="/images/dashboard-07.png"
                      alt="video-preview"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End container */}
          </section>{" "}


          <section id="faqs-2" className="wide-60 faqs-section division">
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                  <div className="section-title title-01 mb-80">
                    {/* Title */}
                    <h2 className="h2-md">Got Questions? Look Here</h2>
                    {/* Text */}
                    <p className="p-xl">
                     Get your common questions answered. If you have more queries, please reach out to us using our contact page.
                    </p>
                  </div>
                </div>
              </div>
              {/* FAQs-2 QUESTIONS */}
              <div className="faqs-2-questions">
                <div className="row row-cols-1 row-cols-lg-2">
                  {/* QUESTIONS HOLDER */}
                  <div className="col">
                    <div className="questions-holder pr-15">
                      {/* QUESTION #1 */}
                      <div className="question wow fadeInUp">
                        {/* Question */}
                        <h5 className="h5-md">
                          Can I see Signet in action before purchasing?
                        </h5>
                        {/* Answer */}
                        <p className="p-lg">
                          Etiam amet mauris suscipit in odio integer congue
                          metus vitae arcu mollis blandit ultrice ligula egestas
                          and magna suscipit lectus magna suscipit luctus
                          blandit vitae
                        </p>
                      </div>
                      {/* QUESTION #2 */}
                      <div className="question wow fadeInUp">
                        {/* Question */}
                        <h5 className="h5-md">
                          What are the requirements for using Signet?
                        </h5>
                        {/* Answer */}
                        <p className="p-lg">
                          An enim nullam tempor sapien gravida a donec ipsum
                          enim an porta justo integer at velna vitae auctor
                          integer congue undo magna at pretium purus pretium
                        </p>
                      </div>
                      {/* QUESTION #3 */}
                      <div className="question wow fadeInUp">
                        {/* Question */}
                        <h5 className="h5-md">
                          Can I use Signet on different devices?
                        </h5>
                        {/* Answer */}
                        <ul className="simple-list">
                          <li className="list-item">
                            <p className="p-lg">
                              Fringilla risus, luctus mauris orci auctor purus
                              ligula euismod pretium purus pretium rutrum tempor
                              sapien
                            </p>
                          </li>
                          <li className="list-item">
                            <p className="p-lg">
                              Nemo ipsam egestas volute turpis dolores ut
                              aliquam quaerat sodales sapien undo pretium a
                              purus
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END QUESTIONS HOLDER */}
                  {/* QUESTIONS HOLDER */}
                  <div className="col">
                    <div className="questions-holder pl-15">
                      {/* QUESTION #4 */}
                      <div className="question wow fadeInUp">
                        {/* Question */}
                        <h5 className="h5-md">Do you have a free trial?</h5>
                        {/* Answer */}
                        <p className="p-lg">
                          Cubilia laoreet augue egestas and luctus donec
                          curabite diam vitae dapibus libero and quisque gravida
                          donec and neque. Blandit justo aliquam molestie nunc
                          sapien
                        </p>
                      </div>
                      {/* QUESTION #5 */}
                      <div className="question wow fadeInUp">
                        {/* Question */}
                        <h5 className="h5-md">
                          How does Signet handle my privacy?
                        </h5>
                        {/* Answer */}
                        <p className="p-lg">
                          Etiam amet mauris suscipit sit amet in odio. Integer
                          congue leo metus. Vitae arcu mollis blandit ultrice
                          ligula
                        </p>
                        {/* Answer */}
                        <p className="p-lg">
                          An enim nullam tempor sapien gravida donec congue leo
                          metus. Vitae arcu mollis blandit integer at velna
                        </p>
                      </div>
                      {/* QUESTION #6 */}
                      <div className="question wow fadeInUp">
                        {/* Question */}
                        <h5 className="h5-md">
                          I have an issue with my account
                        </h5>
                        {/* Answer */}
                        <ul className="simple-list">
                          <li className="list-item">
                            <p className="p-lg">
                              Fringilla risus, luctus mauris orci auctor purus
                            </p>
                          </li>
                          <li className="list-item">
                            <p className="p-lg">
                              Quaerat sodales sapien euismod blandit purus and
                              ipsum primis in cubilia laoreet augue luctus
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END QUESTIONS HOLDER */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END FAQs-2 QUESTIONS */}
              {/* MORE QUESTIONS BUTTON */}
              <div className="row">
                <div className="col">
                  <div className="more-questions">
                    <h5 className="h5-sm">
                      Have more questions?{" "}
                      <a href="contacts.html">Ask your question here</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End container */}
          </section>{" "}

          <Footer />
        </div>
      </div>{" "}
    </>
  );
}
