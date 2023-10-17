import Link from 'next/link';
import React from 'react';

export const GetStarted = () => {
	return (
		<div className="get_started_section">
			<div className="container">
				<div className="get_started_box">
					<div className="row">
						<div className="col-lg-5 col-md-5 col-sm-12 col-12 order-md-1 order-2">
							<div className="get_started_box_image">
								<figure className="mb-0 left_right_shape">
									<img src="/images/get_started_image.png" alt="" className="img-fluid" />
								</figure>
							</div>
						</div>
						<div className="col-lg-7 col-md-7 col-sm-12 col-12 order-md-2 order-1">
							<div className="get_started_box_content" data-aos="fade-right">
								<h6>GEt Started</h6>
								<h2>Let's Make Something Great Together</h2>
								<div className="btn_wrapper">
									<Link className="text-decoration-none default-btn-two btn-size-18 hover-effect" href="/contact">
										Contact Us
										<i className="fa-solid fa-angle-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<figure className="get_started_shape mb-0 left_right_shape">
					<img src="/images/get_started_shape.png" alt="" className="img-fluid" />
				</figure>
			</div>
		</div>
	);
};
