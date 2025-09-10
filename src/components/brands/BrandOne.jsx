import React from "react";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";

import brand1 from "../../assets/img/brand/brand_img01.png";
import brand2 from "../../assets/img/brand/brand_img02.png";
import brand3 from "../../assets/img/brand/brand_img03.png";
import brand4 from "../../assets/img/brand/brand_img04.png";
import brand5 from "../../assets/img/brand/brand_img05.png";
import brand6 from "../../assets/img/brand/brand_img06.png";
import brand7 from "../../assets/img/brand/brand_img07.png";

export const BrandOne = () => {
  const brandImages = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand3,
  ];

  const swiperSettins = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 7,
      },
      992: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <div className="brand__area">
      <div className="container">
        <div className="brand__item-wrap">
          <Swiper {...swiperSettins} className="brand-active">
            {brandImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="brand__item">
                  <img src={image} alt={`brand-${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
