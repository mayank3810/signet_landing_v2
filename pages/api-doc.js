import Header from "@/components/Header";
import React from "react";

function ApiDoc() {
  return (
    <>
      <Header scroll={true} />

      <section
        id="download-1"
        className="bg-snow wide-20 download-section division"
      >
        <div className="container">
          <div className="row justify-content-center pt-100">
            <div className="col-md-12 col-lg-10">
              <div className="about-2-title">
                {/* Title */}
                <h2 className="h2-xl">APIs and Resources</h2>
                {/* Text */}
                <p className="p-xl">
                  Quaerat sodales sapien euismod blandit at vitae ipsum primis
                  undo and cubilia laoreet augue and luctus magna dolor luctus
                  at egestas sapien vitae nemo
                </p>
              </div>
            </div>
            <div className="col-xl-10 pt-50">
              {/* VERSION RELEASE */}
              <div className="version-release">
                {/* Release Data */}
                <div className="release-data">
                  <h4 className="h4-xs">Latest Version</h4>
                  {/* Version Data */}
                  <div className="rel">
                    <span className="version-data">2.10.074</span>
                    <span className="release-date">
                      2021-06-22 <span>52.84 MB</span>
                    </span>
                    <a
                      href="download/example.zip"
                      download="example.zip"
                      className="btn btn-yellow tra-yellow-hover ico-15 ico-left release-download"
                    >
                      <span className="flaticon-down-arrow" /> Download 2.10.074
                    </a>
                  </div>
                </div>
                {/* Release Highlights */}
                <div className="release-highlights">
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        <b>OS X</b> (10.7 or later is required)
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        <b>Windows</b> - also available as a portable version
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        <b>Windows 64 bit</b> - also available as a portable
                        version
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Fixed Bug: "Euismod purus and blandit"
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">Fixed Crash#4680682692</p>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              {/* END VERSION RELEASE */}
              {/* VERSION RELEASE */}
              <div className="version-release">
                {/* Release Data */}
                <div className="release-data">
                  <h4 className="h4-xs">Older Versions</h4>
                  {/* Version Data */}
                  <div className="rel">
                    <span className="version-data">2.10.020</span>
                    <span className="release-date">
                      2021-05-18 <span>44.12 MB</span>
                    </span>
                    <a
                      href="download/example.zip"
                      download="example.zip"
                      className="btn btn-tra-grey yellow-hover ico-15 ico-left release-download"
                    >
                      <span className="flaticon-down-arrow" /> Download 2.10.020
                    </a>
                  </div>
                </div>
                {/* Release Highlights */}
                <div className="release-highlights">
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Quaerat sodales sapien undo euismod purus and blandit
                        egestas magna on macOS 10.12.*
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Fixed suscipit lectus auctor integer cursus orci vitae
                        auctor integer
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Fixed Fringilla risus nec, luctus mauris auctor integer
                        an auctor cursus euismod
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">Fixed Crash#8341682687</p>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              {/* END VERSION RELEASE */}
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}

export default ApiDoc;
