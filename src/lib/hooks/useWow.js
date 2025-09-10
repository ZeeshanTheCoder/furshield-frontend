import WOW from "wow.js";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useWow = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });

    wow.init();
  }, [pathname]);
};
