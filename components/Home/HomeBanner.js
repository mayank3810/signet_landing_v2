import Link from 'next/link';
import React from 'react';

export const HomeBanner = () => {
	return (
		<>
			<section className="banner-section position-relative">
				<div className="container">
					<div className="row">
						<div className="col-lg-1 col-md-1 col-sm-1 col-1 d-md-block d-none">
							<div className="banner_best_image position-relative">
								<figure className="mb-0 position-absolute">
									<img src="/images/best_image.png" alt="" className="img-fluid" />
								</figure>
							</div>
						</div>
						<div className="col-lg-8 col-md-8 col-sm-12 col-12">
							<div className="banner-section-content">
								<h1 data-aos="fade-up">Artificial Intelligence</h1>
								<div className="banner_content_wrapper position-relative">
									<p className="text-white mb-0" data-aos="fade-right">
										Bring Force of Artificial Intelligence To Your Business Development
									</p>
									<figure className="mb-0 position-absolute">
										<img src="/images/banner_white_line.png" alt="" className="img-fluid" />
									</figure>
								</div>
								<div className="btn_wrapper" data-aos="fade-up">
									<Link className="text-decoration-none default-btn btn-size-18 hover-effect readmore_btn" href="/about">
										Read More<i className="fa-solid fa-angle-right"></i>
									</Link>
									<Link className="text-decoration-none default-btn-two btn-size-18 hover-effect" href="/contact">
										Contact Us<i className="fa-solid fa-angle-right"></i>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-12 col-12">
							<div className="banner_image position-relative">
								{/* <!-- <figure className="banner_main_image mb-0 left_right_shape">
                            <img src="/images/banner_image.jpg" alt="">
                        </figure>
                        <figure className="banner_image_top_shape mb-0 position-absolute">
                            <img src="/images/banner_image_top_shape.png" alt="" className="img-fluid">
                        </figure>
                        <figure className="banner_image_bottom_shape mb-0 position-absolute top_bottom_shape">
                            <img src="/images/banner_image_bottom_shape.png" alt="" className="img-fluid">
                        </figure> --> */}
							</div>
						</div>
					</div>
					<figure className="banner_left_image mb-0 position-absolute left_right_shape">
						<img src="/images/banner_left_image.jpg" alt="" className="img-fluid" />
					</figure>
					<Link href="#footer_section" className="top-btn">
						<figure className="mb-0 position-absolute">
							<img src="/images/scroll_down_image.png" alt="" className="img-fluid" />
						</figure>
					</Link>
				</div>
			</section>
			<figure className="banner_top_shape mb-0 position-absolute top_bottom_shape">
				<img src="/images/banner_top_shape.png" alt="" className="img-fluid" />
			</figure>
			<figure className="banner_background_shape mb-0 position-absolute left_right_shape">
				<img src="/images/paralax01.jpg" alt="" />
			</figure>
		</>
	);
};
