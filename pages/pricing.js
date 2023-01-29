import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import Testimonials from "@/components/Testimonials";
import React from "react";
import { useInView } from "react-intersection-observer";

function Pricing() {
  const [containerRef, inContainerView] = useInView({ rootMargin: "-350px" });

  return (
    <>
      <Header scroll={inContainerView} />
      <PageTitle
        image="../images/download-page.jpg"
        title={"Simple And Flexible Pricing"}
        subtitle={"No credit card required. Change or cancel your plan anytime"}
      />
      <div ref={containerRef}>
        {/* PRICING-2
			============================================= */}
        <section
          id="pricing-2"
          className="bg-snow pb-60 inner-page-hero pricing-section division"
        >
          <div className="container">
            {/* PRICING TABLES */}
            <div className="pricing-2-row pc-25">
              <div className="row row-cols-1 row-cols-md-3">
                {/* BASIC PLAN */}
                <div className="col">
                  <div className="pricing-2-table bg-white mb-40 wow fadeInUp">
                    {/* Plan Price */}
                    <div className="pricing-plan">
                      {/* Plan Title */}
                      <div className="pricing-plan-title">
                        <h5 className="h5-xs">Basic</h5>
                        <h6 className="h6-sm bg-lightgrey">Save 30%</h6>
                      </div>
                      {/* Price */}
                      <sup className="dark-color">$</sup>
                      <span className="dark-color">7</span>
                      <sup className="validity dark-color">
                        <span>.99</span> / month
                      </sup>
                      <p className="p-md">Billed as $96 per year</p>
                    </div>
                    {/* Plan Features  */}
                    <ul className="features">
                      <li>
                        <p className="p-md">
                          <span>25</span> Projects
                        </p>
                      </li>
                      <li>
                        <p className="p-md">
                          <span>10</span> mySQL Database
                        </p>
                      </li>
                      <li>
                        <p className="p-md">
                          <span>25 GB</span> of Storage
                        </p>
                      </li>
                      <li>
                        <p className="p-md">
                          <span>Premium</span> Support
                        </p>
                      </li>
                    </ul>
                    {/* Pricing Plan Button */}
                    <a
                      href="#"
                      className="btn btn-sm btn-tra-grey tra-yellow-hover"
                    >
                      Select Plan
                    </a>
                  </div>
                </div>{" "}
                {/* END BASIC PLAN */}
                {/* AGENCY PLAN */}
                <div className="col">
                  <div className="pricing-2-table bg-white mb-40 wow fadeInUp">
                    {/* Plan Price */}
                    <div className="pricing-plan">
                      {/* Plan Title */}
                      <div className="pricing-plan-title">
                        <h5 className="h5-xs">Agency</h5>
                        <h6 className="h6-sm bg-lightgrey">Save 25%</h6>
                      </div>
                      {/* Price */}
                      <sup className="dark-color">$</sup>
                      <span className="dark-color">11</span>
                      <sup className="validity dark-color">
                        <span>.25</span> / month
                      </sup>
                      <p className="p-md">Billed as $135 per year</p>
                    </div>
                    {/* Plan Features  */}
                    <ul className="features">
                      <li>
                        <p className="p-md">
                          <span>100</span> Projects
                        </p>
                      </li>
                      <li>
                        <p className="p-md">
                          <span>25</span> mySQL Database
                        </p>
                      </li>
                      <li>
                        <p className="p-md">
                          <span>80 GB</span> of Storage
                        </p>
                      </li>
                      <li>
                        <p className="p-md">
                          <span>Premium</span> Support
                        </p>
                      </li>
                    </ul>
                    {/* Pricing Plan Button */}
                    <a
                      href="#"
                      className="btn btn-sm btn-tra-grey tra-yellow-hover"
                    >
                      Select Plan
                    </a>
                  </div>
                </div>{" "}
                {/* END AGENCY PLAN  */}
                {/* ADVANCED PLAN */}
                <div className="col">
                  <div className="pricing-2-table bg-white mb-40 wow fadeInUp">
                    {/* Plan Price  */}
                    <div className="pricing-plan highlight">
                      {/* Plan Title */}
                      <div className="pricing-plan-title">
                        <h5 className="h5-xs">Advanced</h5>
                        <h6 className="h6-sm bg-yellow black-color">Popular</h6>
                      </div>
                      {/* Price */}
                      <sup className="dark-color">$</sup>
                      <span className="dark-color">15</span>
                      <sup className="validity dark-color">
                        <span>.99</span> / month
                      </sup>
                      <p className="p-md">Billed as $199 per year</p>
                    </div>
                    {/* Plan Features  */}
                    <ul className="features">
                      <li>
                        <p className="p-md">
                          <span>Unlimited</span> Projects
                        </p>
                      </li>
                      <li>
                        <p className="p-md">
                          <span>50</span> mySQL Database
                        </p>
                      </li>
                      <li>
                        <p className="p-md">
                          <span>500 GB</span> of Storage
                        </p>
                      </li>
                      <li>
                        <p className="p-md">
                          <span>VIP</span> Support
                        </p>
                      </li>
                    </ul>
                    {/* Pricing Plan Button */}
                    <a
                      href="#"
                      className="btn btn-sm btn-yellow tra-yellow-hover"
                    >
                      Select Plan
                    </a>
                  </div>
                </div>{" "}
                {/* END ADVANCED PLAN */}
              </div>
            </div>{" "}
            {/* END PRICING TABLES */}
            {/* PRICING COMPARE */}
            <div className="pricing-compare pc-40">
              <div className="row">
                <div className="col">
                  {/* Title */}
                  <h3 className="h3-sm text-center">
                    Compare Pricing Packages
                  </h3>
                  {/* Table */}
                  <div className="table-responsive">
                    <table className="table text-center">
                      <thead>
                        <tr>
                          <th style={{ width: "34%" }} />
                          <th style={{ width: "22%" }}>Basic</th>
                          <th style={{ width: "22%" }}>Agency</th>
                          <th style={{ width: "22%" }}>Advanced</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" className="text-start">
                            25 Projects
                          </th>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-start">
                            100 Projects
                          </th>
                          <td className="ico-10 disabled-option">
                            <span className="flaticon-cancel" />
                          </td>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-start">
                            Unlimited
                          </th>
                          <td className="ico-10 disabled-option">
                            <span className="flaticon-cancel" />
                          </td>
                          <td className="ico-10 disabled-option">
                            <span className="flaticon-cancel" />
                          </td>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-start">
                            10 mySQL Database
                          </th>
                          <td className="ico-10 disabled-option">
                            <span className="flaticon-cancel" />
                          </td>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-start">
                            25 mySQL Database
                          </th>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-start">
                            50 mySQL Database
                          </th>
                          <td className="ico-10 disabled-option">
                            <span className="flaticon-cancel" />
                          </td>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-start">
                            25 GB of Storage
                          </th>
                          <td className="ico-10 disabled-option">
                            <span className="flaticon-cancel" />
                          </td>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-start">
                            80 GB of Storage
                          </th>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-start">
                            500 mySQL Database
                          </th>
                          <td className="ico-10 disabled-option">
                            <span className="flaticon-cancel" />
                          </td>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-start">
                            Premium Support
                          </th>
                          <td className="ico-10 disabled-option">
                            <span className="flaticon-cancel" />
                          </td>
                          <td className="ico-10 disabled-option">
                            <span className="flaticon-cancel" />
                          </td>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-start">
                            VIP Support
                          </th>
                          <td className="ico-10 disabled-option">
                            <span className="flaticon-cancel" />
                          </td>
                          <td className="ico-10 disabled-option">
                            <span className="flaticon-cancel" />
                          </td>
                          <td className="ico-15 green-color">
                            <span className="flaticon-check" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>{" "}
                  {/* End Table */}
                </div>
              </div>
            </div>{" "}
            {/* END PRICING COMPARE */}
            {/* PRICING NOTICE TEXT */}
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="pricing-notice text-center mb-40">
                  <p className="p-md">
                    The above prices do not include applicable taxes based on
                    your billing address. The final price will be displayed on
                    the checkout page, before the payment is completed
                  </p>
                </div>
              </div>
            </div>
            {/* PAYMENT METHODS */}
            <div className="payment-methods pc-30">
              <div className="row row-cols-1 row-cols-md-3">
                {/* Payment Methods */}
                <div className="col col-lg-5">
                  <div className="pbox mb-40">
                    {/* Title */}
                    <h6 className="h6-md">Accepted Payment Methods</h6>
                    {/* Payment Icons */}
                    <ul className="payment-icons ico-50">
                      <li>
                        <img
                          src="/images/png-icons/visa.png"
                          alt="payment-icon"
                        />
                      </li>
                      <li>
                        <img
                          src="/images/png-icons/am.png"
                          alt="payment-icon"
                        />
                      </li>
                      <li>
                        <img
                          src="/images/png-icons/discover.png"
                          alt="payment-icon"
                        />
                      </li>
                      <li>
                        <img
                          src="/images/png-icons/paypal.png"
                          alt="payment-icon"
                        />
                      </li>
                      <li>
                        <img
                          src="/images/png-icons/jcb.png"
                          alt="payment-icon"
                        />
                      </li>
                      <li>
                        <img
                          src="/images/png-icons/shopify.png"
                          alt="payment-icon"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Payment Guarantee */}
                <div className="col col-lg-4">
                  <div className="pbox mb-40">
                    {/* Title */}
                    <h6 className="h6-md">Money Back Guarantee</h6>
                    {/* Text */}
                    <p>
                      Explore Signet Premium for 14 days. If it’s not a perfect
                      fit, receive a full refund.
                    </p>
                  </div>
                </div>
                {/* Payment Encrypted */}
                <div className="col col-lg-3">
                  <div className="pbox mb-40">
                    {/* Title */}
                    <h6 className="h6-md">SSL Encrypted Payment</h6>
                    {/* Text */}
                    <p>
                      Your information is protected by 256-bit SSL encryption.
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* END PAYMENT METHODS */}
          </div>{" "}
          {/* End container */}
        </section>{" "}
        {/* END PRICING-2 */}
        <CallToAction />
        {/* FAQs-2
			============================================= */}
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
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis a libero tempus, blandit and cursus varius and
                    magnis sapien
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
                      <h5 className="h5-sm">
                        Can I see Signet in action before purchasing?
                      </h5>
                      {/* Answer */}
                      <p className="p-lg">
                        Etiam amet mauris suscipit in odio integer congue metus
                        vitae arcu mollis blandit ultrice ligula egestas and
                        magna suscipit lectus magna suscipit luctus blandit
                        vitae
                      </p>
                    </div>
                    {/* QUESTION #2 */}
                    <div className="question wow fadeInUp">
                      {/* Question */}
                      <h5 className="h5-sm">
                        What are the requirements for using Signet?
                      </h5>
                      {/* Answer */}
                      <p className="p-lg">
                        An enim nullam tempor sapien gravida a donec ipsum enim
                        an porta justo integer at velna vitae auctor integer
                        congue undo magna at pretium purus pretium
                      </p>
                    </div>
                    {/* QUESTION #3 */}
                    <div className="question wow fadeInUp">
                      {/* Question */}
                      <h5 className="h5-sm">
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
                            Nemo ipsam egestas volute turpis dolores ut aliquam
                            quaerat sodales sapien undo pretium a purus
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
                      <h5 className="h5-sm">Do you have a free trial?</h5>
                      {/* Answer */}
                      <p className="p-lg">
                        Cubilia laoreet augue egestas and luctus donec curabite
                        diam vitae dapibus libero and quisque gravida donec and
                        neque. Blandit justo aliquam molestie nunc sapien
                      </p>
                    </div>
                    {/* QUESTION #5 */}
                    <div className="question wow fadeInUp">
                      {/* Question */}
                      <h5 className="h5-sm">
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
                      <h5 className="h5-sm">I have an issue with my account</h5>
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
        {/* END FAQs-2 */}
        <Testimonials />
        {/* END TESTIMONIALS-1 */}
        <Footer />
      </div>
    </>
  );
}

export default Pricing;