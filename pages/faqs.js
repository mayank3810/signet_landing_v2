import { ClientLogos, GetStarted, Faq } from '@/components/common';

import React from 'react';

const Faqs = () => {
	return (
		<>
			<section className="combo_section">
				<Faq />
				{/* CLIENT LOGO'S SECTION */}
				<ClientLogos />
				{/* GET STARTED SECTION */}
				<GetStarted />
			</section>
		</>
	);
};

export default Faqs;
