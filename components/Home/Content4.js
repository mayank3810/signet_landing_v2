import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Content4() {
	// const [containerRef, inContainerView] = useInView({ threshold: 0.2 });

	const [init, setInit] = useState(true);
	// useEffect(() => {
	//   if (!init && inContainerView) {
	//     setInit(true);
	//   }
	// }, [inContainerView]);

	return (
		<section
			// ref={containerRef}
			id="content-3"
			className="content-3 wide-60 content-section division"
		>
			<div className="container">
				{/* SECTION TITLE */}
				<div className="row justify-content-center">
					<div className="col-lg-10 col-xl-8">
						<div className="section-title title-01 mb-70">
							{/* Title */}
							<h2 className="h2-md">Unique Digital Experience</h2>
							{/* Text */}
							<p className="p-xl">
								Manufacturers can use digital experiences to customize the user experience for their customers. This way, customers can tap on
								products and get more information about them, making the shopping experience more convenient and informative.
							</p>
						</div>
					</div>
				</div>
				{/* TOP ROW */}
				<div className="top-row pb-50">
					<div className="row d-flex align-items-center">
						{/* IMAGE BLOCK */}
						<div className="col-md-5 col-lg-6">
							<div
								className={`duration-1.75 ${
									init ? 'rel img-block left-column animate__animated animate__slideInUp' : 'rel img-block left-column animate__animated'
								}`}
								// style={{ animationDuration: '1.75s' }}
							>
								{/* <img className="img-fluid" src="/images/digital-experience.jpg" alt="content-image" /> */}
								<Image
									className="img-fluid"
									src="/images/digital-experience.jpg"
									alt="Counterfeit Protection and Brand Security: Digital Hologram Seal with Blockchain Technology and NFC - Signet Tags"
									width={600}
									height={999}
								/>
							</div>
						</div>
						{/* TEXT BLOCK */}
						<div className="col-md-7 col-lg-6">
							<div
								className={`duration-1.75 ${
									init
										? 'txt-block right-column left-column animate__animated animate__slideInUp'
										: 'txt-block right-column left-column animate__animated'
								}`}
								// style={{ animationDuration: '1.75s' }}
							>
								{/* TEXT BOX */}
								<div className="txt-box mb-20">
									{/* Title */}
									<h3 className="h3-font mb-4">Easily share essential information with customers</h3>
									{/* Text */}
									<p className="p-lg">
										Customers can tap on the product to get updated information about essential attributes such as ownership, warranty, safety,
										recyclability, and value. This allows customers to make informed decisions about the products they purchase and use. By being able
										to see this information, customers can be sure that they are making the best choice for them when it comes to the products they
										buy.
									</p>
								</div>
								{/* TEXT BOX */}
								<div className="txt-box">
									{/* Title */}
									<h3 className="h3-font mb-4">Advanced dashboard for customer analytics</h3>
									{/* List */}
									<ul className="simple-list">
										<li className="list-item">
											<p className="p-lg">
												This powerful AI tool helps brands keep track of their entire supply chain in real time. The online portal stores and verifies
												product info, ensuring complete data transparency. This allows for digital audits, live alerts, and access to advanced
												analytics.
											</p>
										</li>
										<li className="list-item">
											<p className="p-lg">Send push notifications and collect feedbacks on your products with our advanced web portal.</p>
										</li>
									</ul>
									<Link href="/request-demo">
										<div className="btn btn-yellow tra-yellow-hover color-white mr-15">Start Free Trial</div>
									</Link>
								</div>{' '}
							</div>
						</div>{' '}
					</div>
				</div>{' '}
			</div>{' '}
		</section>
	);
}

export default Content4;
