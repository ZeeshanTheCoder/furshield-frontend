import React from "react";

import whyWeAreImg from "../../assets/img/images/why_we_are_img.png";
import whyShape1 from "../../assets/img/images/why_shape01.svg";
import whyShape2 from "../../assets/img/images/why_shape02.svg";
import whyShape3 from "../../assets/img/images/why_shape03.svg";
import whyShape4 from "../../assets/img/images/why_shape04.svg";
import petIcon from "../../assets/img/icon/pet_icon02.svg";
import checkIcon from "../../assets/img/icon/check_icon.svg";

export const WhyWeAreOne = () => {
  return (
    <section className="why__we-are-area">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* images */}
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="why__we-are-img">
              <img src={whyWeAreImg} alt="" />
              <div
                className="shape shape-one"
                data-aos="fade-down-right"
                data-aos-delay="500"
              >
                <img src={whyShape1} alt="" className="injectable" />
              </div>
              <div
                className="shape shape-two"
                data-aos="fade-up-right"
                data-aos-delay="500"
              >
                <img src={whyShape2} alt="" className="injectable" />
              </div>
              <div
                className="shape shape-three"
                data-aos="fade-up-left"
                data-aos-delay="500"
              >
                <img src={whyShape3} alt="" className="injectable" />
              </div>
              <div className="shape shape-four ribbonRotate">
                <img src={whyShape4} alt="" className="injectable" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="why__we-are-content">
              <div className="section__title mb-10">
                <span className="sub-title">
                  Why We are The Best
                  <strong className="shake">
                    <img src={petIcon} alt="" className="injectable" />
                  </strong>
                </span>
                <h2 className="title">
                  Pet emergencies <br />
                  what you need to know.
                </h2>
              </div>
              <p>
                We understand that your furry friend is a treasured member of
                your family and deserves pets are the best care and attention
                possible.
              </p>

              <div className="why__list-box">
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
                        Be confident in the treatment plan and your doctor’s
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
                        Be confident in the treatment plan and your doctor’s
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
                        <h4 className="title">Modern Pet Training</h4>
                      </div>
                      <p>
                        Be confident in the treatment plan and your doctor’s
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
                        <h4 className="title">Maintain a daily routine</h4>
                      </div>
                      <p>
                        Be confident in the treatment plan and your doctor’s
                        abilities.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
