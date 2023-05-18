import React from 'react';
import Carousel from 'react-multi-carousel';
import ReactImageMagnify from 'react-magnify-image';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const images = [
	{
		img: '/images/tamper-proof-seal/7.png',
		altText: 'Tamper-Proof Seal: Safeguarding Brands with Blockchain, NFC, and Anti-Counterfeiting Measures - Signet Tags',
	},
	{
		img: '/images/tamper-proof-seal/2.jpeg',
		altText: 'Anti-Counterfeiting Solution: Tamper-Proof Seal with Blockchain, NFC, and Brand Protection - Signet Tags',
	},
	{
		img: '/images/tamper-proof-seal/8.png',
		altText: 'Tamper-Proof Seal: Defending Against Counterfeit with Blockchain, NFC, and Brand Protection - Signet Tags',
	},
	{
		img: '/images/tamper-proof-seal/5.jpg',
		altText: 'Tamper-Proof Seal: Protecting Brands with Blockchain, NFC, and Anti-Counterfeiting Measures - Signet Tags',
	},
	{
		img: '/images/tamper-proof-seal/6.jpg',
		altText: 'Advanced Tamper-Proof Seal: Combating Counterfeit with Blockchain, NFC, and Brand Protection - Signet Tags',
	},
	{ img: '/images/tamper-proof-seal/9.png', altText: 'Brand Protection: Tamper-Proof Seal for Enhanced Security - Signet Tags' },
	{ img: '/images/tamper-proof-seal/1.jpeg', altText: 'Brand Protection: Tamper-Proof Seal Ensuring Security and Authenticity - Signet Tags' },
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
		console.log(index, images[index].img);
		return (
			<li>
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
							alt={images[index].altText}
							width={60}
							height={60}
						/>
					}
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
				{images.map((image, i) => (
					<img key={i} className="img-fluid" src={image.img} alt={image.altText} width="416" height="416" />
				))}
			</Carousel>
		</>
	);
}

export default ProductCoursal;
