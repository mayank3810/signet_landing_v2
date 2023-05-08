import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* FAVICON AND TOUCH ICONS */}
				<link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
				<link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
				<link rel="apple-touch-icon" sizes="152x152" href="/images/apple-touch-icon-152x152.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="/images/apple-touch-icon-120x120.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="/images/apple-touch-icon-76x76.png" />
				<link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
				<link rel="icon" href="/images/apple-touch-icon.png" type="image/x-icon" />
				{/* GOOGLE FONTS */}
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
				{/* <link href="/fonts/font-rule.css" rel="stylesheet" /> */}
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/fonts/font-rule.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				{/* BOOTSTRAP CSS */}
				{/* <link href="/css/bootstrap.min.css" rel="stylesheet" /> */}
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/css/bootstrap.min.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				{/* FONT ICONS */}
				{/* <link href="/css/flaticon.css" rel="stylesheet" /> */}
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/css/flaticon.css"  as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				{/* PLUGINS STYLESHEET */}
				{/* <link href="/css/menu.css" rel="stylesheet" /> */}
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/css/menu.css"  as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				{/* <link id="effect" href="/css/dropdown-effects/fade-down.css" media="all" rel="stylesheet" /> */}
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/css/dropdown-effects/fade-down.css"  as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				{/* <link href="/css/magnific-popup.css" rel="stylesheet" /> */}
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/css/magnific-popup.css"  as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				{/* <link href="/css/owl.carousel.min.css" rel="stylesheet" /> */}
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/css/owl.carousel.min.css"  as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				{/* <link href="/css/owl.theme.default.min.css" rel="stylesheet" /> */}
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/css/owl.theme.default.min.css"  as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				{/* ON SCROLL ANIMATION */}
				{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" /> */}
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				{/* TEMPLATE CSS */}
				{/* <link href="/css/style.css" rel="stylesheet" /> */}
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/css/style.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				{/* RESPONSIVE CSS */}
				{/* <link href="/css/responsive.css" rel="stylesheet" />
				<link href="/css/custom.css" rel="stylesheet" /> */}
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/css/responsive.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/css/custom.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TBXWNQL');`,
					}}
					defer
				></script>
				{/* <Script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TBXWNQL');`,
					}}
				/> */}
			</Head>
			<body>
				<Main />
				<NextScript />

				<script src="/js/jquery-3.6.0.min.js" defer></script>
				{/* <Script src="/js/jquery-3.6.0.min.js" strategy="lazyOnload" /> */}
			</body>
		</Html>
	);
}
