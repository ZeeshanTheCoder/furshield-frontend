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
                <h2 className="title">Find Answers To Your Pet Care Questions</h2>
                <p>
                  Get expert advice on pet food hygiene, proper storage, and overall pet care <br />
                  to keep your furry friends healthy and happy.
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
                        Why is food hygiene important in pet care?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Proper food hygiene prevents contamination, reduces the risk of bacterial infections like Salmonella or E. coli, and ensures your pet stays healthy. Clean bowls, fresh food, and correct storage are essential to avoid illness.
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
                        How often should I clean my pet's food and water bowls?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Pet bowls should be washed with hot, soapy water daily. Stainless steel or ceramic bowls are best, as they don't harbor bacteria as easily as plastic ones.
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
                        What is the best way to store dry and wet pet food?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          <strong>Dry food:</strong> Keep it in an airtight container, away from sunlight and moisture.<br />
                          <strong>Wet food:</strong> Refrigerate immediately after opening and use within 24–48 hours.<br />
                          This maintains freshness and prevents bacterial growth.
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
                        Can I give my pet leftovers from human food?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          It's not recommended. Many human foods contain harmful ingredients (like onions, garlic, chocolate, or too much salt). Stick to veterinarian-approved pet diets to ensure balanced nutrition and safety.
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
                        How can I maintain overall pet hygiene besides food care?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          • Bathe and groom pets regularly.<br />
                          • Brush their teeth or provide dental chews.<br />
                          • Keep their living area clean.<br />
                          • Schedule regular vet check-ups.<br />
                          These steps help prevent infections, parasites, and long-term health issues.
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