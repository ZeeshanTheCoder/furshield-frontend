import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useAos = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
      once: true,
      disable: "mobile",
    });
  }, [pathname]);
};
