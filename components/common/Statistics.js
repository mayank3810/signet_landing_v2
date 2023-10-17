import React from 'react';
import { RGBCard, StaticsCard } from '.';

export const Statistics = () => {
	return (
		<section className="statistics_section position-relative">
			<div className="container">
				<div className="row ">
					<div className="col-lg-3 col-md-12 col-sm-12 col-12">
						<div className="statistics_content">
							<h3 className="mb-0">Create a stunning light show</h3>
						</div>
					</div>
					<div className="col-lg-9 col-md-12 col-sm-12 col-12">
						<div className="rgb-wrapper">
							<RGBCard colorClass="swatch-r" />
							<RGBCard colorClass="swatch-b" />
							<RGBCard colorClass="swatch-g" />
						</div>
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
