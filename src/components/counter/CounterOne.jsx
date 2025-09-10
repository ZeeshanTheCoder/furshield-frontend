import React from "react";
import { Link } from "react-router-dom";
import { Odometer } from "../odometer/Odometer";

import counterImg from "../../assets/img/images/counter_img.jpg";
import counterImgShape from "../../assets/img/images/counter_img_shape.svg";
import counterShape01 from "../../assets/img/images/counter_shape01.png";
import counterShape02 from "../../assets/img/images/counter_shape02.png";
import petIcon02 from "../../assets/img/icon/pet_icon02.svg";
import rightArrow from "../../assets/img/icon/right_arrow.svg";

export const CounterOne = () => {
  return (
    <section className="counter__area">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5 col-md-8 order-0 order-lg-2">
            <div className="counter__img">
              <div className="mask-img-wrap">
                <img src={counterImg} alt="img" />
              </div>
              <div className="counter__img-shape">
                <img src={counterImgShape} alt="" className="injectable" />
              </div>
              <div className="shape">
                <img src={counterShape01} alt="img" className="ribbonRotate" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-7">
            <div className="counter__content">
              <div className="section__title white-title mb-10">
                <span className="sub-title">
                  Your Trust Our Prirority
                  <strong className="shake">
                    <img src={petIcon02} alt="" className="injectable" />
                  </strong>
                </span>
                <h2 className="title">
                  Professional vest care and guaranteed quality
                </h2>
              </div>
              <p>
                Duis aute irure dolor in repreerit in voluptate velit esse We
                understand that your furry friend treas ured member of your pets
                are.
              </p>
              <Link to="/about" className="btn border-btn white-btn">
                Read More
                <img src={rightArrow} alt="" className="injectable" />
              </Link>
            </div>
          </div>

          {/* counters */}
          <div className="col-lg-3 col-md-5 order-3">
            <div className="counter__item-wrap">
              <div className="counter__item">
                <h2 className="count">
                  <Odometer end={15} suffix="+" />
                </h2>
                <p>27 years of experience</p>
              </div>
              <div className="counter__item">
                <h2 className="count">
                  <Odometer end={23} suffix="K" />
                </h2>
                <p>Our Beloved Clients</p>
              </div>
              <div className="counter__item">
                <h2 className="count">
                  <Odometer end={15} suffix="K+" />
                </h2>
                <p>Real Customer Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="counter__shape">
        <img
          src={counterShape02}
          alt="img"
          data-aos="fade-up-left"
          data-aos-delay="400"
        />
      </div>
    </section>
  );
};
