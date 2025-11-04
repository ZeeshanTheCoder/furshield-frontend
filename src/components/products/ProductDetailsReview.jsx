import React, { useState, useEffect, useContext } from "react";
import { axiosInstance } from "../../services/BaseUrl";
import { AppContext } from "../../Context/MainContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ProductDetailsReview = ({ product }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const [reviews, setReviews] = useState([]);
  const [editingReviewId, setEditingReviewId] = useState(null);

  const { userdata } = useContext(AppContext);
  const navigate = useNavigate();

  // fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axiosInstance.get(
          `/reviews-rating/allProductReview?productId=${product._id}`
        );
        setReviews(res.data.reviews || []);
      } catch (err) {
        console.log(err.response?.data?.message || "Error fetching review");
      }
    };

    if (product._id) {
      fetchReviews();
    }
  }, [product._id, message]);

  // create or update review
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userdata || !userdata._id) {
      toast.error("Please login to write a review");
      return navigate("/login");
    }

    try {
      if (editingReviewId) {
        // update
        const res = await axiosInstance.put(
          `/reviews-rating/${editingReviewId}`,
          {
            rating,
            comment,
          }
        );
        setMessage(res.data.message);
        setEditingReviewId(null);
      } else {
        // create
        const res = await axiosInstance.post("/reviews-rating/createreview", {
          rating,
          comment,
          productId: product._id,
        });
        setMessage(res.data.message);
      }

      setRating(0);
      setComment("");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error submitting review");
    }
  };

  // edit review
  const handleEdit = (rev) => {
    setEditingReviewId(rev._id);
    setRating(rev.rating);
    setComment(rev.comment);
  };

  // delete review
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?"
    );
    if (!confirmDelete) return;

    try {
      const res = await axiosInstance.delete(`/reviews-rating/${id}`);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error deleting review");
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
              <p>{product.description || "Designed with a perfect balance of quality, comfort, and practicality, this product ensures a satisfying experience for both pets and their owners. Made from safe, durable, and pet-friendly materials, it supports daily use without compromising on performance or hygiene. Whether used for feeding, playtime, grooming, or style, it provides maximum comfort and convenience in every situation. The thoughtful design helps maintain pets’ health and happiness, encouraging activity, relaxation, and good habits. Easy to clean, long-lasting, and suitable for all breeds and sizes, this product blends function with modern aesthetics, making it a reliable choice for everyday pet care."}</p>
            </div>

            {/* Reviews */}
            <div
              className="tab-pane fade"
              id="reviews-tab-pane"
              role="tabpanel"
            >
              <div className="product-desc-review">
                {/* Reviews List */}
                <div className="product-desc-review-title mb-15">
                  <h5 className="title">Customer Reviews ({reviews.length})</h5>
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
                          {"★".repeat(rev.rating)} {"☆".repeat(5 - rev.rating)}
                        </span>
                        <p>{rev.comment}</p>
                        {/* Edit/Delete Buttons only for owner */}
                        {userdata && userdata._id === rev.userId?._id && (
                          <>
                            <button
                              className="btn btn-sm btn-outline-primary me-2"
                              onClick={() => handleEdit(rev)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => handleDelete(rev._id)}
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Review Form */}
                <div className="mt-4">
                  <h5 className="title">
                    {editingReviewId ? "Edit Review" : "Write a Review"}
                  </h5>
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
                      {editingReviewId ? "Update Review" : "Submit Review"}
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
