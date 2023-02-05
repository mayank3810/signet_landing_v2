import React from "react";
import Header from "@/components/Header";

function Patent() {
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
                <h2 className="h2-xl">Title Of Invention</h2>
                {/* Text */}
                <p className="p-xl">
                  SYSTEM AND METHOD FOR ANTI-COUNTERFEIT AUTHENTICATION USING A
                  COMBINATION OF NON-FUNGIBLE TOKEN AND NEAR-FIELD COMMUNICATION
                </p>
              </div>
            </div>

            <div className="col-xl-10 pt-50">
              {/* VERSION RELEASE */}
              <div className="version-release">
                {/* Release Data */}
                <div className="release-data pt-50">
                  {/* Version Data */}
                  <div className="rel">
                    <span className="release-date pr-100">Date Of Filing</span>
                    <span className="version-data">08/11/2022</span>
                    <br />
                    <div className="pt-20">
                      <span className="release-date mt-50 pr-45">
                        Application Number
                      </span>
                      <span className="version-data mt-50">202221063660</span>
                    </div>

                    <a
                      href="https://ipindiaservices.gov.in/PatentSearch/PatentSearch/ViewApplicationStatus"
                      className="btn btn-yellow tra-yellow-hover release-download"
                      target="_blank"
                    >
                      Check Details
                    </a>
                  </div>
                </div>
                {/* Release Highlights */}
                <div className="release-highlights">
                  <div className="row">
                    <div className="col">
                      <h4 className="h4-xs">Application Status</h4>
                      {/* Table */}
                      <div className="table-responsive">
                        <table className="table text-center">
                          <tbody>
                            <tr>
                              <th scope="row" className="text-start">
                                Filed
                              </th>
                              <td className="ico-15 green-color"></td>
                              <td className="ico-15 green-color"></td>
                              <td className="ico-15 green-color">
                                <span className="flaticon-check" />
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" className="text-start">
                                Published
                              </th>
                              <td className="ico-10 disabled-option"></td>
                              <td className="ico-15 green-color"></td>
                              <td className="ico-15 green-color">
                                <span className="flaticon-check" />
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" className="text-start">
                                RQ Filed
                              </th>
                              <td className="ico-10 disabled-option"></td>
                              <td className="ico-10 disabled-option"></td>
                              <td className="ico-15 green-color">
                                <span className="flaticon-check" />
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" className="text-start">
                                Under Examination
                              </th>
                              <td className="ico-10 disabled-option"></td>
                              <td className="ico-15 green-color"></td>
                              <td className="ico-15 green-color">
                                {/* <span className="flaticon-check" /> */}
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" className="text-start">
                                Disposed
                              </th>
                              <td className="ico-15 green-color"></td>
                              <td className="ico-15 green-color"></td>
                              <td className="ico-15 green-color">
                                {/* <span className="flaticon-check" /> */}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>{" "}
                      {/* End Table */}
                    </div>
                  </div>
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

export default Patent;
