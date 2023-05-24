import React from 'react';
import Carousel from 'react-multi-carousel';
import ReactImageMagnify from 'react-magnify-image';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const images = [
	{
		img: '/images/hologram/3.webp',
		altText: 'Empowering Your Brand with NFC and QR Code-Enabled Hologram Seals',
	},
	{
		img: '/images/hologram/2.webp',
		altText: 'Secure Hologram Seal: Advanced Protection with NFC and QR Code Technology - Signet Tags',
	},
	{
		img: '/images/hologram/4.jpg',
		altText: 'Hologram Seal: Optimal Security Solution for Brand Protection - Signet Tags',
	},
	{
		img: '/images/hologram/5.webp',
		altText: 'Hologram Seal: Ensuring Brand Protection with Cutting-Edge Security - Signet Tags',
	},
];

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
				{
					<Image
						className={active ? 'img_wrap active-product' : 'img_wrap'}
						src={images[index].img}
						width={60}
						height={60}
						alt={images[index].altText}
					/>
				}
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
					<img key={i} className="img-fluid" src={img.img} width="416" height="416" alt={img.altText} />
				))}
			</Carousel>
		</>
	);
}

export default HologramCoursal;
