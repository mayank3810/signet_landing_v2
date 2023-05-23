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
								{/* Title */}
								<h1 className="h1-md white-color">
									Empower Your Brand with Authenticity and Consumer Insights.
									<br />
									<span className="h1-span">Harnessing the Power of NFC & Blockchain Technology with Signet Tags to Combat Counterfeiting.</span>
								</h1>
								{/* Text */}
								<p className="p-xl">
									Signet tags links your products with blockchain-proven ownership. The blockchain solution to ensure authenticity and increase
									customer engagement.
								</p>
								{/* Buttons Group */}
								<div className="btns-group">
									<Link href="/onboarding">
										<div className="btn btn-yellow tra-yellow-hover color-white mr-15">Get Started</div>
									</Link>
									<div onClick={() => setOpen(!open)} className="video-popup2 btn btn-md btn-transparent ico-20 ico-left">
										<span className="flaticon-play" /> See Signet in Action
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
