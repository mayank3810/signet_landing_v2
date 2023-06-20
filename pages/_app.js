import Footer from "@/components/Footer";
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Component {...pageProps} />;
      {
        router.pathname.toLowerCase().indexOf("onboarding") < 0 &&
        <Footer />
      }
    </>
  );
}
