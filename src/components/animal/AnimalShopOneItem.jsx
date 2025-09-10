import React from "react";
import { Link } from "react-router-dom";

export const AnimalShopOneItem = ({ src, id, title, price }) => {
  return (
    <div className="animal__item shine-animate-item">
      <div className="animal__thumb shine-animate">
        <Link to="/animal-details">
          <img src={src} alt="img" />
        </Link>
        <Link to="/animal-details" className="wishlist">
          <i className="flaticon-love"></i>
        </Link>
      </div>

      <div className="animal__content">
        <span className="animal-code">ID: {id}</span>
        <h4 className="title">
          <Link to="/animal-details">{title}</Link>
        </h4>
        <h4 className="price">${price}</h4>
      </div>
    </div>
  );
};
