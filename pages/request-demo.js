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
				<link rel="canonical" href="https://www.signettags.com/request-demo/" key="canonical" />
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
				<meta property="og:site_name" content="Signet Tags" />
				<meta property="og:url" content="https://www.signettags.com/request-demo/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Schedule a Demo or Request a Free Trial with Signet Tags" />
				<meta property="og:description" content="Request a demo or free trial to experience our solutions. Schedule a meeting with us today." />
				<meta property="og:image" content="/assets/images/Twitter-card.jpeg" />
				<meta property="og:locale" content="en_US" />

				{/* <!-- Twitter --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SignetTags" />
				<meta name="twitter:url" content="https://www.signettags.com/request-demo/" />
				<meta name="twitter:title" content="Schedule a Demo or Request a Free Trial with Signet Tags" />
				<meta name="twitter:description" content="Request a demo or free trial to experience our solutions. Schedule a meeting with us today." />
				<meta name="twitter:image" content="/assets/images/Twitter-card.jpeg" />
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
