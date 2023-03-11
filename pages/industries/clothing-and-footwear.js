import CallToAction from '@/components/CallToAction';
import Header from '@/components/Header';
import Stats from '@/components/Stats';
import PageTitle from '@/components/PageTitle';
import Testimonials from '@/components/Testimonials';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Brands from '@/components/Brands';
import Benefits from '@/components/Benefits';
import Head from 'next/head';

function ApparelAndClothing() {
	const [containerRef, inContainerView] = useInView({ rootMargin: '-350px' });

	return (
		<>
			<Head>
				<title>Smart Packaging Solutions for Clothing & Footwear</title>
				<link rel="canonical" href="https://www.signettags.com/industries/clothing-and-footwear" key="canonical" />
				<meta name="title" content="Signet Tags Smart Packaging for Clothing and Footwear" />
				<meta
					name="description"
					content="Signet Tags prevents counterfeit of clothing & footwear using NFC tag authentication. Track product history and authenticity effortlessly."
				/>
				<meta
					name="keywords"
					content="NFC tags,Anti-counterfeiting,Brand protection,Cosmetics industry,Smart packaging,Marketing insights,Customer engagement,Tamper-proof,Product authentication,Fraud prevention"
				/>
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:site_name" content="Signet Tags" />
				<meta property="og:url" content="https://www.signettags.com/industries/clothing-and-footwear" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Signet tags authenticate NFC clothing and footwear" />
				<meta property="og:description" content="Authenticate clothing and footwear with Signet Tags' NFC tags." />
				<meta property="og:image" content="/assets/images/Twitter-card.jpeg" />
				<meta property="og:locale" content="en_US" />

				{/* <!-- Twitter --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SignetTags" />
				<meta name="twitter:url" content="https://www.signettags.com/industries/clothing-and-footwear" />
				<meta name="twitter:title" content="Signet tags authenticate NFC clothing and footwear" />
				<meta name="twitter:description" content="Authenticate clothing and footwear with Signet Tags' NFC tags." />
				<meta name="twitter:image" content="/assets/images/Twitter-card.jpeg" />
			</Head>
			<Header scroll={inContainerView} />
			<PageTitle
				image="/images/industries/clothing_banner.jpg"
				title={'Secure Your Apparel and footwear with Smart Packaging'}
				subtitle={'Packaging as smart as your products'}
			/>
			<div ref={containerRef}>
				<section id="content-3" className="bg-whitesmoke content-3 wide-60 content-section division">
					<div className="container">
						{/* TOP ROW */}
						<div className="top-row pb-50">
							<div className="row d-flex align-items-center">
								{/* IMAGE BLOCK */}
								<div className="col-md-5 col-lg-6">
									<div className="img-block left-column wow fadeInRight">
										<img className="img-fluid" src="/images/clothing/bridge-gap.jpg" alt="content-image" />
									</div>
								</div>
								{/* TEXT BLOCK */}
								<div className="col-md-7 col-lg-6">
									<div className="txt-block right-column wow fadeInLeft">
										{/* Title */}
										<h2 className="h2-xs">Bridging the physical and digital world</h2>
										{/* Text */}
										<p className="p-lg">
											The clothing and footwear industry is a
											highly competitive market, driven by a new
											generation of consumers who increasingly
											uses digital technologies to shop online,
											search for recommendations, and interact
											with brands. At the same time, consumers
											expect fashion brands to step up their
											sustainability initiatives and consider ecofriendly commitments to be an important
											factor in their buying decision. NFC
											technology can address these challenges,
											as it provides a means to communicate
											with customers, and can ease recycling
											initiatives.
										</p>

										<p className="p-lg">
											Our app or a direct NFC connection allows consumers to check the authenticity of each single purchase they are about to make. A
											simple tap grants instant access to product history, certifications and intended applications.
										</p>
									</div>
								</div>
								{/* END TEXT BLOCK */}
							</div>
						</div>
					</div>
					{/* End container */}
				</section>

				<section id="content-9" className="content-9 bg-01 pt-100 content-section division">
					<div className="container white-color">
						{/* SECTION TITLE */}
						<div className="row justify-content-center">
							<div className="col-md-10 col-lg-8">
								<div className="section-title title-02 mb-60">
									<h2 className="h2-xs">
										What are the benefits of using NFC technology? <br />
									</h2>
									<p className="p-xl">
										NFC (Near Field Communication) is a wireless connectivity technology based on RFID (Radio
										Frequency Identification) enabling contactless communication between a reader and a tag.
										A tag is a small electronic component that can be embedded in the labels of clothing and
										footwear items, such as jackets, t-shirts, dresses, shoes etc.
										Adding an NFC tag to an object connects it to the digital world.
										Implementing NFC allows fashion brands to track their products around the world, ensure
										their authenticity, and create a direct two-way communication channel with consumers via
										their smartphone, used as an NFC reader.
									</p>
								</div>
							</div>
						</div>
						{/* IMAGE BLOCK */}
						<div className="row">
							<div className="col">
								<div className="content-9-img video-preview wow fadeInUp">
									<iframe
										// style={{ borderRadius: '20px' }}
										className="rounded-20px"
										width="860"
										height="515"
										src="https://www.youtube.com/embed/YQUjE2koNRI"
										title="Signet Demo Video"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										allowFullScreen
									></iframe>
								</div>
							</div>
						</div>
					</div>
					{/* End container */}
				</section>

				<section id="features-8" className="wide-60 features-section division">
					<div className="container">
						{/* SECTION TITLE */}
						<div className="row justify-content-center">
							<div className="col-lg-10 col-xl-8">
								<div className="section-title title-01 mb-70">
									{/* Title */}
									<h2 className="h2-md">Why Choose Signet Tags</h2>
									{/* Text */}
									<p className="p-xl">
										A company can use NFC technology to verify that the goods equipped with an NFC tag have followed the entire supply chain flows
										as expected.
									</p>
								</div>
							</div>
						</div>
						{/* FEATURES-8 WRAPPER */}
						<div className="fbox-8-wrapper text-center">
							<div className="row row-cols-1 row-cols-md-3">
								{/* FEATURE BOX #1 */}
								<div className="col">
									<div className="fbox-8 mb-40 wow fadeInUp">
										{/* Image */}
										<img className="img-fluid rounded" src="/images/industries/brand-protection.jpg" alt="feature-icon" />
										{/* Title */}
										<h5 className="h5-md mt-4 ">Brand Protection</h5>
										{/* Text */}
										<p className="p-lg">Defend your IPRs and your Brand Equity. Feel free to develop and promote new products safely</p>
									</div>
								</div>
								{/* FEATURE BOX #2 */}
								<div className="col">
									<div className="fbox-8 mb-40 wow fadeInUp">
										{/* Image */}
										<img className="img-fluid rounded" src="/images/industries/marketing.jpg" alt="feature-icon" />
										{/* Title */}
										<h5 className="h5-md mt-4">Marketing Insights</h5>
										{/* Text */}
										<p className="p-lg">Track your products until the final customer. Detect product infiltrations and original stolen products</p>
									</div>
								</div>
								{/* FEATURE BOX #3 */}
								<div className="col">
									<div className="fbox-8 mb-40 wow fadeInUp">
										<img className="img-fluid rounded" src="/images/industries/feedback.jpg" alt="feature-icon" />
										<h5 className="h5-md mt-4 ">Connect directly</h5>
										{/* Text */}
										<p className="p-lg">
											Connect directly to your customers using push notifications and alerts. Collect valuable feedbacks directly from customers.
										</p>
									</div>
								</div>
							</div>
							{/* End row */}
						</div>
						{/* END FEATURES-8 WRAPPER */}
					</div>
					{/* End container */}
				</section>

				<section id="content-1" className="content-1 pb-100 content-section division">
					<div className="container">
						<div className="row d-flex align-items-center">
							{/* TEXT BLOCK */}
							<div className="col-md-7 col-lg-6 order-last order-md-2">
								<div className="txt-block left-column wow fadeInRight">
									{/* Section ID */}
									<span className="section-id txt-upcase">SMART NFC PACKAGING</span>
									{/* Title */}
									<h2 className="h2-xs">Helping brands grow their business.</h2>
									{/* List */}
									<ul className="simple-list">
										<li className="list-item">
											<p className="p-lg">
												A two-way communication channel between brands and consumers.
											</p>
										</li>
										<li className="list-item">
											<p className="p-lg">
												NFC technology delivers the benefits of digital marketing to physical products.
											</p>
										</li>
										<li className="list-item">
											<p className="p-lg">
												Secure and ready-to-use, NFC tags can easily be configured with personalized content (authentication, product information
												and more) which consumers can access by simply tapping the tag with their smartphone.
											</p>
										</li>
										<li className="list-item">
											<p className="p-lg">
												By providing access to product information (origin, fabric), offering personalized shopping advice, and giving details on
												sustainable initiatives, such as where to recycle or donate a piece of clothing after use, NFC technology helps fashion brands
												establish a direct communication channel with their customers.
											</p>
										</li>
									</ul>
								</div>
							</div>
							{/* END TEXT BLOCK */}
							{/* IMAGE BLOCK */}
							<div className="col-md-5 col-lg-6 order-first order-md-2">
								<div className="rel img-block right-column wow fadeInLeft">
									<img className="img-fluid rounded" src="/images/clothing/nfc-shppoing.jpg" alt="content-image" />
								</div>
							</div>
						</div>
						{/* End row */}
					</div>
					{/* End container */}
				</section>

				<section id="features-4" className="pb-60 features-section division">
					<div className="container">
						{/* FEATURES-4 WRAPPER */}
						<div className="fbox-4-wrapper fbox-4-wide">
							<div className="row row-cols-1 row-cols-md-2">
								{/* FEATURE BOX #1 */}
								<div className="col">
									<div className="fbox-4 pr-25 mb-40 wow fadeInUp">
										{/* Icon */}
										<div className="fbox-ico">
											<div className="ico-65 shape-ico dark-color">
												<img className="ico-bkg" src="/images/ico-bkg.png" alt="ico-bkg" />
												<img src="/images/industries/icons8-connected-100.png" alt="ico-bkg" />
											</div>
										</div>
										{/* Text */}
										<div className="fbox-txt">
											{/* Title */}
											<h5 className="h5-md">Digitally Connected Products</h5>
											{/* Text */}
											<p className="p-lg">Every product becomes digitally connected</p>
										</div>
									</div>
								</div>

								{/* FEATURE BOX #3 */}
								<div className="col">
									<div className="fbox-4 pr-25 mb-40 wow fadeInUp">
										{/* Icon */}
										<div className="fbox-ico">
											<div className="ico-65 shape-ico dark-color">
												<img className="ico-bkg" src="/images/ico-bkg.png" alt="ico-bkg" />
												<img src="/images/industries/icons8-knight-shield-100.png" alt="ico-bkg" />
											</div>
										</div>
										{/* Text */}
										<div className="fbox-txt">
											{/* Title */}
											<h5 className="h5-md">Protect your Brand</h5>
											{/* Text */}
											<p className="p-lg">Drive out counterfeited perfumes from the market and safeguard your customers’ health and money</p>
										</div>
									</div>
								</div>
								{/* FEATURE BOX #4 */}
								<div className="col">
									<div className="fbox-4 pl-25 mb-40 wow fadeInUp">
										{/* Icon */}
										<div className="fbox-ico">
											<div className="ico-65 shape-ico dark-color">
												<img className="ico-bkg" src="/images/ico-bkg.png" alt="ico-bkg" />
												<img src="/images/industries/icons8-opera-glasses-100.png" alt="ico-bkg" />
											</div>
										</div>
										{/* Text */}
										<div className="fbox-txt">
											{/* Title */}
											<h5 className="h5-md">Montitor Products</h5>
											{/* Text */}
											<p className="p-lg">Track your products until the final customer. Detect product infiltrations and original stolen products</p>
										</div>
									</div>
								</div>
								{/* FEATURE BOX #5 */}
								<div className="col">
									<div className="fbox-4 pr-25 mb-40 wow fadeInUp">
										{/* Icon */}
										<div className="fbox-ico">
											<div className="ico-65 shape-ico dark-color">
												<img className="ico-bkg" src="/images/ico-bkg.png" alt="ico-bkg" />
												<img src="/images/industries/icons8-defend-100.png" alt="ico-bkg" />
											</div>
										</div>
										{/* Text */}
										<div className="fbox-txt">
											{/* Title */}
											<h5 className="h5-md">Defend Distributors</h5>
											{/* Text */}
											<p className="p-lg">Protect your official commercial partners from product diversion and illicit markets</p>
										</div>
									</div>
								</div>

							</div>
						</div>{' '}
						{/* END FEATURES-4 WRAPPER */}
					</div>{' '}
					{/* End container */}
				</section>


				<section id="content-1" className="content-1 pb-100 content-section division">
					<div className="container">
						<div className="row d-flex align-items-center">

							<div className="col-md-5 col-lg-6 order-first order-md-2">
								<div className="rel img-block right-column wow fadeInLeft">
									<img className="img-fluid rounded" src="/images/clothing/shoes-blochchain.jpeg" alt="content-image" />
									<img className="img-fluid rounded mt-4" src="/images/clothing/sahoshi.gif" alt="content-image" />
								</div>
							</div>


							<div className="col-md-7 col-lg-6 order-last order-md-2">
								<div className="txt-block left-column wow fadeInRight">
									{/* Title */}
									<h2 className="h2-xs">NFC chip in shoes and footwear to track production.</h2>
									{/* List */}

									<p>
										Sneaker manufacturer <a href='https://www.kickstarter.com/projects/satoshi-studio/satoshi-one-high-end-sneakers-for-tech-lovers' target={'_blank'}> Satoshi
										</a>  equips
										its products with its own NFC chip to inform the customer about the production route of each pair of shoes. Among other things, the chip provides information about the manufacturing location and process. Where other products usually only show the country of origin, <a href='https://www.kickstarter.com/projects/satoshi-studio/satoshi-one-high-end-sneakers-for-tech-lovers' target={'_blank'}> Satoshi
										</a> shows for each pair of shoes when and where it was processed.


									</p>
									<p>
										The technology behind the NFC chip is that it is linked to an online portal that stores each step in the process and additionally signs it using a block chain algorithm. Access to the information and its extension is done by scanning the shoe. This technology also makes it possible for subsequent owners to add themselves to this block chain. Thus, further owners can see to whom the shoes have already belonged once. By using NFC in its own products, <a href='https://www.kickstarter.com/projects/satoshi-studio/satoshi-one-high-end-sneakers-for-tech-lovers' target={'_blank'}> Satoshi
										</a> wants to demonstrate to its customers in a comprehensible and uncomplicated way which production steps their own shoes have gone through. This traceability makes each production step transparent, which among other things ensures that the sneakers were manufactured under fair conditions.

									</p>
								</div>
							</div>

						</div>
					</div>
				</section>

				<section id="content-1" className="content-1 pb-100 content-section division">
					<div className="container">
						<div className="row d-flex align-items-center">
							{/* TEXT BLOCK */}
							<div className="col-md-7 col-lg-6 order-last order-md-2">
								<div className="txt-block left-column wow fadeInRight">
									{/* Section ID */}
									{/* Title */}
									<h2 className="h2-xs">NFC for detailed material origin in sweaters</h2>
									

									A clothing manufacturer goes even further and offers its customers even more transparency through the use of modern NFC technology in clothing. <a target={"_blank"} href="https://sheepinc.com/">SheepInc</a> not only uses high-quality materials and workmanship to make the garments more durable, the company also incorporates a small NFC chip the size of a button in each garment. This NFC button provides information about the production, the origin and even - and this is the special thing - from which sheep the wool comes. To get information such as name, size, weight, origin and breed of the sheep, all you have to do is hold your smartphone over the NFC button. The manufacturer thus offers the possibility to get information about the welfare of the animal and to establish a certain relationship with it. The buyer is also shown how much CO2 the purchase of the product has saved. Through the unique ID of the NFC tag, each sweater has its own history. The linked information is stored on the internet and can therefore always be flexibly adapted, so that the status of the sheep is not a snapshot, but continues to exist with the sweater and can also change. NFC allows the information to be communicated efficiently and quickly and to be noted on each individual pullover.


								</div>
							</div>
							{/* END TEXT BLOCK */}
							{/* IMAGE BLOCK */}
							<div className="col-md-5 col-lg-6 order-first order-md-2">
								<div className="rel img-block right-column wow fadeInLeft">
								<img className="img-fluid rounded mt-4" src="/images/clothing/nfc-buttons.jpeg" alt="content-image" />

								</div>
							</div>
						</div>
						{/* End row */}
					</div>
					{/* End container */}
				</section>


				<CallToAction />
			</div>
		</>
	);
}

export default ApparelAndClothing;
