import React from "react";
import { ProductOneItem } from "./ProductOneItem";

import products_img01 from "../../assets/img/products/products_img01.jpg";
import products_img02 from "../../assets/img/products/products_img02.jpg";
import products_img03 from "../../assets/img/products/products_img03.jpg";
import products_img04 from "../../assets/img/products/products_img04.jpg";
import products_img05 from "../../assets/img/products/products_img05.jpg";
import products_img06 from "../../assets/img/products/products_img06.jpg";
import products_img07 from "../../assets/img/products/products_img07.jpg";
import products_img08 from "../../assets/img/products/products_img08.jpg";
import products_img09 from "../../assets/img/products/products_img09.jpg";
import products_img10 from "../../assets/img/products/products_img10.jpg";
import products_img11 from "../../assets/img/products/products_img11.jpg";
import products_img12 from "../../assets/img/products/products_img12.jpg";
import products_img13 from "../../assets/img/products/products_img13.jpg";
import products_img14 from "../../assets/img/products/products_img14.jpg";
import products_img15 from "../../assets/img/products/products_img15.jpg";

export const ProductAll = () => {
  const products = [
    {
      image: products_img01,
      badge: { type: "new", text: "New" },
      reviews: 2,
      title: "Dog Harness-Neoprene Comfort Liner-Orange and ...",
      price: 12.0,
      oldPrice: 25.0,
    },
    {
      image: products_img02,
      badge: { type: "sale", text: "Sale!" },
      reviews: 2,
      title: "Arm & Hammer Super Deodori zing Dog Shampoo, Pet Wash",
      price: 20.0,
      oldPrice: 30.0,
    },
    {
      image: products_img03,
      reviews: 2,
      title: "Milk-Bone Brushing Chews Daily Dental Dog Treats ...",
      price: 36.0,
      oldPrice: 56.0,
    },
    {
      image: products_img04,
      badge: { type: "sale", text: "Sale!" },
      reviews: 2,
      title: 'Two Door Top Load Plastic Kennel & Pet Carrier, Blue 19"',
      price: 18.0,
      oldPrice: 33.0,
    },
    {
      image: products_img05,
      badge: { type: "new", text: "New" },
      reviews: 2,
      title: "The Kitten House with Mat Sleeping Bed House",
      price: 19.0,
      oldPrice: 28.0,
    },
    {
      image: products_img06,
      badge: { type: "sale", text: "Sale!" },
      reviews: 2,
      title: "Dog Puzzle Toys, Squeaky Treat Dispensing Dog",
      price: 18.0,
      oldPrice: 33.0,
    },
    {
      image: products_img07,
      badge: { type: "new", text: "New" },
      reviews: 2,
      title: "Zesty Paws Calming Puppy Bites Stress Relief for Dogs, 60 Count",
      price: 16.0,
      oldPrice: 50.0,
    },
    {
      image: products_img08,
      reviews: 2,
      title: "Hartz Groomer's Best Extra Gentle Puppy Shampoo, 18oz.",
      price: 30.0,
      oldPrice: 88.0,
    },
    {
      image: products_img09,
      badge: { type: "new", text: "New" },
      reviews: 2,
      title: "The Kitten House with Mat Sleeping Bed House",
      price: 22.0,
      oldPrice: 59.0,
    },
    {
      image: products_img10,
      badge: { type: "sale", text: "Sale!" },
      reviews: 2,
      title: "Dog Harness-Neoprene Comfort Liner-Orange and Comfort",
      price: 11.0,
      oldPrice: 48.0,
    },
    {
      image: products_img11,
      badge: { type: "new", text: "New" },
      reviews: 7,
      title: "Dog Puzzle Toys, Squeaky Treat Dispensing Dog",
      price: 19.0,
      oldPrice: 28.0,
    },
    {
      image: products_img12,
      badge: { type: "new", text: "New" },
      reviews: 2,
      title: "Zesty Paws Calming Puppy Bites Stress Relief for Dogs, 60 Count",
      price: 16.0,
      oldPrice: null,
    },
    {
      image: products_img13,
      badge: { type: "sale", text: "Sale!" },
      reviews: 20,
      title: "Hartz Groomer's Best Extra Gentle Puppy Shampoo, 18oz Shampoo",
      price: 30.0,
      oldPrice: 88.0,
    },
    {
      image: products_img14,
      badge: { type: "new", text: "New" },
      reviews: 10,
      title: "The Kitten House with Mat Sleeping Bed House",
      price: 22.0,
      oldPrice: 59.0,
    },
    {
      image: products_img15,
      badge: { type: "sale", text: "Sale!" },
      reviews: 2,
      title: "Dog Harness-Neoprene Comfort Liner-Orange and ...",
      price: 11.0,
      oldPrice: 48.0,
    },
  ];

  return (
    <div className="row gutter-20 row-cols-1 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center">
      {products.map((product, index) => (
        <div className="col" key={index}>
          <ProductOneItem {...product} />
        </div>
      ))}
    </div>
  );
};
