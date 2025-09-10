import React from "react";

export const ProductDetailsReview = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="product-desc-wrap">
          <ul className="nav nav-tabs" id="myTab2" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="description-tab"
                data-bs-toggle="tab"
                data-bs-target="#description-tab-pane"
                type="button"
                role="tab"
                aria-controls="description-tab-pane"
                aria-selected="true"
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
                aria-controls="reviews-tab-pane"
                aria-selected="false"
              >
                Reviews
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent2">
            <div
              className="tab-pane fade show active"
              id="description-tab-pane"
              role="tabpanel"
              aria-labelledby="description-tab"
              tabIndex="0"
            >
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet ante. ibero sit
                amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
                placerat eleifend leo.ea commodo consat. Duis aute irure dolor
                in reprehenderit volup tate velitesse cillum dolore euy elit ale
                ruin irure dolor.uis aute irure dolor in reprehenderit n volup
                tate velit esse cillum,
              </p>
              <p>
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies
                eget, tempor sit amet bero sit amet uam egestas semper. Aenean
                ultricies mi vitae est. Mauris placerat eleifend leo.ea commodo
                consat.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="reviews-tab-pane"
              role="tabpanel"
              aria-labelledby="reviews-tab"
              tabIndex="0"
            >
              <div className="product-desc-review">
                <div className="product-desc-review-title mb-15">
                  <h5 className="title">Customer Reviews (0)</h5>
                </div>
                <div className="left-rc">
                  <p>No reviews yet</p>
                </div>
                <div className="right-rc">
                  <a href="#">Write a review</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
