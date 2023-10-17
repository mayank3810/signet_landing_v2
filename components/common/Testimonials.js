import React from 'react';
import { CustomCarousel, TestimonialCard } from '.';

export const Testimonials = () => {
	const responsive = {
		0: {
			items: 1,
		},
		576: {
			items: 1,
		},
		992: {
			items: 2,
		},
	};
	const testimonialData = [
		{
			img: '/images/testimonial_image2.png',
			title: 'Perin Rames',
			subtitle: 'Head of Management at ZE',
			testimonial:
				'Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur, adipisci velit, sed quia non numquam eius modi temor incidunt ut labore et dolore magnam.',
		},
		{
			img: '/images/testimonial_image1.png',
			title: 'Kevin Andrew',
			subtitle: 'Head of Management at EBI',
			testimonial:
				'Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur, adipisci velit, sed quia non numquam eius modi temor incidunt ut labore et dolore magnam.',
		},
		{
			img: '/images/testimonial_image2.png',
			title: 'Perin Rames',
			subtitle: 'Head of Management at ZE',
			testimonial:
				'Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur, adipisci velit, sed quia non numquam eius modi temor incidunt ut labore et dolore magnam.',
		},
		{
			img: '/images/testimonial_image1.png',
			title: 'Kevin Andrew',
			subtitle: 'Head of Management at EBI',
			testimonial:
				'Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur, adipisci velit, sed quia non numquam eius modi temor incidunt ut labore et dolore magnam.',
		},
	];
	return (
		<section className="testimonials_section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="testimonials_content">
							<h6>Testimonials</h6>
							<h2>Hear it From Our Clients</h2>
						</div>
					</div>
				</div>
				<div className="row" data-aos="fade-up">
					<CustomCarousel responsive={responsive}>
						{testimonialData.map((ele, idx) => (
							<div key={idx} className="item">
								<TestimonialCard {...ele} />
							</div>
						))}
					</CustomCarousel>
				</div>
				<figure className="testimonials_background_shape mb-0 position-absolute left_right_shape">
					<img src="/images/testimonial_background_shape.jpg" alt="" />
				</figure>
				<figure className="testimonials_top_shape mb-0 position-absolute top_bottom_shape">
					<img src="/images/testimonial_top_shape.png" alt="" className="img-fluid" />
				</figure>
			</div>
		</section>
	);
};
