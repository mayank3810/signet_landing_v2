import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Content2 from '@/components/Home/Content2';
import Content3 from '@/components/Home/Content3';
import Content4 from '@/components/Home/Content4';
import CustomerEngagement from '@/components/Home/CustomerEngagement';
import Features from '@/components/Home/Features';
import Hero from '@/components/Home/Hero';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Brands from '@/components/Brands';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] });
// const Hero = dynamic(() => import('@/components/Home/Hero'), {
// 	ssr: false,
// });
// const Brands = dynamic(() => import('@/components/Brands'), {
// 	ssr: false,
// });
export default function Home() {
	const [headerRef, inHeaderView] = useInView();

	useEffect(() => {
		// token = localStorage.getItem
		// getToken();
	}, []);

	// const getToken = async () => {
	//   const token = await generateAccessToken();
	//   console.log(token);
	// };
	const iframeRef = useRef(null);

	// useEffect(() => {
	// 	iframeRef.current.src = 'https://www.youtube.com/embed/YQUjE2koNRI';
	// }, []);

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
				<link rel="preconnect" href="https://www.youtube-nocookie.com" />
			</Head>

			<div id="page" className="page">
				<Header scroll={inHeaderView} />
				<Hero />
				<div ref={headerRef}>
					<Brands />

					<Features />
					<hr className="divider" />

					<Content2 />
					<Content3 />
					<Content4 />
					<hr className="divider" />
					<CustomerEngagement />
					<section id="content-10" className="content-10 wide-100 content-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-lg-10 col-xl-8">
									<div className="section-title title-01 mb-70">
										{/* Title */}
										<h2 className="h2-md">Flexible and scalable across industries</h2>
										{/* Text */}
										<p className="p-xl">Our product authentication solution is flexible and scalable across industries</p>
									</div>
								</div>
							</div>
							{/* IMAGE BLOCK */}
							<div className="row">
								<div className="container">
									<div className="fbox-1-wrapper text-center">
										<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
											<div className="col">
												<div className="fbox-1 mb-40 wow fadeInUp fadeInUp-visible">
													<Link href={'/industries/cosmetics-and-perfumes'}>
														<div className="fbox-ico-center ico-60">
															{/* <img src="/images/industries/perfume-bottle-100.png" alt="ico-bkg" /> */}
															<Image src="/images/industries/perfume-bottle-100.png" alt="ico-bkg" width={60} height={60} />
														</div>
														<div className="fbox-txt-center">
															<h3 className="h3-font my-3">Cosmetics & Perfumes</h3>
															<p className="p-lg">Engage your consumers with fun, informative, smart packaging that also protects your brand</p>
														</div>
													</Link>
												</div>
											</div>
											<div className="col">
												<div className="fbox-1 mb-40 wow fadeInUp fadeInUp-visible">
													<Link href={'/industries/food-and-beverages'}>
														<div className="fbox-ico-center ico-60">
															{/* <img src="/images/industries/wine-bottle-100.png" alt="ico-bkg" /> */}
															<Image src="/images/industries/wine-bottle-100.png" alt="ico-bkg" width={60} height={60} />
														</div>
														<div className="fbox-txt-center">
															<h3 className="h3-font my-3">Food & Beverages</h3>
															<p className="p-lg">Customer Engagement + Anti-Counterfeit Protection for Food & Beverages Brands</p>
														</div>
													</Link>
												</div>
											</div>

											<div className="col">
												<div className="fbox-1 mb-40 wow fadeInUp fadeInUp-visible">
													<Link href={'/industries/agriculture'}>
														<div className="fbox-ico-center ico-60">
															{/* <img src="/images/industries/pesticide-100.png" alt="ico-bkg" /> */}
															<Image src="/images/industries/pesticide-100.png" alt="ico-bkg" width={60} height={60} />
														</div>
														<div className="fbox-txt-center">
															<h3 className="h3-font my-3">Agriculture</h3>
															<p className="p-lg">Tag, track, and instantaneously authenticate agrochemical products</p>
														</div>
													</Link>
												</div>
											</div>

											<div className="col">
												<div className="fbox-1 mb-40 wow fadeInUp fadeInUp-visible">
													<Link href={'/industries/auto-parts'}>
														<div className="fbox-ico-center ico-60">
															{/* <img src="/images/industries/wheel-100.png" alt="ico-bkg" /> */}
															<Image src="/images/industries/wheel-100.png" alt="ico-bkg" width={60} height={60} />
														</div>
														<div className="fbox-txt-center">
															<h3 className="h3-font my-3">Auto Parts</h3>
															<p className="p-lg">Protect your automotive brand and your customers from counterfeit automotive parts</p>
														</div>
													</Link>
												</div>
											</div>

											<div className="col">
												<div className="fbox-1 mb-40 wow fadeInUp fadeInUp-visible">
													<Link href={'/industries/pharmaceuticals'}>
														<div className="fbox-ico-center ico-60">
															{/* <img src="/images/industries/medicines-100.png" alt="ico-bkg" /> */}
															<Image src="/images/industries/medicines-100.png" alt="ico-bkg" width={60} height={60} />
														</div>
														<div className="fbox-txt-center">
															<h3 className="h3-font my-3">Pharmaceuticals</h3>
															<p className="p-lg">
																Smart packaging for Pharmaceuticals brands opens a new channel to engage, protect and build trust with your customers.
															</p>
														</div>
													</Link>
												</div>
											</div>

											<div className="col">
												<div className="fbox-1 mb-40 wow fadeInUp fadeInUp-visible">
													<Link href={'/industries/cannabis'}>
														<div className="fbox-ico-center ico-60">
															{/* <img src="/images/industries/cannabis-100.png" alt="ico-bkg" /> */}
															<Image src="/images/industries/cannabis-100.png" alt="ico-bkg" width={60} height={60} />
														</div>
														<div className="fbox-txt-center">
															<h3 className="h3-font my-3">Cannabis</h3>
															<p className="p-lg">
																Smart packaging for Cannabis brands opens a new channel to engage, protect, and build trust with your customers.
															</p>
														</div>
													</Link>
												</div>
											</div>

											<div className="col">
												<div className="fbox-1 mb-40 wow fadeInUp fadeInUp-visible">
													<Link href={'/industries/document-security'}>
														<div className="fbox-ico-center ico-60">
															{/* <img src="/images/industries/diploma-100.png" alt="ico-bkg" /> */}
															<Image src="/images/industries/diploma-100.png" alt="ico-bkg" width={60} height={60} />
														</div>
														<div className="fbox-txt-center">
															<h3 className="h3-font my-3">Document Security</h3>
															<p className="p-lg">Providing document security solutions for simple to complex requirements.</p>
														</div>
													</Link>
												</div>
											</div>
											<div className="col">
												<div className="fbox-1 mb-40 wow fadeInUp fadeInUp-visible">
													<Link href={'/industries/clothing-and-footwear'}>
														<div className="fbox-ico-center ico-60">
															{/* <img src="/images/industries/t-shirt-100.png" alt="ico-bkg" /> */}
															<Image src="/images/industries/t-shirt-100.png" alt="ico-bkg" width={60} height={60} />
														</div>
														<div className="fbox-txt-center">
															<h3 className="h3-font my-3">Clothing and footwear</h3>

															<p className="p-lg">
																Smart packaging for clothing brands opens a new channel to engage, protect, and build trust with your customers.
															</p>
														</div>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* ACTION BUTTON */}
							<div className="row">
								<div className="col">
									<div className="content-10-btn">
										{/* Button */}
										<Link href="/onboarding">
											<div className="video-popup2 btn btn-md btn-orange-red tra-grey-hover ico-15 ico-left">Get started</div>
										</Link>
										{/* Advantages List */}
										<ul className="advantages mt-25 clearfix">
											<li className="first-li">Free 30 days trial</li>
											<li>Exclusive Support</li>
											<li className="last-li">No Fees</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section id="content-9" className="content-9 bg-01 pt-100 content-section division">
						<div className="container white-color">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-10 col-lg-8">
									<div className="section-title title-02 mb-60">
										<h2 className="h2-xs">
											Get started with a free trial account. <br />
										</h2>
										<p className="p-xl">
											Explore Signet Platform with a Free Trial account to experience the technology yourself before you decide to scale.
										</p>
										<Link href="/onboarding">
											<div className="btn btn-yellow tra-yellow-hover color-white mr-15">Get Started</div>
										</Link>
										<p> *No Card Required.</p>
									</div>
								</div>
							</div>
							{/* IMAGE BLOCK */}
							<div className="row">
								<div className="col">
									<div className="content-9-img video-preview wow fadeInUp">
										<iframe
											id="signet-demo-video"
											ref={iframeRef}
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
