import React from "react";
import { Layout } from "../../layouts/Layout";
import { TeamList } from "../../components/teams/TeamList";
import { BrandFive } from "../../components/brands/BrandFive";

export const Team = () => {
  return (
    <Layout breadcrumbTitle="Team Members" breadcrumbSubtitle={"Team"}>
      {/* list */}
      <TeamList />

      {/* brands */}
      <BrandFive />
    </Layout>
  );
};
