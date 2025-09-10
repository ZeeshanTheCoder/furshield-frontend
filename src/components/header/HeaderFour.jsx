import React from "react";
import { Link } from "react-router-dom";
import { HeaderTop } from "./HeaderTop";
import { HeaderNav } from "./HeaderNav";
import { useMobileMenu } from "../../lib/hooks/useHeader";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import Select from "react-select";

import logoImg from "../../assets/img/logo/logo.png";

export const HeaderFour = () => {
  useMobileMenu();

  return (
    <header>
      <div id="header-fixed-height"></div>

      {/* top */}
      <HeaderTop />

      <div id="sticky-header" className="tg-header__area tg-header__area-four">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tgmenu__wrap">
                <nav className="tgmenu__nav">
                  <div className="logo">
                    <Link to="/">
                      <img src={logoImg} alt="Logo" />
                    </Link>
                  </div>
                  <div className="tgmenu__navbar-wrap tgmenu__navbar-wrap-two tgmenu__main-menu d-none d-xl-flex">
                    <HeaderNav />
                  </div>

                  {/* form */}
                  <div className="tgmenu__search">
                    <Form />
                  </div>

                  {/* action */}
                  <div className="tgmenu__action tgmenu__action-three d-none d-md-block">
                    <ul className="list-wrap">
                      <li className="header-login">
                        <Link to="/contact">
                          <i className="flaticon-user"></i>
                        </Link>
                      </li>
                      <li className="header-wishlist">
                        <Link to="#">
                          <i className="flaticon-love"></i>
                        </Link>
                      </li>
                      <li className="header-cart header-cart-two">
                        <strong className="price">$0.00</strong>
                        <Link to="#">
                          <i className="flaticon-shopping-bag"></i>
                          <span>0</span>
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
    </header>
  );
};

const Form = () => {
  const list = [
    { label: "All Categories", value: "0", isDisabled: true },
    { label: "Dogs", value: "1" },
    { label: "Cats", value: "2" },
    { label: "Rabbit", value: "3" },
    { label: "Birds", value: "4" },
    { label: "Fish", value: "5" },
    { label: "Others", value: "6" },
  ];

  return (
    <form onSubmit={(e) => e.preventDefault()} className="tgmenu__search-form">
      <input type="text" placeholder="Search Here . . ." />
      <div className="select-grp" style={{ padding: 0, paddingLeft: 8 }}>
        <Select
          options={list}
          defaultValue={list[0]}
          isSearchable={false}
          styles={{
            control: (styles) => ({
              ...styles,
              backgroundColor: "transparent",
              border: "none",
              borderRadius: 0,
              padding: 0,
              minHeight: "36px",
              cursor: "pointer",
              width: 130,
              boxShadow: "none",
            }),
            option: (styles, { isFocused }) => ({
              ...styles,
              padding: "2px 8px",
              cursor: "pointer",
              fontSize: 16,
              fontWeight: 500,
              color: isFocused ? "white" : "#445374",
              transition: "all 0.3s ease",
              backgroundColor: isFocused ? "#894B8D" : "transparent",
            }),
            menu: (styles, {}) => ({
              ...styles,
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              borderRadius: "4px",
              overflow: "hidden",
              zIndex: 9,
              fontSize: 16,
            }),
            indicatorSeparator: (base) => ({ ...base, display: "none" }),
            dropdownIndicator: (styles) => ({ ...styles, color: "#4a5568" }),
            valueContainer: (styles) => ({ ...styles, padding: 0 }),
            singleValue: (styles) => ({
              ...styles,
              fontSize: 14,
              fontWeight: 500,
              color: "#445374",
            }),
          }}
        />
      </div>
      <button type="submit">
        <i className="flaticon-loupe"></i>
      </button>
    </form>
  );
};
