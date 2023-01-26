import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* PRELOADER SPINNER
		============================================= */}
      {/* PAGE CONTENT
		============================================= */}
      <div id="page" className="page">
        {/* HEADER
			============================================= */}
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
                                <a href="features.html">
                                  Features &amp; Addons
                                </a>
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
                                <a href="project-details.html">
                                  Project Details
                                </a>
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
        </header>{" "}
        {/* END HEADER */}
        {/* HERO-1
			============================================= */}
        <section id="hero-1" className="bg-scroll hero-section division">
          <div className="container">
            <div className="row d-flex align-items-center">
              {/* HERO TEXT */}
              <div className="col-md-7 col-lg-6">
                <div className="hero-1-txt white-color wow fadeInRight">
                  {/* Title */}
                  <h2 className="h2-md">
                    Share text, voice, photos, videos and GIFs files for free
                  </h2>
                  {/* Text */}
                  <p className="p-xl">
                    Feugiat primis a ligula undo auctor mauris auctor laoreet
                    and pretium augue an egestas cubilia
                  </p>
                  {/* Buttons Group */}
                  <div className="btns-group mb-20">
                    <a
                      href="#content-3"
                      className="btn btn-orange-red tra-white-hover mr-15"
                    >
                      Learn More
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=7e90gBu4pas"
                      className="video-popup2 btn btn-md btn-transparent ico-20 ico-left"
                    >
                      <span className="flaticon-play" /> See Signet in Action
                    </a>
                  </div>
                  {/* Advantages List */}
                  <ul className="advantages">
                    <li className="first-li">
                      <p>14 days free trial</p>
                    </li>
                    <li className="last-li">
                      <p>No credit card</p>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              {/* END HERO TEXT */}
              {/* HERO IMAGE */}
              <div className="col-md-5 col-lg-6">
                <div className="hero-1-img wow fadeInLeft">
                  <img
                    className="img-fluid"
                    src="/images/hero-1-img.png"
                    alt="hero-image"
                  />
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End container */}
          {/* WAVE SHAPE BOTTOM */}
          <div className="wave-shape-bottom">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130">
              <path
                fill="#ffffff"
                fillOpacity={1}
                d="M0,64L120,80C240,96,480,128,720,128C960,128,1200,96,1320,80L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              />
            </svg>
          </div>
        </section>{" "}
        {/* END HERO-1 */}
        {/* FEATURES-2
			============================================= */}
        <section id="features-2" className="wide-60 features-section division">
          <div className="container">
            {/* FEATURES-2 WRAPPER */}
            <div className="fbox-2-wrapper text-center">
              <div className="row row-cols-1 row-cols-md-3">
                {/* FEATURE BOX #1 */}
                <div className="col">
                  <div className="fbox-2 mb-40 wow fadeInUp">
                    {/* Icon */}
                    <div className="fbox-ico-center ico-65 shape-ico orange-red-color">
                      <img
                        className="ico-bkg"
                        src="/images/ico-bkg.png"
                        alt="ico-bkg"
                      />
                      <span className="flaticon-double-click" />
                    </div>
                    {/* Text */}
                    <div className="fbox-txt-center">
                      {/* Title */}
                      <h5 className="h5-md">Quick Access</h5>
                      {/* Text */}
                      <p className="p-lg">
                        Feugiat primis ultrice a semper lacus cursus feugiat a
                        primis ultrice a ligula risus auctor tempus feugiat
                        felis
                      </p>
                    </div>
                  </div>
                </div>
                {/* FEATURE BOX #2 */}
                <div className="col">
                  <div className="fbox-2 mb-40 wow fadeInUp">
                    {/* Icon */}
                    <div className="fbox-ico-center ico-65 shape-ico orange-red-color">
                      <img
                        className="ico-bkg"
                        src="/images/ico-bkg.png"
                        alt="ico-bkg"
                      />
                      <span className="flaticon-web-browser" />
                    </div>
                    {/* Text */}
                    <div className="fbox-txt-center">
                      {/* Title */}
                      <h5 className="h5-md">Cross-Platform</h5>
                      {/* Text */}
                      <p className="p-lg">
                        Feugiat primis ultrice a semper lacus cursus feugiat a
                        primis ultrice a ligula risus auctor tempus feugiat
                        felis
                      </p>
                    </div>
                  </div>
                </div>
                {/* FEATURE BOX #3 */}
                <div className="col">
                  <div className="fbox-2 mb-40 wow fadeInUp">
                    {/* Icon */}
                    <div className="fbox-ico-center ico-65 shape-ico orange-red-color">
                      <img
                        className="ico-bkg"
                        src="/images/ico-bkg.png"
                        alt="ico-bkg"
                      />
                      <span className="flaticon-web-programming" />
                    </div>
                    {/* Text */}
                    <div className="fbox-txt-center">
                      {/* Title */}
                      <h5 className="h5-md">Easy Integration</h5>
                      {/* Text */}
                      <p className="p-lg">
                        Feugiat primis ultrice a semper lacus cursus feugiat a
                        primis ultrice a ligula risus auctor tempus feugiat
                        felis
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* END FEATURES-2 WRAPPER */}
          </div>{" "}
          {/* End container */}
        </section>{" "}
        {/* END FEATURES-2 */}
        {/* DIVIDER LINE */}
        <hr className="divider" />
        {/* CONTENT-2
			============================================= */}
        <section
          id="content-2"
          className="content-2 wide-60 content-section division"
        >
          <div className="container">
            <div className="row d-flex align-items-center">
              {/* IMAGE BLOCK */}
              <div className="col-md-5 col-lg-6">
                <div className="rel img-block left-column wow fadeInRight">
                  <img
                    className="img-fluid"
                    src="/images/img-09.png"
                    alt="content-image"
                  />
                </div>
              </div>
              {/* TEXT BLOCK */}
              <div className="col-md-7 col-lg-6">
                <div className="txt-block right-column wow fadeInLeft">
                  {/* Title */}
                  <h2 className="h2-xs">Share files, media, and locations</h2>
                  {/* Text */}
                  <p className="p-lg">
                    Quaerat sodales sapien euismod blandit purus a purus ipsum
                    primis in cubilia laoreet augue luctus magna dolor luctus
                    and egestas sapien egestas vitae nemo volute
                  </p>
                  {/* Text */}
                  <p className="p-lg">
                    Quaerat sodales sapien euismod blandit at vitae ipsum primis
                    undo and cubilia laoreet augue and luctus magna dolor luctus
                    at egestas sapien vitae nemo egestas volute and turpis
                    dolores aliquam quaerat sodales a sapien
                  </p>
                </div>
              </div>{" "}
              {/* END TEXT BLOCK */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End container */}
        </section>{" "}
        {/* END CONTENT-2 */}
        {/* CONTENT-5
			============================================= */}
        <section
          id="content-5"
          className="content-5 ws-wrapper content-section division"
        >
          <div className="container">
            <div className="content-5-wrapper bg-whitesmoke">
              <div className="row d-flex align-items-center">
                {/* TEXT BLOCK */}
                <div className="col-md-7 col-lg-6">
                  <div className="txt-block left-column wow fadeInRight">
                    {/* CONTENT BOX #1 */}
                    <div className="cbox mb-40">
                      {/* Icon */}
                      <div className="cbox-ico">
                        <div className="orange-red-color ico-65">
                          <span className="flaticon-speech-bubble-2" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="cbox-txt">
                        <h5 className="h5-md">Text, Voice &amp; Video Calls</h5>
                        <p className="p-lg">
                          Ligula risus auctor tempus dolor feugiat undo lacinia
                          purus lipsum quaerat primis ultrice tellus and viverra
                          purus suscipit
                        </p>
                      </div>
                    </div>
                    {/* CONTENT BOX #2 */}
                    <div className="cbox mb-40">
                      {/* Icon */}
                      <div className="cbox-ico">
                        <div className="orange-red-color ico-65">
                          <span className="flaticon-tongue" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="cbox-txt">
                        <h5 className="h5-md">Stickers, Emojis, Themes</h5>
                        <p className="p-lg">
                          Ligula risus auctor tempus dolor feugiat undo lacinia
                          purus lipsum quaerat primis ultrice tellus and viverra
                          purus suscipit
                        </p>
                      </div>
                    </div>
                    {/* CONTENT BOX #3 */}
                    <div className="cbox mb-40">
                      {/* Icon */}
                      <div className="cbox-ico">
                        <div className="orange-red-color ico-65">
                          <span className="flaticon-shield-2" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="cbox-txt">
                        <h5 className="h5-md">Spam Protection</h5>
                        <p className="p-lg">
                          Ligula risus auctor tempus dolor feugiat undo lacinia
                          purus lipsum quaerat primis ultrice tellus and viverra
                          purus suscipit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* END TEXT BLOCK */}
                {/* IMAGE BLOCK */}
                <div className="col-md-5 col-lg-6">
                  <div className="img-block right-column wow fadeInLeft">
                    <img
                      className="img-fluid"
                      src="/images/img-12.png"
                      alt="content-image"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End container */}
        </section>{" "}
        {/* END CONTENT-5 */}
        {/* CONTENT-3
			============================================= */}
        <section
          id="content-3"
          className="content-3 wide-60 content-section division"
        >
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="section-title title-01 mb-70">
                  {/* Title */}
                  <h2 className="h2-md">Security, Simplicity, Easiness</h2>
                  {/* Text */}
                  <p className="p-xl">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis a libero tempus, blandit and cursus varius and
                    magnis sapien
                  </p>
                </div>
              </div>
            </div>
            {/* TOP ROW */}
            <div className="top-row pb-50">
              <div className="row d-flex align-items-center">
                {/* IMAGE BLOCK */}
                <div className="col-md-5 col-lg-6">
                  <div className="img-block left-column wow fadeInRight">
                    <img
                      className="img-fluid"
                      src="/images/img-05.png"
                      alt="content-image"
                    />
                  </div>
                </div>
                {/* TEXT BLOCK */}
                <div className="col-md-7 col-lg-6">
                  <div className="txt-block right-column wow fadeInLeft">
                    {/* TEXT BOX */}
                    <div className="txt-box mb-20">
                      {/* Title */}
                      <h5 className="h5-lg">Chat with your friends easily</h5>
                      {/* Text */}
                      <p className="p-lg">
                        Quaerat sodales sapien euismod blandit at vitae ipsum
                        primis undo and cubilia laoreet augue and luctus magna
                        dolor luctus at egestas sapien vitae nemo egestas volute
                        and turpis dolores aliquam quaerat sodales a sapien
                      </p>
                    </div>
                    {/* TEXT BOX */}
                    <div className="txt-box">
                      {/* Title */}
                      <h5 className="h5-lg">Advanced performance made easy</h5>
                      {/* List */}
                      <ul className="simple-list">
                        <li className="list-item">
                          <p className="p-lg">
                            Fringilla risus, luctus mauris auctor euismod an
                            iaculis luctus magna purus pretium ligula purus and
                            quaerat
                          </p>
                        </li>
                        <li className="list-item">
                          <p className="p-lg">
                            Nemo ipsam egestas volute turpis dolores undo
                            ultrice aliquam quaerat at sodales sapien purus
                          </p>
                        </li>
                      </ul>
                    </div>{" "}
                    {/* END TEXT BOX */}
                  </div>
                </div>{" "}
                {/* END TEXT BLOCK */}
              </div>
            </div>{" "}
            {/* END TOP ROW */}
            {/* BOTTOM ROW */}
            <div className="bottom-row">
              <div className="row d-flex align-items-center">
                {/* TEXT BLOCK */}
                <div className="col-md-7 col-lg-6 order-last order-md-2">
                  <div className="txt-block left-column wow fadeInRight">
                    {/* Title */}
                    <h2 className="h2-xs">
                      Work smarter with powerful automation
                    </h2>
                    {/* Text */}
                    <p className="p-lg">
                      Quaerat sodales sapien euismod blandit purus a purus ipsum
                      primis in cubilia laoreet augue luctus magna dolor luctus
                      and egestas sapien egestas vitae nemo volute
                    </p>
                    {/* CONTENT BOX #1 */}
                    <div className="cbox-2 mt-20 mb-30">
                      {/* Icon */}
                      <div className="cbox-2-ico">
                        <div className="ico-40 orange-red-color">
                          <span className="flaticon-speech-bubble-4" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="cbox-2-txt">
                        <h5 className="h5-xs">Send Group Messages</h5>
                        <p className="p-lg">to your lists of contacts</p>
                      </div>
                    </div>
                    {/* CONTENT BOX #2 */}
                    <div className="cbox-2">
                      {/* Icon */}
                      <div className="cbox-2-ico">
                        <div className="ico-40 orange-red-color">
                          <span className="flaticon-analytics-4" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="cbox-2-txt">
                        <h5 className="h5-xs">Lowest Data Usage</h5>
                        <p className="p-lg">with Encrypted Messaging</p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* END TEXT BLOCK */}
                {/* IMAGE BLOCK */}
                <div className="col-md-5 col-lg-6 order-first order-md-2">
                  <div className="img-block right-column wow fadeInLeft">
                    <img
                      className="img-fluid"
                      src="/images/img-02.png"
                      alt="content-image"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* END BOTTOM ROW */}
          </div>{" "}
          {/* End container */}
        </section>{" "}
        {/* END CONTENT-3 */}
        {/* CONTENT-2A
			============================================= */}
        <section
          id="content-2a"
          className="content-2 bg-04 wide-60 content-section division"
        >
          <div className="container">
            <div className="row d-flex align-items-center">
              {/* IMAGE BLOCK */}
              <div className="col-md-5 col-lg-6">
                <div className="rel img-block left-column wow fadeInRight">
                  <img
                    className="img-fluid"
                    src="/images/img-10.png"
                    alt="content-image"
                  />
                </div>
              </div>
              {/* TEXT BLOCK */}
              <div className="col-md-7 col-lg-6">
                <div className="txt-block right-column white-color wow fadeInLeft">
                  {/* Title */}
                  <h2 className="h2-xs">Make it simpler with Quick Commands</h2>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Fringilla risus, luctus mauris orci auctor euismod
                        iaculis luctus magna purus pretium ligula purus undo
                        quaerat tempor sapien rutrum mauris quaerat ultrice
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Quaerat sodales sapien euismod purus blandit
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Nemo ipsam egestas volute turpis dolores undo ultrice
                        aliquam quaerat at sodales sapien purus
                      </p>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              {/* END TEXT BLOCK */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End container */}
        </section>{" "}
        {/* END CONTENT-2A */}
        {/* FEATURES-8
			============================================= */}
        <section id="features-8" className="wide-60 features-section division">
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="section-title title-01 mb-70">
                  {/* Title */}
                  <h2 className="h2-md">We’re Better. Here’s Why…</h2>
                  {/* Text */}
                  <p className="p-xl">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis a libero tempus, blandit and cursus varius and
                    magnis sapien
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURES-8 WRAPPER */}
            <div className="fbox-8-wrapper text-center">
              <div className="row row-cols-1 row-cols-md-3">
                {/* FEATURE BOX #1 */}
                <div className="col">
                  <div className="fbox-8 mb-40 wow fadeInUp">
                    {/* Image */}
                    <div className="fbox-img bg-whitesmoke-gradient">
                      <img
                        className="img-fluid"
                        src="/images/img-21.png"
                        alt="feature-icon"
                      />
                    </div>
                    {/* Title */}
                    <h5 className="h5-md">Friendly Interface</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Feugiat primis ultrice semper lacus cursus feugiat undo
                      primis ultrice a ligula an auctor tempus magnis
                    </p>
                  </div>
                </div>
                {/* FEATURE BOX #2 */}
                <div className="col">
                  <div className="fbox-8 mb-40 wow fadeInUp">
                    {/* Image */}
                    <div className="fbox-img bg-whitesmoke-gradient">
                      <img
                        className="img-fluid"
                        src="/images/img-22.png"
                        alt="feature-icon"
                      />
                    </div>
                    {/* Title */}
                    <h5 className="h5-md">Extremely Flexible</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Feugiat primis ultrice semper lacus cursus feugiat undo
                      primis ultrice a ligula an auctor tempus magnis
                    </p>
                  </div>
                </div>
                {/* FEATURE BOX #3 */}
                <div className="col">
                  <div className="fbox-8 mb-40 wow fadeInUp">
                    {/* Image */}
                    <div className="fbox-img bg-whitesmoke-gradient">
                      <img
                        className="img-fluid"
                        src="/images/img-23.png"
                        alt="feature-icon"
                      />
                    </div>
                    {/* Title */}
                    <h5 className="h5-md">Strong Encryption</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Feugiat primis ultrice semper lacus cursus feugiat undo
                      primis ultrice a ligula an auctor tempus magnis
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* END FEATURES-8 WRAPPER */}
          </div>{" "}
          {/* End container */}
        </section>{" "}
        {/* END FEATURES-8 */}
        {/* CONTENT-1
			============================================= */}
        <section
          id="content-1"
          className="content-1 bg-snow wide-60 content-section division"
        >
          <div className="container">
            <div className="row d-flex align-items-center">
              {/* TEXT BLOCK */}
              <div className="col-lg-6 order-last order-lg-2">
                <div className="txt-block slim-column left-column wow fadeInRight">
                  {/* Title */}
                  <h2 className="h2-xs">
                    Keep your favourite people close to you
                  </h2>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Fringilla risus, luctus mauris orci auctor euismod
                        iaculis luctus magna purus pretium ligula purus undo
                        quaerat tempor sapien rutrum mauris quaerat ultrice
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Quaerat sodales sapien euismod purus blandit
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Nemo ipsam egestas volute turpis dolores undo ultrice
                        aliquam quaerat at sodales sapien purus
                      </p>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              {/* END TEXT BLOCK */}
              {/* CB WRAPPER */}
              <div className="col-lg-6 order-first order-lg-2">
                <div className="cb-wrapper">
                  {/* CB HOLDER */}
                  <div className="cb-holder wow fadeInLeft">
                    {/* CB BOX #1 */}
                    <div className="cb-single-box">
                      <p className="p-lg cb-header">Tempor Euismod</p>
                      <h2 className="h2-title-xs statistic-number">
                        <sup>+</sup>
                        <span className="count-element">784</span>
                      </h2>
                      <p className="p-md mt-5 ico-10">
                        <span className="violet-red-color">
                          <span className="flaticon-" /> 4.6%
                        </span>{" "}
                        vs last 7 days
                      </p>
                    </div>
                    <hr className="divider" />
                    {/* CB BOX #2 */}
                    <div className="cb-single-box">
                      <ul className="simple-list">
                        <li className="list-item">
                          <p className="p-md">
                            Fringilla risus luctus mauris auctor and purus
                            euismod purus
                          </p>
                        </li>
                        <li className="list-item">
                          <p className="p-md">
                            Nemo ipsam volute turpis dolores ut quaerat sodales
                            sapien
                          </p>
                        </li>
                      </ul>
                    </div>
                    {/* CB BOX #3 */}
                    <div className="cb-single-box cb-box-rounded bg-violet-red white-color mt-25">
                      <h4 className="h4-lg">98.245</h4>
                      <p className="p-lg">Ligula risus auctor tempus</p>
                    </div>
                  </div>{" "}
                  {/* END CB HOLDER */}
                  {/* CB SHAPE */}
                  <div className="cb-shape-1">
                    <img
                      className="img-fluid"
                      src="/images/bg-shape-1.png"
                      alt="content-image"
                    />
                  </div>
                  {/* CB SHAPE */}
                  <div className="cb-shape-2">
                    <img
                      className="img-fluid"
                      src="/images/bg-shape-2.png"
                      alt="content-image"
                    />
                  </div>
                </div>
              </div>{" "}
              {/* END CB WRAPPER */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End container */}
        </section>{" "}
        {/* END CONTENT-1 */}
        {/* CONTENT-10
			============================================= */}
        <section
          id="content-10"
          className="content-10 wide-100 content-section division"
        >
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="section-title title-01 mb-70">
                  {/* Title */}
                  <h2 className="h2-md">Share Moments. Share Life.</h2>
                  {/* Text */}
                  <p className="p-xl">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis a libero tempus, blandit and cursus varius and
                    magnis sapien
                  </p>
                </div>
              </div>
            </div>
            {/* IMAGE BLOCK */}
            <div className="row">
              <div className="col">
                <div className="img-block text-center wow fadeInUp">
                  <img
                    className="img-fluid"
                    src="/images/social-networks.png"
                    alt="content-image"
                  />
                </div>
              </div>
            </div>
            {/* ACTION BUTTON */}
            <div className="row">
              <div className="col">
                <div className="content-10-btn">
                  {/* Button */}
                  <a
                    href="https://www.youtube.com/watch?v=7e90gBu4pas"
                    className="video-popup2 btn btn-md btn-orange-red tra-grey-hover ico-15 ico-left"
                  >
                    <span className="flaticon-play" /> See Signet in Action
                  </a>
                  {/* Advantages List */}
                  <ul className="advantages mt-25 clearfix">
                    <li className="first-li">
                      <p>Free 30 days trial</p>
                    </li>
                    <li>
                      <p>Exclusive Support</p>
                    </li>
                    <li className="last-li">
                      <p>No Fees</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* End container */}
        </section>{" "}
        {/* END CONTENT-10 */}
        {/* TESTIMONIALS-1
			============================================= */}
        <section
          id="reviews-1"
          className="bg-whitesmoke-gradient wide-100 reviews-section division"
        >
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="section-title title-01 mb-70">
                  {/* Title */}
                  <h2 className="h2-md">Stories From Our Customers</h2>
                  {/* Text */}
                  <p className="p-xl">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis a libero tempus, blandit and cursus varius and
                    magnis sapien
                  </p>
                </div>
              </div>
            </div>
            {/* TESTIMONIALS CONTENT */}
            <div className="row">
              <div className="col">
                <div className="owl-carousel owl-theme reviews-1-wrapper">
                  {/* TESTIMONIAL #1 */}
                  <div className="review-1">
                    {/* Quote Icon */}
                    <div className="review-1-ico ico-25">
                      <span className="flaticon-left-quote" />
                    </div>
                    {/* Text */}
                    <div className="review-1-txt">
                      {/* Text */}
                      <p className="p-lg">
                        Etiam sapien sagittis congue augue massa varius egestas
                        ultrice varius magna a tempus aliquet undo cursus
                        suscipit
                      </p>
                      {/* Testimonial Author */}
                      <div className="author-data clearfix">
                        {/* Testimonial Avatar */}
                        <div className="review-avatar">
                          <img
                            src="/images/review-author-1.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl">Scott Boxer</h6>
                          <p className="p-md">@scott_boxer</p>
                          {/* Rating */}
                          <div className="review-rating ico-15 yellow-color">
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-half-empty" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Testimonial Author */}
                    </div>{" "}
                    {/* End Text */}
                  </div>{" "}
                  {/* END TESTIMONIAL #1 */}
                  {/* TESTIMONIAL #2 */}
                  <div className="review-1">
                    {/* Quote Icon */}
                    <div className="review-1-ico ico-25">
                      <span className="flaticon-left-quote" />
                    </div>
                    {/* Text */}
                    <div className="review-1-txt">
                      {/* Text */}
                      <p className="p-lg">
                        At sagittis congue augue and egestas magna ipsum vitae a
                        purus ipsum primis in cubilia laoreet augue egestas
                        luctus and donec diam ultrice ligula magna suscipit
                        lectus gestas augue into cubilia
                      </p>
                      {/* Testimonial Author */}
                      <div className="author-data clearfix">
                        {/* Testimonial Avatar */}
                        <div className="review-avatar">
                          <img
                            src="/images/review-author-2.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl">Joel Peterson</h6>
                          <p className="p-md">Internet Surfer</p>
                          {/* Rating */}
                          <div className="review-rating ico-15 yellow-color">
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-half-empty" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Testimonial Author */}
                    </div>{" "}
                    {/* End Text */}
                  </div>{" "}
                  {/* END TESTIMONIAL #2 */}
                  {/* TESTIMONIAL #3 */}
                  <div className="review-1">
                    {/* Quote Icon */}
                    <div className="review-1-ico ico-25">
                      <span className="flaticon-left-quote" />
                    </div>
                    {/* Text */}
                    <div className="review-1-txt">
                      {/* Text */}
                      <p className="p-lg">
                        Mauris donec magnis sapien etiam sapien congue augue
                        egestas et ultrice vitae purus diam integer a congue
                        magna ligula undo egestas magna at suscipit feugiat
                        primis
                      </p>
                      {/* Testimonial Author */}
                      <div className="author-data clearfix">
                        {/* Testimonial Avatar */}
                        <div className="review-avatar">
                          <img
                            src="/images/review-author-3.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl">Marisol19</h6>
                          <p className="p-md">@marisol19</p>
                          {/* Rating */}
                          <div className="review-rating ico-15 yellow-color">
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-half-empty" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Testimonial Author */}
                    </div>{" "}
                    {/* End Text */}
                  </div>{" "}
                  {/* END TESTIMONIAL #3 */}
                  {/* TESTIMONIAL #4 */}
                  <div className="review-1">
                    {/* Quote Icon */}
                    <div className="review-1-ico ico-25">
                      <span className="flaticon-left-quote" />
                    </div>
                    {/* Text */}
                    <div className="review-1-txt">
                      {/* Text */}
                      <p className="p-lg">
                        Mauris donec a magnis sapien etiam sapien congue augue
                        pretium ligula lectus aenean a magna undo mauris lectus
                        laoreet tempor egestas
                      </p>
                      {/* Testimonial Author */}
                      <div className="author-data clearfix">
                        {/* Testimonial Avatar */}
                        <div className="review-avatar">
                          <img
                            src="/images/review-author-4.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl">Leslie D.</h6>
                          <p className="p-md">Web Developer</p>
                          {/* Rating */}
                          <div className="review-rating ico-15 yellow-color">
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-half-empty" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Testimonial Author */}
                    </div>{" "}
                    {/* End Text */}
                  </div>{" "}
                  {/* END TESTIMONIAL #4 */}
                  {/* TESTIMONIAL #5 */}
                  <div className="review-1">
                    {/* Quote Icon */}
                    <div className="review-1-ico ico-25">
                      <span className="flaticon-left-quote" />
                    </div>
                    {/* Text */}
                    <div className="review-1-txt">
                      {/* Text */}
                      <p className="p-lg">
                        An augue cubilia laoreet magna suscipit egestas and
                        ipsum a lectus purus ipsum primis and augue ultrice
                        ligula and egestas a suscipit lectus gestas undo auctor
                        tempus feugiat impedit
                      </p>
                      {/* Testimonial Author */}
                      <div className="author-data clearfix">
                        {/* Testimonial Avatar */}
                        <div className="review-avatar">
                          <img
                            src="/images/review-author-5.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl">Jennifer Harper</h6>
                          <p className="p-md">App Developer</p>
                          {/* Rating */}
                          <div className="review-rating ico-15 yellow-color">
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-half-empty" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Testimonial Author */}
                    </div>{" "}
                    {/* End Text */}
                  </div>{" "}
                  {/* END TESTIMONIAL #5 */}
                  {/* TESTIMONIAL #6 */}
                  <div className="review-1">
                    {/* Quote Icon */}
                    <div className="review-1-ico ico-25">
                      <span className="flaticon-left-quote" />
                    </div>
                    {/* Text */}
                    <div className="review-1-txt">
                      {/* Text */}
                      <p className="p-lg">
                        An augue cubilia laoreet undo magna ipsum semper
                        suscipit egestas magna ipsum ligula a vitae purus and
                        ipsum primis cubilia magna suscipit
                      </p>
                      {/* Testimonial Author */}
                      <div className="author-data clearfix">
                        {/* Testimonial Avatar */}
                        <div className="review-avatar">
                          <img
                            src="/images/review-author-6.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl">Jonathan Barnes</h6>
                          <p className="p-md">jQuery Programmer</p>
                          {/* Rating */}
                          <div className="review-rating ico-15 yellow-color">
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-half-empty" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Testimonial Author */}
                    </div>{" "}
                    {/* End Text */}
                  </div>{" "}
                  {/* END TESTIMONIAL #6 */}
                  {/* TESTIMONIAL #7 */}
                  <div className="review-1">
                    {/* Quote Icon */}
                    <div className="review-1-ico ico-25">
                      <span className="flaticon-left-quote" />
                    </div>
                    {/* Text */}
                    <div className="review-1-txt">
                      {/* Text */}
                      <p className="p-lg">
                        Augue egestas diam tempus volutpat egestas augue in
                        cubilia laoreet magna suscipit luctus dolor and blandit
                        vitae purus diam tempus an aliquet porta rutrum gestas
                      </p>
                      {/* Testimonial Author */}
                      <div className="author-data clearfix">
                        {/* Testimonial Avatar */}
                        <div className="review-avatar">
                          <img
                            src="/images/review-author-7.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl">Mike Harris</h6>
                          <p className="p-md">Graphic Designer</p>
                          {/* Rating */}
                          <div className="review-rating ico-15 yellow-color">
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-half-empty" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Testimonial Author */}
                    </div>{" "}
                    {/* End Text */}
                  </div>{" "}
                  {/* END TESTIMONIAL #7 */}
                  {/* TESTIMONIAL #8 */}
                  <div className="review-1">
                    {/* Quote Icon */}
                    <div className="review-1-ico ico-25">
                      <span className="flaticon-left-quote" />
                    </div>
                    {/* Text */}
                    <div className="review-1-txt">
                      {/* Text */}
                      <p className="p-lg">
                        Augue at vitae purus tempus egestas volutpat augue undo
                        cubilia laoreet magna suscipit luctus dolor blandit at
                        purus tempus feugiat impedit
                      </p>
                      {/* Testimonial Author */}
                      <div className="author-data clearfix">
                        {/* Testimonial Avatar */}
                        <div className="review-avatar">
                          <img
                            src="/images/review-author-8.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl">Evelyn Martinez</h6>
                          <p className="p-md">WordPress Consultant</p>
                          {/* Rating */}
                          <div className="review-rating ico-15 yellow-color">
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-1" />
                            <span className="flaticon-star-half-empty" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* End Testimonial Author */}
                    </div>{" "}
                    {/* End Text */}
                  </div>{" "}
                  {/* END TESTIMONIAL #8 */}
                </div>
              </div>
            </div>{" "}
            {/* END TESTIMONIALS CONTENT */}
          </div>{" "}
          {/* End container */}
        </section>{" "}
        {/* END TESTIMONIALS-1 */}
        {/* CONTENT-6
			============================================= */}
        <section
          id="content-6"
          className="content-6 pb-60 content-section division"
        >
          <div className="container">
            <div className="row d-flex align-items-center">
              {/* TEXT BLOCK */}
              <div className="col-md-6 col-lg-5">
                <div className="txt-block left-column wow fadeInRight">
                  {/* Title */}
                  <h2 className="h2-xs">No collection of user data. No Ads</h2>
                  {/* Text */}
                  <p className="p-lg">
                    Aliqum mullam blandit tempor sapien gravida at donec ipsum
                    porta justo. Velna vitae auctor and congue magna impedit
                    luctus dolor volute
                  </p>
                </div>
              </div>
              {/* IMAGE BLOCK */}
              <div className="col-md-6 col-lg-7">
                <div className="img-block right-column wow fadeInLeft">
                  <img
                    className="img-fluid"
                    src="/images/img-20.png"
                    alt="content-image"
                  />
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End container */}
        </section>{" "}
        {/* END CONTENT-6 */}
        {/* CONTENT-9
			============================================= */}
        <section
          id="content-9"
          className="content-9 bg-01 pt-100 content-section division"
        >
          <div className="container white-color">
            {/* SECTION TITLE */}
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8">
                <div className="section-title title-02 mb-60">
                  <h2 className="h2-xs">
                    Discover powerful features to boost your productivity
                  </h2>
                </div>
              </div>
            </div>
            {/* IMAGE BLOCK */}
            <div className="row">
              <div className="col">
                <div className="content-9-img video-preview wow fadeInUp">
                  {/* Play Icon */}
                  <a
                    className="video-popup1"
                    href="https://www.youtube.com/embed/SZEflIVnhH8"
                  >
                    <div className="video-btn video-btn-xl bg-orange-red ico-90">
                      <div className="video-block-wrapper">
                        <span className="flaticon-play-button" />
                      </div>
                    </div>
                  </a>
                  {/* Preview Image */}
                  <img
                    className="img-fluid"
                    src="/images/dashboard-07.png"
                    alt="video-preview"
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          {/* End container */}
        </section>{" "}
        {/* END CONTENT-9 */}
        {/* STATISTIC-2
			============================================= */}
        <section
          id="statistic-2"
          className="wide-100 statistic-section division"
        >
          <div className="container">
            <div className="row d-flex align-items-center">
              {/* TEXT BLOCK */}
              <div className="col-lg-6">
                <div className="txt-block right-column wow fadeInLeft">
                  <h3 className="h3-xs">
                    More than 65,000 users around the world are already using
                    Signet actively
                  </h3>
                </div>
              </div>
              {/* STATISTIC BLOCK #1 */}
              <div className="col-sm-5 col-md-4 col-lg-3 offset-sm-1 offset-md-2 offset-lg-1">
                <div className="statistic-block wow fadeInUp">
                  {/* Text */}
                  <h2 className="h2-title-xs statistic-number">
                    <span className="count-element">65</span>K
                  </h2>
                  <p className="p-lg mt-20">
                    Active downloads <br /> from the community
                  </p>
                </div>
              </div>
              {/* STATISTIC BLOCK #2 */}
              <div className="col-sm-5 col-md-4 col-lg-2">
                <div className="statistic-block wow fadeInUp">
                  {/* Text */}
                  <h2 className="h2-title-xs statistic-number">
                    <span className="count-element">4</span>.
                    <span className="count-element">86</span>
                  </h2>
                  {/* Rating */}
                  <div className="txt-block-rating ico-15 yellow-color">
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-half-empty" />
                  </div>
                  <p className="p-lg txt-400">8,376 Rating</p>
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End container */}
        </section>{" "}
        {/* END STATISTIC-2 */}
        {/* DIVIDER LINE */}
        <hr className="divider" />
        {/* FAQs-2
			============================================= */}
        <section id="faqs-2" className="wide-60 faqs-section division">
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="section-title title-01 mb-80">
                  {/* Title */}
                  <h2 className="h2-md">Got Questions? Look Here</h2>
                  {/* Text */}
                  <p className="p-xl">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis a libero tempus, blandit and cursus varius and
                    magnis sapien
                  </p>
                </div>
              </div>
            </div>
            {/* FAQs-2 QUESTIONS */}
            <div className="faqs-2-questions">
              <div className="row row-cols-1 row-cols-lg-2">
                {/* QUESTIONS HOLDER */}
                <div className="col">
                  <div className="questions-holder pr-15">
                    {/* QUESTION #1 */}
                    <div className="question wow fadeInUp">
                      {/* Question */}
                      <h5 className="h5-md">
                        Can I see Signet in action before purchasing?
                      </h5>
                      {/* Answer */}
                      <p className="p-lg">
                        Etiam amet mauris suscipit in odio integer congue metus
                        vitae arcu mollis blandit ultrice ligula egestas and
                        magna suscipit lectus magna suscipit luctus blandit
                        vitae
                      </p>
                    </div>
                    {/* QUESTION #2 */}
                    <div className="question wow fadeInUp">
                      {/* Question */}
                      <h5 className="h5-md">
                        What are the requirements for using Signet?
                      </h5>
                      {/* Answer */}
                      <p className="p-lg">
                        An enim nullam tempor sapien gravida a donec ipsum enim
                        an porta justo integer at velna vitae auctor integer
                        congue undo magna at pretium purus pretium
                      </p>
                    </div>
                    {/* QUESTION #3 */}
                    <div className="question wow fadeInUp">
                      {/* Question */}
                      <h5 className="h5-md">
                        Can I use Signet on different devices?
                      </h5>
                      {/* Answer */}
                      <ul className="simple-list">
                        <li className="list-item">
                          <p className="p-lg">
                            Fringilla risus, luctus mauris orci auctor purus
                            ligula euismod pretium purus pretium rutrum tempor
                            sapien
                          </p>
                        </li>
                        <li className="list-item">
                          <p className="p-lg">
                            Nemo ipsam egestas volute turpis dolores ut aliquam
                            quaerat sodales sapien undo pretium a purus
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
                {/* END QUESTIONS HOLDER */}
                {/* QUESTIONS HOLDER */}
                <div className="col">
                  <div className="questions-holder pl-15">
                    {/* QUESTION #4 */}
                    <div className="question wow fadeInUp">
                      {/* Question */}
                      <h5 className="h5-md">Do you have a free trial?</h5>
                      {/* Answer */}
                      <p className="p-lg">
                        Cubilia laoreet augue egestas and luctus donec curabite
                        diam vitae dapibus libero and quisque gravida donec and
                        neque. Blandit justo aliquam molestie nunc sapien
                      </p>
                    </div>
                    {/* QUESTION #5 */}
                    <div className="question wow fadeInUp">
                      {/* Question */}
                      <h5 className="h5-md">
                        How does Signet handle my privacy?
                      </h5>
                      {/* Answer */}
                      <p className="p-lg">
                        Etiam amet mauris suscipit sit amet in odio. Integer
                        congue leo metus. Vitae arcu mollis blandit ultrice
                        ligula
                      </p>
                      {/* Answer */}
                      <p className="p-lg">
                        An enim nullam tempor sapien gravida donec congue leo
                        metus. Vitae arcu mollis blandit integer at velna
                      </p>
                    </div>
                    {/* QUESTION #6 */}
                    <div className="question wow fadeInUp">
                      {/* Question */}
                      <h5 className="h5-md">I have an issue with my account</h5>
                      {/* Answer */}
                      <ul className="simple-list">
                        <li className="list-item">
                          <p className="p-lg">
                            Fringilla risus, luctus mauris orci auctor purus
                          </p>
                        </li>
                        <li className="list-item">
                          <p className="p-lg">
                            Quaerat sodales sapien euismod blandit purus and
                            ipsum primis in cubilia laoreet augue luctus
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
                {/* END QUESTIONS HOLDER */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* END FAQs-2 QUESTIONS */}
            {/* MORE QUESTIONS BUTTON */}
            <div className="row">
              <div className="col">
                <div className="more-questions">
                  <h5 className="h5-sm">
                    Have more questions?{" "}
                    <a href="contacts.html">Ask your question here</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* End container */}
        </section>{" "}
        {/* END FAQs-2 */}
        {/* CONTENT-4
			============================================= */}
        <section id="content-4" className="content-4 pt-80 content-section">
          <div className="bg-inner bg-whitesmoke-gradient division">
            <div className="container">
              <div className="row d-flex align-items-center">
                {/* IMAGE BLOCK */}
                <div className="col-md-5 col-lg-6 order-end order-md-2">
                  <div className="content-4-img left-column wow fadeInRight">
                    <img
                      className="img-fluid"
                      src="/images/img-01.png"
                      alt="content-image"
                    />
                  </div>
                </div>
                {/* TEXT BLOCK */}
                <div className="col-md-7 col-lg-6 order-first order-md-2">
                  <div className="txt-block right-column wow fadeInLeft">
                    {/* Title */}
                    <h2 className="h2-xs">
                      Unlimited calling, texting and picture messaging
                    </h2>
                    {/* Text */}
                    <p className="p-lg">
                      Quaerat sodales sapien euismod blandit at vitae ipsum
                      primis undo and cubilia laoreet augue and luctus magna
                      dolor luctus at egestas sapien vitae nemo egestas
                    </p>
                    {/* Buttons Group */}
                    <div className="btns-group mb-30">
                      <a
                        href="download.html"
                        className="btn btn-orange-red tra-orange-red-hover mr-15"
                      >
                        Let's Get Started
                      </a>
                      <a
                        href="pricing.html"
                        className="btn btn-tra-grey tra-orange-red-hover"
                      >
                        View Pricing
                      </a>
                    </div>
                    {/* Advantages List */}
                    <ul className="advantages clearfix">
                      <li className="first-li">
                        <p>Free 14 days trial</p>
                      </li>
                      <li>
                        <p>Exclusive Support</p>
                      </li>
                      <li className="last-li">
                        <p>No Fees</p>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
                {/* END CONTENT TXT */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </div>{" "}
          {/* End Inner Background */}
        </section>{" "}
        {/* END CONTENT-4 */}
        {/* FOOTER-1
			============================================= */}
        <footer id="footer-1" className="footer division">
          <div className="container">
            {/* FOOTER CONTENT */}
            <div className="row">
              {/* FOOTER INFO */}
              <div className="col-lg-4">
                <div className="footer-info mb-40">
                  {/* Footer Logo */}
                  <img
                    className="footer-logo mb-25"
                    src="/images/logo_dark.svg"
                    alt="footer-logo"
                  />
                  {/* Text */}
                  <p className="p-md">
                    Aliquam nullam tempor sapien donec and gravida congue an
                    ipsum porta justo velna auctor magna and laoreet augue an
                    auctor gravida donec
                  </p>
                </div>
              </div>
              {/* FOOTER LINKS */}
              <div className="col-sm-6 col-md-3 col-lg-2">
                <div className="footer-links mb-40">
                  {/* Title */}
                  <h6 className="h6-xl">Company</h6>
                  {/* Footer Links */}
                  <ul className="foo-links text-secondary clearfix">
                    <li>
                      <p className="p-md">
                        <a href="#">About Us</a>
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        <a href="#">Careers</a>
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        <a href="#">Press &amp; Media</a>
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        <a href="#">Contact Us</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* FOOTER LINKS */}
              <div className="col-sm-6 col-md-3 col-lg-2">
                <div className="footer-links mb-40">
                  {/* Title */}
                  <h6 className="h6-xl">Discover</h6>
                  {/* Footer List */}
                  <ul className="foo-links text-secondary clearfix">
                    <li>
                      <p className="p-md">
                        <a href="#">Our Blog</a>
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        <a href="#">Advertising</a>
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        <a href="#">Plans &amp; Pricing</a>
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        <a href="#">Testimonials</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* FOOTER LINKS */}
              <div className="col-sm-6 col-md-3 col-lg-2">
                <div className="footer-links mb-40">
                  {/* Title */}
                  <h6 className="h6-xl">Legal</h6>
                  {/* Footer List */}
                  <ul className="foo-links text-secondary clearfix">
                    <li>
                      <p className="p-md">
                        <a href="#">Terms of Use</a>
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        <a href="#">Privacy Policy</a>
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        <a href="#">Cookie Policy</a>
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        <a href="#">Site Map</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* FOOTER LINKS */}
              <div className="col-sm-6 col-md-3 col-lg-2">
                <div className="footer-links mb-40">
                  {/* Title */}
                  <h6 className="h6-xl">Support</h6>
                  {/* Footer Links */}
                  <ul className="foo-links text-secondary clearfix">
                    <li>
                      <p className="p-md">
                        <a href="#">FAQs</a>
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        <a href="#">Editor Help</a>
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        <a href="#">Community</a>
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        <a href="#">Live Chatting</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
            {/* END FOOTER CONTENT */}
            <hr />
            {/* BOTTOM FOOTER */}
            <div className="bottom-footer">
              <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
                {/* FOOTER COPYRIGHT */}
                <div className="col">
                  <div className="footer-copyright">
                    <p>© 2010 - 2021 Signet. All Rights Reserved</p>
                  </div>
                </div>
                {/* BOTTOM FOOTER LINKS */}
                <div className="col">
                  <ul className="bottom-footer-list text-secondary text-end">
                    <li className="first-li">
                      <p>
                        <a href="#">Facebook</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="#">Twitter</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="#">LinkedIn</a>
                      </p>
                    </li>
                    <li className="last-li">
                      <p>
                        <a href="#">Dribbble</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* BOTTOM FOOTER */}
          </div>
        </footer>{" "}
        {/* END FOOTER-1 */}
      </div>{" "}
      {/* END PAGE CONTENT */}
      {/* EXTERNAL SCRIPTS
		============================================= */}
      {/* Custom Script */}
      {/* Google Analytics: Change UA-XXXXX-X to be your site's ID. Go to http://www.google.com/analytics/ for more information. */}
      {/*
		
		*/}
    </>
  );
}
