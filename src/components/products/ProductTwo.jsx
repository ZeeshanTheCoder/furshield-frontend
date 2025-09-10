import React from "react";
import { Link } from "react-router-dom";

import titleShape from "../../assets/img/images/title_shape.svg";
import productImg1 from "../../assets/img/products/h_products_img01.jpg";
import productImg2 from "../../assets/img/products/latest_products_img01.jpg";
import productImg3 from "../../assets/img/products/latest_products_img02.jpg";
import productImg4 from "../../assets/img/products/latest_products_img03.jpg";
import productImg5 from "../../assets/img/products/h_products_img02.jpg";
import productImg6 from "../../assets/img/products/latest_products_img04.jpg";
import productImg7 from "../../assets/img/products/latest_products_img05.jpg";
import productImg8 from "../../assets/img/products/latest_products_img06.jpg";

export const ProductTwo = () => {
  return (
    <section className="product__area-three">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="product__inner-wrap">
              {/* top */}
              <div className="row align-items-center">
                <div className="col-sm-8">
                  <div className="section__title-two mb-20">
                    <h2 className="title">
                      Hot Sale Products
                      <img src={titleShape} alt="" className="injectable" />
                    </h2>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="view-all-btn">
                    <Link to="/product">
                      See All <i className="flaticon-right-arrow-angle"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-6">
                  <div className="product__item product__item-two">
                    <div className="product__thumb product__thumb-two">
                      <Link to="/product-details">
                        <img src={productImg1} alt="img" />
                      </Link>
                      <div className="sale-wrap">
                        <span>New</span>
                      </div>
                    </div>
                    <div className="product__content">
                      <div className="product__reviews">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span>(2 Reviews)</span>
                      </div>
                      <h4 className="title">
                        <Link to="/product-details">
                          IAMS Minichunks Chicken & Whole Grains Dry Dog Food fo
                        </Link>
                      </h4>
                      <h3 className="price">
                        $11.00 <del>$48.00</del>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6">
                  <div className="product__item-three">
                    <div className="product__thumb-three">
                      <Link to="/product-details">
                        <img src={productImg2} alt="img" />
                      </Link>
                    </div>
                    <div className="product__content product__content-three">
                      <h2 className="title">
                        <Link to="/product-details">
                          TrustyPup Dragon Squeaky Plush Chew ..
                        </Link>
                      </h2>
                      <h3 className="price">
                        $47.00 <del>$82.00</del>
                      </h3>
                    </div>
                  </div>
                  <div className="product__item-three">
                    <div className="product__thumb-three">
                      <Link to="/product-details">
                        <img src={productImg3} alt="img" />
                      </Link>
                    </div>
                    <div className="product__content product__content-three">
                      <h2 className="title">
                        <Link to="/product-details">
                          Vital Pet Life Salmon Oil for Dogs and Cat
                        </Link>
                      </h2>
                      <h3 className="price">$12.00</h3>
                    </div>
                  </div>
                  <div className="product__item-three">
                    <div className="product__thumb-three">
                      <Link to="/product-details">
                        <img src={productImg4} alt="img" />
                      </Link>
                    </div>
                    <div className="product__content product__content-three">
                      <h2 className="title">
                        <Link to="/product-details">
                          Dog HarnesNeoprene Comfort Liner...
                        </Link>
                      </h2>
                      <h3 className="price">
                        $30.00 <del>$48.00</del>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="product__inner-wrap">
              {/* top */}
              <div className="row align-items-center">
                <div className="col-sm-8">
                  <div className="section__title-two mb-20">
                    <h2 className="title">
                      Latest Products
                      <img src={titleShape} alt="" className="injectable" />
                    </h2>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="view-all-btn">
                    <Link to="/product">
                      See All <i className="flaticon-right-arrow-angle"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-6">
                  <div className="product__item product__item-two">
                    <div className="product__thumb product__thumb-two">
                      <Link to="/product-details">
                        <img src={productImg5} alt="img" />
                      </Link>
                      <div className="sale-wrap sale-wrap-two">
                        <span>Sale!</span>
                      </div>
                    </div>
                    <div className="product__content">
                      <div className="product__reviews">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span>(2 Reviews)</span>
                      </div>
                      <h4 className="title">
                        <Link to="/product-details">
                          Pro-Sense Multivitamin, 90ct For your Lovely Dog
                        </Link>
                      </h4>
                      <h3 className="price">
                        $15.00 <del>$28.00</del>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6">
                  <div className="product__item-three">
                    <div className="product__thumb-three">
                      <Link to="/product-details">
                        <img src={productImg6} alt="img" />
                      </Link>
                    </div>
                    <div className="product__content product__content-three">
                      <h2 className="title">
                        <Link to="/product-details">
                          Pet Grooming Glove for Dogs & Cats ...
                        </Link>
                      </h2>
                      <h3 className="price">
                        $12.00 <del>$20.00</del>
                      </h3>
                    </div>
                  </div>
                  <div className="product__item-three">
                    <div className="product__thumb-three">
                      <Link to="/product-details">
                        <img src={productImg7} alt="img" />
                      </Link>
                    </div>
                    <div className="product__content product__content-three">
                      <h2 className="title">
                        <Link to="/product-details">
                          Beloved Pets For Playing Toy
                        </Link>
                      </h2>
                      <h3 className="price">$25.00</h3>
                    </div>
                  </div>
                  <div className="product__item-three">
                    <div className="product__thumb-three">
                      <Link to="/product-details">
                        <img src={productImg8} alt="img" />
                      </Link>
                    </div>
                    <div className="product__content product__content-three">
                      <h2 className="title">
                        <Link to="/product-details">
                          Zesty Paws Calming Puppy Bites ...
                        </Link>
                      </h2>
                      <h3 className="price">
                        $45.00 <del>$80.00</del>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
