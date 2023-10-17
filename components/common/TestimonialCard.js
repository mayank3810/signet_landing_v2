import React from 'react';

export const TestimonialCard = ({ img, title, subtitle, testimonial }) => {
	return (
		<div className="testimonials_box">
			<div className="testimonials_image">
				<figure className="mb-0">
					<img src={img} alt="" className="img-fluid hover-effect" />
				</figure>
				<div className="testimonials_image_content_wrappper">
					<p className="person_name">{title}</p>
					<p className="testimonials_text text-size-16 mb-0">{subtitle}</p>
				</div>
			</div>
			<p className="testimonials_paragraph mb-0">
				<span>“</span>
				{testimonial}
				<span>”</span>
			</p>
			<figure className="testimonial_apostrophy_shape position-absolute mb-0">
				<img src="/images/testimonial_apostrophy_shape.png" alt="" className="img-fluid hover-effect" />
			</figure>
		</div>
	);
};
