import { Statistics, Testimonials } from '@/components/Home';
import { OurStaff } from '@/components/Teams/OurStaff';
import { ClientLogos, GetStarted, Faq } from '@/components/common';

import React from 'react';

const TeamsPage = () => {
	return (
		<>
			<OurStaff />
			<Statistics />
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

export default TeamsPage;
