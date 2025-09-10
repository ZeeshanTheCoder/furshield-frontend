import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../layouts/Layout";

import checkIcon from "../../assets/img/icon/check_icon02.svg";
import rightArrow from "../../assets/img/icon/right_arrow.svg";

export const Pricing = () => {
  const pricingData = [
    {
      plan: "Starter",
      price: 19,
      description:
        "when an unknown printer took a galley of type and scrambled make.",
      features: [
        "Pet Grooming",
        "Physical Exam",
        "Body Trimming/Styling",
        "Paw Massage",
        "3x Vaccination ( 7 in 1 )",
      ],
    },
    {
      plan: "Basic",
      price: 29,
      description:
        "when an unknown printer took a galley of type and scrambled make.",
      features: [
        "Pet Grooming",
        "Physical Exam",
        "Body Trimming/Styling",
        "Paw Massage",
        "3x Vaccination ( 7 in 1 )",
      ],
    },
    {
      plan: "Professional",
      price: 99,
      description:
        "when an unknown printer took a galley of type and scrambled make.",
      features: [
        "Pet Grooming",
        "Physical Exam",
        "Body Trimming/Styling",
        "Paw Massage",
        "3x Vaccination ( 7 in 1 )",
      ],
    },
  ];

  return (
    <Layout
      breadcrumbTitle="Flexible Pricing Table"
      breadcrumbSubtitle={"Pricing Table"}
    >
      <section className="pricing__area">
        <div className="container">
          <div className="row justify-content-center">
            {pricingData.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="pricing__box">
                  <div className="pricing__top">
                    <h2 className="plan">{item.plan}</h2>
                    <p>{item.description}</p>
                  </div>
                  <div className="pricing__price">
                    <h2 className="price">
                      <span>$</span>
                      {item.price} <strong>/mo</strong>
                    </h2>
                  </div>
                  <div className="pricing__list">
                    <ul className="list-wrap">
                      {item.features.map((feature, idx) => (
                        <li key={idx}>
                          <div className="icon">
                            <img
                              src={checkIcon}
                              alt=""
                              className="injectable"
                            />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pricing__btn">
                    <Link to="/contact" className="btn">
                      Choose Plan
                      <img src={rightArrow} alt="" className="injectable" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
