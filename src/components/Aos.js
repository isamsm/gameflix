import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quad",
      duration: 1000,
      once: false,
    });
  }, []);

  return null;
};