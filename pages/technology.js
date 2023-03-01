import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Testimonials from '@/components/Testimonials';
import Head from 'next/head';
import React from 'react';

function Technology() {
	return (
		<>
			<Head>
				<title>Signet Tags - Technology for Authentic Product Verification</title>
				<meta name="title" content="Authenticity Guaranteed - Secure Product Verification with Signet Tags" />
				<meta
					name="description"
					content="Signet Tags enables secure product verification and authentication through NFC tags, NFTs, and blockchain technology. Protect your physical products from counterfeiting and gain valuable business intelligence."
				/>
				<meta
					name="keywords"
					content="Signet Tags, NFC tags, NFTs, blockchain, product authentication, product verification, secure, unclonable, metaverse, business intelligence, IoT, peer-to-peer interaction, transparent, immutable."
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
			<Header scroll={true} />
			<>
				<section id="about-2" className="about-section">
					<div className="bg-inner bg-lightgrey inner-page-hero division">
						<div className="container">
							{/* ABOUT-2 TITLE */}
							<div className="row justify-content-center">
								<div className="col-12">
									<div className="about-2-title">
										{/* Title */}
										<h1 className="h1-md">Technology that guarantees product authenticity</h1>
										{/* Text */}
										<p className="p-xl">
											Pair your physical products, assets & collectibles with NFTs minted on the blockchain, Signet tags digital links & secure
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
										<img className="img-fluid" src="images/security.jpg" alt="about-image" />
									</div>

									<div className="col col-md-4">
										<img className="img-fluid" src="images/nfc-technology.jpg" alt="about-image" />
									</div>

									<div className="col col-md-4">
										<img className="img-fluid" src="images/blockchain.jpg" alt="about-image" />
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
											<h5 className="h5-md">NTAG 424 DNA</h5>
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
											<h5 className="h5-md">NFT</h5>
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
											<h5 className="h5-md">Smart Contract</h5>
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
											<h5 className="h5-md">Blockchain</h5>
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
											<h5 className="h5-md">Metaverse</h5>
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
											<h5 className="h5-md">Security</h5>
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
											<h5 className="h5-md">Unclonable Tags</h5>
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
											<h5 className="h5-md">Top UX</h5>
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
										<img className="img-fluid rounded" src="images/nfc-technology-banner.jpg" alt="content-image" />
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
										<img className="img-fluid rounded" src="images/blockchain-security.jpg" alt="video-preview" />
									</div>
								</div>
								{/* TEXT BLOCK */}
								<div className="col-md-7 col-lg-6">
									<div className="txt-block right-column wow fadeInLeft">
										<div className="txt-box mb-25">
											<h5 className="h5-lg">Blockchain Ecosystem</h5>

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
									<div className="text-center">
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
					</div>{' '}
				</section>{' '}
				<CallToAction />
			</>
		</>
	);
}

export default Technology;
