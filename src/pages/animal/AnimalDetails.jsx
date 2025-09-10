import React from "react";
import { Layout } from "../../layouts/Layout";
import { AnimalDetailsTop } from "../../components/animal/AnimalDetailsTop";
import { AnimalDetailsRelated } from "../../components/animal/AnimalDetailsRelated";

export const AnimalDetails = () => {
  return (
    <Layout breadcrumbTitle="Pet Details">
      <section className="animal__details-area">
        <div className="container">
          {/* top */}
          <AnimalDetailsTop />

          {/* slider */}
          <AnimalDetailsRelated />
        </div>
      </section>
    </Layout>
  );
};
