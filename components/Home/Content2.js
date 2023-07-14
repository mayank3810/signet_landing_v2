import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';

function Content2() {
	// const [containerRef, inContainerView] = useInView({ threshold: 0.2 });
	// const inContainerView = true;
	const [init, setInit] = useState(true);
	// useEffect(() => {
	//   if (!init && inContainerView) {
	//     setInit(true);
	//   }
	// }, [inContainerView]);

	return (
		<section
			// ref={containerRef}
			id="content-2"
			className="content-2 wide-60 content-section division"
		>
			<div className="container">
				<div className="row d-flex align-items-center">
					{/* IMAGE BLOCK */}
					<div className="col-md-5 col-lg-6">
						<div
							className={`duration-1.75 ${
								init ? 'rel img-block left-column animate__animated animate__slideInUp' : 'rel img-block left-column animate__animated'
							}`}
							// style={{ animationDuration: '1.75s' }}
						>
							{/* <img className="img-fluid" src="/images/scanning-theme.png" alt="content-image" /> */}
							<Image
								className="img-fluid"
								src="/images/scanning-theme.png"
								alt="Signet Tags Scanning Theme, product authentication, transparency, scanning process"
								width={401}
								height={487}
							/>{' '}
						</div>
					</div>
					{/* TEXT BLOCK */}
					<div className="col-md-7 col-lg-6">
						<div
							className={`duration-1.75 ${
								init ? 'txt-block right-column animate__animated animate__slideInUp' : 'txt-block right-column animate__animated'
							}`}
							// style={{ animationDuration: '1.75s' }}
						>
							{/* Title */}
							<h2 className="h2-xs">Proof of authenticity in seconds</h2>
							{/* Text */}
							<p className="p-lg">
								Use Signet Tags to ensure product authenticity and integrity, and direct NFC connection for quick and easy verification. Through
								Direct Interaction, reveal the product's history, features, and sustainability certifications.
							</p>
							{/* Text */}
							<p className="p-lg">
								NFC and Blockchain Technology together bring a stable approach to physical goods authentication. Encourage informed consumer
								decision-making and prevent the entry of counterfeit goods into the market.
							</p>
							<p className="p-lg">
								Our solution outperforms QR Code and image recognition-based alternatives in speed and security. No need to download any apps.
							</p>

							<Link href="/request-demo">
								<div className="btn btn-yellow tra-yellow-hover color-white mr-15">Start Free Trial</div>
							</Link>
						</div>
					</div>{' '}
					{/* END TEXT BLOCK */}
				</div>{' '}
				{/* End row */}
			</div>{' '}
			{/* End container */}
		</section>
	);
}

export default Content2;
