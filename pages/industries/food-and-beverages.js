import CallToAction from '@/components/CallToAction';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Benefits from '@/components/Benefits';
import Head from 'next/head';

function FoodAndBeverages() {
	const [containerRef, inContainerView] = useInView({ rootMargin: '-350px' });

	return (
		<>
			<Head>
				<title>Signet Tags - Food and Beverages</title>
				<link rel="canonical" href="https://www.signettags.com/industries/food-and-beverages" key="canonical" />
				<meta name="title" content="Protect your Food and Beverages & Engage Your Consumers Signet Tags" />
				<meta
					name="description"
					content="Signet Tags prevents food & beverage counterfeiting using secure seals and tamper-proof tech. Get marketing insights and connect with customers."
				/>
				<meta
					name="keywords"
					content="Signet Tags, food and beverages, authenticity solution, counterfeit protection, marketing insights, tamper-proof technology, product traceability, promotions, loyalty programs, fraudulent refilling."
				/>
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:site_name" content="Signet Tags" />
				<meta property="og:url" content="https://www.signettags.com/industries/food-and-beverages" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Protect food, engage consumers with Signet tags" />
				<meta
					property="og:description"
					content=" Protect your food and beverages with Signet Tags' tamper-proof technology. Engage customers with secure physical-digital seals and gain valuable marketing insights."
				/>
				<meta property="og:image" content="/assets/images/Twitter-card.jpeg" />
				<meta property="og:locale" content="en_US" />

				{/* <!-- Twitter --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SignetTags" />
				<meta name="twitter:url" content="https://www.signettags.com/industries/food-and-beverages" />
				<meta name="twitter:title" content="Protect food, engage consumers with Signet tags" />
				<meta
					name="twitter:description"
					content=" Protect your food and beverages with Signet Tags' tamper-proof technology. Engage customers with secure physical-digital seals and gain valuable marketing insights."
				/>
				<meta name="twitter:image" content="/assets/images/Twitter-card.jpeg" />
			</Head>
			<Header scroll={inContainerView} />
			<PageTitle
				image="/images/industries/food_banner.jpg"
				title={'Food And Beverages'}
				subtitle={'Protect & Engage Your Consumers with Signet Tags'}
			/>
			<div ref={containerRef}>
				<section id="content-3" className="content-3 wide-60 content-section division">
					<div className="container">
						{/* TOP ROW */}
						<div className="top-row pb-50">
							<div className="row d-flex align-items-center">
								{/* IMAGE BLOCK */}
								<div className="col-md-5 col-lg-6">
									<div className="img-block left-column wow fadeInRight">
										<img className="img-fluid" src="/images/digital-experience.jpg" alt="content-image" />
									</div>
								</div>
								{/* TEXT BLOCK */}
								<div className="col-md-7 col-lg-6">
									<div className="txt-block right-column wow fadeInLeft">
										{/* Title */}
										<h2 className="h2-xs">Authenticity solution for Food and Beverages</h2>
										{/* Text */}
										<p className="p-lg">
											Authenticity is a critical issue in the food and beverage industry, as consumers rely on the authenticity of the products they
											buy. Using Signet Tags Consumers can identify instantaneously food and beverages authenticity with a tap of their smartphone,
											using a direct NFC connection.
										</p>

										<p className="p-lg">
											Our app or a direct NFC connection allows consumers to check the authenticity of each single purchase they are about to make. A
											simple tap grants instant access to product history, certifications and intended applications. Follow each product, and enable
											customers and third parties to read the product history at any time.
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
										How does it help <br />
									</h2>
									<p className="p-xl">
										Tag your premium product with a unique tamper-proof ID that tracks the entire product journey and protect against fraudulent
										refilling. Provide customers with product assurance via secure physical-digital seals and tamper-proof technology. Follow each
										product, and enable customers and third parties to read the product history at any time.
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
										<img className="img-fluid rounded" src="/images/industries/brand-protection.jpg" alt="feature-icon" />
										{/* Title */}
										<h5 className="h5-md mt-4 ">Counterfeit Protection</h5>
										{/* Text */}
										<p className="p-lg">Provide customers with product assurance via secure physical-digital seals and tamper-proof technology.</p>
									</div>
								</div>
								{/* FEATURE BOX #2 */}
								<div className="col">
									<div className="fbox-8 mb-40 wow fadeInUp">
										{/* Image */}
										<img className="img-fluid rounded" src="/images/industries/marketing.jpg" alt="feature-icon" />
										{/* Title */}
										<h5 className="h5-md mt-4">Marketing Insights</h5>
										{/* Text */}
										<p className="p-lg">
											Track your products until the final customer. Capture valuable marketing insights and consented first-party data
										</p>
									</div>
								</div>
								{/* FEATURE BOX #3 */}
								<div className="col">
									<div className="fbox-8 mb-40 wow fadeInUp">
										<img className="img-fluid rounded" src="/images/industries/feedback.jpg" alt="feature-icon" />
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
									<h2 className="h2-xs">Tamper proof smart packaging.</h2>
									{/* List */}
									<ul className="simple-list">
										<li className="list-item">
											<p className="p-lg">
												Our technology can be used to create a tamper-proof record of a product's journey from the source to the end consumer. This
												can help to ensure the authenticity of the product and provide transparency to consumers.
											</p>
										</li>
										<li className="list-item">
											<p className="p-lg">
												By implementing a robust product traceability system, food and beverage companies can track the entire journey of the product
												from the source to the end consumer. A traceability system allows for the identification and isolation of any issues that may
												arise in the supply chain.
											</p>
										</li>
									</ul>
								</div>
							</div>
							{/* END TEXT BLOCK */}
							{/* IMAGE BLOCK */}
							<div className="col-md-5 col-lg-6 order-first order-md-2">
								<div className="rel img-block right-column wow fadeInLeft">
									<img className="img-fluid" src="/images/signet-wine-authenticity.jpg" alt="content-image" />
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

export default FoodAndBeverages;
