import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export const HeaderNav = () => {
  const { pathname } = useLocation();

  const isActiveMenu = (paths) => {
    return paths.some((path) => pathname === path);
  };

  return (
    <ul className="navigation">
       <li className={pathname === "/" ? "active" : ""}>
        <Link to="/">Home</Link>
      </li>
      <li className={pathname === "/about" ? "active" : ""}>
        <Link to="/about">About</Link>
      </li>
      <li className={pathname === "/product" ? "active" : ""}>
        <Link to="/product">Shop</Link>
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
        <a>Resources</a>
        <ul className="sub-menu">
        
          <li className={pathname === "/gallery" ? "active" : ""}>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className={pathname === "/faq" ? "active" : ""}>
            <Link to="/faq">Faq Page</Link>
          </li>
          
          <li className={pathname === "/blog" ? "active" : ""}>
            <Link to="/blog">Our Blog</Link>
          </li>
         
        </ul>
      </li>
      <li className={pathname === "/contact" ? "active" : ""}>
        <Link to="/contact">contacts</Link>
      </li>
    </ul>
  );
};
