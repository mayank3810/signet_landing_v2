import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import Testimonials from '@/components/Testimonials';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Head from 'next/head';

function Pricing() {
	const [containerRef, inContainerView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const setPlan = (selectedPlan) => {
		localStorage.setItem('planName', selectedPlan);
	};

	return (
		<>
			<Head>
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />
				<meta name="robots" content="index, follow" />

				<meta name="title" content="Signet Pricing - Choose the Right Plan for Your Business" />
				<meta
					name="description"
					content="Explore Signet's pricing packages and choose the right plan for your business needs."
				/>
				<meta name="keywords" content="Signet pricing, pricing packages, choose the right plan" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:site_name" content="Signet Tags" />
				<meta property="og:url" content="https://www.signettags.com/pricing" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Signet Pricing - Choose the Right Plan" />
				<meta property="og:description" content="Find Signet's pricing plans, try free & access advanced features." />
				<meta property="og:image" content="/assets/images/Twitter-card.jpeg" />
				<meta property="og:locale" content="en_US" />

				{/* <!-- Twitter --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SignetTags" />
				<meta name="twitter:url" content="https://www.signettags.com/pricing" />
				<meta name="twitter:title" content="Signet Pricing - Choose the Right Plan" />
				<meta name="twitter:description" content="Find Signet's pricing plans, try free & access advanced features." />
				<meta name="twitter:image" content="/assets/images/Twitter-card.jpeg" />

				<link rel="canonical" href="https://www.signettags.com/pricing" key="canonical" />
				<title>Signet Pricing - Choose the Right Plan for Your Business</title>
			</Head>
			<Header scroll={inContainerView} />

			<div ref={containerRef}>

				


				<section id="pricing-2" className="bg-snow pb-60 inner-page-hero pricing-section division">
					<div className="container">
					<div className="row justify-content-center">
					<div className="col-lg-10 col-xl-8">
						<div className="section-title title-01 mb-80">
							{/* Title */}
							<h2 className="h2-md">Simple And Flexible Pricing</h2>
							{/* Text */}
							<p className="p-xl">
								No credit card required. Change or cancel your plan anytime
							</p>
						</div>
					</div>
				</div>
						<div className="pricing-2-row pc-25">
							<div className="row row-cols-1 row-cols-md-3">
								{/* BASIC PLAN */}
								<div className="col">
									<div className="pricing-2-table bg-white mb-40 wow fadeInUp">
										{/* Plan Price */}
										<div className="pricing-plan">
											{/* Plan Title */}
											<div className="pricing-plan-title">
												<h5 className="h5-xs">Basic</h5>
												<h6 className="h6-sm bg-black">Forever Free</h6>
											</div>
											{/* Price */}
											<sup className="dark-color"></sup>
											<span className="dark-color">Free</span>
											<sup className="validity dark-color"></sup>
											<p className="p-md">Upto 1000 tag scans per month</p>
										</div>
										{/* Plan Features  */}
										<ul className="features">
											<li>
												<p className="p-md">
													<span>Basic</span> Features
												</p>
											</li>

											<li>
												<p className="p-md">
													<span>Static</span> QR code Tags
												</p>
											</li>
											<li>
												<p className="p-md">
													<span>Unlimited</span> QR codes
												</p>
											</li>
											<li>
												<p className="p-md">
													<span>1</span> User Login
												</p>
											</li>

										</ul>
										{/* Pricing Plan Button */}
										<Link href={'/request-demo'}>
											<button onClick={() => setPlan('Basic')} className="btn btn-sm btn-yellow tra-yellow-hover">
												Start Free Trial
											</button>
										</Link>
									</div>
								</div>{' '}
								{/* END BASIC PLAN */}
								{/* AGENCY PLAN */}
								<div className="col">
									<div className="pricing-2-table bg-white mb-40 wow fadeInUp">
										{/* Plan Price */}
										<div className="pricing-plan">
											{/* Plan Title */}
											<div className="pricing-plan-title">
												<h5 className="h5-xs">Advanced</h5>
												<h6 className="h6-sm bg-black">Billed annually</h6>
											</div>
											{/* Price */}
											<sup className="dark-color">$</sup>
											<span className="dark-color">19</span>
											<sup className="validity dark-color">per month</sup>
											<p className="p-md">Upto 5000 tag scans per month</p>
										</div>
										{/* Plan Features  */}
										<ul className="features">
											<li>
												<p className="p-md">
													<span>All</span> Features
												</p>
											</li>
											<li>
												<p className="p-md">
													<span>Dynamic</span> QR code Tags
												</p>
											</li>
											<li>
												<p className="p-md">
													<span>Unlimited</span> User Login
												</p>
											</li>
											<li>
												<p className="p-md">
													<span>Premium</span> Support
												</p>
											</li>
										</ul>
										{/* Pricing Plan Button */}
										<Link href={'/request-demo'}>
											<button onClick={() => setPlan('Advanced')} className="btn btn-sm btn-yellow tra-yellow-hover">
												Start Free Trial
											</button>
										</Link>
									</div>
								</div>{' '}
								{/* END AGENCY PLAN  */}
								{/* ADVANCED PLAN */}
								<div className="col">
									<div className="pricing-2-table bg-white mb-40 wow fadeInUp">
										{/* Plan Price  */}
										<div className="pricing-plan highlight">
											{/* Plan Title */}
											<div className="pricing-plan-title">
												<h5 className="h5-xs">Enterprise</h5>
												<h6 className="h6-sm bg-yellow black-color">Popular</h6>
											</div>
											{/* Price */}
											<sup className="dark-color"></sup>
											<span
												className="dark-color"
												style={{
													margin: '54px 0px',
													display: 'block',
													fontSize: '2.5rem',
												}}
											>
												Contact us
											</span>
										</div>
										{/* Plan Features  */}
										<ul className="features">
											<li>
												<p className="p-md">
													<span>Unlimited</span> Tag Scans
												</p>
											</li>

											<li>
												<p className="p-md">
													<span>AI Generated</span> QR codes
												</p>
											</li>

											<li>
												<p className="p-md">
													<span>Embedded NFC</span> Chips
												</p>
											</li>
											<li>
												<p className="p-md">
													<span>Blockchain</span> Framework
												</p>
											</li>
										</ul>
										{/* Pricing Plan Button */}

										<Link href={'/contact'}>
											<button onClick={() => setPlan('Enterprise')} className="btn btn-sm btn-yellow tra-yellow-hover">
												Contact us
											</button>
										</Link>
									</div>
								</div>{' '}
								{/* END ADVANCED PLAN */}
							</div>
						</div>{' '}
						{/* END PRICING TABLES */}
						{/* PRICING COMPARE */}
						<div className="pricing-compare pc-40">
							<div className="row">
								<div className="col">
									{/* Title */}
									<h3 className="h3-sm text-center">Compare Pricing Packages</h3>
									{/* Table */}
									<div className="table-responsive">
										<table className="table text-center">
											<thead>
												<tr>
													<th style={{ width: '34%' }} />
													<th style={{ width: '22%' }}>Basic</th>
													<th style={{ width: '22%' }}>Advanced</th>
													<th style={{ width: '22%' }}>Enterprise</th>
												</tr>
											</thead>
											<tbody>


												<tr>
													<th scope="row" className="text-start">
														Tags Scans
													</th>
													<td className="ico-15 ">
														1000 per month
													</td>
													<td className="ico-15 ">
														5000 per month
													</td>
													<td className="ico-15 ">
														Unlimited
													</td>
												</tr>

												<tr>
													<th scope="row" className="text-start">
														User Location Detection
													</th>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
												</tr>

												<tr>
													<th scope="row" className="text-start">
														Colors and Theme Customisation
													</th>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
												</tr>

												<tr>
													<th scope="row" className="text-start">
														Advanced Analytics Dashboard
													</th>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
												</tr>
												<tr>
													<th scope="row" className="text-start">
														Customer Push Notification
													</th>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
												</tr>

												<tr>
													<th scope="row" className="text-start">
														Feedback and Surveys
													</th>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
												</tr>

												<tr>
													<th scope="row" className="text-start">
														Track user location
													</th>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
												</tr>

												<tr>
													<th scope="row" className="text-start">
														Insights on Tag Users
													</th>
													<td className="ico-10 red-color">
														<span className="flaticon-cancel" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
												</tr>
												<tr>
													<th scope="row" className="text-start">
														Run Contests and Offers
													</th>
													<td className="ico-10 red-color">
														<span className="flaticon-cancel" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
												</tr>

												<tr>
													<th scope="row" className="text-start">
														Multiple Language Support
													</th>
													<td className="ico-10 red-color">
														<span className="flaticon-cancel" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
												</tr>

												<tr>
													<th scope="row" className="text-start">
														Multiple users
													</th>
													<td className="ico-10 red-color">
														<span className="flaticon-cancel" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
												</tr>

												<tr>
													<th scope="row" className="text-start">
														Blockchain Framework
													</th>
													<td className="ico-10 red-color">
														<span className="flaticon-cancel" />
													</td>
													<td className="ico-10 red-color">
														<span className="flaticon-cancel" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
												</tr>

												<tr>
													<th scope="row" className="text-start">
														Anti Clone DNA 424 NFC Tags
													</th>
													<td className="ico-10 red-color">
														<span className="flaticon-cancel" />
													</td>
													<td className="ico-10 red-color">
														<span className="flaticon-cancel" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
												</tr>

												<tr>
													<th scope="row" className="text-start">
														AI Generated QR codes
													</th>
													<td className="ico-10 red-color">
														<span className="flaticon-cancel" />
													</td>
													<td className="ico-10 red-color">
														<span className="flaticon-cancel" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
												</tr>
												<tr>
													<th scope="row" className="text-start">
														Single Sign on
													</th>
													<td className="ico-10 red-color">
														<span className="flaticon-cancel" />
													</td>
													<td className="ico-10 red-color">
														<span className="flaticon-cancel" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
												</tr>

												<tr>
													<th scope="row" className="text-start">
														Access to APIs
													</th>
													<td className="ico-10 red-color">
														<span className="flaticon-cancel" />
													</td>
													<td className="ico-10 red-color">
														<span className="flaticon-cancel" />
													</td>
													<td className="ico-15 green-color">
														<span className="flaticon-check" />
													</td>
												</tr>
											</tbody>
										</table>
									</div>{' '}
									{/* End Table */}
								</div>
							</div>
						</div>{' '}
						{/* END PRICING COMPARE */}
						{/* PRICING NOTICE TEXT */}
						<div className="row">
							<div className="col-lg-10 offset-lg-1">
								<div className="pricing-notice text-center mb-40">
									<p className="p-md">
										The above prices do not include applicable taxes based on your billing address. The final price will be displayed on the checkout
										page, before the payment is completed
									</p>
								</div>
							</div>
						</div>
						{/* PAYMENT METHODS */}
						<div className="payment-methods pc-30">
							<div className="row row-cols-1 row-cols-md-3">
								{/* Payment Methods */}
								<div className="col col-lg-5">
									<div className="pbox mb-40">
										{/* Title */}
										<h6 className="h6-md">Accepted Payment Methods</h6>
										{/* Payment Icons */}
										<ul className="payment-icons ico-50">
											<li>
												<img src="/images/png-icons/visa.png" alt="payment-icon" />
											</li>
											<li>
												<img src="/images/png-icons/am.png" alt="payment-icon" />
											</li>
											<li>
												<img src="/images/png-icons/discover.png" alt="payment-icon" />
											</li>

											<li>
												<img src="/images/png-icons/jcb.png" alt="payment-icon" />
											</li>
										</ul>
									</div>
								</div>
								{/* Payment Guarantee */}
								<div className="col col-lg-4">
									<div className="pbox mb-40">
										{/* Title */}
										<h6 className="h6-md">Money Back Guarantee</h6>
										{/* Text */}
										<p>Explore Signet Platform for 30 days. If it’s not a perfect fit, receive a full refund.</p>
									</div>
								</div>
								{/* Payment Encrypted */}
								<div className="col col-lg-3">
									<div className="pbox mb-40">
										{/* Title */}
										<h6 className="h6-md">SSL Encrypted Payment</h6>
										{/* Text */}
										<p>Your information is protected by 256-bit SSL encryption.</p>
									</div>
								</div>
							</div>
						</div>{' '}
						{/* END PAYMENT METHODS */}
					</div>{' '}
					{/* End container */}
				</section>{' '}
			</div>
		</>
	);
}

export default Pricing;
