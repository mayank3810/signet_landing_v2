import { ClientLogos, GetStarted, Faq, Testimonials, WhoWeAre, Services } from '@/components/common';

import React from 'react';

const ServicesPage = () => {
	return (
		<>
			<Services />
			<WhoWeAre />
			<Testimonials />
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

export default ServicesPage;
