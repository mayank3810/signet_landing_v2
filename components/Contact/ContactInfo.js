import React from 'react';

export const ContactInfo = () => {
	function submitForm(e) {
		e.preventDefault();
	}
	return (
		<>
			{/* CONTACT INFO SECTION */}
			<section className="contact_info_section position-relative">
				<div className="container">
					<div className="row">
						<div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
							<div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12 col-12">
									<div className="contact_info_content">
										<h6>Our information</h6>
										<h2>Contact Info</h2>
									</div>
								</div>
							</div>
							<div className="row" data-aos="fade-up">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<div className="contact_info_box hover-effect">
										<figure className="mb-0">
											<img src="/images/location.png" alt="" className="img-fluid hover-effect" />
										</figure>
										<div className="contact_info_box_content_wrapper">
											<h5>Location:</h5>
											<p className="mb-0">121 King Street, Melbourne Victoria 3000 Australia</p>
										</div>
									</div>
								</div>
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<div className="contact_info_box hover-effect">
										<figure className="mb-0">
											<img src="/images/email.png" alt="" className="img-fluid hover-effect" />
										</figure>
										<div className="contact_info_box_content_wrapper">
											<h5>Email Us:</h5>
											<p className="mb-0">
												<a href="mailto:support@immersiveai.com" className="text-decoration-none">
													support@immersiveai.com
												</a>
											</p>
											<p className="mb-0">
												<a href="mailto:immersiveai@gmail.com" className="text-decoration-none">
													immersiveai@gmail.com
												</a>
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<div className="contact_info_box hover-effect">
										<figure className="mb-0">
											<img src="/images/phone.png" alt="" className="img-fluid hover-effect" />
										</figure>
										<div className="contact_info_box_content_wrapper">
											<h5>Phone:</h5>
											<p className="mb-0">
												<a href="tel:+012(345)67899" className="text-decoration-none">
													+012 (345) 678 99
												</a>
											</p>
											<p className="mb-0">
												<a href="tel:+1234567847858" className="text-decoration-none">
													+12345678 478 58
												</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-7 col-md-12 col-sm-12 col-xs-12" data-aos="fade-right">
							<div className="contact_info_form_content">
								<h4>Send us a Message</h4>
								<form id="contactpage" onSubmit={submitForm}>
									<div className="row">
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group mb-0">
												<input type="text" name="fullname" id="name" className="form-control" placeholder="Name:" />
											</div>
										</div>
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group mb-0">
												<input type="tel" name="phone" id="phonenum" className="form-control" placeholder="Phone:" />
											</div>
										</div>
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group mb-0">
												<input type="email" name="emailaddress" id="emailaddrs" className="form-control" placeholder="Email:" />
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12">
											<div className=" form-group mb-0">
												<textarea rows={3} name="msg" id="comment" className="form-control" placeholder="Message:" defaultValue={''} />
											</div>
										</div>
									</div>
									<div className="btn_wrapper">
										<button type="submit" name="get_started" id="started" className="default-btn">
											Submit Now
											<i className="fa-solid fa-angle-right" />
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<figure className="contact_info_left_shape mb-0 position-absolute top_bottom_shape">
						<img src="/images/contact_info_left_shape.png" alt="" className="img-fluid" />
					</figure>
				</div>
			</section>
		</>
	);
};
