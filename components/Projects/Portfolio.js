import React from 'react';
import { ProjectCard } from '../common';

export const Portfolio = () => {
	const projectData = [
		{
			imageSrc: '/images/portfolio_image1.jpg',
			desc: 'Officia deserunt mollitia animi nobis',
			title: 'BI execution',
			link: '/',
		},
		{
			imageSrc: '/images/portfolio_image2.jpg',
			desc: 'Molestiae non recusana delectuse',
			title: 'Robot Technology',
			link: '/',
		},
		{
			imageSrc: '/images/portfolio_image3.jpg',
			desc: 'Exercitation ullamco laboris nisa',
			title: 'Machine Learning',
			link: '/',
		},
		{
			imageSrc: '/images/portfolio_image1.jpg',
			desc: 'Officia deserunt mollitia animi nobis',
			title: 'BI execution',
			link: '/',
		},
		{
			imageSrc: '/images/portfolio_image2.jpg',
			desc: 'Molestiae non recusana delectuse',
			title: 'Robot Technology',
			link: '/',
		},
		{
			imageSrc: '/images/portfolio_image3.jpg',
			desc: 'Exercitation ullamco laboris nisa',
			title: 'Machine Learning',
			link: '/',
		},
	];
	return (
		<section className="portfolio_section projects_portfolio_section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="portfolio_content">
							<h6>Portfolio</h6>
							<h2>Our Latest Projects Showcase</h2>
						</div>
					</div>
				</div>
				<div className="row" data-aos="fade-up">
					{projectData.map((ele, idx) => (
						<div key={idx} className="col-lg-4 col-md-6 col-sm-6 col-12">
							<ProjectCard {...ele} />
						</div>
					))}
				</div>
				<figure className="portfolio_left_shape mb-0 position-absolute top_bottom_shape">
					<img src="/images/portfolio_left_shape.png" alt="" className="img-fluid" />
				</figure>
			</div>
		</section>
	);
};
