import Header from '@/components/Header';
import Form1 from '@/components/Onboarding/Form1';
import Form2 from '@/components/Onboarding/Form2';
import LeftText from '@/components/Onboarding/LeftText';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

function Onboarding() {
	// { email, name, subject, message }
	const [stage, setStage] = useState(1);
	const [organizationId, setOrganizationId] = useState('');
	const [headerRef, inHeaderView] = useInView();

	return (
		<>
			<Head>
				<title>Signet Tags - Onboarding Process Overview</title>
				<link rel="canonical" href="https://www.signettags.com/onboarding" key="canonical" />
				<meta name="title" content="Get Started For Free with Signet Tags - Tag, Track, and Authenticate Your Products" />
				<meta
					name="description"
					content="Try Signet Tags' product authentication with our 100% risk-free trial. Get full access to all features, pay nothing for 30 days, and cancel anytime."
				/>
				<meta
					name="keywords"
					content="Signet Tags, onboarding, tag, track, authenticate, products, risk-free trial, access, features, cancel, pay nothing"
				/>
				<meta name="robots" content="noindex, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:site_name" content="Signet Tags" />
				<meta property="og:url" content="https://www.signettags.com/onboarding" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Free product tagging with Signet solutions" />
				<meta
					property="og:description"
					content="Tag, track, and authenticate products with Signet Tags. Join the risk-free trial, access all features. Pay nothing for 30 days, cancel anytime."
				/>
				<meta property="og:image" content="/assets/images/Twitter-card.jpeg" />
				<meta property="og:locale" content="en_US" />

				{/* <!-- Twitter --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SignetTags" />
				<meta name="twitter:url" content="https://www.signettags.com/onboarding" />
				<meta name="twitter:title" content="Free product tagging with Signet solutions" />
				<meta
					name="twitter:description"
					content="Tag, track, and authenticate products with Signet Tags. Join the risk-free trial, access all features. Pay nothing for 30 days, cancel anytime."
				/>
				<meta name="twitter:image" content="/assets/images/Twitter-card.jpeg" />
			</Head>
			<div ref={headerRef} id="page" className="page">
				<Header scroll={inHeaderView} />
				<section id="login-3" className="login-section division">
					<div className="container">
						<div className="row">
							
							<div className="col-md-6">
								{stage == 2 ? (
									<LeftText
										heading={'Help us understand your requirements'}
										subheading={'We will come back with the best <br/> possible solution for your business.'}
									/>
								) : (
									<LeftText
										heading={'Get started For Free with Signet Tags'}
										subheading={' Best solution to tag, track and <br /> authenticate your products.'}
									/>
								)}
							</div>
							<div className="col-md-6 side-bar">
								
									{stage === 1 ? <Form1 setStage={setStage} setOrganizationId={setOrganizationId} /> : <Form2 organizationId={organizationId} />}
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default Onboarding;
