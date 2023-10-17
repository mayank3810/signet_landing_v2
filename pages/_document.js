import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html lang="en">
			{/* <!-- /SEO Ultimate --> */}
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
			<meta charSet="utf-8" />
			<Head>
				<link rel="apple-touch-icon" sizes="57x57" href="/images/favicon/apple-icon-57x57.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="/images/favicon/apple-icon-60x60.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/images/favicon/apple-icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="/images/favicon/apple-icon-76x76.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="/images/favicon/apple-icon-114x114.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="/images/favicon/apple-icon-120x120.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/images/favicon/apple-icon-144x144.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/apple-icon-152x152.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-icon-180x180.png" />
				<link rel="icon" type="image/png" sizes="192x192" href="/images/favicon/android-icon-192x192.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="/images/favicon/favicon-96x96.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/images/favicon/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff" />
				{/* <!-- Latest compiled and minified CSS --> */}
				<link href="/bootstrap/bootstrap.min.css" rel="stylesheet" />
				<link rel="stylesheet" href="/js/bootstrap.min.js" />
				{/* <!-- Font Awesome link --> */}
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
				{/* <!-- StyleSheet link CSS --> */}
				<link href="/css/style.css" rel="stylesheet" type="text/css" />
				<link href="/css/mediaqueries.css" rel="stylesheet" type="text/css" />
				<link href="/css/owl.carousel.min.css" rel="stylesheet" type="text/css" />
				<link href="/css/owl.theme.default.min.css" rel="stylesheet" type="text/css" />
				{/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" /> */}
				{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css" /> */}

				{/* <!-- Latest compiled JavaScript --> */}
				<script async src="/js/jquery-3.6.0.min.js"></script>
				<script async src="/js/popper.min.js"></script>
				<script async src="/js/video-popup.js"></script>
				<script async src="/js/bootstrap.min.js"></script>
				{/* <script async src="https://unpkg.com/aos@2.3.1/dist/aos.js" /> */}
				{/* <script async src="/js/owl.carousel.js"></script> */}
				{/* <script async src="/js/carousel.js" /> */}
				{/* <script async src="/js/video-section.js"></script> */}
				{/* <script async src="/js/counter.js"></script>
				<script async src="/js/animation.js"></script> */}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
