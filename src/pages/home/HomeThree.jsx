import React from "react";
import { Layout } from "../../layouts/Layout";
import { BannerThree } from "../../components/banner/BannerThree";
import { AboutThree } from "../../components/about/AboutThree";
import { BrandThree } from "../../components/brands/BrandThree";
import { AnimalTwo } from "../../components/animal/AnimalTwo";
import { ChooseOne } from "../../components/choose/ChooseOne";
import { DiscoverOne } from "../../components/discover/DiscoverOne";
import { CtaOne } from "../../components/cta/CtaOne";
import { TestimonialThree } from "../../components/testimonial/TestimonialThree";
import { BlogThree } from "../../components/blogs/BlogThree";

export const HomeThree = () => {
  return (
    <Layout header={3} footer={3}>
      {/* banner */}
      <BannerThree />

      {/* about */}
      <AboutThree />

      {/* brand */}
      <BrandThree />

      {/* animal */}
      <AnimalTwo />

      {/* choose */}
      <ChooseOne />

      {/* discover */}
      <DiscoverOne />

      {/* cta */}
      <CtaOne />

      {/* testimonial */}
      <TestimonialThree />

      {/* blog */}
      <BlogThree />
    </Layout>
  );
};
