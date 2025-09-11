import React from "react";
import { Layout } from "../../layouts/Layout";
import rightArrow from "../../assets/img/icon/right_arrow.svg";

export const OwnerDashboard = () => {
  // Mock data for UI
  const pets = [
    { id: 1, name: "Buddy", species: "Dog", breed: "Golden Retriever", age: 3, gender: "Male" },
    { id: 2, name: "Luna", species: "Cat", breed: "Siamese", age: 2, gender: "Female" },
  ];

  const appointments = [
    { id: 1, vet: "Dr. Smith", date: "2025-04-10", status: "Confirmed" },
    { id: 2, vet: "Dr. Lee", date: "2025-04-25", status: "Pending" },
  ];

  const healthTimeline = [
    { date: "2025-03-01", event: "Rabies Vaccination", pet: "Buddy" },
    { date: "2025-02-15", event: "Deworming", pet: "Luna" },
  ];

  const cartItems = [
    { id: 1, name: "Premium Dog Food", category: "Food", qty: 2 },
    { id: 2, name: "Cat Grooming Brush", category: "Grooming", qty: 1 },
  ];

  const notifications = [
    "Upcoming appointment with Dr. Smith on Apr 10",
    "New toy arrivals in Grooming section!",
    "Buddy’s next vaccination due in 15 days",
  ];

  return (
    <Layout breadcrumbTitle="Pet Owner Dashboard" breadcrumbSubtitle="Manage Your Pets">
      <section className="contact__area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="contact__form-wrap p-4">

                {/* Header */}
                <h2 className="title mb-4">🐾 Welcome, Pet Parent!</h2>
                <p>Manage your pets, appointments, health records, and more — all in one place.</p>

                {/* Tabs for Multiple Pets */}
                <div className="mb-4">
                  <h5 className="mb-3">🐶 Your Pets</h5>
                  <div className="row gutter-20">
                    {pets.map((pet) => (
                      <div key={pet.id} className="col-md-6 col-lg-4">
                        <div className="border p-3 rounded bg-light">
                          <h6>{pet.name}</h6>
                          <p className="mb-1"><small>{pet.species} • {pet.breed}</small></p>
                          <p className="mb-1"><small>Age: {pet.age} • {pet.gender}</small></p>
                          <div className="d-flex gap-2">
                            <button className="btn btn-sm btn-outline-primary">Edit</button>
                            <button className="btn btn-sm btn-outline-danger">Delete</button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="col-md-6 col-lg-4">
                      <div className="border p-3 rounded bg-light d-flex align-items-center justify-content-center" style={{ height: "100%" }}>
                        <button className="btn btn-sm btn-outline-success">
                          + Add New Pet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Health Timeline */}
                <div className="mb-4">
                  <h5 className="mb-3">💉 Health Timeline</h5>
                  <div className="border rounded p-3 bg-white">
                    {healthTimeline.map((item, idx) => (
                      <div key={idx} className="d-flex align-items-center mb-2 pb-2 border-bottom">
                        <div className="me-3">
                          <span className="badge bg-info">{item.date}</span>
                        </div>
                        <div>
                          <strong>{item.event}</strong> for <em>{item.pet}</em>
                        </div>
                      </div>
                    ))}
                    <button className="btn btn-sm btn-outline-primary mt-2">
                      Add Record <img src={rightArrow} alt="" className="injectable ms-1" style={{ height: "12px" }} />
                    </button>
                  </div>
                </div>

                {/* Appointments */}
                <div className="mb-4">
                  <h5 className="mb-3">📅 Upcoming Appointments</h5>
                  <div className="border rounded p-3 bg-white">
                    {appointments.map((appt) => (
                      <div key={appt.id} className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
                        <div>
                          <strong>{appt.vet}</strong> on {appt.date}
                        </div>
                        <span className={`badge ${
                          appt.status === "Confirmed" ? "bg-success" : "bg-warning"
                        }`}>
                          {appt.status}
                        </span>
                      </div>
                    ))}
                    <button className="btn btn-sm btn-outline-primary mt-2">
                      Book New Appointment <img src={rightArrow} alt="" className="injectable ms-1" style={{ height: "12px" }} />
                    </button>
                  </div>
                </div>

                {/* Shopping Cart */}
                <div className="mb-4">
                  <h5 className="mb-3">🛒 Your Shopping Cart</h5>
                  <div className="border rounded p-3 bg-white">
                    {cartItems.map((item) => (
                      <div key={item.id} className="d-flex justify-content-between mb-2">
                        <div>{item.name} <small>({item.category})</small></div>
                        <div>Qty: {item.qty}</div>
                      </div>
                    ))}
                    <button className="btn btn-sm btn-outline-primary mt-2">
                      Browse Products <img src={rightArrow} alt="" className="injectable ms-1" style={{ height: "12px" }} />
                    </button>
                  </div>
                </div>

                {/* Notifications */}
                <div className="mb-4">
                  <h5 className="mb-3">🔔 Notifications</h5>
                  <div className="border rounded p-3 bg-white">
                    {notifications.map((note, idx) => (
                      <div key={idx} className="py-2 border-bottom">
                        {note}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Care Resources */}
                <div className="mb-4">
                  <h5 className="mb-3">📚 Care Resources</h5>
                  <div className="row gutter-20">
                    <div className="col-md-6">
                      <div className="border p-3 rounded bg-light">
                        <h6>Feeding Guide</h6>
                        <p>Best practices for feeding puppies and adult dogs.</p>
                        <button className="btn btn-sm btn-outline-secondary">Read</button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="border p-3 rounded bg-light">
                        <h6>Grooming Tips</h6>
                        <p>How to groom your cat at home.</p>
                        <button className="btn btn-sm btn-outline-secondary">Watch</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feedback */}
                <div className="text-center mt-4">
                  <button className="btn btn-outline-primary">
                    Rate Your Vet <img src={rightArrow} alt="" className="injectable ms-1" style={{ height: "12px" }} />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};