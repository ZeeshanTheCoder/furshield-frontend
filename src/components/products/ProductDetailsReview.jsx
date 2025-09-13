import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../services/BaseUrl";

export const ProductDetailsReview = ({ product }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const [reviews, setReviews] = useState([]);

  // fetch reviews
  useEffect(() => {
    const fetchMyReview = async () => {
      try {
        const res = await axiosInstance.get(
          `/reviews-rating/productreview?productId=${product._id}`
        );
        console.log("Fetched Review:", res.data);
        setReviews(res.data.reviews || []);
      } catch (err) {
        console.log(err.response?.data?.message || "Error fetching review");
      }
    };

    if (product._id) {
      fetchMyReview();
    }
  }, [product._id, message]);

  // submit review
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/reviews-rating/createreview", {
        rating,
        comment,
        productId: product._id,
      });

      setMessage(res.data.message);
      setRating(0);
      setComment("");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error submitting review");
    }
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="product-desc-wrap">
          {/* Tabs */}
          <ul className="nav nav-tabs" id="myTab2" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="description-tab"
                data-bs-toggle="tab"
                data-bs-target="#description-tab-pane"
                type="button"
                role="tab"
              >
                Description
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="reviews-tab"
                data-bs-toggle="tab"
                data-bs-target="#reviews-tab-pane"
                type="button"
                role="tab"
              >
                Reviews
              </button>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="tab-content" id="myTabContent2">
            {/* Description */}
            <div
              className="tab-pane fade show active"
              id="description-tab-pane"
              role="tabpanel"
            >
              <p>{product.description || "No description available."}</p>
            </div>

            {/* Reviews */}
            <div className="tab-pane fade" id="reviews-tab-pane" role="tabpanel">
              <div className="product-desc-review">
                {/* Reviews List */}
                <div className="product-desc-review-title mb-15">
                  <h5 className="title">
                    Customer Reviews ({reviews.length})
                  </h5>
                </div>

                {reviews.length === 0 ? (
                  <p>No reviews yet</p>
                ) : (
                  <ul className="list-unstyled">
                    {reviews.map((rev) => (
                      <li key={rev._id} className="mb-3 border-bottom pb-2">
                        <strong>{rev.userId?.name || "Anonymous"}</strong>{" "}
                        <br />
                        <span style={{ color: "#ffc107" }}>
                          {"★".repeat(rev.rating)}{" "}
                          {"☆".repeat(5 - rev.rating)}
                        </span>
                        <p>{rev.comment}</p>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Review Form */}
                <div className="mt-4">
                  <h5 className="title">Write a Review</h5>
                  {message && <p className="text-success">{message}</p>}

                  <form onSubmit={handleSubmit}>
                    {/* Rating Stars */}
                    <div className="flex gap-2 mb-2">
                      {[...Array(5)].map((_, index) => {
                        const starValue = index + 1;
                        return (
                          <span
                            key={starValue}
                            onClick={() => setRating(starValue)}
                            onMouseEnter={() => setHover(starValue)}
                            onMouseLeave={() => setHover(0)}
                            style={{
                              cursor: "pointer",
                              color:
                                starValue <= (hover || rating)
                                  ? "#ffc107"
                                  : "#e4e5e9",
                              fontSize: "24px",
                            }}
                          >
                            ★
                          </span>
                        );
                      })}
                    </div>

                    {/* Comment */}
                    <textarea
                      className="form-control mb-2"
                      placeholder="Write your review..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />

                    <button type="submit" className="btn btn-primary">
                      Submit Review
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};