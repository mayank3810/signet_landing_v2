import Header from "@/components/Header";
import React, { useState } from "react";

function Contact() {
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
      <Header scroll={true} />
      {/* CONTACTS-2
			============================================= */}
      <section
        id="contacts-2"
        className="bg-snow wide-50 inner-page-hero contacts-section division"
      >
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="section-title title-02 mb-80">
                {/* Title */}
                <h2 className="h2-xs">
                  Have a question? Need help? Don't hesitate, drop us a line
                </h2>
                {/* Text */}
                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque at
                  dolor primis libero tempus, blandit and cursus varius and
                  magnis sapien
                </p>
              </div>
            </div>
          </div>
          {/* CONTACT FORM */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="form-holder">
                <form name="contactform" className="row contact-form">
                  {/* Form Select */}

                  {/* Contact Form Input */}
                  <div className="col-md-12">
                    <p className="p-lg">Your Name: </p>
                    {/* <span>Please enter your real name: </span> */}
                    <input
                      type="text"
                      name="name"
                      className="form-control name"
                      placeholder="Your Name*"
                      value={name.data ?? ""}
                      onChange={(e) =>
                        setName({ data: e.target.value, error: false })
                      }
                    />
                    {name.error && (
                      <label class="error" htmlFor="name">
                        Name cannot be blank
                      </label>
                    )}
                  </div>
                  <div className="col-md-12">
                    <p className="p-lg">Your Email Address: </p>
                    {/* <span>
                      Please carefully check your email address htmlFor accuracy
                    </span> */}
                    <input
                      type="text"
                      name="email"
                      className="form-control email"
                      placeholder="Email Address*"
                      value={email.data ?? ""}
                      onChange={(e) =>
                        setEmail({ data: e.target.value, error: false })
                      }
                    />
                    {email.error && (
                      <label class="error" htmlFor="email">
                        Email cannot be blank
                      </label>
                    )}
                  </div>
                  <div className="col-md-12">
                    <p className="p-lg">Message Subject: </p>
                    {/* <span>Please enter your real name: </span> */}
                    <input
                      type="text"
                      name="subject"
                      className="form-control name"
                      placeholder="Your Name*"
                      value={subject.data ?? ""}
                      onChange={(e) =>
                        setSubject({ data: e.target.value, error: false })
                      }
                    />
                    {subject.error && (
                      <label class="error" htmlFor="subject">
                        Subject cannot be blank
                      </label>
                    )}
                  </div>
                  <div className="col-md-12">
                    <p className="p-lg">Explain your question in details: </p>

                    <textarea
                      className="form-control message"
                      name="message"
                      rows={6}
                      placeholder="I wanted to ask about..."
                      value={message.data ?? ""}
                      onChange={(e) =>
                        setMessage({ data: e.target.value, error: false })
                      }
                    />

                    {message.error && (
                      <label class="error" htmlFor="message">
                        Message cannot be blank
                      </label>
                    )}
                  </div>

                  <div className="col-md-12 mt-15 form-btn text-right">
                    {apiResp && (
                      <span
                        className={
                          apiResp.includes("error")
                            ? "orange-red-color"
                            : "green-color"
                        }
                      >
                        {apiResp}
                      </span>
                    )}
                  </div>
                  {/* Contact Form Button */}
                  <div className="col-md-12 mt-15 form-btn text-right">
                    <button
                      onClick={submitForm}
                      className="btn btn-yellow tra-yellow-hover submit"
                    >
                      {loading ? "Submitting" : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* END CONTACT FORM */}
        </div>
        {/* End container */}
      </section>
      {/* END CONTACTS-2 */}
      {/* DIVIDER LINE */}
      <hr className="divider" />
      {/* CALL TO ACTION-8
			============================================= */}
      <section id="cta-8" className="bg-snow wide-100 cta-section division">
        <div className="container">
          <div className="cta-8-wrapper pc-25">
            <div className="row row-cols-1 row-cols-md-2">
              {/* BOX #1 */}
              <div className="col">
                <a href="pricing.html">
                  <div className="cta-box cta-top-box bg-white wow fadeInUp">
                    {/* Icon */}
                    <div className="cta-ico">
                      <div className="ico-60">
                        <span className="flaticon-wallet" />
                      </div>
                    </div>
                    {/* Text */}
                    <div className="cta-txt">
                      {/* Title */}
                      <h5 className="h5-md">View Pricing</h5>
                      {/* Text */}
                      <p className="p-lg">
                        Porta semper lacus cursus feugiat primis ultrice ligula
                        risus at auctor tempus
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              {/* END BOX #1 */}
              {/* BOX #2 */}
              <div className="col">
                <a href="faqs.html">
                  <div className="cta-box bg-white wow fadeInUp">
                    {/* Icon */}
                    <div className="cta-ico">
                      <div className="ico-60">
                        <span className="flaticon-help" />
                      </div>
                    </div>
                    {/* Text */}
                    <div className="cta-txt">
                      {/* Title */}
                      <h5 className="h5-md">Read the FAQs</h5>
                      {/* Text */}
                      <p className="p-lg">
                        Porta semper lacus cursus feugiat primis ultrice ligula
                        risus at auctor tempus
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              {/* END BOX #2 */}
            </div>
            {/* End cta-8-wrapper */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      {/* END CALL TO ACTION-8 */}
      {/* DIVIDER LINE */}
    </>
  );
}

export default Contact;
