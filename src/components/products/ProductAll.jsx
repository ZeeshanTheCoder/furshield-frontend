// src/components/products/ProductAll.jsx
import React, { useContext, useState, useMemo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductOneItem } from "./ProductOneItem";
import { ProductContext } from "../../Context/ProductProvider";
import { axiosInstance } from "../../services/BaseUrl";

export const ProductAll = () => {
  const { products } = useContext(ProductContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Extract initial search query from URL
  const urlParams = new URLSearchParams(location.search);
  const initialQuery = urlParams.get("q") || "";

  const [nameFilter, setNameFilter] = useState(initialQuery);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

  const [productRatings, setProductRatings] = useState({});

  const categories = useMemo(() => {
    const cats = products.map(p => p.category).filter(Boolean);
    return Array.from(new Set(cats));
  }, [products]);

  useEffect(() => {
    const fetchAllRatings = async () => {
      const ratingsMap = {};
      for (const product of products) {
        try {
          const res = await axiosInstance.get(
            `/reviews-rating/allProductReview?productId=${product._id}`
          );
          const reviews = res.data.reviews || [];
          if (reviews.length > 0) {
            const total = reviews.reduce((sum, r) => sum + (r.rating || 0), 0);
            ratingsMap[product._id] = total / reviews.length;
          } else {
            ratingsMap[product._id] = 0;
          }
        } catch (err) {
          ratingsMap[product._id] = 0;
        }
      }
      setProductRatings(ratingsMap);
    };

    if (products.length > 0) {
      fetchAllRatings();
    }
  }, [products]);

  // Sync nameFilter with URL when it changes (optional but clean)
  useEffect(() => {
    const params = new URLSearchParams();
    if (nameFilter) params.set("q", nameFilter);
    if (categoryFilter !== "all") params.set("category", categoryFilter);
    if (sortOrder !== "default") params.set("sort", sortOrder);

    navigate(`/product?${params.toString()}`, { replace: true });
  }, [nameFilter, categoryFilter, sortOrder, navigate]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFilter !== "all") {
      result = result.filter(p => p.category === categoryFilter);
    }

    if (nameFilter) {
      const term = nameFilter.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(term));
    }

    if (sortOrder === "popular") {
      result.sort((a, b) => (productRatings[b._id] || 0) - (productRatings[a._id] || 0));
    } else if (sortOrder === "priceHighLow") {
      result.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sortOrder === "priceLowHigh") {
      result.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortOrder === "nameAsc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "nameDesc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [products, nameFilter, categoryFilter, sortOrder, productRatings]);

  return (
    <>
      <div className="mb-4 d-flex flex-wrap gap-3 align-items-center">
        <div className="w-50">
          <input
            type="text"
            className="form-control p-3 border rounded-pill bg-white"
            style={{ backgroundImage: "none", color: "#8793AB" }}
            placeholder="Search by product name..."
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </div>

        {categories.length > 0 && (
          <div className="d-flex align-items-center" style={{ width: "17%" }}>
            <label className="me-2">Category:</label>
            <select
              className="form-control p-3 border rounded-pill bg-white"
              style={{ backgroundImage: "none", color: "#8793AB" }}
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">All</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="d-flex align-items-center" style={{ width: "22%" }}>
          <label className="me-2">Sort:</label>
          <select
            className="form-control p-3 border rounded-pill bg-white"
            style={{ backgroundImage: "none", color: "#8793AB" }}
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="popular">Popular</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="nameAsc">Product: A → Z</option>
            <option value="nameDesc">Product: Z → A</option>
          </select>
        </div>
      </div>

      <div className="row gutter-20 row-cols-1 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col" key={product._id}>
              <ProductOneItem
                _id={product._id}
                image={product.image}
                title={product.name}
                price={product.price}
                badge={product.badge || null}
              />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <p className="text-muted">No products found.</p>
          </div>
        )}
      </div>
    </>
  );
};