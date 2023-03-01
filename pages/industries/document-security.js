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

function DocumentSecurity() {
	const [containerRef, inContainerView] = useInView({ rootMargin: '-350px' });

	return (
		<>
			<Head>
				<title>Signet Tags - Document Security Solutions</title>
				<meta name="title" content="Protect Your Certificates and Documents with Signet Tags" />
				<meta
					name="description"
					content="Signet Tags is an innovative document security solution that offers affordable and easy-to-use technology to safeguard your valuable documents. With our suite of proprietary technologies, you can issue tamper-proof certificates, learn from analytics, and boost engagement while protecting your brand and detecting fraudulent activities. Contact our experts to get started"
				/>
				<meta
					name="keywords"
					content="Document security,Tamper-proof certificates,Certificate authentication,Blockchain technology,Smart NFC embedding,Fraud prevention,Digital credentials,Analytics,Brand protection,Counterfeit detection,Supply chain monitoring,Tag tamper detection,Sensitive documents,Legal documents,Official documents,Certificates"
				/>
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="Meta Tags — Preview, Edit and Generate" />
				<meta property="og:title" content="Signet Tags - Blockchain-Based Brand Protection Solution" />
				<meta property="og:description" content="Signet tags link products to blockchain for ownership and authenticity." />
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
			<PageTitle image="/images/industries/document_banner.jpg" title={'Document Security'} subtitle={'Tag, track and authenticate your documents'} />
			<div ref={containerRef}>
				<section id="content-3" className="bg-whitesmoke content-3 wide-60 content-section division">
					<div className="container">
						{/* TOP ROW */}
						<div className="top-row pb-50">
							<div className="row d-flex align-items-center">
								{/* IMAGE BLOCK */}
								<div className="col-md-5 col-lg-6">
									<div className="img-block left-column wow fadeInRight">
										<img className="img-fluid" src="/images/document/document-security.jpg" alt="content-image" />
									</div>
								</div>
								{/* TEXT BLOCK */}
								<div className="col-md-7 col-lg-6">
									<div className="txt-block right-column wow fadeInLeft">
										{/* Title */}
										<h2 className="h2-xs">Document security solutions are essential for businesses and governing entities</h2>
										{/* Text */}
										<p className="p-lg">
											Certificates are one of the most valuable assets to possess, Thus why they need to be stored safely and be instantly available
											when needed. Signet Tags ensures that official documents are recorded and managed in a secure, tamper-proof, and transparent
											manner. Signet Tags is an affordable, easy-to-use solution that optimizes the lengthy process of issuing and verifying official
											documents, giving stakeholders access to trusted and genuine information instantly, anywhere, at any time.
										</p>

										<p className="p-lg">
											Our app or a direct NFC connection allows stakeholders to check the authenticity of each single certificate. A simple tap grants
											instant access to candidate profile, certifications and intended applications. Faster and safer than any solution based on QR
											code or image recognition.
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
										Document security technology
										<br />
									</h2>
									<p className="p-xl">A suite of innovative and proprietary technologies to safeguard high-value and sensitive documents.</p>
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
										src="https://www.youtube.com/embed/CfOEKlihBCE"
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
										By securing your official documents on the blockchain, you prevent fraud cases and assure your partners (Universities, employers
										etc.) of the genuineness of the information on the certificates.
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
										<h5 className="h5-md mt-4 ">Issue Tamper-Proof Certificates</h5>
										{/* Text */}
										<p className="p-lg">
											Signet Tags will help you in cutting the time for third-parties background check inquires and repetitive manual work.
										</p>
									</div>
								</div>
								{/* FEATURE BOX #2 */}
								<div className="col">
									<div className="fbox-8 mb-40 wow fadeInUp">
										{/* Image */}
										<img className="img-fluid rounded" src="/images/industries/marketing.jpg" alt="feature-icon" />
										{/* Title */}
										<h5 className="h5-md mt-4">Learn From Analytics</h5>
										{/* Text */}
										<p className="p-lg">
											With our analytics module, you can view & analyze data and make well-informed decisions on how to improve your business.
										</p>
									</div>
								</div>
								{/* FEATURE BOX #3 */}
								<div className="col">
									<div className="fbox-8 mb-40 wow fadeInUp">
										<img className="img-fluid rounded" src="/images/industries/feedback.jpg" alt="feature-icon" />
										<h5 className="h5-md mt-4 ">Boost Engagement</h5>
										{/* Text */}
										<p className="p-lg">
											Digital credentials give organizations a way to recognize micro-learning and any extra-curriculum activities in an effective
											format.
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
									<span className="section-id txt-upcase">SMART NFC EMBEDDING</span>
									{/* Title */}
									<h2 className="h2-xs">Safeguard high-value and sensitive documents</h2>
									{/* List */}
									<ul className="simple-list">
										<li className="list-item">
											<p className="p-lg">Cannot be copied, destroyed, or spoofed.</p>
										</li>
										<li className="list-item">
											<p className="p-lg">Extremely secure to prevent documents from forgery.</p>
										</li>
										<li className="list-item">
											<p className="p-lg">Document security technology enables legal documents to be verified for authenticity.</p>
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

export default DocumentSecurity;
