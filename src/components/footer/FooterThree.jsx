import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import rightArrow from "../../assets/img/icon/right_arrow04.svg";
import wLogo from "../../assets/img/logo/logo3.png";
import footerShape1 from "../../assets/img/images/footer_shape01.png";
import footerShape2 from "../../assets/img/images/footer_shape02.png";

export const FooterThree = ({ hideNewsLetter }) => {
  // ✅ Newsletter state logic copied from FooterOne
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!email.trim()) {
      setMessage("Please enter your email.");
      setIsSuccess(false);
      return;
    }

    try {
      const data = new FormData(formRef.current);
      await fetch("https://formsubmit.co/dadb08d81d3500497e2d421829421d4c", {
        method: "POST",
        body: data,
      });

      setIsSuccess(true);
      setMessage("🎉 Newsletter subscribed successfully!");
      setEmail("");
    } catch (error) {
      setIsSuccess(false);
      setMessage("❌ Subscription failed. Please try again.");
    }
  };

  return (
    <footer>
      <div className="footer__area">
        {!hideNewsLetter && (
          <div className="footer__newsletter-three">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="footer__newsletter-content">
                    <h2 className="title">Sign Up For Newsletter!</h2>
                  </div>
                </div>
                <div className="col-lg-7">
                  {/* ✅ Working newsletter form */}
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="footer__newsletter-form-two"
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Type Your E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input
                      type="hidden"
                      name="_autoresponse"
                      value="🎉 You have successfully subscribed to our newsletter! Thank you for joining us."
                    />

                    <button type="submit">
                      Subscribe
                      <img src={rightArrow} alt="" className="injectable" />
                    </button>
                  </form>

                  {message && (
                    <p
                      className={`mt-2 ${
                        isSuccess ? "text-success" : "text-danger"
                      }`}
                    >
                      {message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="footer__top footer__top-three fix">
          <div className="container">
            <div className="row">
              {/* --- Column 1 --- */}
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

              {/* --- Column 2 --- */}
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

              {/* --- Column 3 --- */}
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

              {/* --- Column 4 --- */}
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
