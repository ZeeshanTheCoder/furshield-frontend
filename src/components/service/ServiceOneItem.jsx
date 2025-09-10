import React from "react";
import { Link } from "react-router-dom";

import rightArrow02 from "../../assets/img/icon/right_arrow02.svg";
import servicesShape01 from "../../assets/img/images/services_shape01.svg";
import servicesShape02 from "../../assets/img/images/services_shape02.svg";
import servicesIconShape from "../../assets/img/images/services_icon_shape.svg";

export const ServiceOneItem = ({ icon, title }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
      <div className="services__item">
        <div className="services__shape">
          <div className="shape-one">
            <img src={servicesShape01} alt="" className="injectable" />
          </div>
          <div className="shape-two">
            <img src={servicesShape02} alt="" className="injectable" />
          </div>
        </div>
        <div className="services__icon">
          <i className={icon}></i>
          <div className="services__icon-shape">
            <img src={servicesIconShape} alt="" className="injectable" />
          </div>
        </div>
        <div className="services__content">
          <h4 className="title">
            <Link to="/animal-details">{title}</Link>
          </h4>
          <p>
            We will work with you to develop individu alised care plans
            including
          </p>
          <Link to="/animal-details" className="btn border-btn">
            See Details
            <img src={rightArrow02} alt="" className="injectable" />
          </Link>
        </div>
      </div>
    </div>
  );
};
