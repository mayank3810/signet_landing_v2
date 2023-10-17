import { Portfolio } from '@/components/Projects/Portfolio';
import { ClientLogos, GetStarted, Faq, Statistics, Testimonials } from '@/components/common';

import React from 'react';

const ProjectsPage = () => {
	return (
		<>
			<Portfolio />
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

export default ProjectsPage;
