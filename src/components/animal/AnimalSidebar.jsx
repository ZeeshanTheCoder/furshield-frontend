import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export const AnimalSidebar = () => {
  const petCategories = [
    { id: "cat_1", label: "Dogs", count: 344 },
    { id: "cat_2", label: "Cats", count: 12 },
    { id: "cat_3", label: "Rabbit", count: 56 },
    { id: "cat_4", label: "Birds", count: 14 },
    { id: "cat_5", label: "Fish", count: 11 },
    { id: "cat_6", label: "Others", count: 14 },
  ];

  const breedsList = [
    { id: "bre_1", label: "Airedale Terrier" },
    { id: "bre_2", label: "American Eskimo" },
    { id: "bre_3", label: "Basset Hound" },
    { id: "bre_4", label: "Bernese Mountain Dog" },
    { id: "bre_5", label: "Bichon Frise" },
  ];

  const locationList = [
    { id: "loc_1", label: "All" },
    { id: "loc_2", label: "NewYork City" },
    { id: "loc_3", label: "Kansas City" },
    { id: "loc_4", label: "NewJersey" },
  ];

  useEffect(() => {
    $("#slider-range").slider({
      range: true,
      min: 10,
      max: 400,
      values: [60, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  }, []);

  return (
    <div className="col-xl-3 col-lg-4">
      <aside className="animal__sidebar">
        {/* filters */}
        <div className="animal__widget">
          <h4 className="animal__widget-title">Filters</h4>
          <div className="sidebar-search-form">
            <form action="#">
              <input type="text" placeholder="Type Keywords. . ." />
              <button type="submit">
                <i className="flaticon-loupe"></i>
              </button>
            </form>
          </div>
        </div>

        {/* price range */}
        <div className="animal__widget">
          <h4 className="animal__widget-title">Price Range</h4>
          <div className="price_filter">
            <div id="slider-range"></div>
            <div className="price_slider_amount">
              <input
                type="text"
                id="amount"
                name="price"
                placeholder="Add Your Price"
              />
            </div>
          </div>
        </div>

        {/* pet categories */}
        <div className="animal__widget">
          <h4 className="animal__widget-title">Pet Categories</h4>
          <div className="courses-cat-list">
            <ul className="list-wrap">
              {petCategories.map((category) => (
                <li key={category.id}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id={category.id}
                    />
                    <label className="form-check-label" htmlFor={category.id}>
                      {category.label} <span>({category.count})</span>
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* breeds */}
        <div className="animal__widget">
          <h4 className="animal__widget-title">Breeds</h4>
          <div className="courses-cat-list">
            <ul className="list-wrap">
              {breedsList.map((breed) => (
                <li key={breed.id}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id={breed.id}
                    />
                    <label className="form-check-label" htmlFor={breed.id}>
                      {breed.label}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* gender */}
        <div className="animal__widget">
          <h4 className="animal__widget-title">Gender</h4>
          <div className="courses-cat-list">
            <ul className="list-wrap">
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="gender_1"
                  />
                  <label className="form-check-label" htmlFor="gender_1">
                    Male (344)
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="gender_2"
                  />
                  <label className="form-check-label" htmlFor="gender_2">
                    Female (21)
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* location */}
        <div className="animal__widget">
          <h4 className="animal__widget-title">Location</h4>
          <div className="courses-cat-list">
            <ul className="list-wrap">
              {locationList.map((location) => (
                <li key={location.id}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id={location.id}
                    />
                    <label className="form-check-label" htmlFor={location.id}>
                      {location.label}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="apply-btn">
            <Link to="#" className="btn">
              Apply Now
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
};
