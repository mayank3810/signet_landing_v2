import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
// import styles from '@/styles/Home.module.css';
import { About, Features, Mission } from '@/components/About';
import { ClientLogos, GetStarted, Faq, Statistics } from '@/components/common';

const inter = Inter({ subsets: ['latin'] });

export default function AboutPage() {
	return (
		<>
			{/* <!-- ABOUT US SECTION --> */}
			<About />

			{/* <!-- STATISTICS SECTION --> */}
			<Statistics />

			{/* <!-- MISSION VISION SECTION --> */}
			<Mission />

			{/* <!-- FEATURES SECTION --> */}
			<Features />

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
