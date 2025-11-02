import React from "react";
import { Link } from "react-router-dom";
import rightArrow from "../../assets/img/icon/right_arrow04.svg";
import wLogo from "../../assets/img/logo/logo3.png";
import footerShape1 from "../../assets/img/images/footer_shape01.png";
import footerShape2 from "../../assets/img/images/footer_shape02.png";

export const FooterThree = ({ hideNewsLetter }) => {
  return (
    <footer>
      <div className="footer__area">
        {hideNewsLetter ? null : (
          <div className="footer__newsletter-three">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="footer__newsletter-content">
                    <h2 className="title">Sign Up For Newsletter!</h2>
                  </div>
                </div>
                <div className="col-lg-7">
                  <form action="#" className="footer__newsletter-form-two">
                    <input type="email" placeholder="Type Your E-mail" />
                    <button type="submit">
                      Subscribe
                      <img src={rightArrow} alt="" className="injectable" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="footer__top footer__top-three fix">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer__widget">
                  <div className="footer__logo">
                    <Link to="/">
                      <img src={wLogo} alt="Logo" />
                    </Link>
                  </div>
                  <div className="footer__content footer__content-two">
                    <p>
                      Duis aute irure dolor in repreerit in voluptate velitesse
                      We understand that your furry friend tred member
                    </p>
                  </div>
                  <div className="footer__social">
                    <h6 className="title">Follow Us On:</h6>
                    <ul className="list-wrap">
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.whatsapp.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <h4 className="footer__widget-title">Discover</h4>
                  <div className="footer__link">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/products">Shop</Link>
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
                  <h4 className="footer__widget-title">Contact</h4>
                  <div className="footer__contact">
                    <ul className="list-wrap">
                      <li>
                        555 A, East Manster Street, Ready Halley Neon, Uk 4512
                      </li>
                      <li>
                        <a href="tel:0123456789">+00 123 45678 44</a>
                      </li>
                      <li>
                        <a href="mailto:Supportinfo@gmail.com">
                          Supportinfo@gmail.com
                        </a>
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
              alt="img"
              data-aos="fade-up-right"
              data-aos-delay="400"
            />
            <img
              src={footerShape2}
              alt="img"
              data-aos="fade-up-left"
              data-aos-delay="400"
            />
          </div>
        </div>
        <div className="footer__bottom footer__bottom-two">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="copyright-text copyright-text-three">
                  <p>Copyright © 2025. All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="footer__bottom-menu footer__bottom-menu-two">
                  <ul className="list-wrap">
                    <li>
                      <Link to="/contact">Support</Link>
                    </li>
                    <li>
                      <Link to="/contact">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="/contact">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/contact">Career</Link>
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
