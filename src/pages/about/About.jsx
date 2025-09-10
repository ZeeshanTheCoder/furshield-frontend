import React from "react";
import { Layout } from "../../layouts/Layout";
import { AboutFour } from "../../components/about/AboutFour";
import { WhyWeAreTwo } from "../../components/why_we_are/WhyWeAreTwo";
import { CounterTwo } from "../../components/counter/CounterTwo";
import { TeamTwo } from "../../components/teams/TeamTwo";

export const About = () => {
  return (
    <Layout breadcrumbTitle="About Us" hideNewsLetter>
      {/* about */}
      <AboutFour />

      {/* why we are */}
      <WhyWeAreTwo />

      {/* counter */}
      <CounterTwo />

      {/* team */}
      <TeamTwo />
    </Layout>
  );
};
