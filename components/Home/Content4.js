import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

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
								Manufacturers can provide unique and customized digital experiences for their physical products. This allows customers to tap on the
								products and get more information about the product.
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
								className={init ? 'rel img-block left-column animate__animated animate__slideInUp' : 'rel img-block left-column animate__animated'}
								style={{ animationDuration: '1.75s' }}
							>
								<img className="img-fluid" src="/images/digital-experience.jpg" alt="content-image" />
							</div>
						</div>
						{/* TEXT BLOCK */}
						<div className="col-md-7 col-lg-6">
							<div
								className={
									init
										? 'txt-block right-column left-column animate__animated animate__slideInUp'
										: 'txt-block right-column left-column animate__animated'
								}
								style={{ animationDuration: '1.75s' }}
							>
								{/* TEXT BOX */}
								<div className="txt-box mb-20">
									{/* Title */}
									<h3 className="h3-font mb-4">Easily share essential information with customers</h3>
									{/* Text */}
									<p className="p-lg">
										Customers can tap on the product to get updated information about essential attributes such as ownership, warranty, safety,
										recyclability, and value. This allows customers to make informed decisions about the products they purchase and use.
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
												AI enabled tool that allows brands to steer the entire supply chain in real-time. A web portal to store and verify products
												info, ensuring data transparency and allowing digital audits, live alerts and advanced analytics.
											</p>
										</li>
										<li className="list-item">
											<p className="p-lg">Send push notifications and collect feedbacks on your products with our advanced web portal.</p>
										</li>
									</ul>
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
