import Header from "@/components/Header";
import Form1 from "@/components/Onboarding/Form1";
import Form2 from "@/components/Onboarding/Form2";
import LeftText from "@/components/Onboarding/LeftText";
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
            <div className="col-md-5 col-lg-5 side-bar">
              <div className="login-page-logo pt-30">
                <Link href="/" className="logo-black">
                  <img src="/images/logo_dark.svg" alt="header-logo" />
                </Link>
              </div>
              <LeftText
                heading={"Get started For Free with Signet Tags"}
                subheading={
                  " Best solution to tag, track and <br /> authenticate your products."
                }
              />

              {/* <div className="tab-group">
                <div className="tab active ">
                  <h5 className="h5-md">Step-1</h5>
                  <span className="ico-25 green-color">
                    <span className="flaticon-check"></span>
                  </span>
                </div>
                <div className="tab ">
                  <h5 className="h5-md">Step-2</h5>
                  
                </div>
                <div className="tab">
                  <h5 className="h5-md">Step-3</h5>
                  
                </div>
              </div> */}
            </div>
            <div className="col-md-7 col-lg-7">
              {/* LOGO */}
              {/* SIGN IN FORM */}
              <div className="register-form">
                <Form1 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Onboarding;
