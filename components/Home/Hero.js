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
									The best brand protection solution
									<br />
								</h1>
								<p className="p-xl">
									Signet Tags ensures authenticity of your products using technologies like QR code,  NFC & private blockchain
								</p>
								{/* Buttons Group */}
								<div className="btns-group">
									<Link href="/request-demo">
										<div className="btn btn-orange-red tra-white-hover mr-15">Request a Demo</div>
									</Link>
									<div onClick={() => setOpen(!open)} className="video-popup2 btn btn-md btn-transparent ico-20 ico-left">
										<span className="flaticon-youtube" /> Youtube
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-lg-4">
							<div className="hero-1-img wow fadeInLeft text-center">
								<img
									className="img-fluid rounded-20px"
									src="images/qr-code-scanning.jpg"
									alt="Brand Protection Shield: Countering Counterfeit with Blockchain, NFC, and Tamper-Proof Seals - Signet Tags"
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
