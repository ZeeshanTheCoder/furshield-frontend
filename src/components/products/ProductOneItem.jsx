import React from "react";
import { Link } from "react-router-dom";

export const ProductOneItem = ({
  image,
  badge,
  reviews,
  title,
  price,
  oldPrice,
}) => {
  return (
    <div className="product__item">
      <div className="product__thumb">
        <Link to="/product-details">
          <img src={image} alt="img" />
        </Link>
        <div className="product__action">
          <Link to="/product-details">
            <i className="flaticon-love"></i>
          </Link>
          <Link to="/product-details">
            <i className="flaticon-loupe"></i>
          </Link>
          <Link to="/product-details">
            <i className="flaticon-exchange"></i>
          </Link>
        </div>
        {badge && (
          <div
            className={`sale-wrap ${
              badge.type === "sale" ? "sale-wrap-two" : ""
            }`}
          >
            <span>{badge.text}</span>
          </div>
        )}
        <div className="product__add-cart">
          <Link to="/product-details" className="btn">
            <i className="flaticon-shopping-bag"></i>Add To Cart
          </Link>
        </div>
      </div>
      <div className="product__content">
        <div className="product__reviews">
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <i key={index} className="fas fa-star"></i>
            ))}
          </div>
          <span>({reviews} Reviews)</span>
        </div>
        <h4 className="title">
          <Link to="/product-details">{title}</Link>
        </h4>
        <h3 className="price">
          ${price?.toFixed(2)} <del>${oldPrice?.toFixed(2)}</del>
        </h3>
      </div>
    </div>
  );
};
