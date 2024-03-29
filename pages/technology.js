import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Testimonials from '@/components/Testimonials';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

function Technology() {
	return (
		<>
			<Head>
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />
				<meta name="robots" content="index, follow" />

				<meta
					name="title"
					content="Secure Your Products with Signet Tags: Counterfeit Prevention, Blockchain Technology, NFC, Brand Protection
"
				/>
				<meta
					name="description"
					content="Discover how Signet Tags utilise cutting-edge technology like blockchain and NFC to safeguard your products against counterfeiting. Enhance brand protection, safeguard against counterfeits, and ensure product authenticity with our state-of-the-art technology. Discover the future of product security and authentication."
				/>
				<meta
					name="keywords"
					content="Anti-counterfeit, Anti-counterfeiting, Track & trace, Document Security, Blockchain Technology, Brand protection solution/companies"
				/>

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:site_name" content="Signet Tags" />
				<meta property="og:url" content="https://www.signettags.com/technology" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Authenticity Guaranteed with Signet Tags" />
				<meta property="og:description" content="Secure and verify Products with NFC, NFTs & Blockchain." />
				<meta property="og:image" content="/assets/images/Twitter-card.jpeg" />
				<meta property="og:locale" content="en_US" />

				{/* <!-- Twitter --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SignetTags" />
				<meta name="twitter:url" content="https://www.signettags.com/technology" />
				<meta name="twitter:title" content="Authenticity Guaranteed with Signet Tags" />
				<meta name="twitter:description" content="Secure and verify Products with NFC, NFTs & Blockchain." />
				<meta name="twitter:image" content="/assets/images/Twitter-card.jpeg" />

				<link rel="canonical" href="https://www.signettags.com/technology" key="canonical" />
				<title>Protect Your Products with Signet Tags: Counterfeit Prevention, Blockchain, NFC, Brand Protection</title>
				<link rel="preconnect" href="https://www.youtube-nocookie.com" />
			</Head>
			<Header scroll={true} />
			<>
				<section id="about-2" className="about-section">
					<div className="bg-inner bg-black inner-page-hero division">
						<div className="container">
							{/* ABOUT-2 TITLE */}
							<div className="row justify-content-center">
								<div className="col-12">
									<div className="about-2-title">
										{/* Title */}
										<h1 className="h1-md text-white">Technology that guarantees product authenticity</h1>
										{/* Text */}
										<p className="p-xl text-white">
											Pair your physical products, assets & collectibles with NFTs minted on a private blockchain, Signet tags digital links & secure
											unclonable NFC tags to enable your products to participate in Web3
										</p>
									</div>
								</div>
							</div>{' '}
							{/* END ABOUT-2 TITLE */}
							{/* ABOUT-2 IMAGES */}
							<div className="about-2-images">
								<div className="row row-cols-1 row-cols-md-2">
									<div className="col col-md-4">
										<img className="img-fluid" src="images/security.jpg" alt="Security technology for brand protection" width="416" height="386" />
									</div>

									<div className="col col-md-4">
										<img
											className="img-fluid"
											src="images/nfc-technology.jpg"
											alt="NFC technology for secure product verification"
											width="416"
											height="386"
										/>
									</div>

									<div className="col col-md-4">
										<img
											className="img-fluid"
											src="images/blockchain.jpg"
											alt="Blockchain technology for trusted product authentication"
											width="416"
											height="386"
										/>
									</div>
								</div>{' '}
								{/* End row */}
							</div>{' '}
							{/* END ABOUT-2 IMAGES */}
						</div>{' '}
						{/* End container */}
					</div>{' '}
					{/* End bg-inner */}
				</section>{' '}
				{/* END ABOUT-2 */}
				{/* FEATURES-4
			============================================= */}
				<section id="features-4" className="wide-60 features-section division">
					<div className="container">
						{/* SECTION TITLE */}
						<div className="row justify-content-center">
							<div className="col-lg-10 col-xl-8">
								<div className="section-title title-01 mb-70">
									{/* Title */}
									<h2 className="h2-md">We’re Better. Here’s Why…</h2>
									{/* Text */}
									<p className="p-xl">
										Signet tags with direct NFC connection allows an immediate check of product authenticity and integrity. An instant interaction
										with the product grants access to its history, characteristics and sustainability certifications. Faster and safer than any
										solution based on QR code or image recognition.
									</p>
								</div>
							</div>
						</div>
						{/* FEATURES-4 WRAPPER */}
						<div className="fbox-4-wrapper fbox-4-wide">
							<div className="row row-cols-1 row-cols-md-2">
								{/* FEATURE BOX #1 */}
								<div className="col">
									<div className="fbox-4 pr-25 mb-40 wow fadeInUp">
										{/* Icon */}
										<div className="fbox-ico">
											<div className="ico-65">
												<img src="/images/nfc-logo.png" alt="ico-bkg" />
											</div>
										</div>
										{/* Text */}
										<div className="fbox-txt">
											{/* Title */}
											<h3 className="h3-font">NTAG 424 DNA</h3>
											{/* Text */}
											<p className="p-lg">Advanced Security and Privacy for Trusted IoT Applications</p>
										</div>
									</div>
								</div>
								{/* FEATURE BOX #2 */}
								<div className="col">
									<div className="fbox-4 pl-25 mb-40 wow fadeInUp">
										{/* Icon */}
										<div className="fbox-ico">
											<div className="ico-65">
												<div className="ico-65">
													<img src="/images/nft-64.png" alt="ico-bkg" />
												</div>
											</div>
										</div>
										{/* Text */}
										<div className="fbox-txt">
											{/* Title */}
											<h3 className="h3-font">NFT</h3>
											{/* Text */}
											<p className="p-lg">Digital blockchain assets that cannot be duplicated.</p>
										</div>
									</div>
								</div>
								{/* FEATURE BOX #3 */}
								<div className="col">
									<div className="fbox-4 pr-25 mb-40 wow fadeInUp">
										<div className="fbox-ico">
											<div className="ico-65">
												<img src="/images/smart-contract-64.png" alt="ico-bkg" />
											</div>
										</div>
										<div className="fbox-txt">
											<h3 className="h3-font">Smart Contract</h3>
											<p className="p-lg">Ensuring transparent and immutable information</p>
										</div>
									</div>
								</div>
								{/* FEATURE BOX #4 */}
								<div className="col">
									<div className="fbox-4 pl-25 mb-40 wow fadeInUp">
										{/* Icon */}
										<div className="fbox-ico">
											<div className="ico-65">
												<img src="/images/icons8-blockchain-technology-80.png" alt="ico-bkg" />
											</div>
										</div>
										{/* Text */}
										<div className="fbox-txt">
											{/* Title */}
											<h3 className="h3-font">Blockchain</h3>
											{/* Text */}
											<p className="p-lg">Using leading blockchain networks, Polygon and Ethereum</p>
										</div>
									</div>
								</div>

								<div className="col">
									<div className="fbox-4 pr-25 mb-40 wow fadeInUp">
										<div className="fbox-ico">
											<div className="ico-65">
												<img src="/images/augmented-reality-64.png" alt="ico-bkg" />
											</div>
										</div>
										<div className="fbox-txt">
											<h3 className="h3-font">Metaverse</h3>
											<p className="p-lg">Your physical items available across metaverses.</p>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="fbox-4 pl-25 mb-40 wow fadeInUp">
										<div className="fbox-ico">
											<div className="ico-65">
												<img src="/images/series-of-shield.png" alt="ico-bkg" />
											</div>
										</div>
										<div className="fbox-txt">
											<h3 className="h3-font">Security</h3>
											<p className="p-lg">Secure NFC tags with random changing keys</p>
										</div>
									</div>
								</div>

								<div className="col">
									<div className="fbox-4 pr-25 mb-40 wow fadeInUp">
										<div className="fbox-ico">
											<div className="ico-65">
												<img src="/images/icons8-clone-64.png" alt="ico-bkg" />
											</div>
										</div>
										<div className="fbox-txt">
											<h3 className="h3-font">Unclonable Tags</h3>
											<p className="p-lg">Read only tags, each linked with blockchain NFTs</p>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="fbox-4 pl-25 mb-40 wow fadeInUp">
										{/* Icon */}
										<div className="fbox-ico">
											<div className="ico-65">
												<div className="ico-65">
													<img src="/images/icons8-authentic-64.png" alt="ico-bkg" />
												</div>
											</div>
										</div>
										{/* Text */}
										<div className="fbox-txt">
											{/* Title */}
											<h3 className="h3-font">Top UX</h3>
											{/* Text */}
											<p className="p-lg">Easy check for consumers.No special app download required</p>
										</div>
									</div>
								</div>
							</div>
						</div>{' '}
						{/* END FEATURES-4 WRAPPER */}
					</div>{' '}
					{/* End container */}
				</section>{' '}
				{/* END FEATURES-4 */}
				{/* DIVIDER LINE */}
				<hr className="divider" />
				{/* STATISTIC-4
			============================================= */}
				<section id="content-3" className="content-3 wide-60 content-section division">
					<div className="container">
						{/* TOP ROW */}
						<div className="top-row pb-50">
							<div className="row d-flex align-items-center">
								{/* TEXT BLOCK */}
								<div className="col-md-7 col-lg-6 order-last order-lg-2">
									<div className="txt-block left-column wow fadeInRight">
										{/* Section ID */}
										<span className="section-id txt-upcase">Behind the Scenes</span>
										{/* Title */}
										<h2 className="h2-xs">NTAG 424 DNA NFC tags</h2>

										<p className="p-lg">
											Protect your products against counterfeiting while gaining valuable business intelligence with Signet Tags SUN (Secure Unique
											NFC) Authentication Service. Signet Tags-SUN is a highly available, secure, and scalable SaaS platform designed to verify the
											authenticity of NTAG 424 DNA NFC tags. This NFC chip is a new revamped cost-effective and clone-resistant chip used for various
											retail and ticketing applications.
										</p>
									</div>
								</div>{' '}
								{/* END TEXT BLOCK */}
								{/* IMAGE BLOCK */}
								<div className="col-md-5 col-lg-6 order-first order-md-2">
									<div className="img-block left-column wow fadeInLeft">
										<Image
											className="img-fluid rounded"
											src="/images/nfc-technology-banner.jpg"
											alt="NFC technology banner for secure product authentication"
											width={600}
											height={413}
										/>
									</div>
								</div>
							</div>
						</div>{' '}
						{/* END TOP ROW */}
						{/* BOTTOM ROW */}
						<div className="bottom-row">
							<div className="row d-flex align-items-center">
								{/* IMAGE BLOCK */}
								<div className="col-md-5 col-lg-6">
									<div className="img-block left-column wow fadeInRight">
										<Image
											className="img-fluid rounded"
											src="/images/blockchain-security.jpg"
											alt="Blockchain security for product authentication"
											width={611}
											height={451}
										/>
									</div>
								</div>
								{/* TEXT BLOCK */}
								<div className="col-md-7 col-lg-6">
									<div className="txt-block right-column wow fadeInLeft">
										<div className="txt-box mb-25">
											<h3 className="h5-lg">Blockchain Ecosystem</h3>

											<p className="p-lg">
												Signet Tags solution allies the best of both worlds as it gathers the incorruptible nature of blockchain and the practical
												functionality of hardware, connecting the digital & the physical world by creating digital representations of valuable items.
											</p>

											<p className="p-lg">
												Blockchain, an immutable & transparent database. No central point of trust, enabling peer-to-peer interaction, saving time &
												money. Thanks to its many benefits, a real ecosystem composed of several different blockchain platforms has bloomed around
												this technology.
											</p>
										</div>
									</div>
								</div>{' '}
							</div>
						</div>{' '}
					</div>{' '}
				</section>{' '}
				<section id="features-8" className="pb-60 features-section division">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-10 col-xl-8">
								<div className="section-title title-01 mb-70">
									{/* Title */}
									<h2 className="h2-md">How Signet Tags works</h2>
									{/* Text */}
									<p className="p-xl">
										Signet Tags can facilitate transactions simply by tapping an attached or embedded NFC tag with an NFC-enabled smartphone or tablet
										to securely communicate information. This results in a frictionless authentication experience using a solution that fuels more
										powerful and dynamic Internet of Things applications. Bring it all together. Hover over or click on each component for details of
										the solution.
									</p>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div className="content-9-img video-preview wow fadeInUp">
										<iframe
											className="rounded-20px"
											width="860"
											height="515"
											src="https://www.youtube.com/embed/YQUjE2koNRI"
											title="Signet Demo Video"
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowFullScreen
											loading="lazy"
										></iframe>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<CallToAction />
			</>
		</>
	);
}

export default Technology;
