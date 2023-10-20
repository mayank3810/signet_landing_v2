import Link from 'next/link';
import React from 'react';

export const About = () => {
	return (
		<section className="aboutus_section position-relative">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<div className="aboutus_image">
							<figure className="aboutus_main_image mb-0">
								<img src="/images/signet/home-about-us.png" alt="" className="img-fluid" />
							</figure>
							<figure className="aboutus_image_shape position-absolute mb-0 left_right_shape">
								<img src="/images/aboutus_image_shape.png" alt="" className="img-fluid" />
							</figure>
							<div className="image_box_wrapper hover-effect">
								<figure className="mb-0 box_image float-left">
									<img src="/images/aboutus_box_image.png" alt="" className="img-fluid hover-effect" />
								</figure>
								<div className="image_content_wrapper">
									<div className="span_wrapper">
										<span className="number counter">18</span>
										<span className="plus">+</span>
									</div>
									<p className="mb-0">Years of Experience</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<div className="aboutus_content" data-aos="fade-right">
							<h6>About US</h6>
							<h2>Empowering Business with AI Solutions</h2>
							<p>
								Consectetur adipiscing elit sed do eiusmod tempor inlabore aet dolore magna aliqua ruis ipsum suspendisse ultrices rav sit ame
								incididun zeras.
							</p>
							<ul className="list-unstyled mb-0">
								<li>
									<i className="fa fa-check" aria-hidden="true"></i>
									<p>Quis autem vel eum iure reprehenderit aui ratione</p>
								</li>
								<li>
									<i className="fa fa-check" aria-hidden="true"></i>
									<p>Suscipit laboriosam nisi rut aliuid eum iure moli venia</p>
								</li>
								<li>
									<i className="fa fa-check" aria-hidden="true"></i>
									<p>Dolor repellendus temporibus autem auibus dolor</p>
								</li>
							</ul>
							<div className="btn_wrapper">
								<Link className="text-decoration-none default-btn btn-size-18 hover-effect" href="/about">
									Read More<i className="fa-solid fa-angle-right"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<figure className="aboutus_background_shape mb-0 position-absolute left_right_shape">
					<img src="/images/aboutus_background_shape.jpg" alt="" />
				</figure>
				<figure className="aboutus_top_shape mb-0 position-absolute top_bottom_shape">
					<img src="/images/aboutus_top_shape.png" alt="" className="img-fluid" />
				</figure>
			</div>
		</section>
	);
};
