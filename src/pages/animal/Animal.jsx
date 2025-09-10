import React from "react";
import { Layout } from "../../layouts/Layout";
import { AnimalSidebar } from "../../components/animal/AnimalSidebar";
import { AnimalList } from "../../components/animal/AnimalList";

export const Animal = () => {
  return (
    <Layout breadcrumbTitle="All Pets">
      <section className="animal__area-three">
        <div className="container">
          <div className="row">
            {/* list */}
            <AnimalList />

            {/* sidebar */}
            <AnimalSidebar />
          </div>
        </div>
      </section>
    </Layout>
  );
};
