import React from "react";

function Header() {
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
        <div className="wsmainfull menu clearfix">
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
                {/* MEGAMENU */}
                <li aria-haspopup="true" className="mg_link">
                  <a href="#">
                    Home <span className="wsarrow" />
                  </a>
                  <div className="wsmegamenu w-75 clearfix">
                    <div className="container">
                      <div className="row">
                        {/* MEGAMENU LINKS */}
                        <ul className="col-md-12 col-lg-3 link-list">
                          <li className="fst-li">
                            <a href="demo-1.html">App Landing</a>
                          </li>
                          <li>
                            <a href="demo-2.html">App Showcase 1</a>
                          </li>
                          <li>
                            <a href="demo-3.html">Startup Agency</a>
                          </li>
                          <li>
                            <a href="demo-4.html">Design Agency</a>
                          </li>
                          <li>
                            <a href="demo-5.html">Software 1</a>
                          </li>
                          <li>
                            <a href="demo-6.html">SaaS Service 1</a>
                          </li>
                          <li>
                            <a href="demo-7.html">Digital Service 1</a>
                          </li>
                        </ul>
                        {/* MEGAMENU LINKS */}
                        <ul className="col-md-12 col-lg-3 link-list">
                          <li className="fst-li">
                            <a href="demo-8.html">Social Media Marketing</a>
                          </li>
                          <li>
                            <a href="demo-9.html">Digital Agency</a>
                          </li>
                          <li>
                            <a href="demo-10.html">SaaS Service 2</a>
                          </li>
                          <li>
                            <a href="demo-11.html">Desktop Software 1</a>
                          </li>
                          <li>
                            <a href="demo-12.html">Digital Service 2</a>
                          </li>
                          <li>
                            <a href="demo-13.html">Software SaaS</a>
                          </li>
                          <li>
                            <a href="demo-14.html">App Showcase 2</a>
                          </li>
                        </ul>
                        {/* MEGAMENU LINKS */}
                        <ul className="col-md-12 col-lg-3 link-list">
                          <li className="fst-li">
                            <a href="demo-15.html">Software 2</a>
                          </li>
                          <li>
                            <a href="demo-16.html">App Showcase 3</a>
                          </li>
                          <li>
                            <a href="demo-17.html">Desktop Software 2</a>
                          </li>
                          <li>
                            <a href="demo-18.html">SEO Company</a>
                          </li>
                          <li>
                            <a href="demo-19.html">Digital Marketing</a>
                          </li>
                          <li>
                            <a href="demo-20.html">Cyber Security</a>
                          </li>
                          <li>
                            <a href="demo-21.html">SaaS Service 3</a>
                          </li>
                        </ul>
                        {/* MEGAMENU LINKS */}
                        <ul className="col-md-12 col-lg-3 link-list">
                          <li className="fst-li">
                            <a href="demo-22.html">Marketing Agency</a>
                          </li>
                          <li>
                            <a href="demo-23.html">Branding Agency</a>
                          </li>
                          <li>
                            <a href="404.html">404 Page</a>
                          </li>
                          <li>
                            <a href="demo-24.html">RTL Version #1</a>
                          </li>
                          <li>
                            <a href="demo-25.html">RTL Version #2</a>
                          </li>
                          <li>
                            <a href="demo-26.html">RTL Version #3</a>
                          </li>
                        </ul>
                      </div>{" "}
                      {/* End row */}
                    </div>{" "}
                    {/* End container */}
                  </div>{" "}
                  {/* End wsmegamenu */}
                </li>{" "}
                {/* END MEGAMENU */}
                {/* DROPDOWN MENU */}
                <li aria-haspopup="true">
                  <a href="#">
                    About <span className="wsarrow" />
                  </a>
                  <ul className="sub-menu">
                    <li aria-haspopup="true">
                      <a href="#content-2">Why Signet?</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="#content-5">Best Solutions</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="#content-3">Integrations</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="#content-10">How It Works</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="#reviews-1">Testimonials</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="#faqs-2">FAQs</a>
                    </li>
                  </ul>
                </li>
                {/* DROPDOWN MENU */}
                <li aria-haspopup="true">
                  <a href="#">
                    Pages <span className="wsarrow" />
                  </a>
                  <div className="wsmegamenu clearfix halfmenu">
                    <div className="container-fluid">
                      <div className="row">
                        {/* Links */}
                        <ul className="col-lg-6 link-list">
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="features.html">Features &amp; Addons</a>
                          </li>
                          <li>
                            <a href="pricing.html">Pricing Packages</a>
                          </li>
                          <li>
                            <a href="download.html">Download Page</a>
                          </li>
                          <li>
                            <a href="projects.html">Our Projects</a>
                          </li>
                          <li>
                            <a href="project-details.html">Project Details</a>
                          </li>
                        </ul>
                        {/* Links */}
                        <ul className="col-lg-6 link-list">
                          <li>
                            <a href="team.html">Meet The Team</a>
                          </li>
                          <li>
                            <a href="faqs.html">FAQs Page</a>
                          </li>
                          <li>
                            <a href="blog-listing.html">Blog Listing</a>
                          </li>
                          <li>
                            <a href="single-post.html">Single Blog Post</a>
                          </li>
                          <li>
                            <a href="terms.html">Terms &amp; Privacy</a>
                          </li>
                          <li>
                            <a href="contacts.html">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>{" "}
                {/* END DROPDOWN MENU */}
                {/* DROPDOWN MENU */}
                <li aria-haspopup="true">
                  <a href="#">
                    Auth Pages <span className="wsarrow" />
                  </a>
                  <ul className="sub-menu">
                    <li aria-haspopup="true">
                      <a href="login-simple.html">
                        Login Simple <span>NEW</span>
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="login-boxed.html">
                        Login Boxed <span>NEW</span>
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="login-image.html">
                        Login Image <span>NEW</span>
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="signup-simple.html">
                        Signup Simple <span>NEW</span>
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="signup-boxed.html">
                        Signup Boxed <span>NEW</span>
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="signup-image.html">
                        Signup Image <span>NEW</span>
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="reset-password-1.html">
                        Reset Pass. #1 <span>NEW</span>
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="reset-password-2.html">
                        Reset Pass. #2 <span>NEW</span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true">
                  <a href="#features-8">Features</a>
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
                    Get Started
                  </a>
                </li>
                {/* HEADER SOCIAL LINKS 													
                              <li class="nl-simple white-color header-socials ico-20 clearfix" aria-haspopup="true">
                                  <span><a href="#" class="ico-facebook"><span class="flaticon-facebook"></span></a></span>
                                  <span><a href="#" class="ico-twitter"><span class="flaticon-twitter"></span></a></span>
                                  <span><a href="#" class="ico-instagram"><span class="flaticon-instagram"></span></a></span>
                                  <span><a href="#" class="ico-dribbble"><span class="flaticon-dribbble"></span></a></span>	
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
