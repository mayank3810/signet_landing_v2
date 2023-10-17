import Link from 'next/link';
import React from 'react';

export const Banner = ({ title, subtitle, pageName, desc, imgUrl, requestQuote, scrollDown }) => {
	return (
		<>
			<section className="banner-section position-relative">
				<div className="container">
					<div className="row align-items-start">
						<div className="col-lg-6 col-md-6 col-sm-12 col-12">
							<div className="banner-section-content">
								{title && (
									<h1 className="text-white" data-aos="fade-up">
										{title}
									</h1>
								)}
								{subtitle && (
									<h1 className="text-white banner-subtitle" data-aos="fade-up">
										{subtitle}
									</h1>
								)}
								<p className="text-white" data-aos="fade-right">
									{desc}
								</p>
								{requestQuote && (
									<>
										<button className="default-btn border-0 btn-size-18">
											Request Quote
											<i className="fa-solid fa-angle-right" />
										</button>
										<h2 className="info-quote mt-3">Choose a better, affordable and sustainable alternative</h2>
									</>
								)}
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-12">
							<div className="banner_image position-relative text-center">
								<figure className="banner_main_image mb-0 left_right_shape">
									<img src={imgUrl} alt="" />
								</figure>
								<figure className="banner_image_bottom_shape mb-0 position-absolute top_bottom_shape">
									<img src="/images/sub_banner_image_bottom_shape.png" alt="" className="img-fluid" />
								</figure>
							</div>
						</div>
					</div>
					{scrollDown && (
						<Link href="#footer_section" className="top-btn">
							<figure className="mb-0 position-absolute">
								<img src="/images/scroll_down_image.png" alt="" className="img-fluid" />
							</figure>
						</Link>
					)}
				</div>
			</section>
			<figure className="banner_top_shape mb-0 position-absolute top_bottom_shape">
				<img src="/images/sub_banner_top_shape.png" alt="" className="img-fluid" />
			</figure>
			<figure className="banner_background_shape mb-0 position-absolute left_right_shape">
				<img src="/images/banner_background_shape.png" alt="" />
			</figure>
		</>
	);
};
