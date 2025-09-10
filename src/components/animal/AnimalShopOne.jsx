import React from "react";
import { AnimalShopOneItem } from "./AnimalShopOneItem";

import shop_img01 from "../../assets/img/shop/shop_img01.jpg";
import shop_img02 from "../../assets/img/shop/shop_img02.jpg";
import shop_img03 from "../../assets/img/shop/shop_img03.jpg";
import shop_img04 from "../../assets/img/shop/shop_img04.jpg";
import shop_img05 from "../../assets/img/shop/shop_img05.jpg";
import shop_img06 from "../../assets/img/shop/shop_img06.jpg";
import shop_img07 from "../../assets/img/shop/shop_img07.jpg";
import shop_img08 from "../../assets/img/shop/shop_img08.jpg";
import right_arrow from "../../assets/img/icon/right_arrow.svg";
import bg from "../../assets/img/bg/shop_bg.jpg";

export const AnimalShopOne = () => {
  const animalItems = [
    {
      src: shop_img01,
      id: "2596-DG",
      title: "Cute French Bulldog",
      price: "590.00",
    },
    {
      src: shop_img02,
      id: "2019-CT",
      title: "purebred pussycat",
      price: "45.00",
    },
    {
      src: shop_img03,
      id: "5669-RB",
      title: "Italian Rabbit",
      price: "20.00",
    },
    {
      src: shop_img04,
      id: "2019-BR",
      title: "Macaw Russian",
      price: "130.00",
    },
    {
      src: shop_img05,
      id: "2060-CT",
      title: "Egypt Cat",
      price: "590.00",
    },
    {
      src: shop_img06,
      id: "2580-DG",
      title: "Australian Shepherd",
      price: "45.00",
    },
    {
      src: shop_img07,
      id: "2592-DG",
      title: "Beagle Britain",
      price: "190.00",
    },
    {
      src: shop_img08,
      id: "2552-DG",
      title: "Maltipoo USA",
      price: "90.00",
    },
  ];

  return (
    <section
      className="animal__area animal__bg"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        {/* top */}
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section__title white-title mb-40">
              <span className="sub-title">POPULAR BREEDS</span>
              <h2 className="title">
                See our most popular <br />
                pets Breed for sale
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="view__all-btn view__all-btn-two text-end mb-40">
              <a href="animal.html" className="btn">
                See More pets
                <img src={right_arrow} alt="" className="injectable" />
              </a>
            </div>
          </div>
        </div>

        {/* list */}
        <div className="row justify-content-center">
          {animalItems.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <AnimalShopOneItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
