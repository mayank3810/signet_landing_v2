import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Header({ scroll }) {
	const [activeRoute, setActiveRoute] = useState();
	const [mobNav, setMobNav] = useState(true);

	const router = useRouter();

	useEffect(() => {
		fetchActiveRoute();
		// console.log(router.pathname);
		// console.log(router.pathname.includes("feed"));

		toggleNav();
	}, [router.pathname]);

	function fetchActiveRoute() {
		if (router.pathname.includes('blog')) {
			setActiveRoute('blog');
		} else if (router.pathname.includes('industries')) {
			setActiveRoute('industries');
		} else if (router.pathname.includes('technology')) {
			setActiveRoute('technology');
		} else if (router.pathname.includes('pricing')) {
			setActiveRoute('pricing');
		} else {
			setActiveRoute('home');
		}
	}

	const toggleNav = () => {
		if (mobNav) {
			document.body.classList.remove('wsactive');
			setMobNav(false);
		} else {
			document.body.classList.add('wsactive');
			setMobNav(true);
		}
	};

	return (
		<header id="header" className="header tra-menu navbar-light">
			<div className="header-wrapper">
				{/* MOBILE HEADER */}
				<div className="wsmobileheader clearfix">
					<span className="smllogo">
						<Link href="/">
							<img src="/images/logo_dark.svg" alt="mobile-logo" />
						</Link>
					</span>
					<div
						onClick={() => {
							toggleNav();
						}}
						id="wsnavtoggle"
						className="wsanimated-arrow"
					>
						<span />
					</div>
				</div>
				{/* NAVIGATION MENU */}
				<div className={scroll ? 'wsmainfull menu clearfix scroll' : 'wsmainfull menu clearfix'}>
					<div className="wsmainwp clearfix">
						{/* HEADER LOGO */}
						<div className="desktoplogo">
							<Link href="/" className="logo-black">
								<img src="/images/logo_dark.svg" alt="header-logo" />
							</Link>
						</div>
						<div className="desktoplogo">
							<Link href="/" className="logo-white">
								<img src="/images/logo_light.svg" alt="header-logo" />
							</Link>
						</div>
						{/* MAIN MENU */}
						<nav className={`wsmenu clearfix ${mobNav ? 'h-100vh' : ''}`}>
							{mobNav && <div className="overlapblackbg"></div>}
							<ul className="wsmenu-list nav-orange-red-hover">
								<li className="nl-simple">
									<Link className={activeRoute === 'home' ? 'active-link' : ''} href={'/'}>
										Home
									</Link>
								</li>
								<li>
									<a href="#" className={activeRoute === 'industries' ? 'active-link' : ''}>
										Industries <span className="wsarrow" />
									</a>
									<ul className="sub-menu">
										<li>
											<Link href={'/industries/cosmetics-and-perfumes'}>Cosmetics & Perfumes</Link>
										</li>
										<li>
											<Link href={'/industries/food-and-beverages'}>Food & Beverages</Link>
										</li>
										<li>
											<Link href={'/industries/agriculture'}>Agriculture</Link>
										</li>
										<li>
											<Link href={'/industries/auto-parts'}>Auto Parts</Link>
										</li>
										<li>
											<Link href={'/industries/pharmaceuticals'}>Pharmaceuticals</Link>
										</li>
										<li>
											<Link href={'/industries/cannabis'}>Cannabis</Link>
										</li>
										<li>
											<Link href={'/industries/document-security'}>Document Security</Link>
										</li>
										<li>
											<Link href={'/industries/clothing-and-footwear'}>Clothing and Footwear</Link>
										</li>
									</ul>
								</li>

								<li className="nl-simple">
									<Link href={'/technology'} className={activeRoute === 'technology' ? 'active-link' : ''}>
										Technology
									</Link>
								</li>

								{/* SIMPLE NAVIGATION LINK */}
								<li className="nl-simple">
									<Link className={activeRoute === 'pricing' ? 'active-link' : ''} href={'/pricing'}>
										Pricing
									</Link>
								</li>
								<li className="nl-simple">
									<Link className={activeRoute === 'blog' ? 'active-link' : ''} href={'/blog'}>
										Blog
									</Link>
									{/* <a href="#features-8"></a> */}
								</li>
								{/* HEADER BUTTON */}
								<li className="nl-simple">
									<Link className="btn btn-tra-white orange-red-hover last-link" href={'/request-demo'}>
										Schedule a Demo
									</Link>
								</li>
							</ul>
						</nav>{' '}
						{/* END MAIN MENU */}
					</div>
				</div>{' '}
				{/* END NAVIGATION MENU */}
			</div>{' '}
			{/* End header-wrapper */}
		</header>
	);
}

export default Header;
