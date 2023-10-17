import Link from 'next/link';
import React from 'react';

export const Features = () => {
	return (
		<section className="feature_section position-relative">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<div className="feature_image">
							<figure className="feature_main_image position-relative mb-0">
								<img src="/images/feature_image1.jpg" alt="" className="img-fluid" />
							</figure>
							<figure className="feature_second_image position-absolute mb-0">
								<img src="/images/feature_image2.jpg" alt="" className="img-fluid" />
							</figure>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<div className="feature_content" data-aos="fade-right">
							<h6>FEATURES</h6>
							<h2>Empowering People By Keeping Them Well</h2>
							<p>Consectetur adipiscing elit sed do eiusmod tempor inlabore aet dolore magna aliqua ruis.</p>
							<ul className="list-unstyled mb-0">
								<li>
									<figure className="mb-0">
										<img src="/images/certified_expert.png" alt="" className="img-fluid" />
									</figure>
									<div className="feature_content_wrapper">
										<p className="first_p">Certified Experts</p>
										<p className="text-size-16 mb-0">Dolor sit amet consectetur adipiscing elit, sed do eius.</p>
									</div>
								</li>
								<li className="second_li">
									<figure className="mb-0">
										<img src="/images/support.png" alt="" className="img-fluid" />
									</figure>
									<div className="feature_content_wrapper">
										<p className="first_p">24/7 Support</p>
										<p className="text-size-16 mb-0">Sunt in culpa qui officia deserunt mollit anim esa amet.</p>
									</div>
								</li>
							</ul>
							<div className="btn_wrapper">
								<Link className="text-decoration-none default-btn btn-size-18 hover-effect" href="/about">
									Get Started<i className="fa-solid fa-angle-right"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<figure className="feature_background_shape mb-0 position-absolute left_right_shape">
					<img src="/images/features_background_shape.jpg" alt="" />
				</figure>
				<figure className="feature_top_shape mb-0 position-absolute top_bottom_shape">
					<img src="/images/features_top_shape.png" alt="" className="img-fluid" />
				</figure>
			</div>
		</section>
	);
};
