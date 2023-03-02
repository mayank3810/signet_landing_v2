import CallToAction from '@/components/CallToAction';
import Header from '@/components/Header';
import Stats from '@/components/Stats';
import PageTitle from '@/components/PageTitle';
import Testimonials from '@/components/Testimonials';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Brands from '@/components/Brands';
import Benefits from '@/components/Benefits';
import Link from 'next/link';
import Head from 'next/head';

function CosmeticsAndPerfumes() {
	const [containerRef, inContainerView] = useInView({ rootMargin: '-350px' });

	return (
		<>
			<Head>
				<title>Signet Tags - NFC Tag Authentication for Cosmetics and Perfumes</title>
				<link rel="canonical" href="https://www.signettags.com/industries/cosmetics-and-perfumes" key="canonical" />
				<meta name="title" content="Signet Tags - NFC Tag Authentication for Shoes and Footwear" />
				<meta
					name="description"
					content="Signet Tags secures cosmetics and perfumes with NFC tag authentication, preventing counterfeiting and enabling easy product tracking and verification."
				/>
				<meta
					name="keywords"
					content="NFC tags,Anti-counterfeiting,Brand protection,Cosmetics industry,Smart packaging,Marketing insights,Customer engagement,Tamper-proof,Product authentication,Fraud prevention"
				/>
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:site_name" content="Signet Tags" />
				<meta property="og:url" content="https://www.signettags.com/industries/cosmetics-and-perfumes" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="NFC authentication for footwear with Signet tags" />
				<meta property="og:description" content="Authenticate shoes and footwear with Signet Tags' NFC tags." />
				<meta property="og:image" content="/assets/images/Twitter-card.jpeg" />
				<meta property="og:locale" content="en_US" />

				{/* <!-- Twitter --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SignetTags" />
				<meta name="twitter:url" content="https://www.signettags.com/industries/cosmetics-and-perfumes" />
				<meta name="twitter:title" content="NFC authentication for footwear with Signet tags" />
				<meta name="twitter:description" content="Authenticate shoes and footwear with Signet Tags' NFC tags." />
				<meta name="twitter:image" content="/assets/images/Twitter-card.jpeg" />
			</Head>
			<Header scroll={inContainerView} />
			<PageTitle
				image="/images/industries/cosmetics_banner.jpg"
				title={'Cosmetics And Perfumes'}
				subtitle={'Engage your consumers with fun, informative, smart packaging that also protects your brand'}
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
										<img className="img-fluid" src="/images/nfc-blockchain.jpg" alt="content-image" />
									</div>
								</div>
								{/* TEXT BLOCK */}
								<div className="col-md-7 col-lg-6">
									<div className="txt-block right-column wow fadeInLeft">
										{/* Title */}
										<h2 className="h2-xs">Tag, track and authenticate</h2>
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
										The real problem <br />
									</h2>
									<p className="p-xl">
										7.8% of annual sales in the personal care sector is lost due to counterfeiting According to the OECD, in 2016 the international
										counterfeit makeup trade was estimated to be worth $5.4 billion. Today it is still increasing.
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
									{/* Section ID */}
									<span className="section-id txt-upcase">SMART NFC PACKAGING</span>
									{/* Title */}
									<h2 className="h2-xs">Plain packaging doesn't work anymore.</h2>
									{/* List */}
									<ul className="simple-list">
										<li className="list-item">
											<p className="p-lg">
												Getting customers to engage with your brand is a vital part of running any successful business, and Cosmetics And Perfumes
												industries are no exception.
											</p>
										</li>
										<li className="list-item">
											<p className="p-lg">
												Smart packaging transforms your Cosmetics And Perfumes products into a new marketing channel for customers to engage with your
												Cosmetics And Perfumes brand. *According to Gallup research, a highly engaged customer brings in 23% more revenue than the
												average customer.
											</p>
										</li>
										<li className="list-item">
											<p className="p-lg">
												Signet Tags has a range of smart packaging solutions to fit any Cosmetics And Perfumes brand’s requirements including
												cryptographic serialised QR codes, anti-copy codes, or invisible smartphone readable technology. Signet Tags solutions can be
												non-app based or app-based depending on your requirements
											</p>
										</li>
									</ul>
								</div>
							</div>
							{/* END TEXT BLOCK */}
							{/* IMAGE BLOCK */}
							<div className="col-md-5 col-lg-6 order-first order-md-2">
								<div className="rel img-block right-column wow fadeInLeft">
									<img className="img-fluid" src="/images/signet-mobile-app.jpg" alt="content-image" />
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
									<h3 className="h3-xs"> The international counterfeit makeup trade was estimated to be worth $5.4 billion. Still increasing. </h3>
								</div>
							</div>
							<div className="col-sm-5 col-md-4 col-lg-3 offset-sm-2 offset-md-3 offset-lg-2">
								<div className="statistic-block wow fadeInUp">
									<h2 className="h2-title-xs statistic-number">
										<span className="count-element">7.8%</span>
									</h2>
									<p className="p-lg mt-20">annual sales in the personal care sector is lost due to counterfeiting</p>
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

export default CosmeticsAndPerfumes;
