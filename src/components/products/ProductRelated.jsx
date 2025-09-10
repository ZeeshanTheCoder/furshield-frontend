import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide, modules } from "../swiper/SwiperRoot";

import titleShape from "../../assets/img/images/title_shape.svg";
import product1 from "../../assets/img/products/products_img01.jpg";
import product2 from "../../assets/img/products/products_img02.jpg";
import product3 from "../../assets/img/products/products_img03.jpg";
import product4 from "../../assets/img/products/products_img04.jpg";
import product5 from "../../assets/img/products/products_img05.jpg";
import product7 from "../../assets/img/products/products_img07.jpg";
import { ProductOneItem } from "./ProductOneItem";

const productData = [
  {
    id: 1,
    image: product1,
    badge: { type: "new", text: "New" },
    title: "Dog Harness-Neoprene Comfort Liner-Orange and ...",
    price: 12.0,
    oldPrice: 25.0,
    reviews: 2,
  },
  {
    id: 2,
    image: product2,
    badge: { type: "sale", text: "Sale!" },
    title: "Arm & Hammer Super Deodori zing Dog Shampoo, Pet Wash",
    price: 20.0,
    oldPrice: 30.0,
    reviews: 2,
  },
  {
    id: 3,
    image: product3,
    title: "Milk-Bone Brushing Chews Daily Dental Dog Treats ...",
    price: 36.0,
    oldPrice: 56.0,
    reviews: 2,
  },
  {
    id: 4,
    image: product4,
    badge: { type: "sale", text: "Sale!" },
    title: `Two Door Top Load Plastic Kennel & Pet Carrier, Blue 19"`,
    price: 18.0,
    oldPrice: 33.0,
    reviews: 2,
  },
  {
    id: 5,
    image: product5,
    badge: { type: "new", text: "New" },
    title: "The Kitten House with Mat Sleeping Bed House",
    price: 19.0,
    oldPrice: 28.0,
    reviews: 2,
  },
  {
    id: 6,
    image: product7,
    badge: { type: "sale", text: "Sale!" },
    title: `Two Door Top Load Plastic Kennel & Pet Carrier, Blue 19"`,
    price: 18.0,
    oldPrice: 33.0,
    reviews: 2,
  },
];

export const ProductRelated = () => {
  const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    loop: true,
    breakpoints: {
      1500: {
        slidesPerView: 5,
      },
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
    modules: modules,
    navigation: {
      nextEl: ".product-button-next",
      prevEl: ".product-button-prev",
    },
  };
  return (
    <div className="related-product-area">
      <div className="row">
        <div className="col-12">
          <div className="section__title-two mb-20">
            <h2 className="title">
              Related Products
              <img src={titleShape} alt="" className="injectable" />
            </h2>
          </div>
        </div>
      </div>

      <div className="product__item-wrap">
        <Swiper {...swiperSettings} className="product-active">
          {productData.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductOneItem {...product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="product__nav-wrap">
          <button className="product-button-prev">
            <i className="flaticon-left-chevron"></i>
          </button>
          <button className="product-button-next">
            <i className="flaticon-right-arrow-angle"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
