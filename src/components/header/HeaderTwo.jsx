import React from "react";
import { useMobileMenu, useSearch } from "../../lib/hooks/useHeader";
import LOGO from "../../assets/img/logo/logo.png";
import { Link } from "react-router-dom";
import { HeaderNav } from "./HeaderNav";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import { HeaderSearch } from "./HeaderSearch";

export const HeaderTwo = () => {
  const { showSearch, toggleSearch } = useSearch();
  useMobileMenu();

  return (
    <>
      <header>
        <div id="header-fixed-height"></div>

        <div id="sticky-header" className="tg-header__area tg-header__area-two">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="logo">
                      <Link to="/">
                        <img src={LOGO} alt="Logo" />
                      </Link>
                    </div>

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
                        <li className="header-btn login-btn">
                          <Link to="/contact" className="btn">
                            <i className="flaticon-user"></i>Login
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

        {/*  header-search  */}
        <HeaderSearch active={showSearch} toggleSearch={toggleSearch} />
      </header>
    </>
  );
};
