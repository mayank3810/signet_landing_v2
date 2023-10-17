import Link from 'next/link';
import React from 'react';

export const ProjectCard = ({ imageSrc, title, desc, link }) => {
	return (
		<div className="portfolio_image">
			<figure className="mb-0">
				<img src={imageSrc} alt="" className="img-fluid" />
			</figure>
			<div className="portfolio_box">
				<p>{desc}</p>
				<div className="btn_wrapper">
					<Link href={link} className="text-decoration-none">
						Read More<i className="fa-solid fa-angle-right"></i>
					</Link>
				</div>
			</div>
			<div className="portfolio_image_box">
				<span>{title}</span>
			</div>
		</div>
	);
};
