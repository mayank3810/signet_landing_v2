import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Content4() {
	// const [containerRef, inContainerView] = useInView({ threshold: 0.2 });

	const [init, setInit] = useState(true);
	// useEffect(() => {
	//   if (!init && inContainerView) {
	//     setInit(true);
	//   }
	// }, [inContainerView]);

	return (
    <section
      // ref={containerRef}
      id="content-3"
      className="content-3 wide-60 content-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md">
                Empowering Business with new revenue opportunities
              </h2>
              {/* Text */}
              <p className="p-xl">
                At Signet Tags, we understand the challenges faced by modern
                businesses. Our cutting-edge solutions designed to revolutionize
                your revenue streams.
              </p>
            </div>
          </div>
        </div>
        {/* TOP ROW */}
        <div className="top-row pb-50">
          <div className="row d-flex align-items-center">
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div
                className={`duration-1.75 ${
                  init
                    ? "rel img-block left-column animate__animated animate__slideInUp"
                    : "rel img-block left-column animate__animated"
                }`}
                // style={{ animationDuration: '1.75s' }}
              >
                {/* <img className="img-fluid" src="/images/digital-experience.jpg" alt="content-image" /> */}
                <Image
                  className="img-fluid"
                  src="/images/digital-experience.jpg"
                  alt="Counterfeit Protection and Brand Security: Digital Hologram Seal with Blockchain Technology and NFC - Signet Tags"
                  width={600}
                  height={999}
                />
              </div>
            </div>
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div
                className={`duration-1.75 ${
                  init
                    ? "txt-block right-column left-column animate__animated animate__slideInUp"
                    : "txt-block right-column left-column animate__animated"
                }`}
                // style={{ animationDuration: '1.75s' }}
              >
                {/* TEXT BOX */}
                <div className="txt-box mb-20">
                  {/* Title */}
                  <h3 className="h3-font mb-4"></h3>
                  {/* Text */}
                  <p className="p-lg">
                    Customers can tap on the product to get updated information
                    about essential attributes such as ownership, warranty,
                    safety, recyclability, and value. This allows customers to
                    make informed decisions about the products they purchase and
                    use. By being able to see this information, customers can be
                    sure that they are making the best choice for them when it
                    comes to the products they buy.
                  </p>
                </div>
                {/* TEXT BOX */}
                <div className="txt-box">
                  {/* Title */}

                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Recover the lost revenue using our patented (pending)
                        anti counterfeiting technology.
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Build value for your brand and consumers by transforming
                        your products into a two-way, digital channel.
                      </p>
                    </li>
                    Create new revenue streams with Phygital merchandise, and
                    unique connected products.
                    <li className="list-item">
                      <p className="p-lg">
                        Create new revenue streams with Phygital merchandise,
                        and unique connected products.
                      </p>
                    </li>
                  </ul>
                  <Link href="/request-demo">
                    <div className="btn btn-yellow tra-yellow-hover color-white mr-15">
                      Request a Demo
                    </div>
                  </Link>
                </div>{" "}
              </div>
            </div>{" "}
          </div>
        </div>{" "}
      </div>{" "}
    </section>
  );
}

export default Content4;
