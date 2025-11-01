import React from "react";
import { Link } from "react-router-dom";

import shapeOne from "../../assets/img/team/team_img_shape01.svg";
import shapeTwo from "../../assets/img/team/team_img_shape02.svg";

export const TeamOneItem = ({ src, name, designation }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
      <div className="team__item">
        <div className="team__item-img">
          <div className="mask-img-wrap">
            <img src={src} alt="team member" />
          </div>
          <div className="team__item-img-shape">
            <div className="shape-one">
              <img src={shapeOne} alt="shape" className="injectable" />
            </div>
            <div className="shape-two">
              <img src={shapeTwo} alt="shape" className="injectable" />
            </div>
          </div>
          <div className="team__social">
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
        <div className="team__item-content">
          <h4 className="title">
            {name}
          </h4>
          <span>{designation}</span>
        </div>
      </div>
    </div>
  );
};
