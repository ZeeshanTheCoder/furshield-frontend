import React from "react";
import { Link } from "react-router-dom";

import introducingImg from "../../assets/img/images/introducing_img.png";
import introducingShape from "../../assets/img/images/introducing_img_shape.svg";
import petIcon from "../../assets/img/icon/pet_icon02.svg";
import checkIcon from "../../assets/img/icon/check_icon02.svg";
import rightArrow from "../../assets/img/icon/right_arrow.svg";
import introducingShapeBg from "../../assets/img/images/introducing_shape.png";

export const IntroducingOne = () => {
  return (
    <section className="introducing__area">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="introducing__img">
              <img src={introducingImg} alt="img" />
              <div className="shape">
                <img src={introducingShape} alt="" className="injectable" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="introducing__content">
              <div className="section__title mb-15">
                <span className="sub-title">
                  INTRODUCING
                  <strong className="shake">
                    <img src={petIcon} alt="" className="injectable" />
                  </strong>
                </span>
                <h2 className="title">
                  We thrive on building a healthy community <br />
                  for all Pets.
                </h2>
              </div>
              <p>
                Duis aute irure dolor in reprehenderit in voWe care for the
                growing needs of our community. We build systems for providing
                health services for individuals, families and populations.
              </p>
              <div className="introducing__list-box mb-35">
                <ul className="list-wrap">
                  <li>
                    <span className="icon">
                      <img src={checkIcon} alt="" className="injectable" />
                    </span>
                    Over 10 years of experience
                  </li>
                  <li>
                    <span className="icon">
                      <img src={checkIcon} alt="" className="injectable" />
                    </span>
                    20 talented vets ready to help you
                  </li>
                  <li>
                    <span className="icon">
                      <img src={checkIcon} alt="" className="injectable" />
                    </span>
                    High-quality products only
                  </li>
                </ul>
              </div>
              <Link to="/contact" className="btn">
                Contact With Us
                <img src={rightArrow} alt="" className="injectable" />
              </Link>
              <div className="shape">
                <img
                  src={introducingShapeBg}
                  alt="shape"
                  data-aos="fade-up-left"
                  data-aos-delay="400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
