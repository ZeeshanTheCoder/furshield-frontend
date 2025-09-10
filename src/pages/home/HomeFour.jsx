import React from "react";
import { Layout } from "../../layouts/Layout";
import { BannerFour } from "../../components/banner/BannerFour";
import { FeatureOne } from "../../components/features/FeatureOne";
import { ProductOne } from "../../components/products/ProductOne";
import { CategoryOne } from "../../components/category/CategoryOne";
import { BannerAd } from "../../components/banner/BannerAd";
import { ProductHotSale } from "../../components/products/ProductHotSale";
import { FeatureTwo } from "../../components/features/FeatureTwo";
import { ProductTwo } from "../../components/products/ProductTwo";
import { TestimonialFour } from "../../components/testimonial/TestimonialFour";
import { BrandFour } from "../../components/brands/BrandFour";
import { BlogFour } from "../../components/blogs/BlogFour";

export const HomeFour = () => {
  return (
    <Layout header={4} footer={4}>
      {/* banner  */}
      <BannerFour />

      {/* features */}
      <FeatureOne />

      {/* divider */}
      <div className="divider-area">
        <div className="container">
          <div className="divider-wrap" />
        </div>
      </div>

      {/* product */}
      <ProductOne />

      {/* category */}
      <CategoryOne />

      {/* ad banner */}
      <BannerAd />

      {/* product */}
      <ProductHotSale />

      {/* features */}
      <FeatureTwo />

      {/* product */}
      <ProductTwo />

      {/* testimonial */}
      <TestimonialFour />

      {/* brand */}
      <BrandFour />

      {/* blog */}
      <BlogFour />
    </Layout>
  );
};
