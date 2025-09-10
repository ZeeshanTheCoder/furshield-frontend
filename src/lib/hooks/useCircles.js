import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useCircle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      const text = document.querySelector(".circle");
      text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

      const element = document.querySelectorAll(".circle span");
      for (let i = 0; i < element.length; i++) {
        element[i].style.transform = "rotate(" + i * 14.5 + "deg)";
      }
    } catch (error) {}
  }, [pathname]);
};
