import Form1 from '@/components/Onboarding/Form1';
import Form2 from '@/components/Onboarding/Form2';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

function Onboarding() {
	// { email, name, subject, message }
	const [stage, setStage] = useState(1);
	const [organizationId, setOrganizationId] = useState('');
	const [headerRef, inHeaderView] = useInView();

	return (
		<>
			<Head>
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="robots" content="noindex, follow" />
				<meta name="language" content="English" />

				<meta name="title" content="Start Free Trial For Free with Signet Tags - Tag, Track, and Authenticate Your Products" />
				<meta
					name="description"
					content="Try Signet Tags' product authentication with our 100% risk-free trial. Get full access to all features, pay nothing for 30 days, and cancel anytime."
				/>
				<meta
					name="keywords"
					content="Signet Tags, onboarding, tag, track, authenticate, products, risk-free trial, access, features, cancel, pay nothing"
				/>

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

				<link rel="canonical" href="https://www.signettags.com/onboarding" key="canonical" />
				<title>Signet Tags - Onboarding Process Overview</title>
			</Head>
			<section id="login-3" className="register-form">
				<div className="container">

					<div className="row">

						<div className='col-md-8 col-lg-6 offset-md-2 offset-lg-3'>
							<div className="row justify-content-center">
								<div className="col-md-4">
									<Image className="footer-logo mb-25" src="/images/logo_dark.svg" alt="Signet Tags Dark Logo" width={184} height={55} />
								</div>
							</div>
							<div className="side-bar">
								{stage === 1 ? <Form1 setStage={setStage} setOrganizationId={setOrganizationId} /> : <Form2 organizationId={organizationId} />}
							</div>
						</div>

					</div>
				</div>
			</section>
		</>
	);
}

export default Onboarding;
