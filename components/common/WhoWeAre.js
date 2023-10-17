import Link from 'next/link';
import React, { useState } from 'react';
// import { Popup } from 'react-magnific-popup';

export const WhoWeAre = () => {
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};
	return (
		<section className="who_we_are_section position-relative">
			<div className="container-fluid">
				<div className="row">
					<div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="who_we_are_left_content" data-aos="fade-up">
							<h6 className="text-white">Who We ARe</h6>
							<h2 className="text-white">Artificial Intelligence is The New Big Thing in Technology</h2>
							<p>
								Nam libero tempore, cum soluta nobis est eligendi optiona cumue nihil impedit quo minus id quod maxime placeat fae possimus
								necessitatibus,
							</p>
							<div className="btn_wrapper">
								<Link className="text-decoration-none default-btn-two btn-size-18 hover-effect" href="/about">
									Get Started<i className="fa-solid fa-angle-right"></i>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12"></div>
					<div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="who_we_are_right_content_wrapper">
							<div className="video_wrapper position-absolute">
								<div className="video_icon position-relative">
									<a
										className="popup-vimeo"
										href="https://previews.customer.envatousercontent.com/c58ac645-a2d9-4189-913b-48465e467b7c/watermarked_preview/watermarked_preview.mp4"
									>
										<figure className="mb-0">
											<img className="img-fluid thumb" style={{ cursor: 'pointer' }} src="/images/who_we_are_video_icon.png" alt="" />
										</figure>
									</a>
								</div>
								<div className="content">
									<h5 className="mb-0 text-white">Watch Video</h5>
								</div>
							</div>

							<div className="who_we_are_right_content">
								<div className="who_we_are_rightside">
									<span>4.6</span>
									<ul className="list-unstyled">
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
									</ul>
									<h6>Google Reviews</h6>
									<p className="text-size-16 mb-0">Dolor sit amet consecteu adiriscing elit.</p>
								</div>
								<div className="who_we_are_rightside second_column">
									<span>4.9</span>
									<ul className="list-unstyled">
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
									</ul>
									<h6>Clutch Reviews</h6>
									<p className="text-size-16 mb-0">Rolor sit amet consecte adiriscing elit. </p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<figure className="who_we_are_image position-absolute mb-0">
					<img src="/images/who_we_are_image.png" alt="" className="img-fluid" />
				</figure>
				<figure className="who_we_are_left_shape mb-0 position-absolute top_bottom_shape">
					<img src="/images/who_we_are_left_shape.png" alt="" className="img-fluid" />
				</figure>
				<figure className="who_we_are_right_shape mb-0 position-absolute top_bottom_shape">
					<img src="/images/who_we_are_right_shape.png" alt="" className="img-fluid" />
				</figure>
			</div>
		</section>
	);
};
