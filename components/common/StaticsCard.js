import React from 'react';

export const StaticsCard = ({ statistics, unit, title, desc }) => {
	return (
		<div className="statistics_box hover-effect">
			<div className="span_wrapper">
				<span className="number counter">{statistics}</span>
				<span className="plus">{unit}+</span>
			</div>
			<p className="text-size-16 text-white pp">{title}</p>
			<p className="text-size-16 mb-0 text">{desc}</p>
		</div>
	);
};
