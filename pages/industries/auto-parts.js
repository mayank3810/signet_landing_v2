import CallToAction from '@/components/CallToAction';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Benefits from '@/components/Benefits';
import Head from 'next/head';

function AutoParts() {
	const [containerRef, inContainerView] = useInView({ rootMargin: '-350px' });

	return (
		<>
			<Head>
				<title>Signet Tags - Anti-Counterfeit Protection for Auto Parts</title>
				<link rel="canonical" href="https://www.signettags.com/industries/auto-parts" key="canonical" />
				<meta name="title" content="Secure Your Auto Parts Against Fraud with Signet Tags" />
				<meta
					name="description"
					content="Protect your auto parts against counterfeiting with Signet Tags' tamper-proof and anti-counterfeit packaging solutions. Get instant authentication using our patented NFC technology."
				/>
				<meta
					name="keywords"
					content="auto parts, counterfeit, tamper protection, anti-counterfeit, NFC technology, authentication, brand protection, marketing insights, tamper-proof packaging"
				/>
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="Meta Tags — Preview, Edit and Generate" />
				<meta property="og:title" content="Secure Your Auto Parts Against Fraud with Signet Tags" />
				<meta property="og:description" content="Secure your auto parts with Signet Tags' tamper-proof packaging." />
				<meta property="og:image" content="/assets/images/Twitter-card.jpeg" />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="Meta Tags — Preview, Edit and Generate" />
				<meta property="twitter:title" content="Signet Tags - Blockchain-based authenticity and Brand protection solution" />
				<meta
					property="twitter:description"
					content="Signet tags link your products with blockchain-proven ownership. The blockchain solution ensures authenticity and increases customer engagement. "
				/>
				<meta property="twitter:image" content="/assets/images/Twitter-card.jpeg" />
			</Head>
			<Header scroll={inContainerView} />
			<PageTitle image="/images/industries/autoparts_banner.jpg" title={'Auto Parts'} subtitle={'Security labels and seals against product fraud'} />
			<div ref={containerRef}>
				<section id="content-3" className="bg-whitesmoke content-3 wide-60 content-section division">
					<div className="container">
						{/* TOP ROW */}
						<div className="top-row pb-50">
							<div className="row d-flex align-items-center">
								{/* IMAGE BLOCK */}
								<div className="col-md-5 col-lg-6">
									<div className="img-block left-column wow fadeInRight">
										<img className="img-fluid" src="/images/auto-industry-verified-signet.jpg" alt="content-image" />
									</div>
								</div>
								{/* TEXT BLOCK */}
								<div className="col-md-7 col-lg-6">
									<div className="txt-block right-column wow fadeInLeft">
										{/* Title */}
										<h2 className="h2-xs">Tamper protection and anti-counterfeit packaging</h2>
										{/* Text */}
										<p className="p-lg">
											Our patent pending NFC tag leverages encrypted tamper-proof blockchain technology to track each single item from production to
											product opening and features refilling protection and anti-peeling. Its style can be customized for a perfect integration with
											your label, package or bottle design.
										</p>

										<p className="p-lg">
											Our app or a direct NFC connection allows consumers to check the authenticity of each single purchase they are about to make. A
											simple tap grants instant access to product history, certifications and intended applications. Faster and safer than any
											solution based on QR code or image recognition.
										</p>
									</div>
								</div>
								{/* END TEXT BLOCK */}
							</div>
						</div>
					</div>
					{/* End container */}
				</section>

				<section id="content-9" className="content-9 bg-01 pt-100 content-section division">
					<div className="container white-color">
						{/* SECTION TITLE */}
						<div className="row justify-content-center">
							<div className="col-md-10 col-lg-8">
								<div className="section-title title-02 mb-60">
									<h2 className="h2-xs">
										Anti-counterfeit protection <br />
									</h2>
									<p className="p-xl">
										It's no secret automotive parts are getting counterfeited at large. Signet Tags offers brand protection investigators and
										customers a reliable way to authenticate with visible/invisible technology solutions.
									</p>
								</div>
							</div>
						</div>
						{/* IMAGE BLOCK */}
						<div className="row">
							<div className="col">
								<div className="content-9-img video-preview wow fadeInUp">
									<iframe
										style={{ borderRadius: '20px' }}
										width="860"
										height="515"
										src="https://www.youtube.com/embed/YQUjE2koNRI"
										title="Signet Demo Video"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										allowFullScreen
									></iframe>
								</div>
							</div>
						</div>
					</div>
					{/* End container */}
				</section>

				<section id="features-8" className="wide-60 features-section division">
					<div className="container">
						{/* SECTION TITLE */}
						<div className="row justify-content-center">
							<div className="col-lg-10 col-xl-8">
								<div className="section-title title-01 mb-70">
									{/* Title */}
									<h2 className="h2-md">Why Signet Tags</h2>
									{/* Text */}
									<p className="p-xl">
										While other authentication companies protect the package, Signet Tags protects the product against fraudulent refilling and allows
										instantaneous verification without the need for specific tools or expertise in the field
									</p>
								</div>
							</div>
						</div>
						{/* FEATURES-8 WRAPPER */}
						<div className="fbox-8-wrapper text-center">
							<div className="row row-cols-1 row-cols-md-3">
								{/* FEATURE BOX #1 */}
								<div className="col">
									<div className="fbox-8 mb-40 wow fadeInUp">
										{/* Image */}
										<img className="img-fluid rounded" src="/images/automotive/brand-protection.jpg" alt="feature-icon" />
										{/* Title */}
										<h5 className="h5-md mt-4 ">Brand Protection</h5>
										{/* Text */}
										<p className="p-lg">Defend your IPRs and your Brand Equity. Feel free to develop and promote new products safely</p>
									</div>
								</div>
								{/* FEATURE BOX #2 */}
								<div className="col">
									<div className="fbox-8 mb-40 wow fadeInUp">
										{/* Image */}
										<img className="img-fluid rounded" src="/images/automotive/marketing-insights.jpg" alt="feature-icon" />
										{/* Title */}
										<h5 className="h5-md mt-4">Marketing Insights</h5>
										{/* Text */}
										<p className="p-lg">Track your products until the final customer. Detect product infiltrations and original stolen products</p>
									</div>
								</div>
								{/* FEATURE BOX #3 */}
								<div className="col">
									<div className="fbox-8 mb-40 wow fadeInUp">
										<img className="img-fluid rounded" src="/images/automotive/customer-review.jpg" alt="feature-icon" />
										<h5 className="h5-md mt-4 ">Connect directly</h5>
										{/* Text */}
										<p className="p-lg">
											Connect directly to your customers using push notifications and alerts. Collect valuable feedbacks directly from customers.
										</p>
									</div>
								</div>
							</div>
							{/* End row */}
						</div>
						{/* END FEATURES-8 WRAPPER */}
					</div>
					{/* End container */}
				</section>

				<section id="content-1" className="content-1 pb-100 content-section division">
					<div className="container">
						<div className="row d-flex align-items-center">
							{/* TEXT BLOCK */}
							<div className="col-md-7 col-lg-6 order-last order-md-2">
								<div className="txt-block left-column wow fadeInRight">
									{/* Section ID */}
									<span className="section-id txt-upcase">SMART NFC PACKAGING</span>
									{/* Title */}
									<h2 className="h2-xs">Plain packaging doesn't work anymore.</h2>
									{/* List */}
									<ul className="simple-list">
										<li className="list-item">
											<p className="p-lg">
												Counterfeit auto parts refer to fake or imitation components that are made to look like genuine auto parts but are not
												manufactured by the authorized original equipment manufacturer (OEM). These parts can be substandard or inferior in quality
												and can pose significant safety risks to the user of the motor or vehicle.
											</p>
										</li>
										<li className="list-item">
											<p className="p-lg">
												Counterfeit auto parts can include a wide range of components such as spark plugs, fuel injectors, alternators, brake pads,
												and air filters. These parts are often sold at a lower price than genuine parts, making them attractive to consumers looking
												to save money.
											</p>
										</li>
										<li className="list-item">
											<p className="p-lg">
												However, using counterfeit auto parts can have serious consequences. They may not meet the required safety and quality
												standards and can fail unexpectedly, causing accidents or other hazards. In addition, using counterfeit parts can damage the
												motor or vehicle, leading to costly repairs.
											</p>
										</li>
									</ul>
								</div>
							</div>
							{/* END TEXT BLOCK */}
							{/* IMAGE BLOCK */}
							<div className="col-md-5 col-lg-6 order-first order-md-2">
								<div className="rel img-block right-column wow fadeInLeft">
									<img className="img-fluid rounded" src="/images/automotive/smart-packaging.jpg" alt="content-image" />
								</div>
							</div>
						</div>
						{/* End row */}
					</div>
					{/* End container */}
				</section>

				<Benefits />

				<section id="content-5" className="content-5 ws-wrapper content-section division">
					<div className="container">
						<div className="content-5-wrapper bg-whitesmoke">
							<div className="row d-flex align-items-center">
								{/* TEXT BLOCK */}
								<div className="col-md-7 col-lg-6">
									<div className="txt-block left-column wow fadeInRight" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
										{/* Section ID */}
										<span className="section-id purple-color txt-upcase">Promotions & Loyalty Programs</span>
										{/* Title */}
										<h2 className="h2-xs">Boost Sales! Acquire New Consumers</h2>
										{/* List */}
										<ul className="simple-list">
											<li className="list-item">
												<p className="p-lg">
													Entice new and existing consumers to buy more by offering them airtime, merchandise, redeemable loyalty points, and grand
													prizes (raffle) for purchase
												</p>
											</li>

											<li className="list-item">
												<p className="p-lg">
													Asides the fact that you can automatically acquire consumer contacts, Signet Tags also helps you collect insights directly
													from your consumers using short intuitive surveys they take as part of their participation in your campaigns
												</p>
											</li>
										</ul>
									</div>
								</div>{' '}
								{/* END TEXT BLOCK */}
								{/* IMAGE BLOCK */}
								<div className="col-md-5 col-lg-6">
									<div className="img-block right-column wow fadeInLeft" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
										<img className="img-fluid rounded" src="/images/customers/reward-your-customers.jpg" alt="content-image" />
									</div>
								</div>
							</div>
						</div>{' '}
						{/* End row */}
					</div>{' '}
					{/* End container */}
				</section>

				<CallToAction />
			</div>
		</>
	);
}

export default AutoParts;
