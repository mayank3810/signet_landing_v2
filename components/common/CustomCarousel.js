import React from 'react';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
	ssr: false,
});
export const CustomCarousel = ({ responsive, children }) => {
	const options = {
		margin: 30,
		nav: true,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 4500,
		responsive: responsive,
	};
	return (
		<OwlCarousel {...options} className="owl-carousel owl-theme">
			{children}
		</OwlCarousel>
	);
};
