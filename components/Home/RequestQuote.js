import Link from "next/link";
import React, { useState } from "react";
import VideoPopup from "../VideoPopup";
import EnquiryForm from "../../components/Onboarding/EnquiryForm";

function RequestQuote() {
  // const [containerRef, inContainerView] = useInView({ threshold: 0.1 });

  const [open, setOpen] = useState(false);

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
        <VideoPopup
          open={open}
          setOpen={setOpen}
          link={"https://www.youtube.com/embed/YQUjE2koNRI"}
        />
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
                <h1 className="h1-md white-color">Tamper Evident Seals</h1>
                <p className="p-xl">Protect & Engage with your customers.</p>
                <p className="">
                  We specialize in providing top-quality tamper evident seals
                  for a variety of industries and applications. Our tamper
                  evident seals are designed to provide an extra layer of
                  security and protection, ensuring that your products remain
                  safe and secure from tampering and unauthorized access.
                </p>
                <div className="btns-group">
                  <div
                    onClick={() => setOpen(!open)}
                    className="video-popup2 btn btn-md btn-transparent ico-20 ico-left"
                  >
                    <span className="flaticon-play" /> Watch Video
                  </div>
                </div>
                <div>
                  <ul className="header-advantages mt-4">
                    <li> Custom designed Tags</li>
                    <li>Track and trace customers</li>
                    <li>Increase repeat sales</li>
                    <li>Implement Rewards and loyalty program</li>
                    <li>Implement Warranty management</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="bg-white p-4">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RequestQuote;
