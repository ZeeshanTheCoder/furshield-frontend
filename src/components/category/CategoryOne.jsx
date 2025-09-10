import React from "react";
import { Link } from "react-router-dom";

import titleShape from "../../assets/img/images/title_shape.svg";
import categoryImg01 from "../../assets/img/category/category_img01.png";
import categoryImg02 from "../../assets/img/category/category_img02.png";
import categoryImg03 from "../../assets/img/category/category_img03.png";
import categoryImg04 from "../../assets/img/category/category_img04.png";
import categoryImg05 from "../../assets/img/category/category_img05.png";
import categoryImg06 from "../../assets/img/category/category_img06.png";

export const CategoryOne = () => {
  const categories = [
    { img: categoryImg01, name: "Beds", items: 15 },
    { img: categoryImg02, name: "Pet Toys", items: 10 },
    { img: categoryImg03, name: "Dog Food", items: 19 },
    { img: categoryImg04, name: "Cat Food", items: 15 },
    { img: categoryImg05, name: "Pharmacy", items: 30 },
    { img: categoryImg06, name: "Accessories", items: 22 },
  ];

  return (
    <section className="category__area">
      <div className="container">
        {/* top */}
        <div className="row align-tiems-center">
          <div className="col-md-8">
            <div className="section__title-two mb-30">
              <h2 className="title">
                Shop by Category
                <img src={titleShape} alt="" className="injectable" />
              </h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="view-all-btn">
              <Link to="/product">
                See All Categories{" "}
                <i className="flaticon-right-arrow-angle"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* list */}
        <div className="row row-cols-2 row-cols-lg-6 row-cols-md-4 row-cols-sm-3 justify-content-center">
          {categories.map((category, index) => (
            <div className="col" key={index}>
              <div className="category__item">
                <Link to="/product">
                  <img src={category.img} alt={category.name} />
                  <span className="name">{category.name}</span>
                  <strong>{category.items} Items</strong>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
