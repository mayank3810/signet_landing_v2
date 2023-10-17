import Link from 'next/link';
import React from 'react';

export const ServiceCard = ({ imgUrl, title, desc, linkUrl, customClass }) => {
	return (
		<div className={`services_box ${customClass} hover-effect`}>
			<figure>
				<img src={imgUrl} alt="" className="img-fluid hover-effect" />
			</figure>
			<h5>{title}</h5>
			<p>{desc}</p>
			<div className="btn_wrapper">
				<Link href={linkUrl} className="text-decoration-none">
					Read More<i className="fa-solid fa-angle-right"></i>
				</Link>
			</div>
		</div>
	);
};
