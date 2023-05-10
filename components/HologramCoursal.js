import React from 'react';
import Carousel from 'react-multi-carousel';
import ReactImageMagnify from 'react-magnify-image';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const images = ['/images/hologram/3.webp', '/images/hologram/2.webp', '/images/hologram/4.jpg', '/images/hologram/5.webp'];

function HologramCoursal() {
	// const [img, setImg] = useState();
	// const handelHover = (image, i) => {
	//   setImg(image);
	// };

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1,
		},
	};

	const CustomDot = ({ index, onClick, active }) => {
		return (
			<button
				onClick={(e) => {
					onClick();
					e.preventDefault();
				}}
				className="default-div"
			>
				{<Image className={active ? 'img_wrap active-product' : 'img_wrap'} src={images[index]} width={60} height={60} />}
			</button>
		);
	};

	return (
		<>
			<Carousel
				showDots
				swipeable={true}
				draggable={true}
				responsive={responsive}
				ssr
				infinite={true}
				deviceType={'desktop'}
				customDot={<CustomDot />}
				containerClass="text-center"
			>
				{images.map((img, i) => (
					<img key={i} className="img-fluid" src={img} width="416" height="416" />
				))}
			</Carousel>
		</>
	);
}

export default HologramCoursal;
