import { useState, useEffect, useRef } from 'react';
import { createCanvas, loadImage } from 'canvas';

function QrCodeWithFrame({ qrCodeUrl, frameUrl, frameNo }) {
	let qrCodeTopStyle = {};
	if (frameNo > 0 && frameNo < 4) {
		qrCodeTopStyle = {
			position: 'absolute',
			left: '50%',
			transform: 'translate(-50%, -50%)',
		};
		// qrCodeTopStyle = { top: ['50%', '39%', '41%', '65%'][frameNo - 1] };
		if (frameNo === 1) {
			qrCodeTopStyle.top = '39%';
		} else if (frameNo === 2) {
			qrCodeTopStyle.top = '41%';
		} else if (frameNo === 3) {
			qrCodeTopStyle.top = '65%';
		}
	}

	return (
		<>
			<div className="qr-wrapper">
				{frameNo > 0 ? <img src={frameUrl} className="qr-frame" alt="frame" /> : null}
				<img src={qrCodeUrl} className="qr-code" style={qrCodeTopStyle} />
			</div>
		</>
	);
}

export default QrCodeWithFrame;
