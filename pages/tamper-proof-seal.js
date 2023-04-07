import Head from "next/head";
import Header from "@/components/Header";
import Content2 from "@/components/Home/Content2";
import Content3 from "@/components/Home/Content3";
import Content4 from "@/components/Home/Content4";
import RequestQuote from "@/components/Home/RequestQuote";

import Features from "@/components/Home/Features";
import { Inter } from "@next/font/google";
import Link from "next/link";
import React, { useEffect, useState } from 'react';

import { useInView } from "react-intersection-observer";
import Brands from "@/components/Brands";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [headerRef, inHeaderView] = useInView();
  const [init, setInit] = useState(true);

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
      <Head>
        <title>Signet Tags: Blockchain-Based Brand Protection Solution</title>
        <link
          rel="canonical"
          href="https://www.signettags.com/"
          key="canonical"
        />
        <meta
          name="title"
          content="Signet Tags - Blockchain-based authenticity and Brand protection solution"
        />
        <meta
          name="description"
          content="Signet tags link your products with blockchain-proven ownership. The blockchain solution ensures authenticity and increases customer engagement. "
        />
        <meta
          name="keywords"
          content="signet, signet tags, signettags, brand protection software, blockchain-proven ownership"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="Signet Tags" />
        <meta property="og:url" content="https://www.signettags.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Brand protection and authenticity with Signet Tags "
        />
        <meta
          property="og:description"
          content="Ensure authenticity & engage customers with Signet Tags."
        />
        <meta property="og:image" content="/assets/images/Twitter-card.jpeg" />
        <meta property="og:locale" content="en_US" />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SignetTags" />
        <meta name="twitter:url" content="https://www.signettags.com/" />
        <meta
          name="twitter:title"
          content="Brand protection and authenticity with Signet Tags "
        />
        <meta
          name="twitter:description"
          content="Ensure authenticity & engage customers with Signet Tags."
        />
        <meta name="twitter:image" content="/assets/images/Twitter-card.jpeg" />
      </Head>

      <div id="page" className="page">
        <Header scroll={inHeaderView} />
        <RequestQuote />


        <div ref={headerRef}>
          <Brands />

          <Features />
          <hr className="divider" />

          <section
            id="content-2"
            className="content-2 wide-60 content-section division"
          >
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-md-5 col-lg-6">
                  <div
                    className={`duration-1.75 ${init ? 'rel img-block left-column animate__animated animate__slideInUp' : 'rel img-block left-column animate__animated'
                      }`}
                  >
                    <img className="img-fluid" src="/images/scanning-theme.png" alt="content-image" />
                  </div>
                </div>
                <div className="col-md-7 col-lg-6">
                  <div
                    className={`duration-1.75 ${init ? 'txt-block right-column animate__animated animate__slideInUp' : 'txt-block right-column animate__animated'
                      }`}
                  >
                    <h2 className="h2-xs">Detect tag tampering in seconds</h2>
                    <p className="p-lg">
                      Signet tags with provides an easy and quick way to check product authenticity and tag tampering.
                    </p>
                    <p className="p-lg">
                      Our tamper evident seals are made from high-quality materials and are available in a range of sizes and colors to meet your specific needs. Whether you need a small tamper evident seal for a medicine bottle or a larger seal for a shipping container, we have you covered.
                    </p>
                    <p className="p-lg">
                      Our tamper evident seals are easy to use and can be applied quickly and easily, making them a convenient and cost-effective solution for your security needs. They are also designed to be durable and long-lasting, ensuring that they remain in place and provide reliable security for as long as you need them.
                    </p>

                    <Link href="#">
                      <div className="btn btn-yellow tra-yellow-hover color-white mr-15">Request a quote</div>
                    </Link>
                  </div>
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </section>


          <section id="content-5" className="content-5 ws-wrapper content-section division">
            <div className="container">
              <div className="content-5-wrapper bg-whitesmoke">
                <div className="row d-flex align-items-center">
                  <div className="col-md-7 col-lg-6">
                    <div className="txt-block left-column">
                      <div
                        className={`duration-1 ${init ? 'cbox mb-40 animate__animated animate__fadeInLeft' : 'cbox mb-40 animate__animated'}`}
                      >
                        <div className="cbox-ico">
                          <div className="dark-color ico-65">
                            <span>
                              <img src="/images/nfc-logo.png" alt="ico-bkg" />
                            </span>
                          </div>
                        </div>
                        <div className="cbox-txt">
                          <h3 className="h3-font mb-1">Customized logo and packaging </h3>
                          <p className="p-lg">Advanced Security and Privacy for Trusted IoT Applications. Secure NFC tags with random changing keys</p>
                        </div>
                      </div>
                      <div
                        className={`duration-1.5 ${init ? 'cbox mb-40 animate__animated animate__fadeInLeft' : 'cbox mb-40 animate__animated'}`}
                      >
                        <div className="cbox-ico">
                          <div className="dark-color ico-65">
                            <span>
                              <img src="/images/icons8-blockchain-technology-80.png" alt="ico-bkg" />
                            </span>
                          </div>
                        </div>
                        <div className="cbox-txt">
                          <h3 className="h3-font mb-1">Affordable Pricing</h3>
                          <p className="p-lg">Digital blockchain assets that cannot be duplicated, ensuring transparent and immutable information.</p>
                        </div>
                      </div>
                      <div
                        className={`duration-1.75 ${init ? 'cbox mb-40 animate__animated animate__fadeInLeft' : 'cbox mb-40 animate__animated'}`}
                      >
                        <div className="cbox-ico">
                          <div className="dark-color ico-65">
                            <span>
                              <img src="/images/icons8-authentic-64.png" alt="ico-bkg" />
                            </span>
                          </div>
                        </div>
                        <div className="cbox-txt">
                          <h3 className="h3-font mb-1">Digital NFC chip tag</h3>
                          <p className="p-lg">Easy check of authenticity for consumers. No special app download required.</p>
                        </div>
                      </div>
                    </div>
                    <Link href="#">
                      <div className="btn btn-yellow tra-yellow-hover color-white mr-15">Request a quote</div>
                    </Link>
                  </div>{' '}
                  <div className="col-md-5 col-lg-6">
                    <div
                      className={`duration-0.75 ${init ? 'img-block right-column animate__animated animate__fadeIn' : 'img-block right-column animate__animated'
                        }`}
                    >
                      <img className="img-fluid" src="/images/nfc-blockchain.jpg" alt="content-image" />
                    </div>
                  </div>
                </div>
              </div>{' '}
              {/* End row */}
            </div>
          </section>

          <section
            // ref={containerRef}
            id="content-3"
            className="content-3 wide-60 content-section division"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                  <div className="section-title title-01 mb-70">
                    {/* Title */}
                    <h2 className="h2-md">Unique Digital Experience</h2>
                    {/* Text */}
                    <p className="p-xl">
                      Manufacturers can use digital experiences to customize the user experience for their customers. This way, customers can tap on products and get more information about them, making the shopping experience more convenient and informative.
                    </p>
                  </div>
                </div>
              </div>
              {/* TOP ROW */}
              <div className="top-row pb-50">
                <div className="row d-flex align-items-center">
                  {/* IMAGE BLOCK */}
                  <div className="col-md-5 col-lg-6">
                    <div
                      className={`duration-1.75 ${init ? 'rel img-block left-column animate__animated animate__slideInUp' : 'rel img-block left-column animate__animated'
                        }`}
                    // style={{ animationDuration: '1.75s' }}
                    >
                      <img className="img-fluid" src="/images/digital-experience.jpg" alt="content-image" />
                    </div>
                  </div>
                  {/* TEXT BLOCK */}
                  <div className="col-md-7 col-lg-6">
                    <div
                      className={`duration-1.75 ${init
                        ? 'txt-block right-column left-column animate__animated animate__slideInUp'
                        : 'txt-block right-column left-column animate__animated'
                        }`}
                    // style={{ animationDuration: '1.75s' }}
                    >
                      {/* TEXT BOX */}
                      <div className="txt-box mb-20">
                        {/* Title */}
                        <h3 className="h3-font mb-4">Easily share essential information with customers</h3>
                        {/* Text */}
                        <p className="p-lg">
                          Customers can tap on the product to get updated information about essential attributes such as ownership, warranty, safety, recyclability, and value. This allows customers to make informed decisions about the products they purchase and use.
                          By being able to see this information, customers can be sure that they are making the best choice for them when it comes to the products they buy.
                        </p>
                      </div>
                      {/* TEXT BOX */}
                      <div className="txt-box">
                        {/* Title */}
                        <h3 className="h3-font mb-4">Advanced dashboard for customer analytics</h3>
                        {/* List */}
                        <ul className="simple-list">
                          <li className="list-item">
                            <p className="p-lg">
                              This powerful AI tool helps brands keep track of their entire supply chain in real time. The online portal stores and verifies product info, ensuring complete data transparency. This allows for digital audits, live alerts, and access to advanced analytics.
                            </p>
                          </li>
                          <li className="list-item">
                            <p className="p-lg">Send push notifications and collect feedbacks on your products with our advanced web portal.</p>
                          </li>
                        </ul>
                        <Link href="#">
                          <div className="btn btn-yellow tra-yellow-hover color-white mr-15">Request a quote</div>
                        </Link>
                      </div>{' '}
                    </div>
                  </div>{' '}
                </div>
              </div>{' '}


            </div>{' '}
          </section>

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
                        <div className="fbox-1 mb-40 wow fadeInUp fadeInUp-visible">
                          <Link href={"/industries/cosmetics-and-perfumes"}>
                            <div className="fbox-ico-center ico-60">
                              <img
                                src="/images/industries/perfume-bottle-100.png"
                                alt="ico-bkg"
                              />
                            </div>
                            <div className="fbox-txt-center">
                              <h3 className="h3-font my-3">
                                Cosmetics & Perfumes
                              </h3>
                              <p className="p-lg">
                                Engage your consumers with fun, informative,
                                smart packaging that also protects your brand
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col">
                        <div className="fbox-1 mb-40 wow fadeInUp fadeInUp-visible">
                          <Link href={"/industries/food-and-beverages"}>
                            <div className="fbox-ico-center ico-60">
                              <img
                                src="/images/industries/wine-bottle-100.png"
                                alt="ico-bkg"
                              />
                            </div>
                            <div className="fbox-txt-center">
                              <h3 className="h3-font my-3">Food & Beverages</h3>
                              <p className="p-lg">
                                Customer Engagement + Anti-Counterfeit
                                Protection for Food & Beverages Brands
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className="col">
                        <div className="fbox-1 mb-40 wow fadeInUp fadeInUp-visible">
                          <Link href={"/industries/agriculture"}>
                            <div className="fbox-ico-center ico-60">
                              <img
                                src="/images/industries/pesticide-100.png"
                                alt="ico-bkg"
                              />
                            </div>
                            <div className="fbox-txt-center">
                              <h3 className="h3-font my-3">Agriculture</h3>
                              <p className="p-lg">
                                Tag, track, and instantaneously authenticate
                                agrochemical products
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className="col">
                        <div className="fbox-1 mb-40 wow fadeInUp fadeInUp-visible">
                          <Link href={"/industries/auto-parts"}>
                            <div className="fbox-ico-center ico-60">
                              <img
                                src="/images/industries/wheel-100.png"
                                alt="ico-bkg"
                              />
                            </div>
                            <div className="fbox-txt-center">
                              <h3 className="h3-font my-3">Auto Parts</h3>
                              <p className="p-lg">
                                Protect your automotive brand and your customers
                                from counterfeit automotive parts
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className="col">
                        <div className="fbox-1 mb-40 wow fadeInUp fadeInUp-visible">
                          <Link href={"/industries/pharmaceuticals"}>
                            <div className="fbox-ico-center ico-60">
                              <img
                                src="/images/industries/medicines-100.png"
                                alt="ico-bkg"
                              />
                            </div>
                            <div className="fbox-txt-center">
                              <h3 className="h3-font my-3">Pharmaceuticals</h3>
                              <p className="p-lg">
                                Smart packaging for Pharmaceuticals brands opens
                                a new channel to engage, protect and build trust
                                with your customers.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className="col">
                        <div className="fbox-1 mb-40 wow fadeInUp fadeInUp-visible">
                          <Link href={"/industries/cannabis"}>
                            <div className="fbox-ico-center ico-60">
                              <img
                                src="/images/industries/cannabis-100.png"
                                alt="ico-bkg"
                              />
                            </div>
                            <div className="fbox-txt-center">
                              <h3 className="h3-font my-3">Cannabis</h3>
                              <p className="p-lg">
                                Smart packaging for Cannabis brands opens a new
                                channel to engage, protect, and build trust with
                                your customers.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className="col">
                        <div className="fbox-1 mb-40 wow fadeInUp fadeInUp-visible">
                          <Link href={"/industries/document-security"}>
                            <div className="fbox-ico-center ico-60">
                              <img
                                src="/images/industries/diploma-100.png"
                                alt="ico-bkg"
                              />
                            </div>
                            <div className="fbox-txt-center">
                              <h3 className="h3-font my-3">
                                Document Security
                              </h3>
                              <p className="p-lg">
                                Providing document security solutions for simple
                                to complex requirements.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col">
                        <div className="fbox-1 mb-40 wow fadeInUp fadeInUp-visible">
                          <Link href={"/industries/clothing-and-footwear"}>
                            <div className="fbox-ico-center ico-60">
                              <img
                                src="/images/industries/t-shirt-100.png"
                                alt="ico-bkg"
                              />
                            </div>
                            <div className="fbox-txt-center">
                              <h3 className="h3-font my-3">
                                Clothing and footwear
                              </h3>

                              <p className="p-lg">
                                Smart packaging for clothing brands opens a new
                                channel to engage, protect, and build trust with
                                your customers.
                              </p>
                            </div>
                          </Link>
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
                    <Link href="#">
                      <div className="video-popup2 btn btn-md btn-orange-red tra-grey-hover ico-15 ico-left">
                        Request a quote
                      </div>
                    </Link>
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
                      Request a quote with a free trial account. <br />
                    </h2>
                    <p className="p-xl">
                      Explore Signet Platform with a Free Trial account to
                      experience the technology yourself before you decide to
                      scale.
                    </p>
                    <Link href="#">
                      <div className="btn btn-yellow tra-yellow-hover color-white mr-15">
                        Request a quote
                      </div>
                    </Link>
                    <p> *No Card Required.</p>
                  </div>
                </div>
              </div>
              {/* IMAGE BLOCK */}
              <div className="row">
                <div className="col">
                  <div className="content-9-img video-preview wow fadeInUp">
                    <iframe
                      className="rounded-20px"
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
                        <h3 className="h3-font mb-3">
                          Can I see Signet Tags in action before purchasing?
                        </h3>
                        {/* Answer */}
                        <p className="p-lg">
                          Yes, you can resister a free trial account with us.
                          The free trial account can be used to test the digital
                          and authentication experience.
                        </p>
                      </div>
                      {/* QUESTION #2 */}
                      <div className="question wow fadeInUp">
                        {/* Question */}
                        <h3 className="h3-font mb-3">
                          What are the requirements for using Signet Tags?
                        </h3>
                        {/* Answer */}
                        <p className="p-lg">
                          There are no specific requirements to add brand
                          authentication. NFC authentication doesnot require any
                          app downloads.
                        </p>
                      </div>
                      {/* QUESTION #3 */}
                      <div className="question wow fadeInUp">
                        {/* Question */}
                        <h3 className="h3-font mb-3">
                          Can I use Signet on different devices?
                        </h3>
                        {/* Answer */}
                        <ul className="simple-list">
                          <li className="list-item">
                            <p className="p-lg">
                              Yes, our signet tags are compatible with all major
                              smartphones, including iOS and Android devices.
                            </p>
                          </li>
                          <li className="list-item">
                            <p className="p-lg">
                              Our product management app is designed to work on
                              any browser or tablet, making it a convenient tool
                              for busy professionals.
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
                        <h3 className="h3-font mb-3">
                          Do you have a free trial?
                        </h3>
                        {/* Answer */}
                        <p className="p-lg">
                          Yes, we offer a 30 day free trial for our platform.
                          You get full access to all the platform features.
                        </p>
                      </div>
                      {/* QUESTION #5 */}
                      <div className="question wow fadeInUp">
                        {/* Question */}
                        <h3 className="h3-font mb-3">
                          How does Signettags handle my privacy?
                        </h3>
                        {/* Answer */}
                        <p className="p-lg">
                          Signet is designed with privacy first approach. We
                          comply with GDPR, CCPA and LGPD privacy laws.
                        </p>
                      </div>
                      {/* QUESTION #6 */}
                      <div className="question wow fadeInUp">
                        {/* Question */}
                        <h3 className="h3-font mb-3">
                          Can I integrate Signet with my existing software?
                        </h3>
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
                    <h3 className="h3-font my-3">
                      Have more questions?
                      <Link href={"/contact"}>Ask your question here</Link>
                    </h3>
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
