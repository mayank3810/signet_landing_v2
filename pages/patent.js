import React from 'react';
import Header from '@/components/Header';
import Head from 'next/head';

function Patent() {
	return (
		<>
			<Head>
				<meta name="robots" content="noindex, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />

				<meta name="title" content="Signet Tags Patent: Anti-Counterfeit NFC Authentication" />
				<meta
					name="description"
					content="Check the patent status of a new anti-counterfeit authentication system using non-fungible tokens and near-field communication. Application filed on 08/11/2022"
				/>
				<meta
					name="keywords"
					content="Signet Tags, Signet Authenticity, brand protection software, blockchain-proven ownership, anti-counterfeit authentication, non-fungible token, near-field communication, patent application status, filing date, application number"
				/>

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:site_name" content="Signet Tags" />
				<meta property="og:url" content="https://www.signettags.com/patent" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Signet Tags Patent: Anti-Counterfeit NFC Authentication" />
				<meta property="og:description" content="Check NFT-NFC anti-counterfeit patent" />
				<meta property="og:image" content="/assets/images/Twitter-card.jpeg" />
				<meta property="og:locale" content="en_US" />

				{/* <!-- Twitter --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SignetTags" />
				<meta name="twitter:url" content="https://www.signettags.com/patent" />
				<meta name="twitter:title" content="Signet Tags Patent: Anti-Counterfeit NFC Authentication" />
				<meta name="twitter:description" content="Check NFT-NFC anti-counterfeit patent" />
				<meta name="twitter:image" content="/assets/images/Twitter-card.jpeg" />

				<link rel="canonical" href="https://www.signettags.com/patent" key="canonical" />
				<title>Signet Tags - Patent Status | Anti-Counterfeit with NFT/NFC</title>
			</Head>

			<Header scroll={true} />
			<section id="download-1" className="bg-snow wide-20 download-section division">
				<div className="container">
					<div className="row justify-content-center pt-100">
						<div className="col-md-12 col-lg-10">
							<div className="about-2-title">
								{/* Title */}
								<h1 className="h1-md">Title Of Invention</h1>
								{/* Text */}
								<p className="p-xl">
									SYSTEM AND METHOD FOR ANTI-COUNTERFEIT AUTHENTICATION USING A COMBINATION OF NON-FUNGIBLE TOKEN AND NEAR-FIELD COMMUNICATION
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
											<span className="release-date mt-50 pr-45">Application Number</span>
											<span className="version-data mt-50">202221063660</span>
										</div>

										<a
											href="https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus"
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
											<h2 className="h2-font">Application Status</h2>
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
															<td className="ico-15 green-color"><span className="flaticon-check" /></td>
														</tr>
														<tr>
															<th scope="row" className="text-start">
																Disposed
															</th>
															<td className="ico-15 green-color"></td>
															<td className="ico-15 green-color"></td>
															<td className="ico-15 green-color"><span className="flaticon-check" /></td>
														</tr>
													</tbody>
												</table>
											</div>
											{/* End Table */}
										</div>
									</div>
								</div>
							</div>
							{/* END VERSION RELEASE */}
						</div>
					</div>
					{/* End row */}
				</div>
				{/* End container */}
			</section>
		</>
	);
}

export default Patent;
