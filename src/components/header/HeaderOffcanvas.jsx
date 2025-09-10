import React, { act } from "react";
import LOGO from "../../assets/img/logo/logo.png";
import { Link } from "react-router-dom";

export const HeaderOffcanvas = ({ active, toggleCanvas }) => {
  return (
    <>
      <div className={`offCanvas__info ${active ? "active" : ""}`}>
        <div
          className="offCanvas__close-icon menu-close"
          onClick={toggleCanvas}
        >
          <button>
            <i className="far fa-window-close"></i>
          </button>
        </div>
        <div className="offCanvas__logo mb-30">
          <Link to="/">
            <img src={LOGO} alt="Logo" />
          </Link>
        </div>
        <div className="offCanvas__side-info mb-30">
          <div className="contact-list mb-30">
            <h4>Office Address</h4>
            <p>
              123/A, Miranda City Likaoli <br />
              Prikano, Dope
            </p>
          </div>
          <div className="contact-list mb-30">
            <h4>Phone Number</h4>
            <p>+0989 7876 9865 9</p>
            <p>+(090) 8765 86543 85</p>
          </div>
          <div className="contact-list mb-30">
            <h4>Email Address</h4>
            <p>info@example.com</p>
            <p>example.mail@hum.com</p>
          </div>
        </div>
        <div className="offCanvas__social-icon mt-30">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div
        className={`offCanvas__overly ${active ? "active" : ""}`}
        onClick={toggleCanvas}
      />
    </>
  );
};
