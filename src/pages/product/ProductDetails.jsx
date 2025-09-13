import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../Context/ProductProvider";

import { Layout } from "../../layouts/Layout";
import { ProductDetailsTop } from "../../components/products/ProductDetailsTop";
import { ProductDetailsReview } from "../../components/products/ProductDetailsReview";
import { ProductRelated } from "../../components/products/ProductRelated";

export const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  // find product by ID
  const product = products.find((p) => p._id === id);

  if (!product) return <div>Product not found!</div>;

  return (
    <Layout
      breadcrumbTitle="Products Details"
      breadcrumbSubtitle={"All Products"}
    >
      <section className="product__details-area">
        <div className="container">
          {/* top */}
          <ProductDetailsTop product={product} />

          {/* review */}
          <ProductDetailsReview product={product} />

        </div>
      </section>
    </Layout>
  );
};
