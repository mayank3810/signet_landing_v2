import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <>
          <meta charSet="utf-8" />
          {/* <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="author" content="DSAThemes" />
  <meta
    name="description"
    content="Signet - Software, App, SaaS & Startup Landing Pages Pack"
  />
  <meta
    name="keywords"
    content="Responsive, HTML5, DSAThemes, One Page, Landing, Software, Mobile App, SaaS, Startup, Creative, Freelancers, Digital Product"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
          {/* SITE TITLE */}
          <title>Signet Authenticity</title>
          {/* FAVICON AND TOUCH ICONS */}
          <link
            rel="shortcut icon"
            href="/images/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/images/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/images/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/images/apple-touch-icon-76x76.png"
          />
          <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
          <link
            rel="icon"
            href="/images/apple-touch-icon.png"
            type="image/x-icon"
          />
          {/* GOOGLE FONTS */}
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          {/* BOOTSTRAP CSS */}
          <link href="/css/bootstrap.min.css" rel="stylesheet" />
          {/* FONT ICONS */}
          <link href="/css/flaticon.css" rel="stylesheet" />
          {/* PLUGINS STYLESHEET */}
          <link href="/css/menu.css" rel="stylesheet" />
          <link
            id="effect"
            href="/css/dropdown-effects/fade-down.css"
            media="all"
            rel="stylesheet"
          />
          <link href="/css/magnific-popup.css" rel="stylesheet" />
          <link href="/css/owl.carousel.min.css" rel="stylesheet" />
          <link href="/css/owl.theme.default.min.css" rel="stylesheet" />
          {/* ON SCROLL ANIMATION */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          {/* TEMPLATE CSS */}
          <link href="/css/style.css" rel="stylesheet" />
          {/* RESPONSIVE CSS */}
          <link href="/css/responsive.css" rel="stylesheet" />

          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TBXWNQL');`,
            }}
          ></script>

        </>
      </Head>
      <body>
        <Main />
        <NextScript />

        <script src="/js/jquery-3.6.0.min.js"></script>
        {/* <script src="/js/jquery-3.6.0.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/modernizr.custom.js"></script>
        <script src="/js/jquery.easing.js"></script>
        <script src="/js/jquery.appear.js"></script>
        <script src="/js/jquery.scrollto.js"></script>
        <script src="/js/menu.js"></script>
        <script src="/js/imagesloaded.pkgd.min.js"></script>
        <script src="/js/isotope.pkgd.min.js"></script>
        <script src="/js/owl.carousel.min.js"></script>
        <script src="/js/jquery.magnific-popup.min.js"></script>
        <script src="/js/quick-form.js"></script>
        <script src="/js/request-form.js"></script>
        <script src="/js/jquery.validate.min.js"></script>
        <script src="/js/jquery.ajaxchimp.min.js"></script>
        <script src="/js/wow.js"></script> */}

        {/* <script src="/js/custom.js"></script> */}
      </body>
    </Html>
  );
}
