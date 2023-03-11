import Header from '@/components/Header';
import Head from 'next/head';
import React from 'react';

function PrivacyPolicy() {
	return (
		<>
			<Head>
				<title>Signet Tags - Privacy Policy and Data Protection Measures</title>
				<link rel="canonical" href="https://www.signettags.com/privacy-policy" key="canonical" />
				<meta name="title" content="Privacy Policy - Last Modified: February 04, 2023" />
				<meta name="description" content="Our Privacy Policy explains how we collect, use, share, and protect your personal information." />
				<meta name="keywords" content="Signet Tags, privacy policy, personal information, data processing, prohibited conduct, account security." />
				<meta name="robots" content="noindex, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:site_name" content="Signet Tags" />
				<meta property="og:url" content="https://www.signettags.com/privacy-policy" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Privacy Policy - Signet Tags" />
				<meta property="og:description" content="Review our Privacy Policy on personal info handling." />
				<meta property="og:image" content="/assets/images/Twitter-card.jpeg" />
				<meta property="og:locale" content="en_US" />

				{/* <!-- Twitter --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SignetTags" />
				<meta name="twitter:url" content="https://www.signettags.com/privacy-policy" />
				<meta name="twitter:title" content="Privacy Policy - Signet Tags" />
				<meta name="twitter:description" content="Review our Privacy Policy on personal info handling." />
				<meta name="twitter:image" content="/assets/images/Twitter-card.jpeg" />
			</Head>
			<Header scroll={true} />
			{/* TERMS & PRIVACY
			============================================= */}
			<section id="terms-page" className="bg-snow wide-70 inner-page-hero terms-section division">
				<div className="container">
					{/* TERMS CONTENT */}
					<div className="row justify-content-center">
						<div className="col-lg-10">
							{/* TERMS TITLE */}
							<div className="terms-title text-center">
								{/* Title */}
								<h1 className="h1-md">Our Privacy Policy</h1>
								{/* Text */}
								<p className="p-xl grey-color">Last Modified: February 04, 2023</p>
							</div>
							{/* DIVIDER LINE */}
							<hr className="divider" />
							{/* TERMS BOX */}
							<div className="terms-box mt-60">
								<h3>

									Introduction
								</h3>

								<p>This privacy policy outlines how we collect, use, and protect your personal information when you visit our website. We take your privacy seriously and are committed to protecting your personal information.</p>

								<h3>
									Data Collection

								</h3>
								<p>
									We collect personal information that you voluntarily provide to us when you interact with our website. This may include your name, email address, phone number, or any other personal information you provide through our contact form, newsletter sign-up, or other forms on our website.


								</p>
								<p>
									We also collect non-personal information through the use of cookies and similar technologies. This includes your IP address, browser type, operating system, and other technical information.

								</p>
								<h3>

									Data Use
								</h3>
								<p>
									We use your personal information to respond to your inquiries, provide customer service, send you newsletters or promotional materials, and improve our website. We do not sell or share your personal information with third parties, except as necessary to provide services to you or as required by law.

								</p>
								<p>
									We use non-personal information to analyze trends, administer our website, and improve our services. This information does not identify you personally and is used for statistical purposes only.

								</p>
								<h3>

									Data Protection
								</h3>
								<p>
									We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. We use industry-standard security measures, such as SSL encryption, to protect your personal information when it is transmitted to us.

								</p>
								<p>
									However, no method of transmission over the Internet or electronic storage is completely secure. We cannot guarantee the absolute security of your personal information, and you use our website at your own risk.

								</p>
								<h3>
									Data Retention

								</h3>
								<p>
									We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required by law.

								</p>
								<h3>

									Your Rights
								</h3>
								<p>
									You have the right to access, correct, or delete your personal information that we have collected. You may also withdraw your consent to our use of your personal information at any time.

								</p>
								<p>

									To exercise these rights, please contact us using the contact information provided below.
								</p>
								<h3>

									Changes to this Policy
								</h3>

								<p>
									We may update this privacy policy from time to time. Any changes will be posted on this page with a revised effective date. We encourage you to review this policy periodically for any changes.
								</p>

								<h3>
									Contact Us
								</h3>

								<p>
									If you have any questions about this privacy policy or our data collection practices, please contact us at contact@signettags.com.
								</p>








							</div>{' '}
							{/* END TERMS BOX */}
						</div>{' '}
						{/* END TERMS CONTENT */}
					</div>{' '}
					{/* End row */}
				</div>{' '}
				{/* End container */}
			</section>{' '}
			{/* END TERMS & PRIVACY */}
		</>
	);
}

export default PrivacyPolicy;
