import React from "react";
import { Layout } from "../../layouts/Layout";
import { ProductPagination } from "../../components/products/ProductPagination";
import { ProductAll } from "../../components/products/ProductAll";

export const Product = () => {
  return (
    <Layout breadcrumbTitle="All Products">
      <section className="product__area-four">
        <div className="container">
          {/* list */}
          <ProductAll />

          {/* pagination */}
          <ProductPagination />
        </div>
      </section>
    </Layout>
  );
};
