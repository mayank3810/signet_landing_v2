import React from 'react';
import Carousel from 'react-multi-carousel';
import ReactImageMagnify from 'react-magnify-image';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const images = [
	'/images/tamper-proof-seal/7.png',
	'/images/tamper-proof-seal/2.jpeg',
	// "/images/tamper-proof-seal/3.jpg",
	// "/images/tamper-proof-seal/4.webp",
	'/images/tamper-proof-seal/8.png',
	'/images/tamper-proof-seal/5.jpg',
	'/images/tamper-proof-seal/6.jpg',

	'/images/tamper-proof-seal/9.png',
	'/images/tamper-proof-seal/1.jpeg',
];

function ProductCoursal() {
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
			<li>
				<button
					onClick={(e) => {
						onClick();
						e.preventDefault();
					}}
					className="default-div"
				>
					{<Image className={active ? 'img_wrap active-product' : 'img_wrap'} src={images[index]} alt="product image" width={60} height={60} />}
				</button>
			</li>
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
					<img key={i} className="img-fluid" src={img} alt="product image" width="416" height="416" />
				))}
			</Carousel>
		</>
	);
}

export default ProductCoursal;
