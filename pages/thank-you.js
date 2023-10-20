import Header from '@/components/Header';
import Link from 'next/link';
import React from 'react';

const Thankyou = () => {
	return (
		<>
			<Header scroll={true} />
			<section id="contacts-2" className="bg-black content-3 wide-60 content-section division">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-10 col-lg-8">
							<div className="section-title title-02 mt-40 mb-40">
								<h1 className="h1-sm text-white">Thank you</h1>
								<p className="p-xl">We will revert you back in 2 business days.</p>
								<Link href="/request-demo">
									<div className="btn btn-orange-red tra-white-hover mr-15">Request a Demo</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Thankyou;
