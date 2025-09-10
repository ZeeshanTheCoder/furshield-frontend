import React from "react";
import { Link } from "react-router-dom";

import chooseImg from "../../assets/img/images/choose_img.png";
import petIcon from "../../assets/img/icon/pet_icon02.svg";
import checkIcon from "../../assets/img/icon/check_icon.svg";
import rightArrow from "../../assets/img/icon/right_arrow.svg";
import chooseShape1 from "../../assets/img/images/choose_shape01.png";
import chooseShape2 from "../../assets/img/images/choose_shape02.png";

export const ChooseOne = () => {
  return (
    <section className="choose__area">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="choose__img">
              <img src={chooseImg} alt="img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose__content">
              <div className="section__title mb-15">
                <span className="sub-title">
                  Why Choose Us
                  <strong className="shake">
                    <img src={petIcon} alt="" className="injectable" />
                  </strong>
                </span>
                <h2 className="title">
                  We thrive on building a <br />
                  healthy community <br />
                  for all Pets.
                </h2>
              </div>
              <p>
                Duis aute irure dolor in reprehenderit in voWe care for the
                growing needs of our community. We build systems for providing
                health services for individuals, families and populations.
              </p>
              <div className="why__list-box mb-30">
                <ul className="list-wrap">
                  <li>
                    <div className="why__list-box-item">
                      <div className="why__list-box-item-top">
                        <div className="icon">
                          <img src={checkIcon} alt="" className="injectable" />
                        </div>
                        <h4 className="title">More Experience</h4>
                      </div>
                      <p>
                        Be confident in the treatment plan and your doctor's
                        abilities.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="why__list-box-item">
                      <div className="why__list-box-item-top">
                        <div className="icon">
                          <img src={checkIcon} alt="" className="injectable" />
                        </div>
                        <h4 className="title">Affordable Pricing</h4>
                      </div>
                      <p>
                        Be confident in the treatment plan and your doctor's
                        abilities.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Link to="/contact" className="btn">
                Contact With Us
                <img src={rightArrow} alt="" className="injectable" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="choose__shape-wrap">
        <img src={chooseShape1} alt="shape" className="ribbonRotate" />
        <img
          src={chooseShape2}
          alt="shape"
          data-aos="fade-right"
          data-aos-delay="400"
        />
      </div>
    </section>
  );
};
