import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';

function Content3() {
	// const [containerRef, inContainerView] = useInView({ threshold: 0.2 });

	const [init, setInit] = useState(true);
	// useEffect(() => {
	//   if (!init && inContainerView) {
	//     setInit(true);
	//   }
	// }, [inContainerView]);

	return (
		<section id="content-5" className="content-5 ws-wrapper content-section division">
			<div className="container">
				<div className="content-5-wrapper bg-whitesmoke">
					<div className="row d-flex align-items-center">
						{/* TEXT BLOCK */}
						<div className="col-md-7 col-lg-6">
							<div className="txt-block left-column">
								{/* CONTENT BOX #1 */}
								<div
									className={`duration-1 ${init ? 'cbox mb-40 animate__animated animate__fadeInLeft' : 'cbox mb-40 animate__animated'}`}
									// style={{ animationDuration: '1s' }}
								>
									{/* Icon */}
									<div className="cbox-ico">
										<div className="dark-color ico-65">
											<span>
												<img src="/images/nfc-logo.png" alt="ico-bkg" />
											</span>
										</div>
									</div>
									{/* Text */}
									<div className="cbox-txt">
										<h3 className="h3-font mb-1"> NTAG 424 DNA </h3>
										<p className="p-lg">Advanced Security and Privacy for Trusted IoT Applications. Secure NFC tags with random changing keys</p>
									</div>
								</div>
								{/* CONTENT BOX #2 */}
								<div
									className={`duration-1.5 ${init ? 'cbox mb-40 animate__animated animate__fadeInLeft' : 'cbox mb-40 animate__animated'}`}
									// style={{ animationDuration: '1.5s' }}
								>
									{/* Icon */}
									<div className="cbox-ico">
										<div className="dark-color ico-65">
											<span>
												<img src="/images/icons8-blockchain-technology-80.png" alt="ico-bkg" />
											</span>
										</div>
									</div>
									{/* Text */}
									<div className="cbox-txt">
										<h3 className="h3-font mb-1">Blockchain</h3>
										<p className="p-lg">Digital blockchain assets that cannot be duplicated, ensuring transparent and immutable information.</p>
									</div>
								</div>
								{/* CONTENT BOX #3 */}
								<div
									className={`duration-1.75 ${init ? 'cbox mb-40 animate__animated animate__fadeInLeft' : 'cbox mb-40 animate__animated'}`}
									// style={{ animationDuration: '1.75s' }}
								>
									{/* Icon */}
									<div className="cbox-ico">
										<div className="dark-color ico-65">
											<span>
												<img src="/images/icons8-authentic-64.png" alt="ico-bkg" />
											</span>
										</div>
									</div>
									{/* Text */}
									<div className="cbox-txt">
										<h3 className="h3-font mb-1">Experience</h3>
										<p className="p-lg">Easy check of authenticity for consumers. No special app download required.</p>
									</div>
								</div>
							</div>
							<Link href="/onboarding">
								<div className="btn btn-yellow tra-yellow-hover color-white mr-15">Get Started</div>
							</Link>
						</div>{' '}
						{/* END TEXT BLOCK */}
						{/* IMAGE BLOCK */}
						<div className="col-md-5 col-lg-6">
							<div
								className={`duration-0.75 ${
									init ? 'img-block right-column animate__animated animate__fadeIn' : 'img-block right-column animate__animated'
								}`}
								// style={{ animationDelay: '0.75s' }}
							>
								{/* <img className="img-fluid" src="/images/nfc-blockchain.jpg" alt="content-image" /> */}
								<Image className="img-fluid" src="/images/nfc-blockchain.jpg" alt="content-image" width={500} height={500} />
							</div>
						</div>
					</div>
				</div>{' '}
				{/* End row */}
			</div>
		</section>
	);
}

export default Content3;
