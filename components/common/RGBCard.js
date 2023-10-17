import React from 'react';

export const RGBCard = ({ colorClass }) => {
	return (
		<div
			className={`swatch ${colorClass}`}
			style={{
				backgroundImage: 'url(/images/signet/wrist-band-sample.png)',
			}}
		></div>
	);
};
