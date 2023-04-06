import CallToAction from '@/components/CallToAction';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import Accordion from '@/components/Accordion';
import QrCodeWithFrame from '@/components/QRCodeWithFrame';

const frames = [
	{ no: -1, url: null }, // No frame option
	{ no: 1, url: '/images/png-icons/frame-1.svg' },
	{ no: 2, url: '/images/png-icons/frame-2.svg' },
	{ no: 3, url: '/images/png-icons/frame-3.svg' },
	// Add more frames as needed
];
const QRCodes = () => {
	const [activeTab, setActiveTab] = useState('url');
	const [qrCodeUrl, setQrCodeUrl] = useState('');
	const [color, setColor] = useState('#000000');
	const [sections, setSections] = useState([{ isOpen: false }, { isOpen: false }]);
	const [url, setUrl] = useState('');
	const [text, setText] = useState('');
	const [email, setEmail] = useState('');
	const [inputErr, setInputErr] = useState(false);
	const handleTabClick = (tab) => {
		setActiveTab(tab);
		setInputErr(false);
	};

	const generateUrlQrCode = () => {
		let input;
		if (activeTab === 'url' && url) {
			input = url;
			setInputErr(false);
		} else if (activeTab === 'text' && text) {
			input = text;
			setInputErr(false);
		} else if (activeTab === 'email' && email) {
			input = email;
			setInputErr(false);
		} else {
			setInputErr(true);
			return;
		}
		if (localStorage.getItem('showQRPopup') === null) {
			setQRSaveEmailPopup(true);
			return;
		}

		const encodedInput = input;
		// const color = `FF0000`;
		const qrCodeOptions = {
			margin: 0,
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

	const [selectedFrameNo, setSelectedFrameNo] = useState(frames[0].no); // Initialize with the no frame option

	const handleFrameChange = (event) => {
		setSelectedFrameNo(Number(event.target.value));
	};

	const selectedFrame = frames.find((frame) => frame.no === selectedFrameNo);
	const frameUrl = selectedFrame.url;

	const handleDownload = () => {
		let frameNo = selectedFrameNo;
		let frameUrl = selectedFrame.url;
		const canvas = document.createElement('canvas');
		canvas.width = 300;
		canvas.height = 400;

		const context = canvas.getContext('2d');
		const qrImage = new Image();
		const frameImage = new Image();

		const loadImages = () => {
			if (qrImage.complete && frameImage.complete) {
				// context.drawImage(frameImage, 0, 0, 400, 400);
				// const qrTop = qrCodeTopStyle.top;
				// const qrY = qrTop.includes('%') ? (canvas.height * parseInt(qrTop)) / 100 : parseInt(qrTop);

				// context.drawImage(qrImage, 50, qrY, 300, 300);
				let qrX = 50;
				let qrY = 50;

				if (frameNo === 1) {
					qrY = 33;
					qrX = 36;
				} else if (frameNo === 2) {
					qrY = 40;
					qrX = 33;
				} else if (frameNo === 3) {
					qrY = 140;
					qrX = 33;
				}

				context.drawImage(frameImage, 0, 0, 300, 400);
				context.drawImage(qrImage, qrX, qrY, 230, 240);

				const link = document.createElement('a');
				link.download = 'qr-code.png';
				link.href = canvas.toDataURL('image/png');
				link.click();
			} else {
				setTimeout(loadImages, 50);
			}
		};

		qrImage.onload = loadImages;
		frameImage.onload = loadImages;

		qrImage.src = qrCodeUrl;
		// frameImage.src = frameUrl;
		if (frameNo > 0 && frameNo < 4) {
			frameImage.src = frameUrl;
		}
	};

	const handlePrint = () => {
		let frameNo = selectedFrameNo;
		let frameUrl = selectedFrame.url;
		const canvas = document.createElement('canvas');
		canvas.width = 300;
		canvas.height = 400;

		const context = canvas.getContext('2d');
		const qrImage = new Image();
		const frameImage = new Image();

		const loadImages = () => {
			if (qrImage.complete && frameImage.complete) {
				// context.drawImage(frameImage, 0, 0, 400, 400);
				// const qrTop = qrCodeTopStyle.top;
				// const qrY = qrTop.includes('%') ? (canvas.height * parseInt(qrTop)) / 100 : parseInt(qrTop);

				// context.drawImage(qrImage, 50, qrY, 300, 300);
				let qrX = 50;
				let qrY = 50;

				if (frameNo === 1) {
					qrY = 33;
					qrX = 36;
				} else if (frameNo === 2) {
					qrY = 40;
					qrX = 33;
				} else if (frameNo === 3) {
					qrY = 140;
					qrX = 33;
				}

				context.drawImage(frameImage, 0, 0, 300, 400);
				context.drawImage(qrImage, qrX, qrY, 230, 240);

				// open print window and write canvas to it
				const printWindow = window.open('', 'Print Window');
				printWindow.document.write('<html><head><title>QR Code</title></head><body>'.trim());
				printWindow.document.write(
					`<div style="height:80vh;display:flex;justify-content: center;align-items:center"><img src="${canvas.toDataURL('image/png')}" /></div>`,
				);
				printWindow.document.write('</body></html>');
				printWindow.document.close();

				// call print function manually after the print window has loaded
				printWindow.onload = () => {
					printWindow.print();
				};
			} else {
				setTimeout(loadImages, 50);
			}
		};

		qrImage.onload = loadImages;
		frameImage.onload = loadImages;

		qrImage.src = qrCodeUrl;
		// frameImage.src = frameUrl;
		if (frameNo > 0 && frameNo < 4) {
			frameImage.src = frameUrl;
		}
	};
	const [userEmail, setUserEmail] = useState('');
	const [saveQREmailPopup, setQRSaveEmailPopup] = useState(false);
	const [successMessage, setSuccessMessage] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	const saveEmail = async (e) => {
		e.preventDefault();

		const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
		const valid = emailRegex.test(userEmail);
		// console.log(valid);

		if (!userEmail) {
			setErrorMessage(true);
			setTimeout(() => {
				setErrorMessage(false);
			}, 3000);
			return;
		}
		if (!valid) {
			setErrorMessage(true);
			setTimeout(() => {
				setErrorMessage(false);
			}, 3000);
			return;
		}
		await fetch(process.env.NEXT_PUBLIC_API_URL + 'general/saveEmail', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: userEmail,
			}),
		});
		localStorage.setItem('showQRPopup', 'false');
		closePopup();

		setSuccessMessage(true);
		setTimeout(() => {
			setSuccessMessage(false);
		}, 3000);
	};

	const closePopup = async (e) => {
		setQRSaveEmailPopup(false);
		setUserEmail('');
	};
	return (
		<>
			<Header scroll={true} />

			{successMessage && <div className="sucess-message animate__animated animate__fadeIn">Thank you.</div>}

			{errorMessage && <div className="error-message animate__animated animate__fadeIn">Please enter a valid email.</div>}
			{saveQREmailPopup && (
				<>
					<section id="cta-4" className="cta-section division pt-4 email-popup animate__animated animate__fadeIn">
						<div className="container popup-container">
							<div className="bg-white home-page-popup">
								<div className="row d-flex align-items-center">
									<div className="col-12">
										<div className="cta-4-txt">
											{/* <h5 className="h5-lg pt-15">Interested in learning more about our product or service?</h5> */}

											<p className="pb-30 pt-15">Please enter your email below to generate QR Codes</p>
											<span onClick={() => closePopup()} className="close-btn">
												x
											</span>

											<form name="contactform" className="row contact-form">
												<div className="col-12">
													<input
														type="text"
														name="email"
														className="form-control email"
														placeholder="Email Address"
														value={userEmail}
														onChange={(e) => setUserEmail(e.target.value)}
													/>
												</div>

												<div className="col-12">
													<button onClick={saveEmail} className="btn btn-block btn-yellow w-100 tra-yellow-hover submit">
														Submit
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>{' '}
						</div>{' '}
					</section>
				</>
			)}

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
									{inputErr && <small className="text-danger">This field is required</small>}
									<div className="d-flex justify-content-center mt-50">
										<button className="btn btn-yellow tra-yellow-hover" onClick={generateUrlQrCode}>
											Generate QR Code
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-12">
							<div className="qr-forms qr-options mb-15">
								{qrCodeUrl ? (
									<QrCodeWithFrame qrCodeUrl={qrCodeUrl} frameUrl={frameUrl} frameNo={selectedFrameNo} />
								) : (
									<p>No QR code generated yet</p>
								)}

								<Accordion title="FRAME" index={1} sections={sections} setSections={setSections}>
									<div className="radio-inputs">
										{frames.map((frame) => (
											<label key={frame.no}>
												<input type="radio" name="frame" value={frame.no} checked={selectedFrameNo === frame.no} onChange={handleFrameChange} />
												<div className="frame-image">
													{frame.url ? (
														<img src={frame.url} alt={`Frame ${frame.no}`} />
													) : (
														<div className="no-frame">
															<div className="cross-left"></div>
															<div className="cross-right"></div>
														</div>
													)}
												</div>
											</label>
										))}
									</div>
								</Accordion>
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
								<div className="d-flex justify-content-between mt-50">
									<button disabled={!qrCodeUrl} className="btn btn-yellow tra-yellow-hover ml-3 mt-20" onClick={handleDownload}>
										Download
									</button>
									<button disabled={!qrCodeUrl} className="btn btn-yellow tra-yellow-hover ml-3 mt-20" onClick={handlePrint}>
										Print
									</button>
								</div>
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
