import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useSvgInject = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      SVGInject(document.querySelectorAll("img.injectable"));
    } catch (error) {
      console.log(error);
    }
  }, [pathname]);
};
