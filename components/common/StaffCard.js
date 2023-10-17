import Link from 'next/link';
import React from 'react';

export const StaffCard = ({ imageSrc, name, role, socialLinks }) => {
	return (
		<div className="team_box hover-effect">
			<figure>
				<img src={imageSrc} alt="" className="img-fluid" />
			</figure>
			<h5>{name}</h5>
			<p className="text-size-16">{role}</p>
			<div className="team_social_icons">
				<Link href="#" className="text-decoration-none">
					<i className="fa-brands fa-facebook-f hover-effect" aria-hidden="true" />
				</Link>
				<Link href="#" className="text-decoration-none">
					<i className="fa-brands fa-twitter hover-effect" aria-hidden="true" />
				</Link>
				<Link href="#" className="text-decoration-none">
					<i className="fa-brands fa-linkedin-in  hover-effect mr-0" aria-hidden="true" />
				</Link>
			</div>
		</div>
	);
};
