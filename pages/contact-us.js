import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Content2 from "@/components/Home/Content2";
import Content3 from "@/components/Home/Content3";
import Content4 from "@/components/Home/Content4";
import CustomerEngagement from "@/components/Home/CustomerEngagement";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import { Inter } from "@next/font/google";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [headerRef, inHeaderView] = useInView();

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
      <div id="page" className="page">
        <Header scroll={'false'} />


        <section id="contacts-2" className="bg-snow wide-50 inner-page-hero contacts-section division">
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8">
                <div className="section-title title-02 mb-80">
                  {/* Title */}
                  <h2 className="h2-xs">Have a question? Need help? Don't hesitate, drop us a line</h2>
                  {/* Text */}
                  <p className="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero
                    tempus, blandit and cursus varius and magnis sapien
                  </p>
                </div>
              </div>
            </div>
            {/* CONTACT FORM */}
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="form-holder">
                  <form name="contactform" className="row contact-form" noValidate="novalidate">
                    {/* Form Select */}
                    <div className="col-md-12 input-subject">
                      <p className="p-lg">This question is about: </p>
                      <span>Choose a topic, so we know who to send your request to: </span>
                      <select className="form-select subject valid" aria-label="Default select example" aria-invalid="false">
                        <option selected>This question is about...</option>
                        <option>Registering/Authorising</option>
                        <option>Using Application</option>
                        <option>Troubleshooting</option>
                        <option>Backup/Restore</option>
                        <option>Other</option>
                      </select>
                    </div>
                    {/* Contact Form Input */}
                    <div className="col-md-12">
                      <p className="p-lg">Your Name: </p>
                      <span>Please enter your real name: </span>
                      <input type="text" name="name" className="form-control name" placeholder="Your Name*" />
                    </div>
                    <div className="col-md-12">
                      <p className="p-lg">Your Email Address: </p>
                      <span>Please carefully check your email address for accuracy</span>
                      <input type="text" name="email" className="form-control email" placeholder="Email Address*" />
                    </div>
                    <div className="col-md-12">
                      <p className="p-lg">Explain your question in details: </p>
                      <span>Your OS version, OLMO version &amp; build, steps you did. Be VERY precise!</span>
                      <textarea className="form-control message" name="message" rows={6} placeholder="I have a problem with..." defaultValue={""} />
                    </div>
                    {/* Contact Form Button */}
                    <div className="col-md-12 mt-15 form-btn text-right">
                      <button type="submit" className="btn btn-skyblue tra-grey-hover submit">Submit Request</button>
                    </div>
                    {/* Contact Form Message */}
                    <div className="col-lg-12 contact-form-msg">
                      <span className="loading" />
                    </div>
                  </form>
                </div>
              </div>
            </div>	   {/* END CONTACT FORM */}
          </div>	   {/* End container */}
        </section>

        <div ref={headerRef}>
          <Footer />
        </div>
      </div>
    </>
  );
}
