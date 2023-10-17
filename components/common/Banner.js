import React from 'react';

export const Banner = ({ title, pageName, desc }) => {
	return (
		<>
			<section className="banner-section position-relative">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6 col-sm-12 col-12">
							<div className="banner-section-content">
								<h1 className="text-white" data-aos="fade-up">
									{title}
								</h1>
								<p className="text-white" data-aos="fade-right">
									{desc}
								</p>
								<div className="btn_wrapper" data-aos="fade-up">
									<span> Home </span>
									<i className="fa-solid fa-angles-right" aria-hidden="true"></i>
									<span className="sub_span">{pageName}</span>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-12">
							<div className="banner_image position-relative">
								<figure className="banner_main_image mb-0 left_right_shape">
									<img src="/images/about_banner_image.jpg" alt="" />
								</figure>
								<figure className="banner_image_bottom_shape mb-0 position-absolute top_bottom_shape">
									<img src="/images/sub_banner_image_bottom_shape.png" alt="" className="img-fluid" />
								</figure>
							</div>
						</div>
					</div>
				</div>
			</section>
			<figure className="banner_top_shape mb-0 position-absolute top_bottom_shape">
				<img src="/images/sub_banner_top_shape.png" alt="" className="img-fluid" />
			</figure>
			<figure className="banner_background_shape mb-0 position-absolute left_right_shape">
				<img src="/images/sub_banner_background_shape.png" alt="" />
			</figure>
		</>
	);
};
