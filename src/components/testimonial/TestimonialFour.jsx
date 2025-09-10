import React from "react";
import { Swiper, SwiperSlide, modules } from "../swiper/SwiperRoot";

import quoteIcon from "../../assets/img/icon/quote02.svg";
import authorImg from "../../assets/img/images/testi_author01.png";
import rightArrow from "../../assets/img/icon/right_arrow03.svg";

export const TestimonialFour = () => {
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
    <section className="testimonial__area-four">
      <div className="container">
        <div className="testimonial__item-wrap-four">
          <Swiper {...swiperSettings} className="testimonial-active-two">
            <SwiperSlide>
              <div className="testimonial__item-four">
                <div className="testimonial__icon-four">
                  <img src={quoteIcon} alt="Quote" className="injectable" />
                </div>
                <div className="testimonial__content-four">
                  <h2 className="title">Pet Health Important</h2>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p>
                    “ Duis aute irure dolor in repreerit in voluptate velitesse
                    We understand that your furry aute irure dolor in repreerit
                    in voluptate just about the best thing you can do. dolor in
                    repreerit in voluptate understand that you ”
                  </p>
                </div>
                <div className="testimonial__author-two testimonial__author-four">
                  <div className="testimonial__author-thumb">
                    <img src={authorImg} alt="Author" />
                  </div>
                  <div className="testimonial__author-content">
                    <h4 className="title">Uraney Jacke</h4>
                    <span>Business Study</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial__item-four">
                <div className="testimonial__icon-four">
                  <img src={quoteIcon} alt="Quote" className="injectable" />
                </div>
                <div className="testimonial__content-four">
                  <h2 className="title">Pet Health Important</h2>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p>
                    “ Duis aute irure dolor in repreerit in voluptate velitesse
                    We understand that your furry aute irure dolor in repreerit
                    in voluptate just about the best thing you can do. dolor in
                    repreerit in voluptate understand that you ”
                  </p>
                </div>
                <div className="testimonial__author-two testimonial__author-four">
                  <div className="testimonial__author-thumb">
                    <img src={authorImg} alt="Author" />
                  </div>
                  <div className="testimonial__author-content">
                    <h4 className="title">Uraney Jacke</h4>
                    <span>Business Study</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="testimonial__nav-wrap">
            <button className="testimonial-button-prev">
              <img src={rightArrow} alt="Previous" className="injectable" />
            </button>
            <button className="testimonial-button-next">
              <img src={rightArrow} alt="Next" className="injectable" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
