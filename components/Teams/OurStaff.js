import React from 'react';
import { StaffCard } from '../common';

export const OurStaff = () => {
	const teamData = [
		{
			imageSrc: '/images/team_image1.jpg',
			name: 'Joseph Carrion',
			role: 'Recudia',
			socialLinks: ['#', '#', '#'],
		},
		{
			imageSrc: '/images/team_image2.jpg',
			name: 'Leon Brown',
			role: 'Deserunt',
			socialLinks: ['#', '#', '#'],
		},
		{
			imageSrc: '/images/team_image3.jpg',
			name: 'Eric Steele',
			role: 'Molestiae',
			socialLinks: ['#', '#', '#'],
		},
		{
			imageSrc: '/images/team_image4.jpg',
			name: 'Byron Hanson',
			role: 'Tenetur',
			socialLinks: ['#', '#', '#'],
		},
		{
			imageSrc: '/images/team_image5.jpg',
			name: 'Rene Luckey',
			role: 'Perferendis',
			socialLinks: ['#', '#', '#'],
		},
		{
			imageSrc: '/images/team_image6.jpg',
			name: 'Lyle Janes',
			role: 'Eveniet',
			socialLinks: ['#', '#', '#'],
		},
	];

	return (
		<section className="team_section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="team_content">
							<h6>Our Staff</h6>
							<h2>Our Team Members</h2>
						</div>
					</div>
				</div>
				<div className="row" data-aos="fade-up">
					{teamData?.map((ele, id) => (
						<div key={id} className="col-lg-4 col-md-6 col-sm-6 col-12">
							<StaffCard {...ele} />
						</div>
					))}
				</div>
				<figure className="team_left_shape mb-0 position-absolute top_bottom_shape">
					<img src="/images/team_left_shape.png" alt="" className="img-fluid" />
				</figure>
			</div>
		</section>
	);
};
