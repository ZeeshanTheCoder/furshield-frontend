import React from "react";
import { Swiper, SwiperSlide, modules } from "../swiper/SwiperRoot";

import testimonialImg from "../../assets/img/images/h3_testimonial_img.jpg";
import reviewShape from "../../assets/img/images/review_shape.svg";
import starIcon from "../../assets/img/icon/star.svg";
import petIcon from "../../assets/img/icon/pet_icon02.svg";
import authorImg from "../../assets/img/images/h3_testi_author01.png";
import quoteIcon from "../../assets/img/icon/quote.svg";
import arrowIcon from "../../assets/img/icon/right_arrow03.svg";
import testimonialShape from "../../assets/img/images/h3_testimonial_shape.png";

export const TestimonialThree = () => {
  const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
    // Navigation arrows
    modules: modules,
    navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev",
    },
  };

  return (
    <section className="testimonial__area-three">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* side */}
          <div className="col-xl-5 col-lg-6 col-md-10">
            <div className="testimonial__img-two">
              <div className="testimonial__img-mask-two">
                <img src={testimonialImg} alt="img" />
              </div>
              <div className="review__box review__box-two">
                <div className="review__box-shape">
                  <img src={reviewShape} alt="" className="injectable" />
                </div>
                <div className="review__box-content">
                  <img src={starIcon} alt="" className="injectable" />
                  <h2 className="title">1500+</h2>
                  <span>Reviews</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-7 col-lg-6">
            <div className="testimonial__content-three">
              <div className="section__title mb-40">
                <span className="sub-title">
                  Testimonials
                  <strong className="shake">
                    <img src={petIcon} alt="" className="injectable" />
                  </strong>
                </span>
                <h2 className="title">
                  Don't Just Take it From Us, <br />
                  Hear What Our Clients Say:
                </h2>
              </div>

              <Swiper {...swiperSettings} className="testimonial-active-three">
                <SwiperSlide>
                  <div className="testimonial__item-three">
                    <div className="testimonial__item-three-top">
                      <div className="testimonial__author-three">
                        <img src={authorImg} alt="img" />
                      </div>
                      <div className="content">
                        <p>
                          “ Duis aute irure dolor in repreerit in voluptate
                          velitesse We understand that your irure dolor in
                          repreerit in voluptate just about you ”
                        </p>
                      </div>
                    </div>
                    <div className="testimonial__item-three-bottom">
                      <div className="testimonial__icon-three">
                        <img src={quoteIcon} alt="" className="injectable" />
                      </div>
                      <div className="testimonial__author-info">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <h4 className="title">Brooklyn Simon</h4>
                        <span>Designer</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial__item-three">
                    <div className="testimonial__item-three-top">
                      <div className="testimonial__author-three">
                        <img src={authorImg} alt="img" />
                      </div>
                      <div className="content">
                        <p>
                          “ Duis aute irure dolor in repreerit in voluptate
                          velitesse We understand that your irure dolor in
                          repreerit in voluptate just about you ”
                        </p>
                      </div>
                    </div>
                    <div className="testimonial__item-three-bottom">
                      <div className="testimonial__icon-three">
                        <img src={quoteIcon} alt="" className="injectable" />
                      </div>
                      <div className="testimonial__author-info">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <h4 className="title">Brooklyn Simon</h4>
                        <span>Designer</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="testimonial__nav-wrap-two">
                <button className="testimonial-button-prev">
                  <img src={arrowIcon} alt="" className="injectable" />
                </button>
                <button className="testimonial-button-next">
                  <img src={arrowIcon} alt="" className="injectable" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* shape */}
      <div className="testimonial__shape-wrap-three">
        <img
          src={testimonialShape}
          alt="shape"
          data-aos="fade-down-left"
          data-aos-delay="400"
        />
      </div>
    </section>
  );
};
