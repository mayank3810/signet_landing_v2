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
						<div className="col-md-12">
							<div className="hero-20-txt white-color">
								<h1 className="h1-md white-color text-center">
									Connecting brands and consumers
									<br/>
									 with unique <br/>
									 Digital user experience
									<br />
								</h1>
								<p className="p-xl text-center">
									Signet Tags enables digital identity on your
									products using QR Code, NFC & private blockchain
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
						
					</div>
					{/* End row */}
				</div>
				{/* End container */}
			</section>
		</>
	);
}

export default Hero;
