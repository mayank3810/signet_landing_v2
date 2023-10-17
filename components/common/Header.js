import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { HomeBanner } from '../Home/HomeBanner';
import { Banner } from './Banner';
import { NavLink } from './NavLink';

export const Header = () => {
	const { pathname } = useRouter();
	return (
		<div className={` ${pathname === '/' ? 'banner-section-outer' : 'sub-banner-section-outer'} position-relative`}>
			<header>
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light">
						<Link className="navbar-brand" href="/">
							<figure className="mb-0">
								<img src="/images/signet/logo.png" alt="" className="img-fluid" />
							</figure>
						</Link>
						<button
							className="navbar-toggler collapsed"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
							<span className="navbar-toggler-icon"></span>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav">
								<NavLink title="Home" route="/" />
								<NavLink title="About" route="/about" />
								<NavLink title="Services" route="/services" />

								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										id="navbarDropdown"
										role="button"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										Pages
									</a>
									<div className="dropdown-menu drop-down-content">
										<ul className="list-unstyled drop-down-pages">
											<li className="nav-item">
												<Link className="dropdown-item nav-link" href="/faqs">
													FAQ’s
												</Link>
											</li>
											<li className="nav-item">
												<Link className="dropdown-item nav-link" href="/projects">
													Projects
												</Link>
											</li>
											<li className="nav-item">
												<Link className="dropdown-item nav-link" href="/teams">
													Our Team
												</Link>
											</li>
										</ul>
									</div>
								</li>
								<NavLink title="Contact" route="/contact" />
								<li className="nav-item">
									<Link className="nav-link talk_btn" href="/contact">
										Request Quote <i className="fa-solid fa-angle-right"></i>
									</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</header>
			{/* <!-- BANNER SECTION --> */}
			{
				pathname === '/' ? (
					<Banner
						subtitle="LED wristbands enhancing live performances"
						desc="Wearable tech that creates a stunning light show at any event, from live music shows and festivals to product launches, corporate & sports events."
						imgUrl="/images/signet/wrist-bands.png"
						requestQuote
						scrollDown
					/>
				) : pathname === '/about' ? (
					<Banner
						title="About Us"
						desc="Huis autem vel eum iure reprehender esse ruam nihil molestiae."
						pageName="About"
						imgUrl="/images/banner_left_image.jpg"
					/>
				) : pathname === '/services' ? (
					<Banner
						title="Services"
						desc="Huis autem vel eum iure reprehender esse ruam nihil molestiae."
						pageName="Services"
						imgUrl="/images/banner_left_image.jpg"
					/>
				) : pathname === '/faqs' ? (
					<Banner
						title="FAQS"
						desc="Huis autem vel eum iure reprehender esse ruam nihil molestiae."
						pageName="Faq's"
						imgUrl="/images/banner_left_image.jpg"
					/>
				) : pathname === '/projects' ? (
					<Banner
						title="Projects"
						desc="Huis autem vel eum iure reprehender esse ruam nihil molestiae."
						pageName="Projects"
						imgUrl="/images/banner_left_image.jpg"
					/>
				) : pathname === '/teams' ? (
					<Banner
						title="Teams"
						desc="Huis autem vel eum iure reprehender esse ruam nihil molestiae."
						pageName="Teams"
						imgUrl="/images/banner_left_image.jpg"
					/>
				) : pathname === '/contact' ? (
					<Banner
						title="Contact Us"
						desc="Huis autem vel eum iure reprehender esse ruam nihil molestiae."
						pageName="Contact"
						imgUrl="/images/banner_left_image.jpg"
					/>
				) : null // Fallback when none of the conditions match
			}
		</div>
	);
};
