import React from "react";
import { Link } from "react-router-dom";

import featuresImg01 from "../../assets/img/images/features_img01.jpg";
import featuresImg02 from "../../assets/img/images/features_img02.jpg";
import rightArrow from "../../assets/img/icon/right_arrow.svg";

export const FeatureTwo = () => {
  return (
    <section className="features__area-two">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="features__item-two">
              <div className="features__thumb">
                <img src={featuresImg01} alt="img" />
              </div>
              <div className="features__content-two">
                <h2 className="title">
                  30% <span>Sale!</span>
                </h2>
                <strong>Free Shipping</strong>
                <Link to="/product" className="btn shop-btn">
                  Shop Now
                  <img src={rightArrow} alt="" className="injectable" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="features__item-two">
              <div className="features__thumb">
                <img src={featuresImg02} alt="img" />
              </div>
              <div className="features__content-two features__content-three">
                <h2 className="title">Best Premium</h2>
                <strong>Cat Food</strong>
                <Link to="/product" className="btn shop-btn">
                  Shop Now
                  <img src={rightArrow} alt="" className="injectable" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
