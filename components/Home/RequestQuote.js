import Link from 'next/link';
import React, { useState } from 'react';
import VideoPopup from '../VideoPopup';
import EnquiryForm from "../../components/Onboarding/EnquiryForm";

function RequestQuote() {
	// const [containerRef, inContainerView] = useInView({ threshold: 0.1 });

	const [open, setOpen] = useState(false);

	return (
		<>
			{open && <VideoPopup open={open} setOpen={setOpen} link={'https://www.youtube.com/embed/YQUjE2koNRI'} />}
			<section id="hero-20" className="bg-fixed hero-section division">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-8 col-lg-8">
                <div className="hero-20-txt white-color">
                  <h1 className="h1-md white-color">Tamper Evident Seals</h1>
                  <p className="p-xl">
                  Protect & Engage with your customers. 
                  </p>
                  <p className="">
                  We specialize in providing top-quality tamper evident seals for a variety of industries and applications. Our tamper evident seals are designed to provide an extra layer of security and protection, ensuring that your products remain safe and secure from tampering and unauthorized access.
                  </p>
                  <div className="btns-group">
                    <div onClick={() => setOpen(!open)} className="video-popup2 btn btn-md btn-transparent ico-20 ico-left">
                      <span className="flaticon-play" /> Watch Video
                    </div>
                  </div>
				  <div>
					<ul className='header-advantages mt-4'>
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
