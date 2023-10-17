import React from 'react';

export const Mission = () => {
	return (
		<section className="mission_vision_section position-relative">
			<div className="container">
				<div className="row position-relative" data-aos="fade-up">
					<div className="col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="mission_vision_box hover-effect">
							<figure>
								<img src="/images/our_mission_image.png" alt="" className="img-fluid hover-effect" />
							</figure>
							<h4>Our Mission</h4>
							<p className="mb-0">
								Tempora incidunt ut labore et dolore magnam aliruam quaerat volurtatem aut enim ad minima veniam ruis nostrum exercitatio.
							</p>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="mission_vision_box hover-effect">
							<figure>
								<img src="/images/our_vision_image.png" alt="" className="img-fluid hover-effect" />
							</figure>
							<h4>Our Vision</h4>
							<p className="mb-0">
								Quis autem vel eum iure reprehenderit ruin voluta velit esse quam nihil molestiae conseuatur illum aui dolorem eum fugiat ruo.
							</p>
						</div>
					</div>
					<figure className="mission_vision_background_shape mb-0 position-absolute left_right_shape">
						<img src="/images/mission_vision_background_shape.png" alt="" className="img-fluid" />
					</figure>
				</div>
				<figure className="mission_vision_left_shape mb-0 position-absolute top_bottom_shape">
					<img src="/images/mission_vision_left_shape.png" alt="" className="img-fluid" />
				</figure>
			</div>
		</section>
	);
};
