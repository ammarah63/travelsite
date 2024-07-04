import "@/styles/globals.css";
import { Footer, Header } from "@/components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 0,
     // delay: 500,
      duration: 800,
    });
  }, []);
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
