import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
// import styles from '@/styles/Home.module.css';
import { About, Portfolio } from '@/components/Home';
import { ClientLogos, GetStarted, Faq, Statistics, Testimonials, WhoWeAre, Services } from '@/components/common';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			{/* <!-- STATISTICS SECTION --> */}
			<Statistics />

			{/* <!-- SERVICES SECTION --> */}
			<Services />

			{/* <!-- ABOUT US SECTION --> */}
			<About />

			{/* <!-- WHO WE ARE SECTION --> */}
			<WhoWeAre />

			{/* <!-- PORTFOLIO SECTION --> */}
			<Portfolio />

			{/* <!-- TESTIMONIALS SECTION --> */}
			<Testimonials />

			{/* <!-- COMBO SECTION --> */}
			<section className="combo_section">
				<Faq />
				{/* CLIENT LOGO'S SECTION */}
				<ClientLogos />
				{/* GET STARTED SECTION */}
				<GetStarted />
			</section>
		</>
	);
}
