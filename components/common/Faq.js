import React from 'react';

export const Faq = () => {
	return (
		<div className="accordian-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="heading position-relative text-center">
							<h6>FAQ’s</h6>
							<h2>Frequently Asked Questions</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-up">
						<div className="about-service-section-text accordian-section-inner-text position-relative">
							<div className="accordian-inner">
								<div id="accordion1">
									<div className="accordion-card">
										<div className="card-header" id="headingFour">
											<button
												className="btn btn-link collapsed"
												data-toggle="collapse"
												data-target="#collapseFour"
												aria-expanded="false"
												aria-controls="collapseFour"
											>
												Antis unde omnis istye natus error?
											</button>
										</div>
										<div id="collapseFour" className="collapse" aria-labelledby="headingFour">
											<div className="card-body">
												<p className="text-size-16 text-left mb-0 p-0">
													Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur adipisci velit, sed quia non numquam eius modi temor incidunt
													aut labore et dolore magnam.
												</p>
											</div>
										</div>
									</div>
									<div className="accordion-card">
										<div className="card-header" id="headingFive">
											<button
												className="btn btn-link collapsed"
												data-toggle="collapse"
												data-target="#collapseFive"
												aria-expanded="false"
												aria-controls="collapseFive"
											>
												Totam rem aperiam, earue iesa uate?
											</button>
										</div>
										<div id="collapseFive" className="collapse" aria-labelledby="headingFive">
											<div className="card-body">
												<p className="text-size-16 text-left mb-0 p-0">
													Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur adipisci velit, sed quia non numquam eius modi temor incidunt
													aut labore et dolore magnam.
												</p>
											</div>
										</div>
									</div>
									<div className="accordion-card">
										<div className="card-header" id="headingSix">
											<button
												className="btn btn-link collapsed"
												data-toggle="collapse"
												data-target="#collapseSix"
												aria-expanded="false"
												aria-controls="collapseSix"
											>
												Integer lobortis sem conseruat seua?
											</button>
										</div>
										<div id="collapseSix" className="collapse" aria-labelledby="headingSix">
											<div className="card-body">
												<p className="text-size-16 text-left mb-0 p-0">
													Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur adipisci velit, sed quia non numquam eius modi temor incidunt
													aut labore et dolore magnam.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-right">
						<div className="about-service-section-text position-relative">
							<div className="accordian-inner">
								<div id="accordion2">
									<div className="accordion-card">
										<div className="card-header" id="headingSeven">
											<button
												className="btn btn-link collapsed"
												data-toggle="collapse"
												data-target="#collapseSeven"
												aria-expanded="false"
												aria-controls="collapseSeven"
											>
												Quasi sed architecto beatae vitae?
											</button>
										</div>
										<div id="collapseSeven" className="collapse" aria-labelledby="headingSeven">
											<div className="card-body">
												<p className="text-size-16 text-left mb-0 p-0">
													Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur adipisci velit, sed quia non numquam eius modi temor incidunt
													aut labore et dolore magnam.
												</p>
											</div>
										</div>
									</div>
									<div className="accordion-card">
										<div className="card-header" id="headingEight">
											<button
												className="btn btn-link collapsed"
												data-toggle="collapse"
												data-target="#collapseEight"
												aria-expanded="false"
												aria-controls="collapseEight"
											>
												Duis lacinia pulvinar turpis lacinia?
											</button>
										</div>
										<div id="collapseEight" className="collapse" aria-labelledby="headingEight">
											<div className="card-body">
												<p className="text-size-16 text-left mb-0 p-0">
													Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur adipisci velit, sed quia non numquam eius modi temor incidunt
													aut labore et dolore magnam.
												</p>
											</div>
										</div>
									</div>
									<div className="accordion-card">
										<div className="card-header" id="headingNine">
											<button
												className="btn btn-link collapsed"
												data-toggle="collapse"
												data-target="#collapseNine"
												aria-expanded="false"
												aria-controls="collapseNine"
											>
												Rutem auibusdam reu aut officiis?
											</button>
										</div>
										<div id="collapseNine" className="collapse" aria-labelledby="headingNine">
											<div className="card-body">
												<p className="text-size-16 text-left mb-0 p-0">
													Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur adipisci velit, sed quia non numquam eius modi temor incidunt
													aut labore et dolore magnam.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<figure className="mb-0 faq_right_shape position-absolute top_bottom_shape">
				<img src="/images/faq_right_shape.png" alt="" className="img-fluid" />
			</figure>
		</div>
	);
};
