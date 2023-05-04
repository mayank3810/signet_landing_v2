import CallToAction from '@/components/CallToAction';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Brands from '@/components/Brands';
import Benefits from '@/components/Benefits';
import Head from 'next/head';

function DocumentSecurity() {
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

				<meta name="title" content="Protect Your Certificates and Documents with Signet Tags" />
				<meta
					name="description"
					content="Signet Tags affordable document security uses tech for tamper-proof certificates, analytics, and fraud detection. Protect your brand and engage customers."
				/>
				<meta
					name="keywords"
					content="Document security,Tamper-proof certificates,Certificate authentication,Blockchain technology,Smart NFC embedding,Fraud prevention,Digital credentials,Analytics,Brand protection,Counterfeit detection,Supply chain monitoring,Tag tamper detection,Sensitive documents,Legal documents,Official documents,Certificates"
				/>

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:site_name" content="Signet Tags" />
				<meta property="og:url" content="https://www.signettags.com/industries/document-security" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Protect Certificates and Documents with Signet Tags" />
				<meta property="og:description" content="Protect your documents with Signet Tags' tamper-proof solution." />
				<meta property="og:image" content="/assets/images/Twitter-card.jpeg" />
				<meta property="og:locale" content="en_US" />

				{/* <!-- Twitter --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SignetTags" />
				<meta name="twitter:url" content="https://www.signettags.com/industries/document-security" />
				<meta name="twitter:title" content="Protect Certificates and Documents with Signet Tags" />
				<meta name="twitter:description" content="Protect your documents with Signet Tags' tamper-proof solution." />
				<meta name="twitter:image" content="/assets/images/Twitter-card.jpeg" />

				<link rel="canonical" href="https://www.signettags.com/industries/document-security" key="canonical" />
				<title>Signet Tags - Document Security Solutions</title>
			</Head>
			<Header scroll={inContainerView} />
			<PageTitle
				image="/images/industries/document_banner.jpg"
				title={'Reliable Document Security Solutions'}
				subtitle={'The future is fast & secure with Signet digital certificates'}
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
										<img className="img-fluid" src="/images/document/document-security.jpg" alt="content-image" />
									</div>
								</div>
								{/* TEXT BLOCK */}
								<div className="col-md-7 col-lg-6">
									<div className="txt-block right-column wow fadeInLeft">
										{/* Title */}
										<h2 className="h2-xs">Secure documents with new age nfc embedded digital certificates.</h2>
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
									<h2 className="h2-md">Why Choose Signet Tags</h2>
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
										<img className="img-fluid rounded" src="/images/document/tamper-proof.jpg" alt="feature-icon" />
										{/* Title */}
										<h5 className="h5-md mt-4 ">Issue Tamper-Proof Certificates</h5>
										{/* Text */}
										<p className="p-lg">
											Signet Tags will help you in cutting the time for third-parties background check inquires and repetitive manual work. Use the
											advanced blockchain technology and improved nfc tags for, instant verification of documents.
										</p>
									</div>
								</div>
								{/* FEATURE BOX #2 */}
								<div className="col">
									<div className="fbox-8 mb-40 wow fadeInUp">
										{/* Image */}
										<img className="img-fluid rounded" src="/images/industries/marketing.jpg" alt="feature-icon" />
										{/* Title */}
										<h5 className="h5-md mt-4">Skills in Demand Analytics</h5>
										{/* Text */}
										<p className="p-lg">
											Our dashboard will help analyze the skills in demand by the student community and the skills employers are in need of to hire
											fresh graduates in the market.
										</p>
									</div>
								</div>
								{/* FEATURE BOX #3 */}
								<div className="col">
									<div className="fbox-8 mb-40 wow fadeInUp">
										<img className="img-fluid rounded" src="/images/document/integration.jpg" alt="feature-icon" />
										<h5 className="h5-md mt-4 ">API Integration with platforms</h5>
										{/* Text */}
										<p className="p-lg">
											Signet Tags is to help institutions build on their existing infrastructure and not be hassled with unnecessary changes. We
											ensure a seamless integration process.
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
											<p className="p-lg">Technology used by governments to secure passports and social ID cards.</p>
										</li>
										<li className="list-item">
											<p className="p-lg">Cannot be copied, destroyed, or spoofed.</p>
										</li>
										<li className="list-item">
											<p className="p-lg">Extremely secure to prevent documents from forgery.</p>
										</li>
										<li className="list-item">
											<p className="p-lg">Document security technology enables legal documents to be verified for authenticity.</p>
										</li>
										<li className="list-item">
											<p className="p-lg">Enable integration with existing infrastructure using our APIs</p>
										</li>
										<li className="list-item">
											<p className="p-lg">Enable easy recovery -Replacements for lost certificates are easily requested, securely received.</p>
										</li>
									</ul>
								</div>
							</div>
							{/* END TEXT BLOCK */}
							{/* IMAGE BLOCK */}
							<div className="col-md-5 col-lg-6 order-first order-md-2">
								<div className="rel img-block right-column wow fadeInLeft">
									<img className="img-fluid rounded" src="/images/document/safeguard-using-nfc.jpg" alt="content-image" />
								</div>
							</div>
						</div>
						{/* End row */}
					</div>
					{/* End container */}
				</section>

				<section id="features-4" className="pb-60 features-section division">
					<div className="container">
						{/* FEATURES-4 WRAPPER */}
						<div className="fbox-4-wrapper fbox-4-wide">
							<div className="row row-cols-1 row-cols-md-2">
								{/* FEATURE BOX #1 */}
								<div className="col">
									<div className="fbox-4 pr-25 mb-40 wow fadeInUp">
										{/* Icon */}
										<div className="fbox-ico">
											<div className="ico-65 shape-ico dark-color">
												<img className="ico-bkg" src="/images/ico-bkg.png" alt="ico-bkg" />
												<img src="/images/industries/icons8-connected-100.png" alt="ico-bkg" />
											</div>
										</div>
										{/* Text */}
										<div className="fbox-txt">
											{/* Title */}
											<h5 className="h5-md">Digitally Connected Certificates</h5>
											{/* Text */}
											<p className="p-lg">Every certificate becomes digitally connected</p>
										</div>
									</div>
								</div>
								{/* FEATURE BOX #2 */}
								<div className="col">
									<div className="fbox-4 pl-25 mb-40 wow fadeInUp">
										{/* Icon */}
										<div className="fbox-ico">
											<div className="ico-65 shape-ico dark-color">
												<img className="ico-bkg" src="/images/ico-bkg.png" alt="ico-bkg" />
												<img src="/images/industries/icons8-combo-chart-100.png" alt="ico-bkg" />
											</div>
										</div>
										{/* Text */}
										<div className="fbox-txt">
											{/* Title */}
											<h5 className="h5-md">Valuabe Analytics</h5>
											{/* Text */}
											<p className="p-lg">Capture valuable insights, analyze the skills in demand, placements and candidate journey.</p>
										</div>
									</div>
								</div>
								{/* FEATURE BOX #3 */}
								<div className="col">
									<div className="fbox-4 pr-25 mb-40 wow fadeInUp">
										{/* Icon */}
										<div className="fbox-ico">
											<div className="ico-65 shape-ico dark-color">
												<img className="ico-bkg" src="/images/ico-bkg.png" alt="ico-bkg" />
												<img src="/images/industries/icons8-knight-shield-100.png" alt="ico-bkg" />
											</div>
										</div>
										{/* Text */}
										<div className="fbox-txt">
											{/* Title */}
											<h5 className="h5-md">Protect your Reputation</h5>
											{/* Text */}
											<p className="p-lg">The Future is fast & secure with digital NFC certificates. Protect your institutional brand and image.</p>
										</div>
									</div>
								</div>
								{/* FEATURE BOX #4 */}
								<div className="col">
									<div className="fbox-4 pl-25 mb-40 wow fadeInUp">
										{/* Icon */}
										<div className="fbox-ico">
											<div className="ico-65 shape-ico dark-color">
												<img className="ico-bkg" src="/images/ico-bkg.png" alt="ico-bkg" />
												<img src="/images/industries/icons8-opera-glasses-100.png" alt="ico-bkg" />
											</div>
										</div>
										{/* Text */}
										<div className="fbox-txt">
											{/* Title */}
											<h5 className="h5-md">Montitor Certificates</h5>
											{/* Text */}
											<p className="p-lg">Track and trace the certificates in real time. Get notified when someone requests verification.</p>
										</div>
									</div>
								</div>
								{/* FEATURE BOX #5 */}
								<div className="col">
									<div className="fbox-4 pr-25 mb-40 wow fadeInUp">
										{/* Icon */}
										<div className="fbox-ico">
											<div className="ico-65 shape-ico dark-color">
												<img className="ico-bkg" src="/images/ico-bkg.png" alt="ico-bkg" />
												<img src="/images/industries/icons8-defend-100.png" alt="ico-bkg" />
											</div>
										</div>
										{/* Text */}
										<div className="fbox-txt">
											{/* Title */}
											<h5 className="h5-md">Defend document forgery</h5>
											{/* Text */}
											<p className="p-lg">Protect the risk of document forgery. Prevent potential financial consequences of a forged document</p>
										</div>
									</div>
								</div>

								<div className="col">
									<div className="fbox-4 pr-25 mb-40 wow fadeInUp">
										{/* Icon */}
										<div className="fbox-ico">
											<div className="ico-65 shape-ico dark-color">
												<img className="ico-bkg" src="/images/ico-bkg.png" alt="ico-bkg" />
												<img src="/images/without-app.png" alt="ico-bkg" />
											</div>
										</div>
										{/* Text */}
										<div className="fbox-txt">
											{/* Title */}
											<h5 className="h5-md">Authenticate with a smartphone</h5>
											{/* Text */}
											<p className="p-lg">Signet authentication doesnot require users to download any app and works directly on tapping the tag.</p>
										</div>
									</div>
								</div>
							</div>
						</div>{' '}
						{/* END FEATURES-4 WRAPPER */}
					</div>{' '}
					{/* End container */}
				</section>

				<CallToAction />
			</div>
		</>
	);
}

export default DocumentSecurity;
