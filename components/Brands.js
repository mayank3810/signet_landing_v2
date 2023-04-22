import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
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

  const media = {
    hello_ent: {
      link: "https://helloentrepreneurs.in/signet-tags-blockchain-nfc-powered-product-authentication-and-traceability-solution/",
      image: "/images/media/hello_ent.svg",
    },
    theprint: {
      link: "https://theprint.in/ani-press-releases/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform/1493849/",
      image: "/images/media/theprint.svg",
    },
    hindustan_times: {
      link: "https://www.hindustantimes.com/brand-stories/signet-tags-blockchain-nfc-powered-product-authentication-and-traceability-solution-101680514869607.html",
      image: "/images/media/hindustan_times.svg",
    },
    ani: {
      link: "https://www.aninews.in/news/business/business/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform20230403180150/",
      image: "/images/media/ani.svg",
    },
    lokmath: {
      link: "https://www.lokmattimes.com/business/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform/",
      image: "/images/media/lokmath.svg",
    },
    daily_hunt: {
      link: "https://m.dailyhunt.in/news/india/english/hello+entrepreneurs-epaper-dhc4bd36087cec49cd9f75d3d1f8df3a02/signet+tags+blockchain+nfc+powered+product+authentication+and+traceability+solution-newsid-dhc4bd36087cec49cd9f75d3d1f8df3a02_bd0253f0d22611edbab32912c19fa704?sm=Y",
      image: "/images/media/daily_hunt.svg",
    },
    zee5: {
      link: "https://www.zee5.com/articles/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform",
      image: "/images/media/zee5.svg",
    },
    bs: {
      link: "https://www.business-standard.com/content/press-releases-ani/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform-123040400013_1.html",
      image: "/images/media/bs.svg",
    },

    cambodian: {
      link: "https://www.cambodiantimes.com/news/273702608/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform",
      image: "/images/media/cambodian.svg",
    },
    washington: {
      link: "https://www.washingtondcdespatch.com/news/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform20230403180146/",
      image: "/images/media/washington.svg",
    },
    toronto: {
      link: "https://www.torontosuntimes.com/news/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform20230403180146/",
      image: "/images/media/toronto.svg",
    },
    east_coast: {
      link: "https://www.dubaicityreporter.com/news/signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform20230403180146/",
      image: "/images/media/east_coast.svg",
    },
    latestly: {
      link: "https://www.latestly.com/agency-news/business-news-signet-tags-launches-innovative-nfc-and-qr-code-based-customer-engagement-platform-5027656.html",
      image: "/images/media/latestly.svg",
    },
  };

  const [showMedia, setShowMedia] = useState([
    "hello_ent",
    "theprint",
    "hindustan_times",
    "ani",
    "lokmath",
    "daily_hunt",
    "zee5",
    "latestly",
    "bs",
    "cambodian",
    "washington",
    "toronto",
    "east_coast",
  ]);
  const router = useRouter();

  useEffect(() => {
    const routeBlackList = [];
    const isDisabled = routeBlackList.map((routeName) => {
      return;
    });

    if (router.pathname.includes("tamper-proof-seal") || router.pathname.includes("digital-hologram-seal")) {
      setShowMedia([
        "hello_ent",
        "bs",
        "cambodian",
        "washington",
        "toronto",
        "east_coast",
      ]);
    }
  }, [router.pathname]);

  return (
    <div id="brands-2" className=" brands-section division">
      <div className="container">
        {/* BRANDS TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="brands-title text-center mt-2 mb-2">As seen on</div>
          </div>
        </div>
        {/* BRANDS-2 WRAPPER */}
        <div className="brands-2-wrapper">
          <div className="row justify-content-md-center row-cols-2 row-cols-sm-3 row-cols-md-5">
            <OwlCarousel {...options}>
              {/* BRAND LOGO IMAGE */}

              {showMedia.map((mediaName) => (
                <div key={mediaName} className="brand-logo">
                  <Link href={media[mediaName].link} legacyBehavior passHref>
                    <a target="_blank">
                      <img
                        className="img-fluid"
                        src={media[mediaName].image}
                        alt="brand-logo"
                      />
                    </a>
                  </Link>
                </div>
              ))}
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
