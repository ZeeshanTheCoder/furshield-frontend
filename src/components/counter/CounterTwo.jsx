import React from "react";
import { Odometer } from "../odometer/Odometer";

import counterBg from "../../assets/img/bg/counter_bg.jpg";
import counterShape from "../../assets/img/images/h2_counter_shape.png";

export const CounterTwo = () => {
  return (
    <div
      className="counter__area-two counter__area-bg"
      style={{ backgroundImage: `url(${counterBg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="counter__item-two">
              <div className="counter__item-shape">
                <img src={counterShape} alt="counter shape" />
              </div>
              <Odometer end={"5985"} className="count odometer" />
              <p>Happy Family</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="counter__item-two">
              <div className="counter__item-shape">
                <img src={counterShape} alt="counter shape" />
              </div>
              <Odometer end={1322} className="count odometer" />
              <p>New Listed States</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="counter__item-two">
              <div className="counter__item-shape">
                <img src={counterShape} alt="counter shape" />
              </div>
              <Odometer end={3102} className="count odometer" />
              <p>Core Breeding</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="counter__item-two">
              <div className="counter__item-shape">
                <img src={counterShape} alt="counter shape" />
              </div>
              <Odometer end={1125} className="count odometer" />
              <p>Annual Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
