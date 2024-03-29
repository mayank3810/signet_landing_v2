import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Header({ scroll, openTrailPopup, setOpenTrialPopup }) {
  const [activeRoute, setActiveRoute] = useState();
  const [mobNav, setMobNav] = useState(true);

  const router = useRouter();

  useEffect(() => {
    fetchActiveRoute();
    // console.log(router.pathname);
    // console.log(router.pathname.includes("feed"));
    // window.scrollTo(0, 0);

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
    } else if (router.pathname.includes('tamper-proof-seal')) {
      setActiveRoute('products');
    } else if (router.pathname.includes('digital-hologram-seal')) {
      setActiveRoute('products');
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
              {/* <img src="/images/logo_dark.svg" alt="mobile-logo" /> */}
              <Image
                src="/images/logo_dark.svg"
                alt="Signet Tags Dark Logo"
                width={120}
                height={36}
              />
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
        <div
          className="wsmainfull menu clearfix"
        >
          <div className="wsmainwp clearfix">
            {/* HEADER LOGO */}
            <div className="desktoplogo">
              <Link href="/" className="logo-black">
                <Image
                  src="/images/logo_dark.svg"
                  alt="Signet Tags Dark Logo"
                  width={184}
                  height={55}
                />
              </Link>
            </div>
            <div className="desktoplogo">
              <Link href="/" className="logo-white">
                <Image
                  src="/images/logo_light.svg"
                  alt="Signet Tags Light Logo"
                  width={184}
                  height={36}
                />
              </Link>
            </div>
            {/* MAIN MENU */}
            <nav className={`wsmenu clearfix ${mobNav ? "h-100vh" : ""}`}>
              {mobNav && <div className="overlapblackbg"></div>}
              <ul className="wsmenu-list nav-orange-red-hover">
                <li className="nl-simple">
                  <Link
                    className={activeRoute === "home" ? "active-link" : ""}
                    href={"/"}
                  >
                    Home
                  </Link>
                </li>

                {/* <li>
                  <a
                    href="#"
                    className={activeRoute === "products" ? "active-link" : ""}
                  >
                    Solutions <span className="wsarrow" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link href={"/tamper-proof-seal"}>
                        NFC Tag Tamper Seals
                      </Link>
                    </li>
                    <li>
                      <Link href={"/digital-hologram-seal"}>
                        Dynamic QR code Seals
                      </Link>
                    </li>
                  </ul>
                </li> */}

                <li className="nl-simple">
                  <Link
                    className={
                      activeRoute === "technology" ? "active-link" : ""
                    }
                    href={"/technology"}
                  >
                    Technology
                  </Link>
                </li>

                <li>
                  <a
                    href="#"
                    className={
                      activeRoute === "industries" ? "active-link" : ""
                    }
                  >
                    Industries <span className="wsarrow" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link href={"/industries/cosmetics-and-perfumes"}>
                        Cosmetics & Perfumes
                      </Link>
                    </li>
                    <li>
                      <Link href={"/industries/food-and-beverages"}>
                        Food & Beverages
                      </Link>
                    </li>
                    <li>
                      <Link href={"/industries/agriculture"}>Agriculture</Link>
                    </li>
                    <li>
                      <Link href={"/industries/auto-parts"}>Auto Parts</Link>
                    </li>
                    <li>
                      <Link href={"/industries/pharmaceuticals"}>
                        Pharmaceuticals
                      </Link>
                    </li>
                    <li>
                      <Link href={"/industries/cannabis"}>Cannabis</Link>
                    </li>
                    <li>
                      <Link href={"/industries/document-security"}>
                        Document Security
                      </Link>
                    </li>
                    <li>
                      <Link href={"/industries/clothing-and-footwear"}>
                        Clothing and Footwear
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* <li className="nl-simple">
									<Link href={'/technology'} className={activeRoute === 'technology' ? 'active-link' : ''}>
										Technology
									</Link>
								</li> */}

                <li className="nl-simple">
                  <Link
                    className={activeRoute === "pricing" ? "active-link" : ""}
                    href={"/contact"}
                  >
                    <button
                       className="btn btn-sm btn-green green-red-hover last-link">
                      Contact us
                    </button>
                  </Link>
                </li>

                {/* HEADER BUTTON */}
                {/* <li className="nl-simple">
                  <button
                    style={{margin: "14px"}}
                    onClick={() => setOpenTrialPopup(!openTrailPopup)}
                    className="show-desktop btn btn-sm btn-green green-red-hover last-link"
                  >
                    Free Trial offer
                  </button>
                </li> */}

              </ul>
            </nav>{" "}
            {/* END MAIN MENU */}
          </div>
        </div>{" "}
        {/* END NAVIGATION MENU */}
      </div>{" "}
      {/* End header-wrapper */}
    </header>
  );
}

export default Header;
