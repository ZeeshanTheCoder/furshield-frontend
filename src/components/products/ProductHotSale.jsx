import React from "react";
import Countdown from "react-countdown";
import { ProductOneItem } from "./ProductOneItem";

import titleShape from "../../assets/img/images/title_shape.svg";
import productsShape01 from "../../assets/img/products/products_shape01.png";
import productsShape02 from "../../assets/img/products/products_shape02.png";
import product06 from "../../assets/img/products/products_img06.jpg";
import product07 from "../../assets/img/products/products_img07.jpg";
import product08 from "../../assets/img/products/products_img08.jpg";
import product09 from "../../assets/img/products/products_img09.jpg";
import product10 from "../../assets/img/products/products_img10.jpg";
import { padNumber } from "../../lib/helper";

export const ProductHotSale = () => {
  const products = [
    {
      image: product06,
      badge: { type: "sale", text: "Sale!" },
      reviews: 2,
      title: "Dog Puzzle Toys, Squeaky Treat Dispensing Dog",
      price: 18.0,
      oldPrice: 33.0,
    },
    {
      image: product07,
      badge: { type: "sale", text: "Sale!" },
      reviews: 2,
      title: "Zesty Paws Calming Puppy Bites Stress Relief for Dogs, 60 Count",
      price: 16.0,
      oldPrice: 50.0,
    },
    {
      image: product08,
      badge: { type: "sale", text: "Sale!" },
      reviews: 2,
      title: "Hartz Groomer's Best Extra Gentle Puppy Shampoo, 18oz.",
      price: 30.0,
      oldPrice: 88.0,
    },
    {
      image: product09,
      badge: { type: "sale", text: "Sale!" },
      reviews: 2,
      title: "The Kitten House with Mat Sleeping Bed House",
      price: 22.0,
      oldPrice: 59.0,
    },
    {
      image: product10,
      badge: { type: "sale", text: "Sale!" },
      reviews: 2,
      title: "Dog Harness-Neoprene Comfort Liner-Orange and Comfort",
      price: 11.0,
      oldPrice: 48.0,
    },
  ];

  return (
    <section className="product__area-two">
      {/* top */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="section__title-two mb-20">
              <h2 className="title">
                Hot Sale Products
                <img src={titleShape} alt="" className="injectable" />
              </h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="coming-time-wrap">
              <div className="coming-time">
                <Countdown
                  date={new Date("2024-12-31")}
                  renderer={({ days, hours, minutes, seconds, completed }) => (
                    <>
                      <div className="time-count day">
                        <span>{padNumber(days)}</span>
                        <strong>d</strong>
                      </div>
                      <div className="time-count hour">
                        <span>{padNumber(hours)}</span>
                        <strong>h</strong>
                      </div>
                      <div className="time-count min">
                        <span>{padNumber(minutes)}</span>
                        <strong>m</strong>
                      </div>
                      <div className="time-count sec">
                        <span>{padNumber(seconds)}</span>
                        <strong>s</strong>
                      </div>
                    </>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container custom-container-two">
        <div className="product__item-wrap-two">
          <div className="row gutter-20 row-cols-1 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center">
            {products.map((product, index) => (
              <div className="col" key={index}>
                <ProductOneItem {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* shape */}
      <div className="product__shape-wrap">
        <img src={productsShape01} alt="shape" className="ribbonRotate" />
        <img
          src={productsShape02}
          alt="shape"
          data-aos="fade-up-right"
          data-aos-delay="400"
        />
      </div>
    </section>
  );
};
