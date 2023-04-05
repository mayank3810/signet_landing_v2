import CallToAction from '@/components/CallToAction';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import Accordion from '@/components/Accordion';
const QRCodes = () => {
	const [activeTab, setActiveTab] = useState('url');
	const [qrCodeUrl, setQrCodeUrl] = useState('');
	const [color, setColor] = useState('#000000');
	const [sections, setSections] = useState([{ isOpen: false }, { isOpen: false }]);
	const [url, setUrl] = useState('');
	const [text, setText] = useState('');
	const [email, setEmail] = useState('');
	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	// const generateEmailQrCode = () => {
	// 	const email = document.getElementById('email-input').value;
	// 	const subject = document.getElementById('email-subject').value;
	// 	const body = document.getElementById('email-body').value;
	// 	const encodedEmail = encodeURIComponent(`mailto:${email}?subject=${subject}&body=${body}`);
	// 	const qrCodeUrl = `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${encodedEmail}`;
	// 	setQrCodeUrl(qrCodeUrl);
	// };

	const generateUrlQrCode = () => {
		let input;
		if (activeTab === 'url' && url) {
			input = url;
		} else if (activeTab === 'text' && text) {
			input = text;
		} else if (activeTab === 'email' && email) {
			input = email;
		} else {
			return;
		}

		const encodedInput = input;
		// const color = `FF0000`;
		const qrCodeOptions = {
			margin: 1,
			width: 300,
			type: 'image',
			color: {
				dark: color,
				light: '#FFFFFF',
			},
			rendererOpts: {
				quality: 1.0,
			},
		};
		QRCode.toDataURL(encodedInput, qrCodeOptions, (error, url) => {
			if (error) {
				console.error(error);
			} else {
				setQrCodeUrl(url);
				// setUrl('');
				// setEmail('');
				// setText('');
			}
		});
	};

	function downloadQRCode() {
		// Create a temporary anchor element
		const link = document.createElement('a');
		link.href = qrCodeUrl;
		link.download = 'qrcode.png';

		// Trigger the download
		document.body.appendChild(link);
		link.click();

		// Clean up
		document.body.removeChild(link);
	}

	return (
		<>
			<Header scroll={true} />
			{/* CONTACTS-2
			============================================= */}
			<section id="contacts-2" className="bg-snow wide-50 inner-page-hero contacts-section division">
				<div className="container">
					<div className="cta-4-txt mb-20">
						<h1 className="h4-xl">Generate QR Codes</h1>
					</div>
					<div className="row">
						<div className="col-lg-8 col-md-12">
							<div className=" qr-forms">
								<ul className="nav nav-pills mb-3 " style={{ gap: '10px' }}>
									<li className="nav-item">
										<button
											type="button"
											// className={`${activeTab === 'url' ? 'active' : ''}`}
											className={`btn text-dark nav-tab-pills ${activeTab === 'url' ? 'active btn-yellow color-white' : ''}`}
											onClick={() => handleTabClick('url')}
										>
											<img src="/images/png-icons/worldwide.png" />
											<span className="nav-text">URL</span>
										</button>
									</li>

									<li className="nav-item">
										<button
											type="button"
											// className={`nav-link ${activeTab === 'text' ? 'active' : ''}`}
											className={`btn text-dark nav-tab-pills ${activeTab === 'text' ? 'active btn-yellow color-white' : ''}`}
											onClick={() => handleTabClick('text')}
										>
											<img src="/images/png-icons/text.png" /> TEXT
										</button>
									</li>
									<li className="nav-item">
										<button
											type="button"
											className={`btn text-dark nav-tab-pills ${activeTab === 'email' ? 'active btn-yellow  color-white' : ''}`}
											onClick={() => handleTabClick('email')}
										>
											<img src="/images/png-icons/email.png" /> EMAIL
										</button>
									</li>
								</ul>
								<div className="tab-content mt-80">
									<div className={`tab-pane ${activeTab === 'url' ? 'active show' : ''}`} id="url">
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												id="url-input"
												placeholder="Enter your website"
												value={url}
												onChange={(e) => setUrl(e.target.value)}
											/>
										</div>
									</div>

									<div className={`tab-pane ${activeTab === 'text' ? 'active show' : ''}`} id="text">
										<textarea
											className="form-control"
											placeholder="Enter text"
											id="text-input"
											value={text}
											onChange={(e) => setText(e.target.value)}
										></textarea>
									</div>
									<div className={`tab-pane ${activeTab === 'email' ? 'active show' : ''}`} id="email">
										<input
											type="email"
											className="form-control"
											placeholder="Enter email address"
											id="email-input"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>

									<div className="d-flex justify-content-center mt-50">
										<button className="btn btn-yellow tra-yellow-hover" onClick={generateUrlQrCode}>
											Generate QR Code
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-12">
							<div className="qr-forms qr-options">
								{qrCodeUrl ? (
									<>
										<img src={qrCodeUrl} alt="QR Code" />

										<Accordion title="COLOR" index={0} sections={sections} setSections={setSections}>
											<input
												id="color-input"
												type="color"
												value={color}
												onChange={(e) => {
													setColor(e.target.value);
													generateUrlQrCode();
												}}
											/>
										</Accordion>
										{/* <Accordion title="LOGO" index={1} sections={sections} setSections={setSections}>
											<p></p>
										</Accordion> */}
										<div className="d-flex justify-content-center mt-50">
											<button className="btn btn-yellow tra-yellow-hover ml-3 mt-20" onClick={downloadQRCode}>
												Download
											</button>
										</div>
									</>
								) : (
									<p>No QR code generated yet</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>

			<hr className="divider" />
			<CallToAction />
		</>
	);
};

export default QRCodes;
