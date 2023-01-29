import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Header({ scroll }) {
  const [activeRoute, setActiveRoute] = useState();

  const router = useRouter();

  useEffect(() => {
    fetchActiveRoute();
    // console.log(router.pathname);
    // console.log(router.pathname.includes("feed"));
  }, [router.pathname]);

  function fetchActiveRoute() {
    if (router.pathname.includes("blog")) {
      setActiveRoute("blog");
    } else if (router.pathname.includes("industries")) {
      setActiveRoute("industries");
    } else if (router.pathname.includes("technology")) {
      setActiveRoute("technology");
    } else if (router.pathname.includes("pricing")) {
      setActiveRoute("pricing");
    } else {
      setActiveRoute("home");
    }
  }

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
          <a id="wsnavtoggle" className="wsanimated-arrow">
            <span />
          </a>
        </div>
        {/* NAVIGATION MENU */}
        <div
          className={
            scroll
              ? "wsmainfull menu clearfix scroll"
              : "wsmainfull menu clearfix"
          }
        >
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
            <nav className="wsmenu clearfix">
              <ul className="wsmenu-list nav-orange-red-hover">
                <li className="nl-simple" aria-haspopup="true">
                  <Link
                    className={activeRoute === "home" ? "active-link" : ""}
                    href={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li aria-haspopup="true">
                  <a
                    className={
                      activeRoute === "industries" ? "active-link" : ""
                    }
                  >
                    Industries <span className="wsarrow" />
                  </a>
                  <ul className="sub-menu">
                    <li aria-haspopup="true">
                      <a href="#content-2">Agriculture</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="#content-5">Pharma</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="#content-10">Consumer Goods</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="#reviews-1">Ticketing</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="#faqs-2">Arts and Collectibles</a>
                    </li>
                  </ul>
                </li>

                <li className="nl-simple" aria-haspopup="true">
                  <a
                    className={
                      activeRoute === "technology" ? "active-link" : ""
                    }
                  >
                    Technology
                  </a>
                </li>
                <li className="nl-simple" aria-haspopup="true">
                  <Link
                    className={activeRoute === "blog" ? "active-link" : ""}
                    href={"/blog"}
                  >
                    Blog
                  </Link>
                  {/* <a href="#features-8"></a> */}
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true">
                  <Link
                    className={activeRoute === "pricing" ? "active-link" : ""}
                    href={"/pricing"}
                  >
                    Pricing
                  </Link>
                </li>
                {/* HEADER BUTTON */}
                <li className="nl-simple" aria-haspopup="true">
                  <a className="btn btn-tra-white orange-red-hover last-link">
                    Schedule a Demo
                  </a>
                </li>
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
