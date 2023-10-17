import React from 'react';
import { ServiceCard } from '.';

export const Services = () => {
	return (
		<section className="services_section position-relative">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-5 col-sm-12 col-12">
						<div className="services_content">
							<h6>What We Can Do</h6>
							<h2>Our Products</h2>
						</div>
					</div>
					<div className="col-lg-7 col-md-7 col-sm-12 col-12 d-md-block d-none"></div>
				</div>
				<div className="row position-relative" data-aos="fade-up">
					<div className="col-lg-4 col-md-4 col-sm-6 col-12">
						<ServiceCard
							imgUrl={'/images/signet/product-sample.png'}
							title={'Robotic Automation'}
							desc={'Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...'}
							linkUrl={'/'}
						/>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-6 col-12">
						<ServiceCard
							imgUrl={'/images/signet/product-sample.png'}
							title={'Predictive Analysis'}
							desc={'Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...'}
							linkUrl={'/'}
							customClass={'box2'}
						/>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-6 col-12">
						<ServiceCard
							imgUrl={'/images/signet/product-sample.png'}
							title={'Machine Learning'}
							desc={'Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...'}
							linkUrl={'/'}
							customClass={'box3'}
						/>
					</div>
					<figure className="services_background_shape mb-0 position-absolute left_right_shape">
						<img src="/images/services_background_shape.png" alt="" className="img-fluid" />
					</figure>
				</div>
				<figure className="services_right_shape mb-0 position-absolute top_bottom_shape">
					<img src="/images/services_right_shape.png" alt="" className="img-fluid" />
				</figure>
			</div>
		</section>
	);
};
