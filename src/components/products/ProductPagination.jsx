import React from "react";
import { Link } from "react-router-dom";

import paginationPrev from "../../assets/img/icon/pagination_icon01.svg";
import paginationNext from "../../assets/img/icon/pagination_icon02.svg";

export const ProductPagination = () => {
  return (
    <nav className="pagination__wrap mt-50">
      <ul className="list-wrap">
        <li className="link-arrow">
          <Link to="#">
            <img src={paginationPrev} alt="Previous" className="injectable" />
          </Link>
        </li>
        <li className="active">
          <Link to="#">1</Link>
        </li>
        <li>
          <Link to="/courses">2</Link>
        </li>
        <li>
          <Link to="/courses">3</Link>
        </li>
        <li>
          <Link to="/courses">4</Link>
        </li>
        <li className="link-arrow">
          <Link to="#">
            <img src={paginationNext} alt="Next" className="injectable" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
