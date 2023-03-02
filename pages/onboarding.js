import Header from '@/components/Header';
import Form1 from '@/components/Onboarding/Form1';
import Form2 from '@/components/Onboarding/Form2';
import LeftText from '@/components/Onboarding/LeftText';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';

function Onboarding() {
	// { email, name, subject, message }
	const [stage, setStage] = useState(1);
	const [organizationId, setOrganizationId] = useState('');

	return (
		<>
			<Head>
				<title>Signet Tags - Onboarding Process Overview</title>
				<link rel="canonical" href="https://www.signettags.com/onboarding" key="canonical" />
				<meta name="title" content="Get Started For Free with Signet Tags - Tag, Track, and Authenticate Your Products" />
				<meta
					name="description"
					content="Signet Tags is the best solution to tag, track, and authenticate your products. Sign up for our 100% risk-free trial and get access to all features. Pay nothing for the first 30 days and cancel at any time during your trial."
				/>
				<meta
					name="keywords"
					content="Signet Tags, onboarding, tag, track, authenticate, products, risk-free trial, access, features, cancel, pay nothing"
				/>
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:site_name" content="Signet Tags" />
				<meta property="og:url" content="https://www.signettags.com/onboarding" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Get Started For Free with Signet Tags - Tag, Track, and Authenticate Your Products" />
				<meta
					property="og:description"
					content="Signet Tags is the best solution to tag, track, and authenticate your products. Sign up for our 100% risk-free trial and get access to all features. Pay nothing for the first 30 days and cancel at any time during your trial."
				/>
				<meta property="og:image" content="/assets/images/Twitter-card.jpeg" />
				<meta property="og:locale" content="en_US" />

				{/* <!-- Twitter --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SignetTags" />
				<meta name="twitter:url" content="https://www.signettags.com/onboarding" />
				<meta name="twitter:title" content="Get Started For Free with Signet Tags - Tag, Track, and Authenticate Your Products" />
				<meta
					name="twitter:description"
					content="Signet Tags is the best solution to tag, track, and authenticate your products. Sign up for our 100% risk-free trial and get access to all features. Pay nothing for the first 30 days and cancel at any time during your trial."
				/>
				<meta name="twitter:image" content="/assets/images/Twitter-card.jpeg" />
			</Head>
			<section id="login-2" className="login-section division">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-5 col-lg-5 side-bar">
							<div className="login-page-logo pt-30">
								<Link href="/" className="logo-black">
									<img src="/images/logo_dark.svg" alt="header-logo" />
								</Link>
							</div>
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

							{/* <div className="tab-group">
                <div className="tab active ">
                  <h5 className="h5-md">Step-1</h5>
                  <span className="ico-25 green-color">
                    <span className="flaticon-check"></span>
                  </span>
                </div>
                <div className="tab ">
                  <h5 className="h5-md">Step-2</h5>

                </div>
                <div className="tab">
                  <h5 className="h5-md">Step-3</h5>

                </div>
              </div> */}
						</div>
						<div className="col-md-7 col-lg-7">
							{/* LOGO */}
							{/* SIGN IN FORM */}
							<div className="register-form">
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
