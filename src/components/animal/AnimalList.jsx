import React from "react";
import { Link } from "react-router-dom";
import { ProductPagination } from "../products/ProductPagination";

import animalImg1 from "../../assets/img/shop/shop_img01.jpg";
import animalImg2 from "../../assets/img/shop/shop_img02.jpg";
import animalImg3 from "../../assets/img/shop/shop_img03.jpg";
import animalImg4 from "../../assets/img/shop/shop_img04.jpg";
import animalImg5 from "../../assets/img/shop/shop_img05.jpg";
import animalImg6 from "../../assets/img/shop/shop_img06.jpg";
import animalImg7 from "../../assets/img/shop/shop_img07.jpg";
import animalImg8 from "../../assets/img/shop/shop_img08.jpg";
import animalImg9 from "../../assets/img/shop/shop_img09.jpg";

export const AnimalList = () => {
  const animals = [
    {
      id: 1,
      image: animalImg1,
      name: "Cute French Bulldog",
      gender: "Male",
      breed: "French",
      location: "Bakersfield, California",
    },
    {
      id: 2,
      image: animalImg2,
      name: "purebred pussycat",
      gender: "Female",
      breed: "Germany",
      location: "Central Park, New York",
    },
    {
      id: 3,
      image: animalImg3,
      name: "Italian Rabbit",
      gender: "Male",
      breed: "Italy",
      location: "Birmingham, Alabama",
    },
    {
      id: 4,
      image: animalImg4,
      name: "Macaw Russian",
      gender: "Male",
      breed: "Canada",
      location: "Anchorage, Alaska",
    },
    {
      id: 5,
      image: animalImg5,
      name: "Egypt Cat",
      gender: "Male",
      breed: "Egypt",
      location: "Bakersfield, California",
    },
    {
      id: 6,
      image: animalImg6,
      name: "Australian Shepherd",
      gender: "Female",
      breed: "Australia",
      location: "Central Park, New York",
    },
    {
      id: 7,
      image: animalImg7,
      name: "Beagle Britain",
      gender: "Female",
      breed: "Egypt",
      location: "Anchorage, Alaska",
    },
    {
      id: 8,
      image: animalImg8,
      name: "Maltipoo USA",
      gender: "Male",
      breed: "USA",
      location: "Birmingham, Alabama",
    },
    {
      id: 9,
      image: animalImg9,
      name: "purebred pussycat",
      gender: "Female",
      breed: "Germany",
      location: "Central Park, New York",
    },
  ];

  return (
    <div className="col-xl-9 col-lg-8 order-0 order-lg-2">
      <div className="row">
        {animals.map((animal) => (
          <div key={animal.id} className="col-xl-4 col-md-6">
            <div className="animal__item animal__item-two animal__item-three shine-animate-item">
              <div className="animal__thumb animal__thumb-two shine-animate">
                <Link to={`/animal-details`}>
                  <img src={animal.image} alt={animal.name} />
                </Link>
                <Link to={`/animal-details`} className="wishlist">
                  <i className="flaticon-love"></i>
                </Link>
              </div>
              <div className="animal__content animal__content-two">
                <h4 className="title">
                  <Link to={`/animal-details`}>{animal.name}</Link>
                </h4>
                <div className="pet-info">
                  <ul className="list-wrap">
                    <li>
                      Gender: <span>{animal.gender}</span>
                    </li>
                    <li>
                      Breed: <span>{animal.breed}</span>
                    </li>
                  </ul>
                </div>
                <div className="location">
                  <i className="flaticon-placeholder"></i>
                  <span>{animal.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* pagination */}
      <ProductPagination />
    </div>
  );
};
