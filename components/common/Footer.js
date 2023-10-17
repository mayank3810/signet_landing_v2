import Link from 'next/link';
import React from 'react';

export const Footer = () => {
	return (
		<section className="footer-section" id="footer_section">
			<div className="container">
				<div className="middle-portion">
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
							<div className="about_col">
								<Link href="/">
									<figure>
										<img src="/images/immersive_footer_logo.png" alt="" className="img-fluid" />
									</figure>
								</Link>
								<ul className="list-unstyled mb-0">
									<li>
										<p className="text-size-16">
											Qorem ipsum dolor sit amet, consectetur adipiscing elit aut elit tellus luctus nec ulla corper mattis aulvinar daibus leo.
										</p>
									</li>
									<li className="icons hover-effect">
										<Link href="#">
											<i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
										</Link>
									</li>
									<li className="icons hover-effect">
										<Link href="#">
											<i className="fa-brands fa-twitter" aria-hidden="true"></i>
										</Link>
									</li>
									<li className="icons hover-effect">
										<Link href="#">
											<i className="fa-brands fa-linkedin-in mr-0" aria-hidden="true"></i>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-4 col-sm-3 col-xs-12 d-md-block d-none">
							<div className="links_col">
								<h4>Useful Links</h4>
								<ul className="list-unstyled mb-0">
									<li>
										<span></span>
										<Link href="/">Home</Link>
									</li>
									<li>
										<span></span>
										<Link href="/about">About</Link>
									</li>
									<li>
										<span></span>
										<Link href="/services">Services</Link>
									</li>
									{/* <li>
										<span></span>
										<Link href="./projects.html">Projects</Link>
									</li> */}
									<li>
										<span></span>
										<Link href="/contact">Contact us</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 d-sm-block d-none">
							<div className="contact_col">
								<h4>Contact Us</h4>
								<ul className="list-unstyled mb-0">
									<li>
										<i className="fa-solid fa-phone"></i>
										<a href="tel:+61383766284" className="text-decoration-none">
											+61 3 8376 6284
										</a>
									</li>
									<li className="contact_mail">
										<i className="fa-sharp fa-solid fa-envelope"></i>
										<a href="mailto:Info@immersiveai.com" className="text-decoration-none">
											Info@immersiveai.com
										</a>
									</li>
									<li className="mb-0">
										<i className="fa-solid fa-location-dot location"></i>
										<span className="text-size-16">21 King Street Melbourne, 3000, Australia</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 col-sm-6 col-12 text-sm-left text-center d-lg-block d-none">
							<div className="footer-info-content">
								<h4>Newsletter</h4>
								<input type="email" name="email" id="emailadd" className="form-control" placeholder="Enter Email:" />
								<div className="input-group-append form-button">
									<button className="btn" name="btnsubmit" id="submitbtn" type="submit">
										<i className="fa-solid fa-paper-plane"></i>
									</button>
								</div>
								<ul className="list-unstyled mb-0">
									<li>
										<input type="checkbox" id="check" name="check" />
										<span>Quis autem vel eum iure reprehenderit rui in ea voluptate esse.</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="footer_right_shape top_bottom_shape">
					<figure className="mb-0">
						<img src="/images/footer_right_shape.png" alt="" className="img-fluid" />
					</figure>
				</div>
				<div className="footer_background_shape left_right_shape">
					<figure className="mb-0">
						<img src="/images/footer_background_shape.jpg" alt="" />
					</figure>
				</div>
			</div>
			<div className="bottom-portion">
				<div className="copyright col-xl-12">
					<p>Copyright © 2023 immersiveai All rights reserved.</p>
				</div>
			</div>
		</section>
	);
};
