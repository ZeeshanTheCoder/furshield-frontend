import React from "react";
import { HeaderTop } from "./HeaderTop";
import LOGO from "../../assets/img/logo/logo.png";
import { Link } from "react-router-dom";
import { HeaderNav } from "./HeaderNav";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderOffcanvas } from "./HeaderOffcanvas";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import {
  useMobileMenu,
  useOffCanvas,
  useSearch,
} from "../../lib/hooks/useHeader";

export const HeaderOne = () => {
  const { showSearch, toggleSearch } = useSearch();
  const { showCanvas, toggleCanvas } = useOffCanvas();
  useMobileMenu();

  return (
    <>
      <header>
        <div id="header-fixed-height"></div>

        {/* top */}
        <HeaderTop />

        {/* bottom */}
        <div id="sticky-header" className="tg-header__area">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="logo">
                      <Link to="/">
                        <img src={LOGO} alt="Logo" />
                      </Link>
                    </div>

                    {/* nav */}
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                      <HeaderNav />
                    </div>

                    <div className="tgmenu__action d-none d-md-block">
                      <ul className="list-wrap">
                        <li className="header-search">
                          <a
                            href="#"
                            className="search-open-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleSearch();
                            }}
                          >
                            <i className="flaticon-loupe"></i>
                          </a>
                        </li>
                        <li className="header-cart">
                          <a href="#">
                            <i className="flaticon-shopping-bag"></i>
                            <span>0</span>
                          </a>
                        </li>

                        <li className="offCanvas-menu">
                          <a
                            href="#"
                            className="menu-tigger"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleCanvas();
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="26"
                              height="16"
                              viewBox="0 0 26 16"
                              fill="none"
                            >
                              <rect
                                width="9"
                                height="2"
                                rx="1"
                                fill="currentcolor"
                              />
                              <rect
                                x="11"
                                width="15"
                                height="2"
                                rx="1"
                                fill="currentcolor"
                              />
                              <rect
                                y="14"
                                width="26"
                                height="2"
                                rx="1"
                                fill="currentcolor"
                              />
                              <rect
                                y="7"
                                width="16"
                                height="2"
                                rx="1"
                                fill="currentcolor"
                              />
                              <rect
                                x="17"
                                y="7"
                                width="9"
                                height="2"
                                rx="1"
                                fill="currentcolor"
                              />
                            </svg>
                          </a>
                        </li>

                        <li className="header-btn">
                          <Link to="/contact" className="btn">
                            <i className="flaticon-calendar-1"></i>Appointment
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="mobile-nav-toggler">
                      <i className="flaticon-layout"></i>
                    </div>
                  </nav>
                </div>

                {/*  Mobile Menu   */}
                <HeaderMobileMenu />
              </div>
            </div>
          </div>
        </div>

        {/*  header-search */}
        <HeaderSearch active={showSearch} toggleSearch={toggleSearch} />

        {/* off canvas */}
        <HeaderOffcanvas active={showCanvas} toggleCanvas={toggleCanvas} />
      </header>
    </>
  );
};
