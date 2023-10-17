import { ContactInfo, Map } from '@/components/Contact';
import { ClientLogos, GetStarted } from '@/components/common';

import React from 'react';

const Contact = () => {
	return (
		<>
			{/* <!-- CONTACT INFO SECTION --> */}
			<ContactInfo />

			{/* <!-- CONTACT MAP SECTION --> */}
			<Map />

			<section className="combo_section">
				{/* CLIENT LOGO'S SECTION */}
				<ClientLogos />
				{/* GET STARTED SECTION */}
				<GetStarted />
			</section>
		</>
	);
};

export default Contact;
