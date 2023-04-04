import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

function Brands() {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 3,
      },
    },
  };
  return (
    <div
      id="brands-1"
      className="bg-lightgrey pt-70 pb-5 brands-section division"
    >
      <div className="container pb-70">
        <div className="row ">
          <div className="col-3">
            <div className="review-4 m-0">
              <div className="review-4-txt">
                <h2>Media Mentions</h2>
              </div>
            </div>
          </div>
          <div className="col-9 d-flex align-items-center overflow-hidden">
            <div className="brands-carousel">
              <a href="" target="_blank">
                <OwlCarousel {...options}>
                  {/* BRAND LOGO IMAGE */}
                  <div className="brand-logo">
                    <Link
                      href="https://helloentrepreneurs.in/signet-tags-blockchain-nfc-powered-product-authentication-and-traceability-solution/"
                      legacyBehavior
                      passHref
                    >
                      <a
                        // href="https://helloentrepreneurs.in/signet-tags-blockchain-nfc-powered-product-authentication-and-traceability-solution/"
                        target="_blank"
                      >
                        <img
                          className="img-fluid"
                          src="/images/media/1.png"
                          alt="brand-logo"
                        />
                      </a>
                    </Link>
                  </div>
                  {/* BRAND LOGO IMAGE */}

                  <div className="brand-logo">
                    <Link
                      href="https://theprint.in/ani-press-releases/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform/1493849/"
                      legacyBehavior
                      passHref
                    >
                      <a
                        target="_blank"
                        // href="https://theprint.in/ani-press-releases/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform/1493849/"
                      >
                        <img
                          className="img-fluid"
                          src="/images/media/2.png"
                          alt="brand-logo"
                        />
                      </a>
                    </Link>
                  </div>
                  {/* BRAND LOGO IMAGE */}
                  <div className="brand-logo">
                    <Link
                      href="https://www.hindustantimes.com/brand-stories/signet-tags-blockchain-nfc-powered-product-authentication-and-traceability-solution-101680514869607.html"
                      legacyBehavior
                      passHref
                    >
                      <a
                        target="_blank"
                        // href="https://www.hindustantimes.com/brand-stories/signet-tags-blockchain-nfc-powered-product-authentication-and-traceability-solution-101680514869607.html"
                      >
                        <img
                          className="img-fluid"
                          src="/images/media/3.png"
                          alt="brand-logo"
                        />
                      </a>
                    </Link>
                  </div>
                  {/* BRAND LOGO IMAGE */}
                  <div className="brand-logo">
                    <Link
                      href="https://www.aninews.in/news/business/business/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform20230403180150/"
                      legacyBehavior
                      passHref
                    >
                      <a
                        target="_blank"
                        // href="https://www.aninews.in/news/business/business/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform20230403180150/"
                      >
                        <img
                          className="img-fluid"
                          src="/images/media/4.png"
                          alt="brand-logo"
                        />
                      </a>
                    </Link>
                  </div>
                  {/* BRAND LOGO IMAGE */}
                  <div className="brand-logo">
                    <Link
                      href="https://www.lokmattimes.com/business/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform/"
                      legacyBehavior
                      passHref
                    >
                      <a
                        target="_blank"
                        // href="https://www.lokmattimes.com/business/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform/"
                      >
                        <img
                          className="img-fluid"
                          src="/images/media/5.png"
                          alt="brand-logo"
                        />
                      </a>
                    </Link>
                  </div>
                  {/* BRAND LOGO IMAGE */}
                  <div className="brand-logo">
                    <Link
                      href="https://www.zee5.com/articles/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform"
                      legacyBehavior
                      passHref
                    >
                      <a
                        target="_blank"
                        // href="https://www.zee5.com/articles/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform"
                      >
                        <img
                          className="img-fluid"
                          src="/images/media/6.png"
                          alt="brand-logo"
                        />
                      </a>
                    </Link>
                  </div>
                </OwlCarousel>
              </a>
            </div>
          </div>
        </div>
        {/* Brands Carousel */} {/* End Brands Carousel */}
      </div>{" "}
      {/* End container */}
    </div>
  );
}

export default Brands;
