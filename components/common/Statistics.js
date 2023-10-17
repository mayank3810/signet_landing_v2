import React from 'react';
import { StaticsCard } from '.';

export const Statistics = () => {
	return (
		<section className="statistics_section position-relative">
			<div className="container">
				<div className="row" data-aos="fade-up">
					<div className="col-lg-3 col-md-12 col-sm-12 col-12">
						<div className="statistics_content">
							<h3 className="mb-0">Empowering The Future With AI.</h3>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-12">
						<StaticsCard statistics={39} unit="K" title="Project Completed" desc="Modi tempora inciun aut labore." />
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-12">
						<StaticsCard statistics={20} unit="K" title="Happy Clients" desc="Modi tempora inciun aut labore." />
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-12">
						<StaticsCard statistics={11} unit="K" title="Years of Experience" desc="Modi tempora inciun aut labore." />
					</div>
				</div>
				<figure className="statistics_left_shape mb-0 position-absolute top_bottom_shape">
					<img src="/images/statistics_left_shape.png" alt="" className="img-fluid" />
				</figure>
				<figure className="statistics_right_shape mb-0 position-absolute top_bottom_shape">
					<img src="/images/statistics_right_shape.png" alt="" className="img-fluid" />
				</figure>
			</div>
		</section>
	);
};
