import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide, modules } from "../swiper/SwiperRoot";

import shop_img01 from "../../assets/img/shop/shop_img01.jpg";
import shop_img02 from "../../assets/img/shop/shop_img02.jpg";
import shop_img03 from "../../assets/img/shop/shop_img03.jpg";
import shop_img04 from "../../assets/img/shop/shop_img04.jpg";
import shop_img05 from "../../assets/img/shop/shop_img05.jpg";

const relatedAnimals = [
  {
    id: 1,
    image: shop_img01,
    name: "Cute French Bulldog",
    gender: "Male",
    breed: "French",
    location: "Bakersfield, California",
  },
  {
    id: 2,
    image: shop_img02,
    name: "purebred pussycat",
    gender: "Female",
    breed: "Germany",
    location: "Central Park, New York",
  },
  {
    id: 3,
    image: shop_img03,
    name: "Italian Rabbit",
    gender: "Male",
    breed: "Italy",
    location: "Birmingham, Alabama",
  },
  {
    id: 4,
    image: shop_img04,
    name: "Macaw Russian",
    gender: "Male",
    breed: "Canada",
    location: "Anchorage, Alaska",
  },
  {
    id: 5,
    image: shop_img05,
    name: "Egypt Cat",
    gender: "Male",
    breed: "Egypt",
    location: "Bakersfield, California",
  },
];

export const AnimalDetailsRelated = () => {
  const swiperSettings = {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
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
      nextEl: ".petTwo-button-next",
      prevEl: ".petTwo-button-prev",
    },
  };

  return (
    <div className="related__animal-area">
      <div className="row align-items-end">
        <div className="col-md-8">
          <h3 className="related__animal-title">You May Also Like</h3>
        </div>
        <div className="col-md-4">
          <div className="pet__nav-two">
            <button className="petTwo-button-prev">
              <i className="flaticon-left"></i>
            </button>
            <button className="petTwo-button-next">
              <i className="flaticon-next"></i>
            </button>
          </div>
        </div>
      </div>

      <Swiper {...swiperSettings} className="pet-active-two">
        {relatedAnimals.map((animal) => (
          <SwiperSlide key={animal.id}>
            <div className="animal__item animal__item-two animal__item-three shine-animate-item">
              <div className="animal__thumb animal__thumb-two shine-animate">
                <Link to="/animal-details">
                  <img src={animal.image} alt={animal.name} />
                </Link>
                <Link to="/animal-details" className="wishlist">
                  <i className="flaticon-love"></i>
                </Link>
              </div>
              <div className="animal__content animal__content-two">
                <h4 className="title">
                  <Link to="/animal-details">{animal.name}</Link>
                </h4>
                <div className="pet-info">
                  <ul className="list-wrap">
                    <li>
                      Gender: <span>{animal.gender}</span>
                    </li>
                    <li>
                      Breed: <span>{animal.breed}</span>
                    </li>
                  </ul>
                </div>
                <div className="location">
                  <i className="flaticon-placeholder"></i>
                  <span>{animal.location}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
