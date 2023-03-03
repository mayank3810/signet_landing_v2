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

function Agriculture() {
	const [containerRef, inContainerView] = useInView({ rootMargin: '-350px' });

	return (
		<>
			<Head>
				<title>Signet Tags - Traceability Solution for Agriculture Industry</title>
				<link rel="canonical" href="https://www.signettags.com/industries/agriculture" key="canonical" />
				<meta name="title" content="Traceability Solution for Agriculture Industry with Signet Tags" />
				<meta
					name="description"
					content="Signet Tags tracks and authenticates agrochemicals using NFC tags and blockchain. Farmers get instant product info via our app. Protect your brand with us."
				/>
				<meta
					name="keywords"
					content="agriculture industry, traceability solution, NFC tag, blockchain technology, product integrity, product authenticity, brand protection, marketing insights, counterfeit products, tamper detection"
				/>
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:site_name" content="Signet Tags" />
				<meta property="og:url" content="https://www.signettags.com/industries/agriculture" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Agricultural traceability with Signet tags" />
				<meta property="og:description" content="Ensure authenticity of agricultural products with Signet Tags." />
				<meta property="og:image" content="/assets/images/Twitter-card.jpeg" />
				<meta property="og:locale" content="en_US" />

				{/* <!-- Twitter --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SignetTags" />
				<meta name="twitter:url" content="https://www.signettags.com/industries/agriculture" />
				<meta name="twitter:title" content="Agricultural traceability with Signet tags" />
				<meta name="twitter:description" content="Ensure authenticity of agricultural products with Signet Tags" />
				<meta name="twitter:image" content="/assets/images/Twitter-card.jpeg" />
			</Head>
			<Header scroll={inContainerView} />
			<PageTitle
				image="/images/industries/agriculture_banner.jpg"
				title={'Blockchain-Based Tracing for Agricultural Protection'}
				subtitle={'Tag, track, and instantaneously authenticate agrochemical products'}
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
										<img className="img-fluid" src="/images/agriculture.jpg" alt="content-image" />
									</div>
								</div>
								{/* TEXT BLOCK */}
								<div className="col-md-7 col-lg-6">
									<div className="txt-block right-column wow fadeInLeft">
										{/* Title */}
										<h2 className="h2-xs">Traceability solution for Agriculture Industry</h2>
										{/* Text */}
										<p className="p-lg">
											Agricultural tracing and protection is important for many reasons. It helps ensure the quality of our food, protects our farmers
											and ranchers, and helps keep our environment healthy. Our patent pending NFC tag leverages encrypted tamper-proof blockchain
											technology to track each single item from production to product opening and features refilling protection and anti-peeling. Its
											style can be customized for a perfect integration with your label, package or bottle design.
										</p>
										<p className="p-lg">
											Our app or a direct NFC connection grants farmers instant access to product characteristics, integrity and proof of
											authenticity.
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
										The real problem <br />
									</h2>
									<p className="p-xl">
										The rapid growth in population and the consequent increase of the food demand made the agricultural market reach the size of 250.5
										billion in 2020. It is estimated that between 10% and 25% of products for agriculture on the market are counterfeited.
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
										<img className="img-fluid rounded" src="/images/agriculture-protection.jpg" alt="feature-icon" />
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
										<img className="img-fluid rounded" src="/images/industries/marketing.jpg" alt="feature-icon" />
										{/* Title */}
										<h5 className="h5-md mt-4">Marketing Insights</h5>
										{/* Text */}
										<p className="p-lg">Track your products until the final customer. Detect product infiltrations and original stolen products</p>
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
									{/* Title */}
									<h3 className="h2-xs">Illegally produced products for agriculture can pose several risks, including:</h3>
									{/* List */}
									<ul className="simple-list">
										<li className="list-item">
											<p className="p-lg">
												Health risks: Illegally produced products may contain harmful chemicals that can have serious health consequences for humans,
												livestock, and the environment. These chemicals can include pesticides, herbicides, and fungicides that are banned or
												restricted in their use due to their hazardous nature.
											</p>
										</li>
										<li className="list-item">
											<p className="p-lg">
												Environmental risks: The use of illegal products can lead to pollution of the soil, water, and air, which can have harmful
												effects on the environment. This can lead to reduced biodiversity, soil erosion, and contamination of water sources.
											</p>
										</li>
										<li className="list-item">
											<p className="p-lg">
												Economic risks: The use of illegal products can impact the agricultural economy. Illegal products are often sold at a lower
												price, which can make it difficult for legitimate producers to compete. In addition, the use of illegal products can result in
												lower yields and quality of produce, which can impact the profitability of farmers.
											</p>
										</li>
									</ul>
								</div>
							</div>
							{/* END TEXT BLOCK */}
							{/* IMAGE BLOCK */}
							<div className="col-md-5 col-lg-6 order-first order-md-2">
								<div className="rel img-block right-column wow fadeInLeft">
									<img className="img-fluid rounded" src="/images/agriculture-authenticity.jpg" alt="content-image" />
								</div>
							</div>
						</div>
						{/* End row */}
					</div>
					{/* End container */}
				</section>

				<Benefits />

				<CallToAction />
			</div>
		</>
	);
}

export default Agriculture;
