import React, { useState } from "react";
import EnquiryForm from "../Onboarding/EnquiryForm";
import HologramCoursal from "@/components/HologramCoursal";

function HologramQuote({ open, setOpen }) {
  // const [containerRef, inContainerView] = useInView({ threshold: 0.1 });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  // const getToken = async () => {
  //   const token = await generateAccessToken();
  //   console.log(token);
  // };

  const submitForm = async () => {
    e.preventDefault();

    const emailRegex =
      /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const valid = emailRegex.test(email);
    // console.log(valid);

    if (!email) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 3000);
      return;
    }
    if (!name) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 3000);
      return;
    }
    if (!phone) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 3000);
      return;
    }
    if (!quantity) {
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

    const dataObj = {
      email: email,
      name: name,
      phone: phone,
      quantity: quantity,
      description: description,
    };
    setLoading(true);
    const result = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "general/saveQuote",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObj),
      }
    );
    console.log(result.ok);
    if (result.ok) {
      setLoading(false);
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);
    }
  };

  return (
    <>
      {open && (
        <>
          <div className="mfp-bg mfp-ready" />

          <div
            className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready animate__animated animate__fadeIn"
            tabIndex={-1}
            style={{ overflow: "hidden auto" }}
          >
            <div className="mfp-container mfp-s-ready mfp-iframe-holder">
              <div className="mfp-content">
                <div className="bg-white p-4">
                  <button
                    title="Close (Esc)"
                    type="button"
                    className="mfp-close"
                    onClick={() => setOpen(false)}
                  >
                    ×
                  </button>
                  <EnquiryForm />
                </div>
              </div>
              <div className="mfp-preloader">Loading...</div>
            </div>
          </div>
        </>
      )}

      {successMessage && (
        <div className="sucess-message animate__animated animate__fadeIn">
          Thank you for requesting the quote.
        </div>
      )}

      {errorMessage && (
        <div className="error-message animate__animated animate__fadeIn">
          Please fill all the fields correctly.
        </div>
      )}
      <section id="hero-20" className="bg-fixed hero-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-8 col-lg-8">
              <div className="hero-20-txt white-color">
                <h1 className="h1-md white-color text-left">
                  Modern hologram seals with NFC and QR code
                </h1>

                {/*                
                <div className="btns-group">
                  <div
                    onClick={() => setOpen(!open)}
                    className="video-popup2 btn btn-md btn-transparent ico-20 ico-left"
                  >
                    <span className="flaticon-play" /> Watch Video
                  </div>
                </div> */}
                <div>
                  <ul className="header-advantages mt-4">
                    <li>
                      <img
                        className="check-box-icon"
                        src="/images/icons8-check-48.png"
                        alt="ico-bkg"
                      />
                      <span>Protect & Engage with your customers.</span>
                    </li>
                    <li>
                      <img
                        className="check-box-icon"
                        src="/images/icons8-check-48.png"
                        alt="ico-bkg"
                      />
                      <span>Design customizations available</span>
                    </li>
                    <li>
                      <img
                        className="check-box-icon"
                        src="/images/icons8-check-48.png"
                        alt="ico-bkg"
                      />
                      <span>
                        Collect Feedbacks, Advanced analytics, Increase repeat
                        sales
                      </span>
                    </li>
                    <li>
                      <img
                        className="check-box-icon"
                        src="/images/icons8-check-48.png"
                        alt="ico-bkg"
                      />
                      <span>
                        Implement Rewards, Loyalty program, Warranty management
                      </span>
                    </li>
                  </ul>

                  {/* <Link href="#"> */}
                  <div
                    onClick={() => setOpen(true)}
                    className="btn btn-yellow tra-yellow-hover request-quote-feature color-white mt-15 mb-15"
                  >
                    Get Free Samples
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="mt-4">
                <HologramCoursal />
              </div>
            </div>
          </div>
        </div>
      </section>

      {!open && (
        <div className="request-quote-footer">
          <button
            onClick={() => setOpen(true)}
            className="btn btn-success btn-lg btn-block"
          >
            Get Free Samples
          </button>
        </div>
      )}
    </>
  );
}

export default HologramQuote;
