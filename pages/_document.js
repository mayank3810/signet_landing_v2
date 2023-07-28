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
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/fonts/font-rule.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				{/* BOOTSTRAP CSS */}
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/css/bootstrap.min.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				{/* FONT ICONS */}
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/css/flaticon.css"  as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				{/* PLUGINS STYLESHEET */}
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/css/menu.css"  as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/css/dropdown-effects/fade-down.css"  as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/css/magnific-popup.css"  as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/css/owl.carousel.min.css"  as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/css/owl.theme.default.min.css"  as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>

				<script
					dangerouslySetInnerHTML={{
						__html: `</script>
    <link rel="preload" href="/css/style2.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>
<script>`,
					}}
				/>
				{/* RESPONSIVE CSS */}

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
				/>

			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
