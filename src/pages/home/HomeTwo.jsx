import React from "react";
import { Layout } from "../../layouts/Layout";
import { BannerTwo } from "../../components/banner/BannerTwo";
import { BrandTwo } from "../../components/brands/brandTwo";
import { AboutTwo } from "../../components/about/AboutTwo";
import { WhyWeAreTwo } from "../../components/why_we_are/WhyWeAreTwo";
import { IntroducingOne } from "../../components/intro/IntroducingOne";
import { CounterTwo } from "../../components/counter/CounterTwo";
import { TeamTwo } from "../../components/teams/TeamTwo";
import { TestimonialTwo } from "../../components/testimonial/TestimonialTwo";
import { BlogTwo } from "../../components/blogs/BlogTwo";
import { AnimalShopOne } from "../../components/animal/AnimalShopOne";

export const HomeTwo = () => {
  return (
    <Layout header={2} footer={2}>
      {/* banner */}
      <BannerTwo />

      {/* brand */}
      <BrandTwo />

      {/* about */}
      <AboutTwo />

      {/* animal shop */}
      <AnimalShopOne />

      {/* why we are */}
      <WhyWeAreTwo />

      {/* introducing */}
      <IntroducingOne />

      {/* counter */}
      <CounterTwo />

      {/* team */}
      <TeamTwo />

      {/* testimonial */}
      <TestimonialTwo />

      {/* blog */}
      <BlogTwo />
    </Layout>
  );
};
