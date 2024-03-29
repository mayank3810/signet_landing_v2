import CallToAction from '@/components/CallToAction';
import Header from '@/components/Header';
import Stats from '@/components/Stats';
import PageTitle from '@/components/PageTitle';
import Testimonials from '@/components/Testimonials';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Brands from '@/components/Brands';
import Benefits from '@/components/Benefits';
import Head from 'next/head';

function Cannabis() {
	const [containerRef, inContainerView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<>
			<Head>
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />
				<meta name="robots" content="index, follow" />

				<meta
					name="title"
					content="Secure Cannabis Products with Blockchain Technology | Signet Tags: Protecting from Counterfeit and Ensuring Brand Protection"
				/>
				<meta
					name="description"
					content="Ensure the authenticity and traceability of cannabis products with Signet Tags. Leverage blockchain technology, NFC, and anti-counterfeiting measures for robust brand protection and consumer trust."
				/>
				<meta
					name="keywords"
					content="Anti-counterfeit, Anti-counterfeiting, Track & trace, Document Security, Blockchain Technology, Brand protection solution/companies"
				/>

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:site_name" content="Signet Tags" />
				<meta property="og:url" content="https://www.signettags.com/industries/cannabis" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="NFC Tag Authentication for Cannabis with Signet Tags" />
				<meta property="og:description" content="Authenticate cannabis products with Signet Tags' NFC tags." />
				<meta property="og:image" content="/assets/images/Twitter-card.jpeg" />
				<meta property="og:locale" content="en_US" />

				{/* <!-- Twitter --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SignetTags" />
				<meta name="twitter:url" content="https://www.signettags.com/industries/cannabis" />
				<meta name="twitter:title" content="NFC Tag Authentication for Cannabis with Signet Tags" />
				<meta name="twitter:description" content="Authenticate cannabis products with Signet Tags' NFC tags." />
				<meta name="twitter:image" content="/assets/images/Twitter-card.jpeg" />

				<link rel="canonical" href="https://www.signettags.com/industries/cannabis" key="canonical" />
				<title>Secure Cannabis Tracking with Blockchain Technology & NFC Tag | Signet Tags</title>
			</Head>
			<Header scroll={inContainerView} />
			<PageTitle
				image="/images/industries/cannabis_banner.jpg"
				title={'Anti-Counterfeit NFC Solutions for Cannabis'}
				subtitle={'Open a new channel to engage, protect, and build trust with your customers.'}
			/>
			<div ref={containerRef}>
				<section id="content-3" className="bg-whitesmoke content-3 wide-60 content-section division">
					<div className="container">
						{/* TOP ROW */}
						<div className="top-row pb-50">
							<div className="row d-flex align-items-center">
								{/* IMAGE BLOCK */}
								<div className="col-md-5 col-lg-6">
									<div className="img-block left-column wow fadeInRight">
										<img
											className="img-fluid"
											src="/images/pharma/cannabis.jpg"
											alt="Secure Cannabis Products with Signet Tags: Counterfeit Protection, Blockchain Technology, NFC Verification, Brand Authentication, Anti-Counterfeiting Measures."
										/>
									</div>
								</div>
								{/* TEXT BLOCK */}
								<div className="col-md-7 col-lg-6">
									<div className="txt-block right-column wow fadeInLeft">
										{/* Title */}
										<h2 className="h2-xs">Customer Engagement & Anti-Counterfeit solutions</h2>
										{/* Text */}
										<p className="p-lg">
											Our patent pending NFC tag leverages encrypted tamper-proof blockchain technology to track each single item from production to
											product opening and features refilling protection and anti-peeling. Its style can be customized for a perfect integration with
											your label, package or bottle design.
										</p>

										<p className="p-lg">
											As the cannabis industry grows, it becomes increasingly vulnerable to counterfeit products. People are becoming more and more
											quality-conscious, and Signet technology helps brands cater to that demand.
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
										Uncovering the Real Problem <br />
									</h2>
									<p className="p-xl">Our brand protection technologies create a new way to engage, protect and build trust with your customers.</p>
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
									<h2 className="h2-md">Why Choose Signet Tags</h2>
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
										<img
											className="img-fluid rounded"
											src="/images/pharma/cannabis-brand-protection.jpg"
											alt="signet-tags-brand-protection-industry-image"
										/>
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
										<img className="img-fluid rounded" src="/images/industries/marketing.jpg" alt="signet-tags-marketing-industry-image" />
										{/* Title */}
										<h5 className="h5-md mt-4">Marketing Insights</h5>
										{/* Text */}
										<p className="p-lg">Track your products until the final customer. Detect product infiltrations and original stolen products</p>
									</div>
								</div>
								{/* FEATURE BOX #3 */}
								<div className="col">
									<div className="fbox-8 mb-40 wow fadeInUp">
										<img className="img-fluid rounded" src="/images/industries/feedback.jpg" alt="signet-tags-feedback-industry-image" />
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
												Every cannabis product becomes digitally connected opening a new marketing channel to engage your customers
											</p>
										</li>
										<li className="list-item">
											<p className="p-lg">Smart packaging has shown to increase repeat purchases and grow revenue.</p>
										</li>
										<li className="list-item">
											<p className="p-lg">Capture valuable marketing insights and consented first-party data</p>
										</li>
										<li className="list-item">
											<p className="p-lg">Protect your brand and create a moment of trust with your cannabis customers</p>
										</li>
									</ul>
								</div>
							</div>
							{/* END TEXT BLOCK */}
							{/* IMAGE BLOCK */}
							<div className="col-md-5 col-lg-6 order-first order-md-2">
								<div className="rel img-block right-column wow fadeInLeft">
									<img
										className="img-fluid"
										src="/images/pharma/cannabis-mobile-app.jpg"
										alt="Cannabis Mobile App: Product Verification, NFC Technology, Authenticity Check, Counterfeit Prevention, Brand Protection"
									/>
								</div>
							</div>
						</div>
						{/* End row */}
					</div>
					{/* End container */}
				</section>

				<Benefits />

				<section id="statistic-2" className="wide-100 statistic-section division">
					<div className="container">
						<div className="row d-flex align-items-center">
							<div className="col-lg-6">
								<div className="txt-block right-column wow fadeInLeft">
									<h3 className="h3-xs"> A highly engaged customer brings in 23% more revenue. </h3>
								</div>
							</div>
							<div className="col-sm-5 col-md-4 col-lg-3 offset-sm-2 offset-md-3 offset-lg-2">
								<div className="statistic-block wow fadeInUp">
									<div className="h2-title-font statistic-number footer-head text-dark">
										<span className="count-element">23%</span>
									</div>
									<p className="p-lg mt-20">annual sales increase in revenue, according to Gallup research.</p>
								</div>
							</div>
						</div>{' '}
					</div>{' '}
				</section>

				<CallToAction />
			</div>
		</>
	);
}

export default Cannabis;
