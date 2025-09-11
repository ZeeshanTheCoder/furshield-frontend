import React from "react";
import { Layout } from "../../layouts/Layout";
import rightArrow from "../../assets/img/icon/right_arrow.svg";

export const ShelterDashboard = () => {
  const pets = [
    {
      id: 1,
      name: "Max",
      species: "Dog",
      breed: "Labrador",
      age: 2,
      health: "Healthy",
      status: "Available",
      description: "Friendly and energetic, loves kids!",
    },
    {
      id: 2,
      name: "Whiskers",
      species: "Cat",
      breed: "Tabby",
      age: 1,
      health: "Vaccinated",
      status: "Pending Adoption",
      description: "Shy but sweet, needs patient home.",
    },
  ];

  const careLogs = [
    { pet: "Max", date: "2025-04-05", activity: "Fed breakfast & dinner", staff: "Anna" },
    { pet: "Whiskers", date: "2025-04-05", activity: "Grooming & flea treatment", staff: "Tom" },
  ];

  const inquiries = [
    { id: 1, pet: "Max", from: "Sarah K.", message: "Interested in adopting Max. Can I visit this weekend?", status: "Unread" },
    { id: 2, pet: "Whiskers", from: "Mike L.", message: "Sent adoption form. Awaiting response.", status: "Replied" },
  ];

  const notifications = [
    "New inquiry for Max from Sarah K.",
    "Reminder: Update Whiskers’ vaccination record",
  ];

  return (
    <Layout breadcrumbTitle="Shelter Dashboard" breadcrumbSubtitle="Manage Adoptable Pets">
      <section className="contact__area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="contact__form-wrap p-4">

                <h2 className="title mb-4">🏠 Welcome, Shelter Manager!</h2>
                <p>Manage adoptable pets, care logs, inquiries, and notifications.</p>

                {/* Shelter Info */}
                <div className="mb-4 p-3 border rounded bg-light">
                  <h5 className="mb-3">🏢 Shelter Information</h5>
                  <div className="row gutter-20">
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="text" className="form-control" placeholder="Shelter Name" defaultValue="Happy Tails Shelter" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="text" className="form-control" placeholder="Contact Person" defaultValue="Jane Manager" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="email" className="form-control" placeholder="Email" defaultValue="shelter@happytails.com" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="tel" className="form-control" placeholder="Phone" defaultValue="+1234567890" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-grp">
                        <input type="text" className="form-control" placeholder="Address" defaultValue="123 Shelter St, City" />
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-sm btn-outline-primary mt-2">Save Info</button>
                </div>

                {/* Adoptable Pets */}
                <div className="mb-4">
                  <h5 className="mb-3">🐾 Adoptable Pets</h5>
                  <div className="row gutter-20">
                    {pets.map((pet) => (
                      <div key={pet.id} className="col-md-6 col-lg-4">
                        <div className="border p-3 rounded bg-light">
                          <h6>{pet.name} ({pet.species})</h6>
                          <p><small>{pet.breed}, Age: {pet.age}</small></p>
                          <p><small><strong>Health:</strong> {pet.health}</small></p>
                          <p><small>{pet.description}</small></p>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className={`badge ${
                              pet.status === "Available" ? "bg-success" : "bg-warning"
                            }`}>
                              {pet.status}
                            </span>
                            <div className="d-flex gap-1">
                              <button className="btn btn-sm btn-outline-primary">Edit</button>
                              <button className="btn btn-sm btn-outline-danger">Delete</button>
                            </div>
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

                {/* Care Logs */}
                <div className="mb-4">
                  <h5 className="mb-3">📋 Daily Care Logs</h5>
                  <div className="border rounded p-3 bg-white">
                    {careLogs.map((log, idx) => (
                      <div key={idx} className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                        <div>
                          <strong>{log.pet}</strong> — {log.activity} (by {log.staff})
                        </div>
                        <small>{log.date}</small>
                      </div>
                    ))}
                    <button className="btn btn-sm btn-outline-primary mt-2">Add Log</button>
                  </div>
                </div>

                {/* Adoption Inquiries */}
                <div className="mb-4">
                  <h5 className="mb-3">📩 Adoption Inquiries</h5>
                  {inquiries.map((inq) => (
                    <div key={inq.id} className="border rounded p-3 bg-white mb-3">
                      <div className="d-flex justify-content-between">
                        <strong>Re: {inq.pet}</strong>
                        <span className={`badge ${
                          inq.status === "Unread" ? "bg-danger" : "bg-success"
                        }`}>
                          {inq.status}
                        </span>
                      </div>
                      <p className="mt-2">From: {inq.from}</p>
                      <p className="bg-light p-2 rounded">{inq.message}</p>
                      <button className="btn btn-sm btn-outline-primary">Respond</button>
                    </div>
                  ))}
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

                {/* Ratings */}
                <div className="text-center mt-4">
                  <button className="btn btn-outline-secondary">
                    View Shelter Ratings <img src={rightArrow} alt="" className="injectable ms-1" style={{ height: "12px" }} />
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