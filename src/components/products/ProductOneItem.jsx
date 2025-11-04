import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../services/BaseUrl";

export const ProductOneItem = ({
  _id,
  image,
  badge,
  title,
  price,
  oldPrice,
}) => {
  const [reviewsCount, setReviewsCount] = useState(0);
  const [avgRating, setAvgRating] = useState(0);

  //   Fetch reviews dynamically
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axiosInstance.get(
          `/reviews-rating/allProductReview?productId=${_id}`
        );
        const allReviews = res.data.reviews || [];
        setReviewsCount(allReviews.length);

        if (allReviews.length > 0) {
          const total = allReviews.reduce((sum, r) => sum + (r.rating || 0), 0);
          setAvgRating(total / allReviews.length);
        } else {
          setAvgRating(0);
        }
      } catch (err) {
        console.log(err.response?.data?.message || "Error fetching reviews");
      }
    };

    if (_id) fetchReviews();
  }, [_id]);

  return (
    <div className="product__item">
      <div className="product__thumb">
        <Link to={`/product-details/${_id}`}>
          <img src={image} alt="img" />
        </Link>
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
          <Link to={`/product-details/${_id}`} className="btn">
            <i className="flaticon-shopping-bag"></i>Details
          </Link>
        </div>
      </div>

      <div className="product__content">
        {/*   Dynamic Reviews with Stars */}
        <div className="product__reviews">
          <div className="rating">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <i
                  key={index}
                  className={`fas fa-star`}
                  style={{
                    color: starValue <= avgRating ? "#ffc107" : "#e4e5e9",
                  }}
                ></i>
              );
            })}
          </div>
          <span>({reviewsCount} Reviews)</span>
        </div>

        <h4 className="title">
          <Link to={`/product-details/${_id}`}>{title}</Link>
        </h4>

        <h3 className="price">
          ${price?.toFixed(2)} <del>${oldPrice?.toFixed(2)}</del>
        </h3>
      </div>
    </div>
  );
};
