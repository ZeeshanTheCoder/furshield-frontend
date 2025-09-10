import React from "react";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";
import { Link } from "react-router-dom";

import instaImg1 from "../../assets/img/instagram/instagram_img01.jpg";
import instaImg2 from "../../assets/img/instagram/instagram_img02.jpg";
import instaImg3 from "../../assets/img/instagram/instagram_img03.jpg";
import instaImg4 from "../../assets/img/instagram/instagram_img04.jpg";
import instaImg5 from "../../assets/img/instagram/instagram_img05.jpg";

export const InstagramOne = () => {
  const instagramImages = [
    { img: instaImg1, alt: "Instagram post 1" },
    { img: instaImg2, alt: "Instagram post 2" },
    { img: instaImg3, alt: "Instagram post 3" },
    { img: instaImg4, alt: "Instagram post 4" },
    { img: instaImg5, alt: "Instagram post 5" },
    { img: instaImg3, alt: "Instagram post 6" },
  ];

  const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <div className="instagram__area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="instagram__follow-btn">
              <Link to="https://www.instagram.com/" target="_blank">
                Follow Us On Instagram
              </Link>
            </div>
          </div>
        </div>

        <Swiper {...swiperSettings} className="instagram-active">
          {instagramImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="instagram__item">
                <Link to="https://www.instagram.com/" target="_blank">
                  <img src={image.img} alt={image.alt} />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
