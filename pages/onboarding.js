import Header from "@/components/Header";
import Form1 from "@/components/Onboarding/Form1";
import Form2 from "@/components/Onboarding/Form2";
import LeftText from "@/components/Onboarding/LeftText";
import Link from "next/link";
import React, { useState } from "react";

function Onboarding() {
  // { email, name, subject, message }
  const [stage, setStage] = useState(1);
  const [organizationId, setOrganizationId] = useState("");

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
              {stage == 2 ? (
                <LeftText
                  heading={"Help us understand your requirements"}
                  subheading={
                    "We will come back with the best <br/> possible solution for your business."
                  }
                />
              ) : (
                <LeftText
                  heading={"Get started For Free with Signet Tags"}
                  subheading={
                    " Best solution to tag, track and <br /> authenticate your products."
                  }
                />
              )}

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
                {stage === 1 ? (
                  <Form1
                    setStage={setStage}
                    setOrganizationId={setOrganizationId}
                  />
                ) : (
                  <Form2 organizationId={organizationId} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Onboarding;
