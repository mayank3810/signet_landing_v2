import Link from 'next/link';
import React, { useState } from 'react';
import VideoPopup from '../VideoPopup';
import Image from 'next/image';

function Hero() {
	// const [containerRef, inContainerView] = useInView({ threshold: 0.1 });

	const [open, setOpen] = useState(false);

	return (
		<>
			{open && <VideoPopup open={open} setOpen={setOpen} link={'https://www.youtube.com/embed/YQUjE2koNRI'} />}

			<section id="hero-20" className="align-content-center bg-fixed d-flex division hero-section">
				<div className="container d-flex">
					<div className="row d-flex align-items-center">
						{/* HERO TEXT */}
						<div className="col-md-12">
							<div className="hero-20-txt white-color">
								<h1 className="h1-md white-color text-center">
									Connecting brands and consumers
									<br/>
									<span style={{"fontSize" : "30px", color:"#35ca6a !important"}}>
									 with unique 
									</span>
									 <br/>
									 Digital user experience
									<br />
								</h1>
								<p className="p-xl text-center">
									Signet Tags enables digital identity on your
									products using QR Code, NFC & private Blockchain
								</p>
								<div className="btns-group d-flex justify-content-center mt-100">
									<Link href="/anti-counterfeit-solutions">
										<div className="btn btn-orange-red tra-white-hover mr-45">
										<img src='/images/icons8-verified-account-50.png' style={{width: "30px", marginRight: "10px"}}  />

											Product Authenticity </div>
									</Link>

									<Link href="https://connected.signettags.com/phygital-merchandise.html" target='_blank'>
										<div className="btn btn-orange-red tra-white-hover mr-45 ml-45">
										<img src='/images/icons8-tshirt-50.png' style={{width: "30px", marginRight: "10px"}}  />
											
											Fan Merchandise</div>
									</Link>

									<Link href="/request-demo">
										<div className="btn btn-orange-red tra-white-hover ml-45">
										<img src='/images/icons8-movie-ticket-50.png' style={{width: "30px", marginRight: "10px"}}  />

											Events & Ticketing</div>
									</Link>
									
								</div>
							</div>
						</div>
						
					</div>
					{/* End row */}
				</div>
				{/* End container */}
			</section>
		</>
	);
}

export default Hero;
