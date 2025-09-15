import React from "react";
import { Link } from "react-router-dom";

import wLogo from "../../assets/img/logo/w_logo.png";
import rightArrow from "../../assets/img/icon/right_arrow04.svg";
import footerShape1 from "../../assets/img/images/footer_shape01.png";
import footerShape2 from "../../assets/img/images/footer_shape02.png";

export const FooterTwo = () => {
  return (
    <footer>
      <div className="footer__area">
        <div className="footer__info-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="footer__info-item">
                  <div className="footer__info-icon">
                    <i className="flaticon-placeholder"></i>
                  </div>
                  <div className="footer__info-content">
                    <h4 className="title">Address</h4>
                    <p>555 A, East Halley Neon, Uk 4512</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="footer__info-item">
                  <div className="footer__info-icon">
                    <i className="flaticon-phone"></i>
                  </div>
                  <div className="footer__info-content">
                    <h4 className="title">Emergency</h4>
                    <p>+ 00 123 4567 8899</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="footer__info-item">
                  <div className="footer__info-icon">
                    <i className="flaticon-mail"></i>
                  </div>
                  <div className="footer__info-content">
                    <h4 className="title">E-mail</h4>
                    <p>Info@youremail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__top footer__top-two fix">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer__widget">
                  <div className="footer__logo">
                    <Link to="/">
                      <img src={wLogo} alt="logo" />
                    </Link>
                  </div>
                  <div className="footer__content footer__content-two">
                    <p>
                      Duis aute irure dolor in repreerit in voluptate velitesse
                      We understand that your furry friend tred member
                    </p>
                  </div>
                  <div className="footer__newsletter-two">
                    <h2 className="title">Sign Up Newsletter!</h2>
                    <form action="#" className="footer__newsletter-form">
                      <input
                        id="email"
                        type="email"
                        placeholder="Type Your E-mail"
                      />
                      <button type="submit">
                        <img
                          src={rightArrow}
                          alt="arrow"
                          className="injectable"
                        />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <h4 className="footer__widget-title">Discover</h4>
                  <div className="footer__link">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/animal">Animal Rescue</Link>
                      </li>
                      <li>
                        <Link to="/contact">Humane Education</Link>
                      </li>
                      <li>
                        <Link to="/contact">Caregivers</Link>
                      </li>
                      <li>
                        <Link to="/blog">New & Blog</Link>
                      </li>
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <h4 className="footer__widget-title">Support</h4>
                  <div className="footer__link">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/about">About us</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                      <li>
                        <Link to="/reservation">Book Appointment</Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/contact">Locations</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <h4 className="footer__widget-title">Opening Hours</h4>
                  <div className="footer__link">
                    <ul className="list-wrap">
                      <li>
                        Monday <span>8.00 - 21.00</span>
                      </li>
                      <li>
                        Tuesday <span>8.00 - 21.00</span>
                      </li>
                      <li>
                        Thursday <span>8.00 - 21.00</span>
                      </li>
                      <li>
                        Friday <span>8.00 - 21.00</span>
                      </li>
                      <li>
                        Saturday <span>8.00 - 21.00</span>
                      </li>
                      <li>
                        Sunday <span>8.00 - 21.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__shape-wrap">
            <img
              src={footerShape1}
              alt="shape"
              data-aos="fade-up-right"
              data-aos-delay="400"
            />
            <img
              src={footerShape2}
              alt="shape"
              data-aos="fade-up-left"
              data-aos-delay="400"
            />
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="copyright-text copyright-text-two">
                  <p>Copyright © 2024. All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer__social-two">
                  <h6 className="title">Follow Us On:</h6>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
