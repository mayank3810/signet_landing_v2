import CallToAction from '@/components/CallToAction';
import Header from '@/components/Header';
import Testimonials from '@/components/Testimonials';
import Head from 'next/head';
import React from 'react';

function RequestDemo() {
	return (
		<>
			<Head>
				<title>Signet Tags - Request a Demo | Schedule a Meeting</title>
				<link rel="canonical" href="https://www.signettags.com/request-demo" key="canonical" />
				<meta name="title" content="Schedule a Demo | Book a Meeting | Request a Free Trial" />
				<meta
					name="description"
					content="Schedule a demo to learn more about our products and services. Book a meeting with our team and request a free trial to experience our solutions firsthand."
				/>
				<meta
					name="keywords"
					content="Request a Demo, Schedule a Meeting, Book a Demo, Request a Free Trial, Experience Our Solutions, Learn More, Products and Services, Demo Request"
				/>
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="Meta Tags — Preview, Edit and Generate" />
				<meta name="og:title" content="Schedule a Demo or Request a Free Trial | Signet Tags" />
				<meta
					name="og:description"
					content="Learn more about our products and services with a demo or request a free trial to experience our solutions firsthand. Book a meeting with our team today."
				/>
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
			<section id="content-3" className="bg-snow content-3 wide-60 content-section division">
				<div className="container">
					<div className="row pb-50">
						<iframe src="https://calendly.com/mayank-gauatm/30min" width={1000} height={700} />
					</div>
				</div>
			</section>
			<Testimonials />
			<CallToAction />
		</>
	);
}

export default RequestDemo;
