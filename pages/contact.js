import CallToAction from '@/components/CallToAction';
import Header from '@/components/Header';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';

function Contact() {
	// { email, name, subject, message }

	const [email, setEmail] = useState({ data: '', error: false });
	const [name, setName] = useState({ data: '', error: false });
	const [subject, setSubject] = useState({ data: '', error: false });
	const [message, setMessage] = useState({ data: '', error: false });

	const [loading, setLoading] = useState(false);
	const [apiResp, setApiResp] = useState('');

	const submitForm = async (e) => {
		e.preventDefault();
		if (name.data === '') {
			setName({ data: '', error: true });
		}
		if (email.data === '') {
			setEmail({ data: '', error: true });
		}
		if (subject.data === '') {
			setSubject({ data: '', error: true });
		}
		if (message.data === '') {
			setMessage({ data: '', error: true });
		}
		setLoading(true);

		const rawResponse = await fetch(process.env.NEXT_PUBLIC_API_URL + 'general/email/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email.data,
				name: name.data,
				subject: subject.data,
				message: message.data,
			}),
		});
		if (rawResponse.ok) {
			const content = await rawResponse.json();
			setLoading(false);
			setApiResp('Your message has been sent. Thank you.');
			console.log(content);
			setName({ data: '', error: false });
			setEmail({ data: '', error: false });
			setSubject({ data: '', error: false });
			setMessage({ data: '', error: false });
		} else {
			setApiResp('An error occurred. Please resend.');
			setLoading(false);
		}
	};

	return (
		<>
			<Head>
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="robots" content="noindex, follow" />
				<meta name="language" content="English" />

				<meta name="title" content="Contact Signet Tags for Support and Assistance" />
				<meta
					name="description"
					content=" Contact Signet Tags for any questions, comments or concerns. We're here to help you with any issues or inquiries you may have."
				/>
				<meta name="keywords" content="Signet Tags, Signet Authenticity, brand protection software, blockchain-proven ownership, " />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:site_name" content="Signet Tags" />
				<meta property="og:url" content="https://www.signettags.com/contact" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Contact Signet Tags" />
				<meta property="og:description" content="Contact Signet Tags for assistance or inquiries. Our team is here to help you." />
				<meta property="og:image" content="/assets/images/Twitter-card.jpeg" />
				<meta property="og:locale" content="en_US" />

				{/* <!-- Twitter --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SignetTags" />
				<meta name="twitter:url" content="https://www.signettags.com/contact" />
				<meta name="twitter:title" content="Contact Signet Tags" />
				<meta name="twitter:description" content="Contact Signet Tags for assistance or inquiries. Our team is here to help you." />
				<meta name="twitter:image" content="/assets/images/Twitter-card.jpeg" />

				<link rel="canonical" href="https://www.signettags.com/contact" key="canonical" />
				<title>Contact Us - Get in Touch with Signet Tags</title>
			</Head>
			<Header scroll={true} />
			{/* CONTACTS-2
			============================================= */}
			<section id="contacts-2" className="bg-snow wide-50 inner-page-hero contacts-section division">
				<div className="container">
					{/* SECTION TITLE */}
					<div className="row justify-content-center">
						<div className="col-md-10 col-lg-8">
							<div className="section-title title-02 mb-80">
								{/* Title */}
								<h1 className="h1-sm">Have a question? Need help? Don't hesitate, drop us a line</h1>
								{/* Text */}
								{/* <p className="p-xl">
                  Anything On your Mind. We’ll Be Glad To Assist You!
                </p> */}
							</div>
						</div>
					</div>
					{/* CONTACT FORM */}
					<div className="row justify-content-center">
						<div className="col-lg-10 col-xl-8">
							<div className="form-holder">
								<form name="contactform" className="row contact-form">
									{/* Form Select */}

									{/* Contact Form Input */}
									<div className="col-md-12">
										<p className="p-lg">Your Name: </p>
										{/* <span>Please enter your real name: </span> */}
										<input
											type="text"
											name="name"
											className="form-control name"
											placeholder="Your Name*"
											value={name.data ?? ''}
											onChange={(e) => setName({ data: e.target.value, error: false })}
										/>
										{name.error && (
											<label class="error" htmlFor="name">
												Name cannot be blank
											</label>
										)}
									</div>
									<div className="col-md-12">
										<p className="p-lg">Your Email Address: </p>
										{/* <span>
                      Please carefully check your email address htmlFor accuracy
                    </span> */}
										<input
											type="text"
											name="email"
											className="form-control email"
											placeholder="Email Address*"
											value={email.data ?? ''}
											onChange={(e) => setEmail({ data: e.target.value, error: false })}
										/>
										{email.error && (
											<label class="error" htmlFor="email">
												Email cannot be blank
											</label>
										)}
									</div>
									<div className="col-md-12">
										<p className="p-lg">Message Subject: </p>
										{/* <span>Please enter your real name: </span> */}
										<input
											type="text"
											name="subject"
											className="form-control name"
											placeholder="Your Name*"
											value={subject.data ?? ''}
											onChange={(e) => setSubject({ data: e.target.value, error: false })}
										/>
										{subject.error && (
											<label class="error" htmlFor="subject">
												Subject cannot be blank
											</label>
										)}
									</div>
									<div className="col-md-12">
										<p className="p-lg">Explain your question in details: </p>

										<textarea
											className="form-control message"
											name="message"
											rows={6}
											placeholder="I wanted to ask about..."
											value={message.data ?? ''}
											onChange={(e) => setMessage({ data: e.target.value, error: false })}
										/>

										{message.error && (
											<label class="error" htmlFor="message">
												Message cannot be blank
											</label>
										)}
									</div>

									<div className="col-md-12 mt-15 form-btn text-right">
										{apiResp && <span className={apiResp.includes('error') ? 'orange-red-color' : 'green-color'}>{apiResp}</span>}
									</div>
									{/* Contact Form Button */}
									<div className="col-md-12 mt-15 form-btn text-right">
										<button onClick={submitForm} className="btn btn-yellow tra-yellow-hover submit">
											{loading ? 'Submitting' : 'Submit'}
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					{/* END CONTACT FORM */}
				</div>
				{/* End container */}
			</section>
			{/* END CONTACTS-2 */}
			{/* DIVIDER LINE */}
			<hr className="divider" />
			{/* CALL TO ACTION-8
			============================================= */}
			<CallToAction />
			{/* END CALL TO ACTION-8 */}
			{/* DIVIDER LINE */}
		</>
	);
}

export default Contact;
