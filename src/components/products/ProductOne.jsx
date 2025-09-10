import React from "react";
import { Swiper, SwiperSlide, modules } from "../swiper/SwiperRoot";

import productsImg01 from "../../assets/img/products/products_img01.jpg";
import productsImg02 from "../../assets/img/products/products_img02.jpg";
import productsImg03 from "../../assets/img/products/products_img03.jpg";
import productsImg04 from "../../assets/img/products/products_img04.jpg";
import productsImg05 from "../../assets/img/products/products_img05.jpg";
import titleShape from "../../assets/img/images/title_shape.svg";
import { ProductOneItem } from "./ProductOneItem";

const productData = [
  {
    id: 1,
    image: productsImg01,
    badge: { type: "new", text: "New" },
    title: "Dog Harness-Neoprene Comfort Liner-Orange and ...",
    price: 12.0,
    oldPrice: 25.0,
    reviews: 2,
  },
  {
    id: 2,
    image: productsImg02,
    badge: { type: "sale", text: "Sale!" },
    title: "Arm & Hammer Super Deodori zing Dog Shampoo, Pet Wash",
    price: 20.0,
    oldPrice: 30.0,
    reviews: 2,
  },
  {
    id: 3,
    image: productsImg03,
    title: "Milk-Bone Brushing Chews Daily Dental Dog Treats ...",
    price: 36.0,
    oldPrice: 56.0,
    reviews: 2,
  },
  {
    id: 4,
    image: productsImg04,
    badge: { type: "sale", text: "Sale!" },
    title: `Two Door Top Load Plastic Kennel & Pet Carrier, Blue 19"`,
    price: 18.0,
    oldPrice: 33.0,
    reviews: 2,
  },
  {
    id: 5,
    image: productsImg05,
    badge: { type: "new", text: "New" },
    title: "The Kitten House with Mat Sleeping Bed House",
    price: 19.0,
    oldPrice: 28.0,
    reviews: 2,
  },
  {
    id: 6,
    image: productsImg04,
    badge: { type: "sale", text: "Sale!" },
    title: `Two Door Top Load Plastic Kennel & Pet Carrier, Blue 19"`,
    price: 18.0,
    oldPrice: 33.0,
    reviews: 2,
  },
];

export const ProductOne = () => {
  return (
    <section className="product__area">
      <div className="container">
        {/* top */}
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="section__title-two mb-25">
              <h2 className="title">
                Featured Products
                <img src={titleShape} alt="" className="injectable" />
              </h2>
            </div>
          </div>
          <div className="col-md-5">
            <div className="product__tab-wrap mb-25">
              <ul className="nav nav-tabs" id="productTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="all-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#all-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="all-tab-pane"
                    aria-selected="true"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="best-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#best-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="best-tab-pane"
                    aria-selected="false"
                  >
                    Best Seller
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="sale-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#sale-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="sale-tab-pane"
                    aria-selected="false"
                  >
                    Sale
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* list */}
        <div className="row">
          <div className="col-lg-12">
            <div
              className="tab-content product__item-wrap"
              id="productTabContent"
            >
              <div
                className="tab-pane fade show active"
                id="all-tab-pane"
                role="tabpanel"
                aria-labelledby="all-tab"
                tabIndex="0"
              >
                <Sliders />
              </div>

              <div
                className="tab-pane fade"
                id="best-tab-pane"
                role="tabpanel"
                aria-labelledby="best-tab"
                tabIndex="0"
              >
                <Sliders />
              </div>

              <div
                className="tab-pane fade"
                id="sale-tab-pane"
                role="tabpanel"
                aria-labelledby="sale-tab"
                tabIndex="0"
              >
                <Sliders />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Sliders = () => {
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
    <>
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
    </>
  );
};
