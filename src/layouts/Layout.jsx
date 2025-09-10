import React from "react";
import { ScrollToTop } from "../components/scroll_to_top/ScrollToTop";
import { HeaderOne } from "../components/header/HeaderOne";
import { FooterOne } from "../components/footer/FooterOne";
import { HeaderTwo } from "../components/header/HeaderTwo";
import { FooterTwo } from "../components/footer/FooterTwo";
import { HeaderThree } from "../components/header/HeaderThree";
import { FooterThree } from "../components/footer/FooterThree";
import { HeaderFour } from "../components/header/HeaderFour";
import { FooterFour } from "../components/footer/FooterFour";
import { Breadcrumb } from "../components/breadcrumb/Breadcrumb";

export const Layout = ({
  children,
  header = 3,
  footer = 3,
  mainClass = "fix",
  breadcrumbTitle,
  breadcrumbSubtitle,
  hideNewsLetter = false,
}) => {
  return (
    <>
      {/* scroll to top */}
      <ScrollToTop />

      {/* header */}
      {header === 1 && <HeaderOne />}
      {header === 2 && <HeaderTwo />}
      {header === 3 && <HeaderThree />}
      {header === 4 && <HeaderFour />}

      {/* breadcrumb */}
      {breadcrumbTitle && (
        <Breadcrumb title={breadcrumbTitle} subtitle={breadcrumbSubtitle} />
      )}

      <main className={mainClass}>{children}</main>

      {/* footer */}
      {footer === 1 && <FooterOne />}
      {footer === 2 && <FooterTwo />}
      {footer === 3 && <FooterThree hideNewsLetter={hideNewsLetter} />}
      {footer === 4 && <FooterFour />}
    </>
  );
};
