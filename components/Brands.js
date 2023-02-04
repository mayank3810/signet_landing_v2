import React from "react";
import dynamic from "next/dynamic";
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
    responsive: {
      0: {
        items: 3,
      },
      400: {
        items: 3,
      },
      600: {
        items: 4,
      },
      700: {
        items: 5,
      },
      1000: {
        items: 6,
      },
    },
  };
  return (
    <div
      id="brands-1"
      className="bg-lightgrey pt-70 pb-70 brands-section division"
    >
      <div className="container">
        {/* BRANDS TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="brands-title text-center">
              <p className="p-xl">
                Over 2000+ companies are already using OLMO every day.
              </p>
            </div>
          </div>
        </div>
        {/* Brands Carousel */}
        <div className="row">
          <div className="col text-center">
            <div className="brands-carousel">
              <OwlCarousel {...options}>
                {/* BRAND LOGO IMAGE */}
                <div className="brand-logo">
                  <img
                    className="img-fluid"
                    src="/images/brand-1.png"
                    alt="brand-logo"
                  />
                </div>
                {/* BRAND LOGO IMAGE */}
                <div className="brand-logo">
                  <img
                    className="img-fluid"
                    src="/images/brand-2.png"
                    alt="brand-logo"
                  />
                </div>
                {/* BRAND LOGO IMAGE */}
                <div className="brand-logo">
                  <img
                    className="img-fluid"
                    src="/images/brand-3.png"
                    alt="brand-logo"
                  />
                </div>
                {/* BRAND LOGO IMAGE */}
                <div className="brand-logo">
                  <img
                    className="img-fluid"
                    src="/images/brand-4.png"
                    alt="brand-logo"
                  />
                </div>
                {/* BRAND LOGO IMAGE */}
                <div className="brand-logo">
                  <img
                    className="img-fluid"
                    src="/images/brand-5.png"
                    alt="brand-logo"
                  />
                </div>
                {/* BRAND LOGO IMAGE */}
                <div className="brand-logo">
                  <img
                    className="img-fluid"
                    src="/images/brand-6.png"
                    alt="brand-logo"
                  />
                </div>
                {/* BRAND LOGO IMAGE */}
                <div className="brand-logo">
                  <img
                    className="img-fluid"
                    src="/images/brand-7.png"
                    alt="brand-logo"
                  />
                </div>
                {/* BRAND LOGO IMAGE */}
                <div className="brand-logo">
                  <img
                    className="img-fluid"
                    src="/images/brand-8.png"
                    alt="brand-logo"
                  />
                </div>
                {/* BRAND LOGO IMAGE */}
                <div className="brand-logo">
                  <img
                    className="img-fluid"
                    src="/images/brand-9.png"
                    alt="brand-logo"
                  />
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>{" "}
        {/* End Brands Carousel */}
      </div>{" "}
      {/* End container */}
    </div>
  );
}

export default Brands;
