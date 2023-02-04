import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Content2 from "@/components/Home/Content2";
import Content3 from "@/components/Home/Content3";
import Content4 from "@/components/Home/Content4";
import CustomerEngagement from "@/components/Home/CustomerEngagement";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [headerRef, inHeaderView] = useInView();

  useEffect(() => {
    // token = localStorage.getItem
    // getToken();
  }, []);

  // const getToken = async () => {
  //   const token = await generateAccessToken();
  //   console.log(token);
  // };

  return (
    <>
      <div id="page" className="page">
        <Header scroll={inHeaderView} />
        <Hero />

        <Features />
        <hr className="divider" />
        <div ref={headerRef}>
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
                    <h2 className="h2-md">
                      Flexible and scalable across industries
                    </h2>
                    {/* Text */}
                    <p className="p-xl">
                      Our product authentication solution is flexible and
                      scalable across industries
                    </p>
                  </div>
                </div>
              </div>
              {/* IMAGE BLOCK */}
              <div className="row">
                <div className="container">
                  <div className="fbox-1-wrapper text-center">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                      <div className="col">
                        <div
                          className="fbox-1 mb-40 wow fadeInUp"
                          style={{
                            visibility: "visible",
                            animationName: "fadeInUp",
                          }}
                        >
                          <div className="fbox-ico-center ico-60">
                            <img
                              src="/images/industries/perfume-bottle-100.png"
                              alt="ico-bkg"
                            />
                          </div>
                          <div className="fbox-txt-center">
                            <h5 className="h5-sm">Cosmetics & Perfumes</h5>
                            <p className="p-lg">
                              Engage your consumers with fun, informative, smart
                              packaging that also protects your brand
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="fbox-1 mb-40 wow fadeInUp"
                          style={{
                            visibility: "visible",
                            animationName: "fadeInUp",
                          }}
                        >
                          <div className="fbox-ico-center ico-60">
                            <img
                              src="/images/industries/wine-bottle-100.png"
                              alt="ico-bkg"
                            />
                          </div>
                          <div className="fbox-txt-center">
                            <h5 className="h5-sm">Food & Beverages</h5>
                            <p className="p-lg">
                              Customer Engagement + Anti-Counterfeit Protection
                              for Food & Beverages Brands
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col">
                        <div
                          className="fbox-1 mb-40 wow fadeInUp"
                          style={{
                            visibility: "visible",
                            animationName: "fadeInUp",
                          }}
                        >
                          <div className="fbox-ico-center ico-60">
                            <img
                              src="/images/industries/pesticide-100.png"
                              alt="ico-bkg"
                            />
                          </div>
                          <div className="fbox-txt-center">
                            <h5 className="h5-sm">Agriculture</h5>
                            <p className="p-lg">
                              Tag, track, and instantaneously authenticate
                              agrochemical products
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col">
                        <div
                          className="fbox-1 mb-40 wow fadeInUp"
                          style={{
                            visibility: "visible",
                            animationName: "fadeInUp",
                          }}
                        >
                          <div className="fbox-ico-center ico-60">
                            <img
                              src="/images/industries/wheel-100.png"
                              alt="ico-bkg"
                            />
                          </div>
                          <div className="fbox-txt-center">
                            <h5 className="h5-sm">Auto Parts</h5>
                            <p className="p-lg">
                              Protect your automotive brand and your customers
                              from counterfeit automotive parts
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col">
                        <div
                          className="fbox-1 mb-40 wow fadeInUp"
                          style={{
                            visibility: "visible",
                            animationName: "fadeInUp",
                          }}
                        >
                          <div className="fbox-ico-center ico-60">
                            <img
                              src="/images/industries/medicines-100.png"
                              alt="ico-bkg"
                            />
                          </div>
                          <div className="fbox-txt-center">
                            <h5 className="h5-sm">Pharmaceuticals</h5>
                            <p className="p-lg">
                              Smart packaging for Pharmaceuticals brands opens a
                              new channel to engage, protect and build trust
                              with your customers.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col">
                        <div
                          className="fbox-1 mb-40 wow fadeInUp"
                          style={{
                            visibility: "visible",
                            animationName: "fadeInUp",
                          }}
                        >
                          <div className="fbox-ico-center ico-60">
                            <img
                              src="/images/industries/cannabis-100.png"
                              alt="ico-bkg"
                            />
                          </div>
                          <div className="fbox-txt-center">
                            <h5 className="h5-sm">Cannabis</h5>
                            <p className="p-lg">
                              Smart packaging for Cannabis brands opens a new
                              channel to engage, protect, and build trust with
                              your customers.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col">
                        <div
                          className="fbox-1 mb-40 wow fadeInUp"
                          style={{
                            visibility: "visible",
                            animationName: "fadeInUp",
                          }}
                        >
                          <div className="fbox-ico-center ico-60">
                            <img
                              src="/images/industries/soccer-ball-100.png"
                              alt="ico-bkg"
                            />
                          </div>
                          <div className="fbox-txt-center">
                            <h5 className="h5-sm">Sports Equipments</h5>
                            <p className="p-lg">
                              Tag, track, and instantaneously authenticate
                              products with Signet Tags
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col">
                        <div
                          className="fbox-1 mb-40 wow fadeInUp"
                          style={{
                            visibility: "visible",
                            animationName: "fadeInUp",
                          }}
                        >
                          <div className="fbox-ico-center ico-60">
                            <img
                              src="/images/industries/diploma-100.png"
                              alt="ico-bkg"
                            />
                          </div>
                          <div className="fbox-txt-center">
                            <h5 className="h5-sm">Document Security</h5>
                            <p className="p-lg">
                              Providing document security solutions for simple
                              to complex requirements.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col"> </div>
                      <div className="col">
                        <div
                          className="fbox-1 mb-40 wow fadeInUp"
                          style={{
                            visibility: "visible",
                            animationName: "fadeInUp",
                          }}
                        >
                          <div className="fbox-ico-center ico-60">
                            <img
                              src="/images/industries/t-shirt-100.png"
                              alt="ico-bkg"
                            />
                          </div>
                          <div className="fbox-txt-center">
                            <h5 className="h5-sm">Apparel and clothing</h5>
                            <p className="p-lg">
                              Smart packaging for clothing brands opens a new
                              channel to engage, protect, and build trust with
                              your customers.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col">
                        <div
                          className="fbox-1 mb-40 wow fadeInUp"
                          style={{
                            visibility: "visible",
                            animationName: "fadeInUp",
                          }}
                        >
                          <div className="fbox-ico-center ico-60">
                            <img
                              src="/images/industries/sneaker-60.png"
                              alt="ico-bkg"
                            />
                          </div>
                          <div className="fbox-txt-center">
                            <h5 className="h5-sm">Shoes and footwear</h5>
                            <p className="p-lg">
                              Customer Engagement + Anti-Counterfeit Protection
                              for Shoes and footwear Brands
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
                      Get started
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
            </div>
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
                      Get started with a free trial account. <br />
                    </h2>
                    <p className="p-xl">
                      Get a Free Authenticity Tags Kit to experience the
                      technology yourself before you decide to scale. The NFC
                      Starter Kit comes with 10-20 secure, unclonable NXP 424
                      DNA NFC tags, a free account to setup a small pilot with
                      your own products & custom experiences.
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
                      Get your common questions answered. If you have more
                      queries, please reach out to us using our contact page.
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
                          Yes, you can get a free Authenticity Tags Kit to
                          experience the technology yourself before you decide
                          to scale.
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
                          There are no specific requirements to add brand
                          authentication.
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
                              Yes, Our signet tags works on all major
                              smartphones, ios and android.
                            </p>
                          </li>
                          <li className="list-item">
                            <p className="p-lg">
                              Our admin app to manage products works on any
                              browser and tablets.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
                          Yes, we offer a 30 day free trial on our starter kit.
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
                          Signet is designed with privacy first approach. We
                          comply with GDPR, CCPA and LGPD privacy laws.
                        </p>
                      </div>
                      {/* QUESTION #6 */}
                      <div className="question wow fadeInUp">
                        {/* Question */}
                        <h5 className="h5-md">
                          Can I integrate Signet with my existing software?
                        </h5>
                        {/* Answer */}
                        <ul className="simple-list">
                          <p className="p-lg">
                            Yes. Signet is designed on a API first pattern,
                            which can be used across any existing platform for
                            seamless integration.
                          </p>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* END QUESTIONS HOLDER */}
                </div>
                {/* End row */}
              </div>
              {/* END FAQs-2 QUESTIONS */}
              {/* MORE QUESTIONS BUTTON */}
              <div className="row">
                <div className="col">
                  <div className="more-questions">
                    <h5 className="h5-sm">
                      Have more questions?
                      <Link href={"/contact"}>Ask your question here</Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/* End container */}
          </section>
        </div>
      </div>
    </>
  );
}
