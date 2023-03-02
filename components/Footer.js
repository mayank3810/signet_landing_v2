import Link from 'next/link';
import React from 'react';

function Footer() {
	return (
		<>
			<hr className="divider" />
			<footer
				// style={{ backgroundImage: "url(/images/map-bg.png)" }}
				id="footer-1"
				className="footer division"
			>
				<div className="container">
					{/* FOOTER CONTENT */}
					<div className="row">
						{/* FOOTER INFO */}
						<div className="col-lg-4">
							<div className="footer-info mb-40">
								{/* Footer Logo */}
								<img className="footer-logo mb-25" src="/images/logo_dark.svg" alt="footer-logo" />
								{/* Text */}
								<p className="p-md">Signet Tags - Blockchain-based authenticity and Brand protection solution</p>
							</div>
						</div>
						{/* FOOTER LINKS */}
						<div className="col-sm-6 col-md-3 col-lg-2">
							<div className="footer-links mb-40">
								{/* Title */}
								<h2 className="h4-font">Company</h2>
								{/* Footer Links */}
								<ul className="foo-links text-secondary clearfix">
									<li>
										<p className="p-md">
											<Link href={'/technology'}>About Us</Link>
										</p>
									</li>
									<li>
										<p className="p-md">
											<a href="#">Careers</a>
										</p>
									</li>
									<li>
										<p className="p-md">
											<Link href={'/contact'}>Contact Us</Link>
										</p>
									</li>
									<li>
										<p className="p-md">
											<Link href={'/privacy-policy'}>Privacy Policy</Link>
										</p>
									</li>
								</ul>
							</div>
						</div>
						{/* FOOTER LINKS */}
						<div className="col-sm-6 col-md-3 col-lg-2">
							<div className="footer-links mb-40">
								{/* Title */}
								<h2 className="h4-font">Discover</h2>
								{/* Footer List */}
								<ul className="foo-links text-secondary clearfix">
									<li>
										<p className="p-md">
											<Link href={'/blog'}>Our Blog</Link>
										</p>
									</li>
									<li>
										<p className="p-md">
											<Link href={'/pricing'}>Plans &amp; Pricing</Link>
										</p>
									</li>
									<li>
										<p className="p-md">
											<Link href={'/api-doc'}>API & Resources</Link>
										</p>
									</li>
								</ul>
							</div>
						</div>
						{/* FOOTER LINKS */}
						<div className="col-sm-6 col-md-3 col-lg-2">
							<div className="footer-links mb-40">
								{/* Title */}
								<h2 className="h4-font">Industries</h2>
								{/* Footer List */}
								<ul className="foo-links text-secondary clearfix">
									<li>
										<p className="p-md">
											<a href="#">Pharmaceuticals</a>
										</p>
									</li>

									<li>
										<p className="p-md">
											<a href="#">Cosmetics & Perfumes</a>
										</p>
									</li>
									<li>
										<p className="p-md">
											<a href="#">Food & Beverages</a>
										</p>
									</li>
									<li>
										<p className="p-md">
											<a href="#">Food & Beverages</a>
										</p>
									</li>
									<li>
										<p className="p-md">
											<a href="#">Auto Parts</a>
										</p>
									</li>
								</ul>
							</div>
						</div>
						{/* FOOTER LINKS */}
						<div className="col-sm-6 col-md-3 col-lg-2">
							<div className="footer-links mb-40">
								{/* Title */}
								<h2 className="h4-font">Links</h2>
								{/* Footer Links */}
								<ul className="foo-links text-secondary clearfix">
									<li>
										<p className="p-md">
											<Link href={'/request-demo'}>Request Demo</Link>
										</p>
									</li>
									<li>
										<p className="p-md">
											<a href="#">Free Trial</a>
										</p>
									</li>
									<li>
										<p className="p-md">
											<a href="https://www.youtube.com/@signettags" target="_blank">
												All Videos
											</a>
										</p>
									</li>
									<li>
										<p className="p-md">
											<Link href={'/patent'}>Patent Status</Link>
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>{' '}
					{/* END FOOTER CONTENT */}
					<hr />
					{/* BOTTOM FOOTER */}
					<div className="bottom-footer">
						<div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
							{/* FOOTER COPYRIGHT */}
							<div className="col">
								<div className="footer-copyright">
									<p>© 2023 Signet. All Rights Reserved</p>
								</div>
							</div>
							{/* BOTTOM FOOTER LINKS */}
							<div className="col">
								<ul className="bottom-footer-list text-secondary text-end">
									<li className="first-li">
										<p>
											<a href="https://www.youtube.com/@signettags" target="_blank">
												Youtube
											</a>
										</p>
									</li>
									<li>
										<p>
											<a href="https://twitter.com/SignetTags" target="_blank">
												Twitter
											</a>
										</p>
									</li>
									<li>
										<p>
											<a href=" https://www.instagram.com/signettags/" target="_blank">
												Instagram
											</a>
										</p>
									</li>
									<li className="last-li">
										<p>
											<a href="https://www.linkedin.com/company/signet-tags/" target="_blank">
												LinkedIn
											</a>
										</p>
									</li>
								</ul>
							</div>
						</div>{' '}
						{/* End row */}
					</div>{' '}
					{/* BOTTOM FOOTER */}
				</div>
			</footer>
		</>
	);
}

export default Footer;
