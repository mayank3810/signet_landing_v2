import Link from 'next/link';
import React from 'react';

export const About = () => {
	return (
		<section className="about_aboutus_section position-relative">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="aboutus_content" data-aos="fade-up">
							<h6>About US</h6>
							<h2>Creating Intelligent Solutions With AI And Robotics</h2>
							<p>
								Consectetur adipiscing elit sed do eiusmod tempor inlabore aet dolore magna aliqua ruis ipsum ultrices rav sit ame incididun
								zerasreiciendis maiores alias.
							</p>
							<div className="btn_wrapper">
								<Link className="text-decoration-none default-btn btn-size-18 hover-effect" href="/about">
									Get Started<i className="fa-solid fa-angle-right"></i>
								</Link>
							</div>
							<div className="position-relative">
								<Link href="https://www.youtube.com/ENVATO" target="_blank">
									<figure className="video_fig mb-0">
										<img className="thumb img-fluid" style={{ cursor: 'pointer' }} src="/images/about_aboutus_video_image.jpg" alt="" />
									</figure>
								</Link>
								<figure className="about_video_background_shape mb-0 position-absolute left_right_shape">
									<img src="/images/video_background_shape.png" alt="" className="img-fluid" />
								</figure>
							</div>
						</div>
					</div>
				</div>
				<figure className="aboutus_right_shape mb-0 position-absolute top_bottom_shape">
					<img src=".//images/aboutus_video_right_shape.png" alt="" className="img-fluid" />
				</figure>
			</div>
		</section>
	);
};
