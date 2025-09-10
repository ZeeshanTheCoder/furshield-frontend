import React from "react";
import { Layout } from "../../layouts/Layout";
import { ProductDetailsTop } from "../../components/products/ProductDetailsTop";
import { ProductDetailsReview } from "../../components/products/ProductDetailsReview";
import { ProductRelated } from "../../components/products/ProductRelated";

export const ProductDetails = () => {
  return (
    <Layout
      breadcrumbTitle="Products Details"
      breadcrumbSubtitle={"All Products"}
    >
      <section className="product__details-area">
        <div className="container">
          {/* top */}
          <ProductDetailsTop />

          {/* review */}
          <ProductDetailsReview />

          {/* related products */}
          <ProductRelated />
        </div>
      </section>
    </Layout>
  );
};
