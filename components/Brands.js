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
        items: 2,
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
        items: 4,
      },
      1200: {
        items: 5,
      },
      1400: {
        items: 5,
      },
    },
  };

  return (
    <div id="brands-2" className=" brands-section division">
      <div className="container">
        {/* BRANDS TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="brands-title text-center">
              <p className="p-xl">As Seen In</p>
            </div>
          </div>
        </div>
        {/* BRANDS-2 WRAPPER */}
        <div className="brands-2-wrapper">
          <div className="row justify-content-md-center row-cols-2 row-cols-sm-3 row-cols-md-5">
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
                      src="/images/media/hello_ent.svg"
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
                      src="/images/media/theprint.svg"
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
                      src="/images/media/hindustan_times.svg"
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
                      src="/images/media/ani.svg"
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
                      src="/images/media/lokmath.svg"
                      alt="brand-logo"
                    />
                  </a>
                </Link>
              </div>

              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <Link
                  href="https://m.dailyhunt.in/news/india/english/hello+entrepreneurs-epaper-dhc4bd36087cec49cd9f75d3d1f8df3a02/signet+tags+blockchain+nfc+powered+product+authentication+and+traceability+solution-newsid-dhc4bd36087cec49cd9f75d3d1f8df3a02_bd0253f0d22611edbab32912c19fa704?sm=Y"
                  legacyBehavior
                  passHref
                >
                  <a
                    target="_blank"
                    // href="https://www.lokmattimes.com/business/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform/"
                  >
                    <img
                      className="img-fluid"
                      src="/images/media/daily_hunt.svg"
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
                      src="/images/media/zee5.svg"
                      alt="brand-logo"
                    />
                  </a>
                </Link>
              </div>

              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <Link
                  href="https://www.business-standard.com/content/press-releases-ani/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform-123040400013_1.html"
                  legacyBehavior
                  passHref
                >
                  <a target="_blank">
                    <img
                      className="img-fluid"
                      src="/images/media/bs.svg"
                      alt="brand-logo"
                    />
                  </a>
                </Link>
              </div>

              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <Link
                  href="https://www.cambodiantimes.com/news/273702608/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform"
                  legacyBehavior
                  passHref
                >
                  <a target="_blank">
                    <img
                      className="img-fluid"
                      src="/images/media/cambodian.svg"
                      alt="brand-logo"
                    />
                  </a>
                </Link>
              </div>

              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <Link
                  href="https://www.washingtondcdespatch.com/news/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform20230403180146/"
                  legacyBehavior
                  passHref
                >
                  <a target="_blank">
                    <img
                      className="img-fluid"
                      src="/images/media/washington.svg"
                      alt="brand-logo"
                    />
                  </a>
                </Link>
              </div>

              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <Link
                  href="https://www.torontosuntimes.com/news/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform20230403180146/"
                  legacyBehavior
                  passHref
                >
                  <a target="_blank">
                    <img
                      className="img-fluid"
                      src="/images/media/toronto.svg"
                      alt="brand-logo"
                    />
                  </a>
                </Link>
              </div>

              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <Link
                  href="https://www.dubaicityreporter.com/news/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform20230403180146/"
                  legacyBehavior
                  passHref
                >
                  <a target="_blank">
                    <img
                      className="img-fluid"
                      src="/images/media/east_coast.svg"
                      alt="brand-logo"
                    />
                  </a>
                </Link>
              </div>

              <div className="brand-logo">
                <Link
                  href="https://www.latestly.com/agency-news/business-news-signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform-5027656.html"
                  legacyBehavior
                  passHref
                >
                  <a target="_blank">
                    <img
                      className="img-fluid"
                      src="/images/media/latestly.svg"
                      alt="brand-logo"
                    />
                  </a>
                </Link>
              </div>
            </OwlCarousel>
          </div>
        </div>{" "}
        {/* END BRANDS-2 WRAPPER */}
      </div>{" "}
      {/* End container */}
    </div>
  );
}

export default Brands;
