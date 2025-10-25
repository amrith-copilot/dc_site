import "swiper/css";
import "swiper/css/navigation";
import "../public/assets/css/style.css";
import "react-modal-video/css/modal-video.css";
import { useEffect, useState } from "react";
import Preloader from "../components/elements/Preloader";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    // Only run WOW.js if window exists (client side)
    if (typeof window !== "undefined") {
      import("wowjs").then((mod) => {
        // Safely handle export
        const WOW = mod.WOW || (mod.default && mod.default.WOW) || mod.default;
        if (WOW && typeof WOW === "function") {
          const wow = new WOW({ live: false });
          wow.init();
        } else {
          console.error("WOW is not available or not a constructor", mod);
        }
      }).catch((err) => {
        console.error("Failed to load WOW.js", err);
      });
    }
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {!loading ? <Component {...pageProps} /> : <Preloader />}
    </>
  );
}
export default MyApp;