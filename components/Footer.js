import Link from "next/link";
import React, { useEffect, useState } from "react";

function Footer() {
  const [saveEmailPopup, setSaveEmailPopup] = useState(false);
  const [email, setEmail] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setSaveEmailPopup(true);
    }, 5000);
  }, []);

  const saveEmail = async (e) => {
    e.preventDefault();
    if (!email) {
      return;
    }
    await fetch(process.env.NEXT_PUBLIC_API_URL + "general/saveEmail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    setSaveEmailPopup(false);
    setEmail("");
  };

  return (
    <>
      <hr className="divider" />
      {saveEmailPopup && (
        <>
          <section
            id="cta-4"
            className="cta-section division pt-4 email-popup animate__animated animate__fadeIn"
          >
            <div className="container w-50">
              <div className="bg-white cta-4-wrapper ">
                <div className="row d-flex align-items-center">
                  {/* CALL TO ACTION TEXT */}
                  <div className="col-lg-7 col-lg-8">
                    <div className="cta-4-txt">
                      <h4 className="h4-xl pb-30">
                        Enter your email to get in touch
                      </h4>
                      <span
                        onClick={() => setSaveEmailPopup(false)}
                        className="close-btn"
                      >
                        X
                      </span>

                      <form name="contactform" className="row contact-form">
                        {/* Form Select */}

                        {/* Contact Form Input */}

                        <div className="col-md-11">
                          {/* <span>
                      Please carefully check your email address htmlFor accuracy
                    </span> */}
                          <input
                            type="text"
                            name="email"
                            className="form-control email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        {/* Contact Form Button */}
                        <div className="col-md-1 form-btn text-right">
                          <button
                            onClick={saveEmail}
                            className="btn btn-yellow btn-lg tra-yellow-hover submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* CALL TO ACTION BUTTON */}
                </div>
              </div>{" "}
              {/* End row */}
            </div>{" "}
          </section>
        </>
      )}
      <footer
        // style={{ backgroundImage: "url(/images/map-bg.png)" }}
        id="footer-1"
        className="footer division"
      >
        <div className="container">
          {/* FOOTER CONTENT */}
          <div className="row">
            {/* FOOTER INFO */}
            <div className="col-lg-4">
              <div className="footer-info mb-40">
                {/* Footer Logo */}
                <img
                  className="footer-logo mb-25"
                  src="/images/logo_dark.svg"
                  alt="footer-logo"
                />
                {/* Text */}
                <p className="p-md">
                  Signet Tags - Blockchain-based authenticity and Brand
                  protection solution.{" "}
                </p>
                <p></p>
              </div>
            </div>
            {/* FOOTER LINKS */}
            <div className="col-sm-6 col-md-3 col-lg-2">
              <div className="footer-links mb-40">
                {/* Title */}
                <div className="h4-font footer-head">Company</div>
                {/* Footer Links */}
                <ul className="foo-links text-secondary clearfix">
                  <li>
                    <p className="p-md">
                      <Link href={"/technology"}>Technology</Link>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <Link
                        target={"_blank"}
                        href={"https://app.signettags.com/"}
                      >
                        Login to app
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <Link href={"/contact"}>Contact Us</Link>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <Link href={"/privacy-policy"}>Privacy Policy</Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* FOOTER LINKS */}
            <div className="col-sm-6 col-md-3 col-lg-2">
              <div className="footer-links mb-40">
                {/* Title */}
                <div className="h4-font footer-head">Discover</div>
                {/* Footer List */}
                <ul className="foo-links text-secondary clearfix">
                  <li>
                    <p className="p-md">
                      <Link href={"/blog"}>Our Blog</Link>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <Link href={"/pricing"}>Plans &amp; Pricing</Link>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <Link
                        target={"_blank"}
                        href={
                          "https://documenter.getpostman.com/view/24513031/2s93JtQPYp"
                        }
                      >
                        API & Resources
                      </Link>
                    </p>
                  </li>
                  {/* <li>
										<p className="p-md">
											<Link target={'_blank'} href={'https://shop.signettags.com/'}>Signet Shop</Link>
										</p>
									</li> */}
                </ul>
              </div>
            </div>
            {/* FOOTER LINKS */}
            <div className="col-sm-6 col-md-3 col-lg-2">
              <div className="footer-links mb-40">
                {/* Title */}
                <div className="h4-font footer-head">Industries</div>
                {/* Footer List */}
                <ul className="foo-links text-secondary clearfix">
                  <li>
                    <p className="p-md">
                      <Link href={"/industries/agriculture"}>Agriculture</Link>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <Link href={"/industries/pharmaceuticals"}>
                        Pharmaceuticals
                      </Link>
                    </p>
                  </li>

                  <li>
                    <p className="p-md">
                      <Link href={"/industries/cosmetics-and-perfumes"}>
                        Cosmetics & Perfumes
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <Link href={"/industries/food-and-beverages"}>
                        Food & Beverages
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <Link href={"/industries/auto-parts"}>Auto Parts</Link>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <Link href={"/industries/cannabis"}>Cannabis</Link>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <Link href={"/industries/document-security"}>
                        Document Security
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <Link href={"/industries/clothing-and-footwear"}>
                        Clothing and Footwear
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* FOOTER LINKS */}
            <div className="col-sm-6 col-md-3 col-lg-2">
              <div className="footer-links mb-40">
                {/* Title */}
                <div className="h4-font footer-head">Links</div>
                {/* Footer Links */}
                <ul className="foo-links text-secondary clearfix">
                  <li>
                    <p className="p-md">
                      <Link href={"/request-demo"}>Request Demo</Link>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <a href="/pricing">Free Trial</a>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <a
                        href="https://www.youtube.com/@signettags"
                        target="_blank"
                      >
                        All Videos
                      </a>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <Link
                        href={
                          "https://signet-admin.vercel.app/experience?tagId=135ymo9"
                        }
                      >
                        Platform Experience
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <Link href={"/patent"}>Patent Status</Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          {/* END FOOTER CONTENT */}
          <hr />
          {/* BOTTOM FOOTER */}
          <div className="bottom-footer">
            <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
              {/* FOOTER COPYRIGHT */}
              <div className="col">
                <div className="footer-copyright">
                  <p>© 2023 Signet. All Rights Reserved</p>
                </div>
              </div>
              {/* BOTTOM FOOTER LINKS */}
              <div className="col">
                <ul className="bottom-footer-list text-secondary text-end">
                  <li className="first-li">
                    <p>
                      <a
                        href="https://www.youtube.com/@signettags"
                        target="_blank"
                      >
                        Youtube
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="https://twitter.com/SignetTags" target="_blank">
                        Twitter
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a
                        href=" https://www.instagram.com/signettags/"
                        target="_blank"
                      >
                        Instagram
                      </a>
                    </p>
                  </li>
                  <li className="last-li">
                    <p>
                      <a
                        href="https://www.linkedin.com/company/signet-tags/"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* BOTTOM FOOTER */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
