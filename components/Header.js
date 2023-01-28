import React from "react";

function Header({ scroll }) {
  return (
    <header id="header" className="header tra-menu navbar-light">
      <div className="header-wrapper">
        {/* MOBILE HEADER */}
        <div className="wsmobileheader clearfix">
          <span className="smllogo">
            <img src="/images/logo_dark.svg" alt="mobile-logo" />
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
              <a href="#hero-1" className="logo-black">
                <img src="/images/logo_dark.svg" alt="header-logo" />
              </a>
            </div>
            <div className="desktoplogo">
              <a href="#hero-1" className="logo-white">
                <img src="/images/logo_light.svg" alt="header-logo" />
              </a>
            </div>
            {/* MAIN MENU */}
            <nav className="wsmenu clearfix">
              <ul className="wsmenu-list nav-orange-red-hover">
                <li className="nl-simple" aria-haspopup="true">
                  <a href="#">Home</a>
                </li>
                <li aria-haspopup="true">
                  <a href="#">
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
                  <a href="#features-8">Technology</a>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true">
                  <a href="pricing.html">Pricing</a>
                </li>
                {/* HEADER BUTTON */}
                <li className="nl-simple" aria-haspopup="true">
                  <a
                    href="#content-4"
                    className="btn btn-tra-white orange-red-hover last-link"
                  >
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
