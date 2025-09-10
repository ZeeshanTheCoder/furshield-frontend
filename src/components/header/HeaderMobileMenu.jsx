import React from "react";
import LOGO from "../../assets/img/logo/logo.png";
import { Link } from "react-router-dom";

export const HeaderMobileMenu = () => {
  return (
    <>
      <div className="tgmobile__menu">
        <nav className="tgmobile__menu-box">
          <div className="close-btn">
            <i className="fas fa-times"></i>
          </div>

          <div className="nav-logo">
            <Link to="/">
              <img src={LOGO} alt="Logo" />
            </Link>
          </div>

          <div className="tgmobile__search">
            <form action="#">
              <input type="text" placeholder="Search here..." />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>

          <div className="tgmobile__menu-outer">
            {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
          </div>

          <div className="social-links">
            <ul className="list-wrap">
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.whatsapp.com/" target="_blank">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" target="_blank">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="tgmobile__menu-backdrop"></div>
    </>
  );
};
