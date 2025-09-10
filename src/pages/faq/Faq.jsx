import React from "react";
import { Layout } from "../../layouts/Layout";

export const Faq = () => {
  return (
    <Layout breadcrumbTitle="Faq’s Page" breadcrumbSubtitle={"Faq’s"}>
      <section className="faq__area">
        <div className="container">
          {/* header */}
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section__title text-center mb-40">
                <h2 className="title">Find Answer Of Your Questions</h2>
                <p>
                  Maecenas quis viverra metus, et efficitur ligula. Nam
                  congueaugue congue sed luctus <br />
                  lectus conIn onvallis condimentum .
                </p>
              </div>
            </div>
          </div>

          {/* faqs */}
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="faq__wrap">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Is There a Free Version Available?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen awea book It has
                          survived not only five centuriesbut also the leap into
                          electronic typesetting good remaining essentiallybut
                          also the leap into electronic.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Rediscovering The Joy Of Design
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen awea book It has
                          survived not only five centuriesbut also the leap into
                          electronic typesetting good remaining essentiallybut
                          also the leap into electronic.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Better Context Menus With Safe Triangles
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen awea book It has
                          survived not only five centuriesbut also the leap into
                          electronic typesetting good remaining essentiallybut
                          also the leap into electronic.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Running A Page Speed Test: Monitoring vs. Measuring
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen awea book It has
                          survived not only five centuriesbut also the leap into
                          electronic typesetting good remaining essentiallybut
                          also the leap into electronic.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Using Friction As A Feature In Machine Learning
                        Algorithms
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen awea book It has
                          survived not only five centuriesbut also the leap into
                          electronic typesetting good remaining essentiallybut
                          also the leap into electronic.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
