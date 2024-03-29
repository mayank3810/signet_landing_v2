import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Footer() {
	const [saveEmailPopup, setSaveEmailPopup] = useState(false);
	const [successMessage, setSuccessMessage] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	const [email, setEmail] = useState('');

	const router = useRouter();

	useEffect(() => {
		const routeBlackList = ['/tamper-proof-seal', '/digital-hologram-seal'];
		const isDisabled = routeBlackList.indexOf(router.pathname.toLowerCase()) > -1;

    // commenting out this popup because it vreated troubles in running paid ads
		// setTimeout(() => {
		// 	if (localStorage.getItem('showPopup') === null && !isDisabled) {
		// 		setSaveEmailPopup(true);
		// 	}
		// }, 3000);
	}, [router.pathname]);

	const saveEmail = async (e) => {
		e.preventDefault();

		const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
		const valid = emailRegex.test(email);
		// console.log(valid);

		if (!email) {
			setErrorMessage(true);
			setTimeout(() => {
				setErrorMessage(false);
			}, 3000);
			return;
		}
		if (!valid) {
			setErrorMessage(true);
			setTimeout(() => {
				setErrorMessage(false);
			}, 3000);
			return;
		}
		await fetch(process.env.NEXT_PUBLIC_API_URL + 'general/saveEmail', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
			}),
		});
		closePopup();

		setSuccessMessage(true);
		setTimeout(() => {
			setSuccessMessage(false);
		}, 3000);
	};

	const closePopup = async (e) => {
		localStorage.setItem('showPopup', 'false');
		setSaveEmailPopup(false);
		setEmail('');
	};

	return (
    <>
      <hr className="divider" />

      {successMessage && (
        <div className="sucess-message animate__animated animate__fadeIn">
          Thank you for subscribing to our Newsletter.
        </div>
      )}

      {errorMessage && (
        <div className="error-message animate__animated animate__fadeIn">
          Please enter a valid email.
        </div>
      )}

      {saveEmailPopup && (
        <>
          <section
            id="cta-4"
            className="cta-section division pt-4 email-popup animate__animated animate__fadeIn"
          >
            <div className="container popup-container">
              <div className="bg-white home-page-popup">
                <div className="row d-flex align-items-center">
                  <div className="col-12">
                    <div className="cta-4-txt">
                      <h5 className="h5-lg pt-15">
                        Subscribe to our Newsletter
                      </h5>
                      <p className="pb-30">
                        Only valuable content from us, promised!
                      </p>
                      <span onClick={() => closePopup()} className="close-btn">
                        x
                      </span>

                      <form name="contactform" className="row contact-form">
                        <div className="col-12">
                          <input
                            type="text"
                            name="email"
                            className="form-control email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div className="col-12">
                          <button
                            onClick={saveEmail}
                            className="btn btn-block btn-yellow w-100 tra-yellow-hover submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>{" "}
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
                <Image
                  className="footer-logo mb-25"
                  src="/images/logo_dark.svg"
                  alt="Signet Tags Dark Logo"
                  width={184}
                  height={55}
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
                  {/* <li>
                    <p className="p-md">
                      <Link href={"/pricing"}>Plans &amp; Pricing</Link>
                    </p>
                  </li> */}
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
                  <li>
                    <p className="p-md">
                      <Link target={"_blank"} href={"/tamper-proof-seal"}>
                        Tamper proof seal
                      </Link>
                    </p>
                  </li>

                  <li>
                    <p className="p-md">
                      <Link target={"_blank"} href={"/digital-hologram-seal"}>
                        Digital Hologram seal
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
                      <Link href={"/request-demo"}>Request a Demo</Link>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <Link href={"/anti-counterfeit-solutions"}>
                        Anti Counterfeit Solutions
                      </Link>
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
                  <li>
                    <p className="p-md">
                      <Link href={"/qr-codes"}>Generate QR Codes</Link>
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
