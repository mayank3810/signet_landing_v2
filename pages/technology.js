import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import React from "react";

function Technology() {
  return (
    <>
      <Header scroll={true} />
      <>
        <section id="about-2" className="about-section">
          <div className="bg-inner bg-lightgrey inner-page-hero division">
            <div className="container">
              {/* ABOUT-2 TITLE */}
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                  <div className="about-2-title">
                    {/* Title */}
                    <h2 className="h2-xl">
                      Creativity and quality is our destination
                    </h2>
                    {/* Text */}
                    <p className="p-xl">
                      Quaerat sodales sapien and euismod blandit vitae ipsum
                      primis cubilia undo laoreet augue luctus magna and dolor
                      luctus egestas sapien
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* END ABOUT-2 TITLE */}
              {/* ABOUT-2 IMAGES */}
              <div className="about-2-images">
                <div className="row row-cols-1 row-cols-md-2">
                  {/* IMAGES-1 */}
                  <div className="col col-md-5">
                    <img
                      className="img-fluid"
                      src="images/about-1-img.jpg"
                      alt="about-image"
                    />
                  </div>
                  {/* IMAGES-2 */}
                  <div className="col col-md-7">
                    <img
                      className="img-fluid"
                      src="images/about-2-img.jpg"
                      alt="about-image"
                    />
                  </div>
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END ABOUT-2 IMAGES */}
            </div>{" "}
            {/* End container */}
          </div>{" "}
          {/* End bg-inner */}
        </section>{" "}
        {/* END ABOUT-2 */}
        {/* FEATURES-4
			============================================= */}
        <section id="features-4" className="wide-60 features-section division">
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
            {/* FEATURES-4 WRAPPER */}
            <div className="fbox-4-wrapper fbox-4-wide">
              <div className="row row-cols-1 row-cols-md-2">
                {/* FEATURE BOX #1 */}
                <div className="col">
                  <div className="fbox-4 pr-25 mb-40 wow fadeInUp">
                    {/* Icon */}
                    <div className="fbox-ico">
                      <div className="ico-65">
                        <span className="flaticon-line-graph-1" />
                      </div>
                    </div>
                    {/* Text */}
                    <div className="fbox-txt">
                      {/* Title */}
                      <h5 className="h5-md">Market Research</h5>
                      {/* Text */}
                      <p className="p-lg">
                        Porta semper lacus cursus feugiat primis ultrice ligula
                        risus auctor tempus feugiat impedit undo auctor felis
                        augue mauris aoreet tempor
                      </p>
                    </div>
                  </div>
                </div>
                {/* FEATURE BOX #2 */}
                <div className="col">
                  <div className="fbox-4 pl-25 mb-40 wow fadeInUp">
                    {/* Icon */}
                    <div className="fbox-ico">
                      <div className="ico-65">
                        <span className="flaticon-idea" />
                      </div>
                    </div>
                    {/* Text */}
                    <div className="fbox-txt">
                      {/* Title */}
                      <h5 className="h5-md">User Experience</h5>
                      {/* Text */}
                      <p className="p-lg">
                        Porta semper lacus cursus feugiat primis ultrice ligula
                        risus auctor tempus feugiat impedit undo auctor felis
                        augue mauris aoreet tempor
                      </p>
                    </div>
                  </div>
                </div>
                {/* FEATURE BOX #3 */}
                <div className="col">
                  <div className="fbox-4 pr-25 mb-40 wow fadeInUp">
                    {/* Icon */}
                    <div className="fbox-ico">
                      <div className="ico-65">
                        <span className="flaticon-algorithm" />
                      </div>
                    </div>
                    {/* Text */}
                    <div className="fbox-txt">
                      {/* Title */}
                      <h5 className="h5-md">Web Development</h5>
                      {/* Text */}
                      <p className="p-lg">
                        Porta semper lacus cursus feugiat primis ultrice ligula
                        risus auctor tempus feugiat impedit undo auctor felis
                        augue mauris aoreet tempor
                      </p>
                    </div>
                  </div>
                </div>
                {/* FEATURE BOX #4 */}
                <div className="col">
                  <div className="fbox-4 pl-25 mb-40 wow fadeInUp">
                    {/* Icon */}
                    <div className="fbox-ico">
                      <div className="ico-65">
                        <span className="flaticon-increase-1" />
                      </div>
                    </div>
                    {/* Text */}
                    <div className="fbox-txt">
                      {/* Title */}
                      <h5 className="h5-md">Digital Marketing</h5>
                      {/* Text */}
                      <p className="p-lg">
                        Porta semper lacus cursus feugiat primis ultrice ligula
                        risus auctor tempus feugiat impedit undo auctor felis
                        augue mauris aoreet tempor
                      </p>
                    </div>
                  </div>
                </div>
                {/* FEATURE BOX #5 */}
                <div className="col">
                  <div className="fbox-4 pr-25 mb-40 wow fadeInUp">
                    {/* Icon */}
                    <div className="fbox-ico">
                      <div className="ico-65">
                        <span className="flaticon-reward" />
                      </div>
                    </div>
                    {/* Text */}
                    <div className="fbox-txt">
                      {/* Title */}
                      <h5 className="h5-md">Brand Design Identity</h5>
                      {/* Text */}
                      <p className="p-lg">
                        Porta semper lacus cursus feugiat primis ultrice ligula
                        risus auctor tempus feugiat impedit undo auctor felis
                        augue mauris aoreet tempor
                      </p>
                    </div>
                  </div>
                </div>
                {/* FEATURE BOX #6 */}
                <div className="col">
                  <div className="fbox-4 pl-25 mb-40 wow fadeInUp">
                    {/* Icon */}
                    <div className="fbox-ico">
                      <div className="ico-65">
                        <span className="flaticon-seo" />
                      </div>
                    </div>
                    {/* Text */}
                    <div className="fbox-txt">
                      {/* Title */}
                      <h5 className="h5-md">SEO &amp; SMM Services</h5>
                      {/* Text */}
                      <p className="p-lg">
                        Porta semper lacus cursus feugiat primis ultrice ligula
                        risus auctor tempus feugiat impedit undo auctor felis
                        augue mauris aoreet tempor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* END FEATURES-4 WRAPPER */}
          </div>{" "}
          {/* End container */}
        </section>{" "}
        {/* END FEATURES-4 */}
        {/* DIVIDER LINE */}
        <hr className="divider" />
        {/* STATISTIC-4
			============================================= */}
        <div
          id="statistic-4"
          className="pt-70 pb-70 statistic-section division"
        >
          <div className="container">
            {/* STATISTIC-4 WRAPPER */}
            <div className="statistic-4-wrapper">
              <div className="row justify-content-md-center row-cols-1 row-cols-md-3">
                {/* STATISTIC BLOCK #1 */}
                <div id="sb-4-1" className="col">
                  <div className="statistic-block pr-15 d-flex align-items-center wow fadeInUp">
                    {/* Digit */}
                    <div className="statistic-block-digit">
                      <h2 className="h2-lg statistic-number">
                        <span className="count-element">65</span>K
                      </h2>
                    </div>
                    {/* Text */}
                    <div className="statistic-block-txt grey-color">
                      <h6 className="h6-md">
                        Porta justo integer and velna vitae auctor
                      </h6>
                    </div>
                  </div>
                </div>
                {/* STATISTIC BLOCK #2 */}
                <div id="sb-4-2" className="col">
                  <div className="statistic-block pr-15 d-flex align-items-center wow fadeInUp">
                    {/* Digit */}
                    <div className="statistic-block-digit">
                      <h2 className="h2-lg statistic-number">
                        <span className="count-element">54</span>%
                      </h2>
                    </div>
                    {/* Text */}
                    <div className="statistic-block-txt grey-color">
                      <h6 className="h6-md">
                        Ligula magna suscipit vitae and rutrum
                      </h6>
                    </div>
                  </div>
                </div>
                {/* STATISTIC BLOCK #3 */}
                <div id="sb-4-3" className="col">
                  <div className="statistic-block pr-15 d-flex align-items-center wow fadeInUp">
                    {/* Digit */}
                    <div className="statistic-block-digit">
                      <h2 className="h2-lg statistic-number">
                        <span className="count-element">4</span>.
                        <span className="count-element">86</span>
                      </h2>
                    </div>
                    {/* Text */}
                    <div className="statistic-block-txt grey-color">
                      <h6 className="h6-md">
                        Sagittis congue augue egestas an egestas
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* END STATISTIC-4 WRAPPER */}
          </div>{" "}
          {/* End container */}
        </div>{" "}
        {/* END STATISTIC-4 */}
        {/* DIVIDER LINE */}
        <hr className="divider" />
        {/* CONTENT-3
			============================================= */}
        <section
          id="content-3"
          className="content-3 wide-60 content-section division"
        >
          <div className="container">
            {/* TOP ROW */}
            <div className="top-row pb-50">
              <div className="row d-flex align-items-center">
                {/* TEXT BLOCK */}
                <div className="col-md-7 col-lg-6 order-last order-lg-2">
                  <div className="txt-block left-column wow fadeInRight">
                    {/* Section ID */}
                    <span className="section-id txt-upcase">
                      Digital Strategy
                    </span>
                    {/* Title */}
                    <h2 className="h2-xs">
                      Start your online business with OLMO
                    </h2>
                    {/* Text */}
                    <p className="p-lg">
                      Quaerat sodales sapien euismod blandit at vitae ipsum
                      primis undo and cubilia laoreet augue and luctus magna
                      dolor luctus at egestas sapien vitae nemo egestas
                    </p>
                    {/* Text */}
                    <p className="p-lg">
                      Quaerat sodales sapien euismod blandit purus a purus ipsum
                      primis in cubilia laoreet augue luctus magna dolor luctus
                      and egestas sapien egestas vitae nemo volute
                    </p>
                  </div>
                </div>{" "}
                {/* END TEXT BLOCK */}
                {/* IMAGE BLOCK */}
                <div className="col-md-5 col-lg-6 order-first order-md-2">
                  <div className="img-block left-column wow fadeInLeft">
                    <img
                      className="img-fluid"
                      src="images/img-16.png"
                      alt="content-image"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* END TOP ROW */}
            {/* BOTTOM ROW */}
            <div className="bottom-row">
              <div className="row d-flex align-items-center">
                {/* IMAGE BLOCK */}
                <div className="col-md-5 col-lg-6">
                  <div className="img-block left-column wow fadeInRight">
                    <img
                      className="img-fluid"
                      src="images/img-17.png"
                      alt="video-preview"
                    />
                  </div>
                </div>
                {/* TEXT BLOCK */}
                <div className="col-md-7 col-lg-6">
                  <div className="txt-block right-column wow fadeInLeft">
                    {/* TEXT BOX */}
                    <div className="txt-box mb-25">
                      {/* Title */}
                      <h5 className="h5-lg">Advanced Analytics Review</h5>
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
                      <h5 className="h5-lg">
                        Search Engine Optimization (SEO)
                      </h5>
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
            {/* END BOTTOM ROW */}
          </div>{" "}
          {/* End container */}
        </section>{" "}
        {/* END CONTENT-3 */}
        {/* FEATURES-8
			============================================= */}
        <section id="features-8" className="pb-60 features-section division">
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="section-title title-01 mb-70">
                  {/* Title */}
                  <h2 className="h2-md">What Makes OLMO Different</h2>
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
                        src="images/img-21.png"
                        alt="feature-icon"
                      />
                    </div>
                    {/* Title */}
                    <h5 className="h5-md">One-stop Solutions</h5>
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
                        src="images/img-24.png"
                        alt="feature-icon"
                      />
                    </div>
                    {/* Title */}
                    <h5 className="h5-md">Online Marketing</h5>
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
                        src="images/img-25.png"
                        alt="feature-icon"
                      />
                    </div>
                    {/* Title */}
                    <h5 className="h5-md">Design &amp; Development</h5>
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
                    {/* Section ID */}
                    <span className="section-id txt-upcase">
                      Online Marketing
                    </span>
                    {/* Title */}
                    <h2 className="h2-xs">
                      Committed to top quality and results
                    </h2>
                    {/* List */}
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-lg">
                          Fringilla risus, luctus mauris auctor euismod an
                          iaculis luctus magna purus pretium ligula purus and
                          quaerat sapien rutrum mauris auctor
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">
                          Quaerat sodales sapien euismod purus blandit
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">
                          Nemo ipsam egestas volute turpis dolores ligula and
                          aliquam quaerat at sodales sapien purus
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
                {/* END TEXT BLOCK */}
                {/* IMAGE BLOCK */}
                <div className="col-md-5 col-lg-6">
                  <div className="img-block right-column wow fadeInLeft">
                    <img
                      className="img-fluid"
                      src="images/img-15.png"
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
        {/* TEAM-1
			============================================= */}
        <section id="team-1" className="wide-50 team-section division">
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="section-title title-01 mb-80">
                  {/* Title */}
                  <h2 className="h2-md">One Team Many Talents</h2>
                  {/* Text */}
                  <p className="p-xl">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis a libero tempus, blandit and cursus varius and
                    magnis sapien
                  </p>
                </div>
              </div>
            </div>
            {/* TEAM MEMBERS HOLDER */}
            <div className="team-members-wrapper text-center">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {/* TEAM MEMBER #1 */}
                <div className="col">
                  <div className="team-member wow fadeInUp">
                    {/* Team Member Photo */}
                    <div className="team-member-photo">
                      <img
                        className="img-fluid"
                        src="images/team-1.jpg"
                        alt="team-member-foto"
                      />
                    </div>
                    {/* Team Member Data */}
                    <div className="team-member-data">
                      <h5 className="h5-sm">Jonathan Barnes</h5>
                      <p className="p-lg">Founder and CEO</p>
                      <p className="p-lg tm-social">
                        <a href="#" className="text-secondary">
                          @jonatanbarnes
                        </a>
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* END TEAM MEMBER #1 */}
                {/* TEAM MEMBER #2 */}
                <div className="col">
                  <div className="team-member wow fadeInUp">
                    {/* Team Member Photo */}
                    <div className="team-member-photo">
                      <img
                        className="img-fluid"
                        src="images/team-2.jpg"
                        alt="team-member-foto"
                      />
                    </div>
                    {/* Team Member Data */}
                    <div className="team-member-data">
                      <h5 className="h5-sm">Jamie Bartlett</h5>
                      <p className="p-lg">Software Engineer</p>
                      <p className="p-lg tm-social text-secondary">
                        <a href="#">@jamiebartlett</a>
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* END TEAM MEMBER #2 */}
                {/* TEAM MEMBER #3 */}
                <div className="col">
                  <div className="team-member wow fadeInUp">
                    {/* Team Member Photo */}
                    <div className="team-member-photo">
                      <img
                        className="img-fluid"
                        src="images/team-3.jpg"
                        alt="team-member-foto"
                      />
                    </div>
                    {/* Team Member Data */}
                    <div className="team-member-data">
                      <h5 className="h5-sm">Matthew Anderson</h5>
                      <p className="p-lg">Software Engineer</p>
                      <p className="p-lg tm-social text-secondary">
                        <a href="#">@matthewanderson</a>
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* END TEAM MEMBER #3 */}
                {/* TEAM MEMBER #4 */}
                <div className="col">
                  <div className="team-member wow fadeInUp">
                    {/* Team Member Photo */}
                    <div className="team-member-photo">
                      <img
                        className="img-fluid"
                        src="images/team-4.jpg"
                        alt="team-member-foto"
                      />
                    </div>
                    {/* Team Member Data */}
                    <div className="team-member-data">
                      <h5 className="h5-sm">Megan Coleman</h5>
                      <p className="p-lg">UX / UI Designer</p>
                      <p className="p-lg tm-social text-secondary">
                        <a href="#">@megancoleman</a>
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* END TEAM MEMBER #4 */}
                {/* TEAM MEMBER #5 */}
                <div className="col">
                  <div className="team-member wow fadeInUp">
                    {/* Team Member Photo */}
                    <div className="team-member-photo">
                      <img
                        className="img-fluid"
                        src="images/team-5.jpg"
                        alt="team-member-foto"
                      />
                    </div>
                    {/* Team Member Data */}
                    <div className="team-member-data">
                      <h5 className="h5-sm">Charlotte Johnson</h5>
                      <p className="p-lg">Quality Assurance</p>
                      <p className="p-lg tm-social text-secondary">
                        <a href="#">@charlottejohnson</a>
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* END TEAM MEMBER #5 */}
                {/* TEAM MEMBER #6 */}
                <div className="col">
                  <div className="team-member wow fadeInUp">
                    {/* Team Member Photo */}
                    <div className="team-member-photo">
                      <img
                        className="img-fluid"
                        src="images/team-6.jpg"
                        alt="team-member-foto"
                      />
                    </div>
                    {/* Team Member Data */}
                    <div className="team-member-data">
                      <h5 className="h5-sm">Olivia Steiner</h5>
                      <p className="p-lg">Head of Marketing</p>
                      <p className="p-lg tm-social text-secondary">
                        <a href="#">@oliviasteiner</a>
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* END TEAM MEMBER #6 */}
                {/* TEAM MEMBER #7 */}
                <div className="col">
                  <div className="team-member wow fadeInUp">
                    {/* Team Member Photo */}
                    <div className="team-member-photo">
                      <img
                        className="img-fluid"
                        src="images/team-7.jpg"
                        alt="team-member-foto"
                      />
                    </div>
                    {/* Team Member Data */}
                    <div className="team-member-data">
                      <h5 className="h5-sm">Mark Brayton</h5>
                      <p className="p-lg">Customer Care</p>
                      <p className="p-lg tm-social text-secondary">
                        <a href="#">@markbrayton</a>
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* END TEAM MEMBER #7 */}
                {/* TEAM MEMBER #8 */}
                <div className="col">
                  <div className="team-member wow fadeInUp">
                    {/* Team Member Photo */}
                    <div className="team-member-photo">
                      <img
                        className="img-fluid"
                        src="images/team-8.jpg"
                        alt="team-member-foto"
                      />
                    </div>
                    {/* Team Member Data */}
                    <div className="team-member-data">
                      <h5 className="h5-sm">Grow With Us</h5>
                      <p className="p-lg text-secondary">
                        <a href="mailto:youremail@mail.com">
                          hireme@domain.com
                        </a>
                      </p>
                      <p className="p-lg tm-social text-secondary">
                        <a href="mailto:youremail@mail.com">
                          hireme1@domain.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* END TEAM MEMBER #8 */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* TEAM MEMBERS HOLDER */}
          </div>{" "}
          {/* End container */}
        </section>{" "}
        {/* END TEAM-1 */}
        <Testimonials />
        {/* DIVIDER LINE */}
        <hr className="divider" />
        {/* BRANDS-2
			============================================= */}
        <div id="brands-2" className="wide-70 brands-section division">
          <div className="container">
            {/* BRANDS TITLE */}
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="brands-title text-center">
                  <p className="p-xl">
                    Over 2000+ companies are already using OLMO every day
                  </p>
                </div>
              </div>
            </div>
            {/* BRANDS-2 WRAPPER */}
            <div className="brands-2-wrapper">
              <div className="row justify-content-md-center row-cols-2 row-cols-sm-3 row-cols-md-5">
                {/* BRAND LOGO IMAGE */}
                <div className="col">
                  <div className="brand-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="images/brand-1.png"
                        alt="brand-logo"
                      />
                    </a>
                  </div>
                </div>
                {/* BRAND LOGO IMAGE */}
                <div className="col">
                  <div className="brand-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="images/brand-2.png"
                        alt="brand-logo"
                      />
                    </a>
                  </div>
                </div>
                {/* BRAND LOGO IMAGE */}
                <div className="col">
                  <div className="brand-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="images/brand-3.png"
                        alt="brand-logo"
                      />
                    </a>
                  </div>
                </div>
                {/* BRAND LOGO IMAGE */}
                <div className="col">
                  <div className="brand-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="images/brand-4.png"
                        alt="brand-logo"
                      />
                    </a>
                  </div>
                </div>
                {/* BRAND LOGO IMAGE */}
                <div className="col">
                  <div className="brand-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="images/brand-5.png"
                        alt="brand-logo"
                      />
                    </a>
                  </div>
                </div>
                {/* BRAND LOGO IMAGE */}
                <div className="col">
                  <div className="brand-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="images/brand-8.png"
                        alt="brand-logo"
                      />
                    </a>
                  </div>
                </div>
                {/* BRAND LOGO IMAGE */}
                <div className="col">
                  <div className="brand-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="images/brand-7.png"
                        alt="brand-logo"
                      />
                    </a>
                  </div>
                </div>
                {/* BRAND LOGO IMAGE */}
                <div className="col">
                  <div className="brand-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="images/brand-5.png"
                        alt="brand-logo"
                      />
                    </a>
                  </div>
                </div>
                {/* BRAND LOGO IMAGE */}
                <div className="col">
                  <div className="brand-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="images/brand-8.png"
                        alt="brand-logo"
                      />
                    </a>
                  </div>
                </div>
                {/* BRAND LOGO IMAGE */}
                <div className="col">
                  <div className="brand-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="images/brand-2.png"
                        alt="brand-logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* END BRANDS-2 WRAPPER */}
          </div>{" "}
          {/* End container */}
        </div>{" "}
        {/* END BRANDS-2 */}
        <CallToAction />
      </>
    </>
  );
}

export default Technology;
