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

			<section id="hero-20" className="bg-fixed hero-section division">
				<div className="container">
					<div className="row d-flex align-items-center">
						{/* HERO TEXT */}
						<div className="col-md-8 col-lg-8">
							<div className="hero-20-txt white-color">
								<h1 className="h1-md white-color">
									The secret to customer retention and increased sales

									<br />
									<span className="h1-span">
										<ul className="header-advantages mt-4">
											<li style={{ width: "auto !important" }}>
												<img
													className="check-box-icon"
													src="/images/icons8-check-48.png"
													alt="ico-bkg"
												/>
												<span>Patented Technology</span>
											</li>
											<li style={{ marginLeft: "25px", width: "auto !important" }}>
												<img
													className="check-box-icon"
													src="/images/icons8-check-48.png"
													alt="ico-bkg"
												/>
												<span>
													Blockchain / NFC / QR codes based
												</span>
											</li>
										</ul>

									</span>
								</h1>
								<p className="p-xl">
									Signet Tags helps you to increase your brand awareness, ensure authenticity, and enhance customer engagement.
								</p>
								{/* Buttons Group */}
								<div className="btns-group">
									<Link href="/onboarding">
										<div className="btn btn-yellow tra-yellow-hover color-white mr-15">Try for Free</div>
									</Link>
									<div onClick={() => setOpen(!open)} className="video-popup2 btn btn-md btn-transparent ico-20 ico-left">
										<span className="flaticon-play" /> Watch video
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-lg-4">
							<div className="hero-1-img wow fadeInLeft text-center">
								<img
									className="img-fluid"
									src="images/header-top.png"
									alt="Brand Protection Shield: Countering Counterfeit with Blockchain, NFC, and Tamper-Proof Seals - Signet Tags"
									width="257"
									height="998"
								/>
								{/* <Image src="/images/header-top.png" alt="hero-image" width={257} height={998} className="img-fluid" /> */}
							</div>
						</div>
						{/* END HERO TEXT */}
					</div>
					{/* End row */}
				</div>
				{/* End container */}
			</section>
		</>
	);
}

export default Hero;
