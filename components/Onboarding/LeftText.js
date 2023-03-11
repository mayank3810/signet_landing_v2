import React from 'react';

function LeftText({ heading, subheading }) {
	return (
		<>
			<div className="txt-box p-5">

				<div className="row">
					<div className='col-12'>
						<h1 className="h2-font mb-5">{heading}</h1>

						<h2 className="h3-font mt-20 pt-20" style={{ color: '#6610f2' }} dangerouslySetInnerHTML={{ __html: subheading }}></h2>
						<h3 className="h4-font mt-50">100% Risk-Free Trial</h3>
						<p className="p-lg mt-2">
							<img src="/images/industries/5610944.png" style={{ width: '18px', position: 'relative', top: '-2px' }} alt="header-logo" /> Get access to
							all features.
							<br /> <img src="/images/industries/5610944.png" style={{ width: '18px', position: 'relative', top: '-2px' }} alt="header-logo" /> Pay
							NOTHING for the first 30-days.
							<br /> <img src="/images/industries/5610944.png" style={{ width: '18px', position: 'relative', top: '-2px' }} alt="header-logo" /> Cancel at
							ANY time during your trial.
						</p>
					</div>
				</div>
				<div className="mt-4">
					<div className="row">
						<div className="col-6 text-center d-flex align-items-center justify-content-center">
							<img src="/images/ethereum.png" className="img-responsive" alt="header-logo" />
						</div>

						<div className="col-6 text-center d-flex align-items-center justify-content-center">
							<img src="/images/nfc.jpg" style={{ height: '75px' }} className="img-responsive" alt="header-logo" />
						</div>

					</div>
				</div>
				<div className="mt-4 pt-4">
					<div className="row">
						<div style={{ background: '#ccc', borderRadius: '15px', padding: '15px' }} className="col-6 text-center d-flex align-items-center justify-content-center">
							<img src="/images/solana.png" className="img-responsive" alt="header-logo" />
						</div>
						<div className="col-6 text-center d-flex align-items-center justify-content-center">
							<img src="/images/Polygon.png" className="img-responsive" alt="header-logo" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default LeftText;
