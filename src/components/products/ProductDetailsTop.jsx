import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import productsImg01 from "../../assets/img/products/products_img01.jpg";
import productsImg02 from "../../assets/img/products/products_img02.jpg";
import productsImg03 from "../../assets/img/products/products_img03.jpg";
import productsImg04 from "../../assets/img/products/products_img04.jpg";
import cardImg from "../../assets/img/products/card.png";

export const ProductDetailsTop = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    if (type === "inc") {
      setQuantity((prev) => prev + 1);
    } else if (type === "dec" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // lightbox
  const [id, setId] = useState(null);

  const slides = [
    { src: productsImg01 },
    { src: productsImg02 },
    { src: productsImg03 },
    { src: productsImg04 },
  ];

  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <div className="product__details-images-wrap">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane show active"
                id="itemOne-tab-pane"
                role="tabpanel"
                aria-labelledby="itemOne-tab"
                tabIndex="0"
              >
                <a
                  href={"#"}
                  onClick={(e) => {
                    e.preventDefault();
                    setId(0);
                  }}
                >
                  <img src={productsImg01} alt="img" />
                </a>
              </div>
              <div
                className="tab-pane"
                id="itemTwo-tab-pane"
                role="tabpanel"
                aria-labelledby="itemTwo-tab"
                tabIndex="0"
              >
                <a
                  href={"#"}
                  onClick={(e) => {
                    e.preventDefault();
                    setId(1);
                  }}
                >
                  <img src={productsImg02} alt="img" />
                </a>
              </div>
              <div
                className="tab-pane"
                id="itemThree-tab-pane"
                role="tabpanel"
                aria-labelledby="itemThree-tab"
                tabIndex="0"
              >
                <a
                  href={"#"}
                  onClick={(e) => {
                    e.preventDefault();
                    setId(2);
                  }}
                >
                  <img src={productsImg03} alt="img" />
                </a>
              </div>
              <div
                className="tab-pane"
                id="itemFour-tab-pane"
                role="tabpanel"
                aria-labelledby="itemFour-tab"
                tabIndex="0"
              >
                <a
                  href={"#"}
                  onClick={(e) => {
                    e.preventDefault();
                    setId(3);
                  }}
                >
                  <img src={productsImg04} alt="img" />
                </a>
              </div>
            </div>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="itemOne-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#itemOne-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="itemOne-tab-pane"
                  aria-selected="true"
                >
                  <img src={productsImg01} alt="img" />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="itemTwo-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#itemTwo-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="itemTwo-tab-pane"
                  aria-selected="false"
                >
                  <img src={productsImg02} alt="img" />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="itemThree-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#itemThree-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="itemThree-tab-pane"
                  aria-selected="false"
                >
                  <img src={productsImg03} alt="img" />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="itemFour-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#itemFour-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="itemFour-tab-pane"
                  aria-selected="false"
                >
                  <img src={productsImg04} alt="img" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="product__details-content">
            <span className="tag">Cat Food</span>
            <h2 className="title">
              Meow Mix Seafood Medley Dry Cat Food, 3.15-Pound
            </h2>
            <div className="product__reviews-wrap">
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
              <div className="product__code">
                <span>
                  SKU: <strong>CAT4502</strong>
                </span>
              </div>
            </div>
            <h4 className="price">$29.00</h4>
            <p>
              Cat Food nullam malesuada aenean congue semper donec velit ultrice
              search hendrerit enim, conubia sociis adipiscing sed tempor curae
              elit nibh rutrum ipsum. Consectetur sollicitudin.
            </p>
            <div className="product__size-wrap">
              <span className="size-title">Size:</span>
              <ul className="list-wrap">
                <li>
                  <button>250mg</button>
                </li>
                <li>
                  <button>500mg</button>
                </li>
                <li>
                  <button>1kg</button>
                </li>
              </ul>
            </div>

            <div className="product__details-qty">
              <div className="cart-plus-minus">
                <div
                  className="dec qtybutton"
                  onClick={() => handleQuantityChange("dec")}
                >
                  <span>-</span>
                </div>
                <input type="text" value={quantity} readOnly />
                <div
                  className="inc qtybutton"
                  onClick={() => handleQuantityChange("inc")}
                >
                  <span>+</span>
                </div>
              </div>

              <Link to="/product-details" className="add-btn">
                Add To Cart
              </Link>
            </div>

            <Link to="/product-details" className="buy-btn">
              Buy it Now
            </Link>
            <div className="product__wishlist-wrap">
              <Link to="/product-details">
                <i className="flaticon-love"></i>Add To Wishlist
              </Link>
              <Link to="/product-details">
                <i className="flaticon-exchange"></i>Compare To Other
              </Link>
            </div>
            <div className="product__details-bottom">
              <ul className="list-wrap">
                <li className="product__details-category">
                  <span className="title">Categories:</span>
                  <Link to="/product-details">Cat,</Link>
                  <Link to="/product-details">Food,</Link>
                  <Link to="/product-details">Care</Link>
                </li>
                <li className="product__details-tags">
                  <span className="title">Tags:</span>
                  <Link to="/product-details">Food Pet,</Link>
                  <Link to="/product-details">Pet Essentials</Link>
                </li>
                <li className="product__details-social">
                  <span className="title">Share :</span>
                  <ul className="list-wrap">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.whatsapp.com/" target="_blank">
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/" target="_blank">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="product__details-checkout">
              <span className="title">Guaranteed Safe Checkout</span>
              <img src={cardImg} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        slides={slides}
        open={id !== null}
        index={id}
        close={() => setId(null)}
        styles={{ container: { background: "rgba(0,0,0,0.75)" } }}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
};
