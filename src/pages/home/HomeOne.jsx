import React from "react";
import { Layout } from "../../layouts/Layout";
import { BannerOne } from "../../components/banner/BannerOne";
import { AboutOne } from "../../components/about/AboutOne";
import { MarqueeOne } from "../../components/marquee/MarqueeOne";
import { ServiceOne } from "../../components/service/ServiceOne";
import { WhyWeAreOne } from "../../components/why_we_are/WhyWeAreOne";
import { CounterOne } from "../../components/counter/CounterOne";
import { BrandOne } from "../../components/brands/BrandOne";
import { TeamOne } from "../../components/teams/TeamOne";
import { TestimonialOne } from "../../components/testimonial/TestimonialOne";
import { RegistrationOne } from "../../components/registration/RegistrationOne";
import { BlogOne } from "../../components/blogs/BlogOne";
import { InstagramOne } from "../../components/insta/InstagramOne";

export const HomeOne = () => {
  return (
    <Layout header={1} footer={1}>
      {/* banner one */}
      <BannerOne />

      {/* about one */}
      <AboutOne />

      {/* marquee one */}
      <MarqueeOne />

      {/* service one */}
      <ServiceOne />

      {/* why we are */}
      <WhyWeAreOne />

      {/* counter */}
      <CounterOne />

      {/* brand */}
      <BrandOne />

      {/* team */}
      <TeamOne />

      {/* testimonial */}
      <TestimonialOne />

      {/* registration */}
      <RegistrationOne />

      {/* blog */}
      <BlogOne />

      {/* insta */}
      <InstagramOne />
    </Layout>
  );
};
