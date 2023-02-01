import React from "react";

function Footer() {
  return (
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
              Signet Tags - Blockchain-based authenticity and Brand protection solution
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
                    <a href="#">Contact Us</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">Privacy Policy</a>
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
                    <a href="#">Plans &amp; Pricing</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">API & Resources</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER LINKS */}
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="footer-links mb-40">
              {/* Title */}
              <h6 className="h6-xl">Industries</h6>
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
              <h6 className="h6-xl">Links</h6>
              {/* Footer Links */}
              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="#">Request Demo</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">Free Trial</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">All Videos</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">Patent Status</a>
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
                <p>© 2023 Signet. All Rights Reserved</p>
              </div>
            </div>
            {/* BOTTOM FOOTER LINKS */}
            <div className="col">
              <ul className="bottom-footer-list text-secondary text-end">
                <li className="first-li">
                  <p>
                    <a href="#">Youtube</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Twitter</a>
                  </p>
                </li>
                <li className="last-li">
                  <p>
                    <a href="#">LinkedIn</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* BOTTOM FOOTER */}
      </div>
    </footer>
  );
}

export default Footer;
