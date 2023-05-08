import Head from 'next/head';
import Header from '@/components/Header';
import RequestQuote from '@/components/Home/RequestQuote';

import Features from '@/components/Home/Features';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { useInView } from 'react-intersection-observer';
import Brands from '@/components/Brands';
import TagCompare from '@/components/TagCompare';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const [headerRef, inHeaderView] = useInView();
	const [init, setInit] = useState(true);

	const [open, setOpen] = useState(false);

	return (
		<>
			<Head>
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />
				<meta name="robots" content="index, follow" />

				<meta name="title" content="Signet Tags - Blockchain-based authenticity and Brand protection solution" />
				<meta
					name="description"
					content="Signet tags link your products with blockchain-proven ownership. The blockchain solution ensures authenticity and increases customer engagement. "
				/>
				<meta name="keywords" content="signet, signet tags, signettags, brand protection software, blockchain-proven ownership" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:site_name" content="Signet Tags" />
				<meta property="og:url" content="https://www.signettags.com/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Brand protection and authenticity with Signet Tags " />
				<meta property="og:description" content="Ensure authenticity & engage customers with Signet Tags." />
				<meta property="og:image" content="/assets/images/Twitter-card.jpeg" />
				<meta property="og:locale" content="en_US" />

				{/* <!-- Twitter --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SignetTags" />
				<meta name="twitter:url" content="https://www.signettags.com/" />
				<meta name="twitter:title" content="Brand protection and authenticity with Signet Tags " />
				<meta name="twitter:description" content="Ensure authenticity & engage customers with Signet Tags." />
				<meta name="twitter:image" content="/assets/images/Twitter-card.jpeg" />

				<link rel="canonical" href="https://www.signettags.com/" key="canonical" />
				<title>Signet Tags: Blockchain-Based Brand Protection Solution</title>
			</Head>

			<div id="page" className="page">
				<Header scroll={inHeaderView} />

				<RequestQuote open={open} setOpen={setOpen} />

				<div ref={headerRef}>
					<Brands />

					<TagCompare />

					<section id="content-5" className="content-5 ws-wrapper content-section division">
						<div className="container">
							<div className="content-5-wrapper bg-whitesmoke">
								<div className="row d-flex align-items-center">
									<div className="col-md-7 col-lg-6">
										<div className="txt-block left-column">
											<div className={`duration-1 ${init ? 'cbox mb-40 animate__animated animate__fadeInLeft' : 'cbox mb-40 animate__animated'}`}>
												<div className="cbox-ico">
													<div className="dark-color ico-65">
														<span>
															<img src="/images/png-icons/icons8-free-100.png" alt="ico-bkg" />
														</span>
													</div>
												</div>
												<div className="cbox-txt">
													<h3 className="h3-font mb-1">Free App to track and trace</h3>
													<p className="p-lg">We offer free web and mobile app to scan the tags and track, analyze and engage with customers.</p>
												</div>
											</div>

											<div className={`duration-1 ${init ? 'cbox mb-40 animate__animated animate__fadeInLeft' : 'cbox mb-40 animate__animated'}`}>
												<div className="cbox-ico">
													<div className="dark-color ico-65">
														<span>
															<img src="/images/png-icons/icons8-color-swatch-100.png" alt="ico-bkg" />
														</span>
													</div>
												</div>
												<div className="cbox-txt">
													<h3 className="h3-font mb-1">Customized logo and packaging </h3>
													<p className="p-lg">All kind of customizations avaialble for shape size and colors.</p>
												</div>
											</div>
											<div className={`duration-1.5 ${init ? 'cbox mb-40 animate__animated animate__fadeInLeft' : 'cbox mb-40 animate__animated'}`}>
												<div className="cbox-ico">
													<div className="dark-color ico-65">
														<span>
															<img src="/images/png-icons/icons8-money-mouth-face-100.png" alt="ico-bkg" />
														</span>
													</div>
												</div>
												<div className="cbox-txt">
													<h3 className="h3-font mb-1">Affordable Pricing</h3>
													<p className="p-lg">
														Pricing that fits your budget. we are committed to offering affordable pricing on all of our products without compromising
														on quality.
													</p>
												</div>
											</div>
											<div className={`duration-1.75 ${init ? 'cbox mb-40 animate__animated animate__fadeInLeft' : 'cbox mb-40 animate__animated'}`}>
												<div className="cbox-ico">
													<div className="dark-color ico-65">
														<span>
															<img src="/images/png-icons/icons8-nfc-tag-100.png" alt="ico-bkg" />
														</span>
													</div>
												</div>
												<div className="cbox-txt">
													<h3 className="h3-font mb-1">Digital NFC chip tag</h3>
													<p className="p-lg">
														Switch to a digital tamper proof seal. Easy check of authenticity for consumers. No special app download required.
													</p>
												</div>
											</div>
										</div>
										<div onClick={() => setOpen(true)} className="btn btn-yellow tra-yellow-hover color-white mr-15">
											Get Free Samples
										</div>
									</div>{' '}
									<div className="col-md-5 col-lg-6">
										{/* <img className="img-fluid" src="/images/scanning-theme.png" alt="content-image" /> */}
										<Image className="img-fluid" src="/images/scanning-theme.png" alt="content-image" width={401} height={454} />
									</div>
								</div>
							</div>{' '}
							{/* End row */}
						</div>
					</section>

					<Features />

					<hr className="divider" />

					<section
						// ref={containerRef}
						id="content-3"
						className="content-3 wide-60 content-section division"
					>
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-lg-10 col-xl-8">
									<div className="section-title title-01 mb-70">
										{/* Title */}
										<h2 className="h2-md">Increase repeat sales</h2>
										{/* Text */}
										<p className="p-xl">Our tamper-evident tags offer several benefits</p>
									</div>
								</div>
							</div>
							{/* TOP ROW */}
							<div className="top-row pb-50">
								<div className="row d-flex align-items-center">
									{/* IMAGE BLOCK */}
									<div className="col-md-5 col-lg-6">
										<div
											className={`duration-1.75 ${
												init ? 'rel img-block left-column animate__animated animate__slideInUp' : 'rel img-block left-column animate__animated'
											}`}
											// style={{ animationDuration: '1.75s' }}
										>
											{/* <img className="img-fluid" src="/images/digital-experience.jpg" alt="content-image" /> */}
											<Image className="img-fluid" src="/images/digital-experience.jpg" alt="content-image" width={600} height={999} />
										</div>
									</div>
									{/* TEXT BLOCK */}
									<div className="col-md-7 col-lg-6">
										<div
											className={`duration-1.75 ${
												init
													? 'txt-block right-column left-column animate__animated animate__slideInUp'
													: 'txt-block right-column left-column animate__animated'
											}`}
											// style={{ animationDuration: '1.75s' }}
										>
											<div className="txt-box">
												<ul className="simple-list">
													<li className="list-item">
														<p className="p-lg">
															Security: The tamper-evident feature ensures that the tags cannot be removed or replaced without showing visible signs
															of tampering, which makes it a reliable security measure to protect the product against counterfeiting or theft.
														</p>
													</li>
													<li className="list-item">
														<p className="p-lg">
															Authenticity: NFC tamper-evident tags can help verify the authenticity of a product by providing information about its
															origin, manufacturing, and distribution process, which can be easily accessed by scanning the tag with an NFC-enabled
															device.
														</p>
													</li>

													<li className="list-item">
														<p className="p-lg">
															Traceability: NFC tamper-evident tags can provide a traceability mechanism to track the movement of products through the
															supply chain, enabling manufacturers and retailers to monitor inventory levels and improve their logistics and
															distribution processes.
														</p>
													</li>

													<li className="list-item">
														<p className="p-lg">
															Convenience: NFC tamper-evident tags can make it easier for customers to access information about a product, such as its
															features, pricing, and availability, by simply scanning the tag with their smartphone or tablet.
														</p>
													</li>
												</ul>
												<div onClick={() => setOpen(true)} className="btn btn-yellow tra-yellow-hover color-white mr-15">
													Get Free Samples
												</div>
											</div>{' '}
										</div>
									</div>{' '}
								</div>
							</div>{' '}
						</div>{' '}
					</section>

					<section id="content-9" className="content-9 bg-01 pt-100 content-section division">
						<div className="container white-color">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-10 col-lg-8">
									<div className="section-title title-02 mb-60">
										<h2 className="h2-xs">
											Get Free Samples and a free trial. <br />
										</h2>
										<p className="p-xl">
											Explore Signet Platform with a Free Trial account to experience the technology yourself before you decide to scale.
										</p>
										<div onClick={() => setOpen(true)} className="btn btn-yellow tra-yellow-hover color-white mr-15">
											Get Free Samples
										</div>
									</div>
								</div>
							</div>
							{/* IMAGE BLOCK */}
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
										></iframe>
									</div>
								</div>
							</div>
						</div>
						{/* End container */}
					</section>
					<section id="faqs-2" className="wide-60 faqs-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-lg-10 col-xl-8">
									<div className="section-title title-01 mb-80">
										{/* Title */}
										<h2 className="h2-md">Got Questions? Look Here</h2>
										{/* Text */}
										<p className="p-xl">
											Get your common questions answered. If you have more queries, please reach out to us using our contact page.
										</p>
									</div>
								</div>
							</div>
							{/* FAQs-2 QUESTIONS */}
							<div className="faqs-2-questions">
								<div className="row row-cols-1 row-cols-lg-2">
									{/* QUESTIONS HOLDER */}
									<div className="col">
										<div className="questions-holder pr-15">
											{/* QUESTION #1 */}
											<div className="question wow fadeInUp">
												{/* Question */}
												<h3 className="h3-font mb-3">Can I see Signet Tags in action before purchasing?</h3>
												{/* Answer */}
												<p className="p-lg">
													Yes, you can resister a free trial account with us. The free trial account can be used to test the digital and
													authentication experience.
												</p>
											</div>
											{/* QUESTION #2 */}
											<div className="question wow fadeInUp">
												{/* Question */}
												<h3 className="h3-font mb-3">What are the requirements for using Signet Tags?</h3>
												{/* Answer */}
												<p className="p-lg">
													There are no specific requirements to add brand authentication. NFC authentication doesnot require any app downloads.
												</p>
											</div>
											{/* QUESTION #3 */}
											<div className="question wow fadeInUp">
												{/* Question */}
												<h3 className="h3-font mb-3">Can I use Signet on different devices?</h3>
												{/* Answer */}
												<ul className="simple-list">
													<li className="list-item">
														<p className="p-lg">Yes, our signet tags are compatible with all major smartphones, including iOS and Android devices.</p>
													</li>
													<li className="list-item">
														<p className="p-lg">
															Our product management app is designed to work on any browser or tablet, making it a convenient tool for busy
															professionals.
														</p>
													</li>
												</ul>
											</div>
										</div>
									</div>
									{/* END QUESTIONS HOLDER */}
									{/* QUESTIONS HOLDER */}
									<div className="col">
										<div className="questions-holder pl-15">
											{/* QUESTION #4 */}
											<div className="question wow fadeInUp">
												{/* Question */}
												<h3 className="h3-font mb-3">Do you have a free trial?</h3>
												{/* Answer */}
												<p className="p-lg">Yes, we offer a 30 day free trial for our platform. You get full access to all the platform features.</p>
											</div>
											{/* QUESTION #5 */}
											<div className="question wow fadeInUp">
												{/* Question */}
												<h3 className="h3-font mb-3">How does Signettags handle my privacy?</h3>
												{/* Answer */}
												<p className="p-lg">Signet is designed with privacy first approach. We comply with GDPR, CCPA and LGPD privacy laws.</p>
											</div>
											{/* QUESTION #6 */}
											<div className="question wow fadeInUp">
												{/* Question */}
												<h3 className="h3-font mb-3">Can I integrate Signet with my existing software?</h3>
												{/* Answer */}
												<div className="simple-list">
													<p className="p-lg">
														Yes. Signet is designed on a API first pattern, which can be used across any existing platform for seamless integration.
													</p>
												</div>
											</div>
										</div>
									</div>
									{/* END QUESTIONS HOLDER */}
								</div>
								{/* End row */}
							</div>
							{/* END FAQs-2 QUESTIONS */}
							{/* MORE QUESTIONS BUTTON */}
							<div className="row">
								<div className="col">
									<div className="more-questions">
										<h3 className="h3-font my-3">
											Have more questions?
											<Link href={'/contact'}>Ask your question here</Link>
										</h3>
									</div>
								</div>
							</div>
						</div>
						{/* End container */}
					</section>
				</div>
			</div>
		</>
	);
}
