import Header from "@/components/Header";
import Link from "next/link";
import React, { useState } from "react";

function Onboarding() {
  // { email, name, subject, message }

  const [email, setEmail] = useState({ data: "", error: false });
  const [name, setName] = useState({ data: "", error: false });
  const [subject, setSubject] = useState({ data: "", error: false });
  const [message, setMessage] = useState({ data: "", error: false });

  const [loading, setLoading] = useState(false);
  const [apiResp, setApiResp] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    if (name.data === "") {
      setName({ data: "", error: true });
    }
    if (email.data === "") {
      setEmail({ data: "", error: true });
    }
    if (subject.data === "") {
      setSubject({ data: "", error: true });
    }
    if (message.data === "") {
      setMessage({ data: "", error: true });
    }
    setLoading(true);

    const rawResponse = await fetch(process.env.NEXT_PUBLIC_CONTACT_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.data,
        name: name.data,
        subject: subject.data,
        message: message.data,
      }),
    });
    if (rawResponse.ok) {
      const content = await rawResponse.json();
      setLoading(false);
      setApiResp("Your message has been sent. Thank you.");
      console.log(content);
      setName({ data: "", error: false });
      setEmail({ data: "", error: false });
      setSubject({ data: "", error: false });
      setMessage({ data: "", error: false });
    } else {
      setApiResp("An error occurred. Please resend.");
      setLoading(false);
    }
  };

  return (
    <>
      <section id="login-2" className="login-section division">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-lg-4 side-bar">
              <div className="login-page-logo pt-30">
                <Link href="/" className="logo-black">
                  <img src="/images/logo_dark.svg" alt="header-logo" />
                </Link>
                <p className="p-xl pt-20">Start your free trial</p>
              </div>

              <div className="tab-group">
                <div className="tab active ">
                  <h5 className="h5-md">Step-1</h5>
                  <span className="ico-25 green-color">
                    <span className="flaticon-check"></span>
                  </span>
                </div>
                <div className="tab ">
                  <h5 className="h5-md">Step-2</h5>
                  {/* <span className="ico-25 green-color ">
                    <span className="flaticon-check"></span>
                  </span> */}
                </div>
                <div className="tab">
                  <h5 className="h5-md">Step-3</h5>
                  {/* <span className="ico-25 green-color">
                    <span className="flaticon-check"></span>
                  </span> */}
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-8">
              {/* LOGO */}
              {/* SIGN IN FORM */}
              <div className="register-form">
                <form
                  name="signinform"
                  className="row sign-in-form"
                  noValidate="novalidate"
                >
                  {/* Title*/}
                  <div className="col-md-12">
                    <div className="register-form-title text-center">
                      <h4 className="h4-lg">Hello!</h4>
                      <p className="p-xl">
                        Please fill some details about yourself
                      </p>
                    </div>
                  </div>

                  {/* Form Input */}
                  <div className="col-md-12 pb-25">
                    <label>
                      <h5 class="h5-xxs">
                        Choose a plan <sup className="text-red">*</sup>
                      </h5>
                    </label>
                    <div className="plans">
                      <button className="btn btn-orange-red">Basic</button>
                      <button className="btn btn-yellow-outline">
                        Advance
                      </button>
                      <button className="btn btn-yellow-outline">
                        Business
                      </button>
                    </div>
                  </div>
                  <div className="col-md-12 pb-3">
                    <label>
                      <h5 class="h5-xxs">
                        Name <sup className="text-red">*</sup>
                      </h5>
                    </label>
                    <input
                      className="form-control text"
                      type="text"
                      name="name"
                      placeholder="Jhon Doe"
                    />
                    {/* <div className="wrap-input">
                      <span className="btn-show-pass ico-20">
                        <span className="flaticon-visible eye-pass" />
                      </span>
                      <input
                        className="form-control password"
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                    </div> */}
                  </div>
                  <div className="col-md-12 pb-3">
                    <div className="row">
                      <div className="col-6">
                        <label>
                          <h5 class="h5-xxs">
                            Email <sup className="text-red">*</sup>
                          </h5>
                        </label>
                        <input
                          className="form-control email"
                          type="email"
                          name="email"
                          placeholder="example@example.com"
                        />
                      </div>
                      <div className="col-6">
                        <label>
                          <h5 class="h5-xxs">
                            Contact <sup className="text-red">*</sup>
                          </h5>
                        </label>
                        <input
                          className="form-control email"
                          type="email"
                          name="email"
                          placeholder="example@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Form Input */}

                  {/* Form Submit Button */}
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn btn-outline btn-md btn-yellow tra-yellow-hover submit"
                    >
                      Log In
                    </button>
                  </div>
                  {/* Form Data  */}
                </form>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Onboarding;
