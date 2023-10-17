import '@/styles/globals.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer, Header } from '@/components/common';

export default function App({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			offset: 120,
			easing: 'ease-in-out',
		});
		AOS.refresh();
	}, []);
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
