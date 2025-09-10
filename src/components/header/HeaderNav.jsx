import React from "react";
import { Link, useLocation } from "react-router-dom";

export const HeaderNav = () => {
  const { pathname } = useLocation();

  const isActiveMenu = (paths) => {
    return paths.some((path) => pathname === path);
  };

  return (
    <ul className="navigation">
      <li
        className={`menu-item-has-children ${
          isActiveMenu(["/", "/home2", "/home3", "/home4"]) ? "active" : ""
        }`}
      >
        <a href="#">Home</a>
        <ul className="sub-menu">
          <li className={pathname === "/" ? "active" : ""}>
            <Link to="/">Pet Care & Veterinary</Link>
          </li>
          <li className={pathname === "/home2" ? "active" : ""}>
            <Link to="/home2">Pet Breed</Link>
          </li>
          <li className={pathname === "/home3" ? "active" : ""}>
            <Link to="/home3">Pet Adopt</Link>
          </li>
          <li className={pathname === "/home4" ? "active" : ""}>
            <Link to="/home4">pet Woocommerce</Link>
          </li>
        </ul>
      </li>
      <li className={pathname === "/about" ? "active" : ""}>
        <Link to="/about">About</Link>
      </li>
      <li
        className={`menu-item-has-children ${
          isActiveMenu(["/product", "/product-details"]) ? "active" : ""
        }`}
      >
        <a href="#">Shop</a>
        <ul className="sub-menu">
          <li className={pathname === "/product" ? "active" : ""}>
            <Link to="/product">Our Shop</Link>
          </li>
          <li className={pathname === "/product-details" ? "active" : ""}>
            <Link to="/product-details">Shop Details</Link>
          </li>
        </ul>
      </li>
      <li
        className={`menu-item-has-children ${
          isActiveMenu([
            "/animal",
            "/animal-details",
            "/gallery",
            "/faq",
            "/pricing",
            "/reservation",
            "/team",
            "/team-details",
            "/blog",
            "/blog-details",
            "/error",
          ])
            ? "active"
            : ""
        }`}
      >
        <a href="#">Pages</a>
        <ul className="sub-menu">
          <li className={pathname === "/animal" ? "active" : ""}>
            <Link to="/animal">All Pets</Link>
          </li>
          <li className={pathname === "/animal-details" ? "active" : ""}>
            <Link to="/animal-details">Pet Details</Link>
          </li>
          <li className={pathname === "/gallery" ? "active" : ""}>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className={pathname === "/faq" ? "active" : ""}>
            <Link to="/faq">Faq Page</Link>
          </li>
          <li className={pathname === "/pricing" ? "active" : ""}>
            <Link to="/pricing">Pricing Page</Link>
          </li>
          <li className={pathname === "/reservation" ? "active" : ""}>
            <Link to="/reservation">Reservation Page</Link>
          </li>
          <li className={pathname === "/team" ? "active" : ""}>
            <Link to="/team">Our Team</Link>
          </li>
          <li className={pathname === "/team-details" ? "active" : ""}>
            <Link to="/team-details">Team Details</Link>
          </li>
          <li className={pathname === "/blog" ? "active" : ""}>
            <Link to="/blog">Our Blog</Link>
          </li>
          <li className={pathname === "/blog-details" ? "active" : ""}>
            <Link to="/blog-details">Blog Details</Link>
          </li>
          <li className={pathname === "/error" ? "active" : ""}>
            <Link to="/error">404 Error Page</Link>
          </li>
        </ul>
      </li>
      <li className={pathname === "/contact" ? "active" : ""}>
        <Link to="/contact">contacts</Link>
      </li>
    </ul>
  );
};
