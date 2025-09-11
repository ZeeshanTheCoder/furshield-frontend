import React from "react";
import { Layout } from "../../layouts/Layout";
import rightArrow from "../../assets/img/icon/right_arrow.svg";

export const VetDashboard = () => {
  const appointments = [
    { id: 1, owner: "John Doe", pet: "Buddy (Dog)", date: "2025-04-10 10:00 AM", status: "Confirmed" },
    { id: 2, owner: "Jane Smith", pet: "Luna (Cat)", date: "2025-04-10 2:00 PM", status: "Pending" },
  ];

  const medicalRecords = [
    {
      pet: "Buddy",
      owner: "John Doe",
      symptoms: "Lethargy, loss of appetite",
      diagnosis: "Mild fever",
      treatment: "Rest, fluids, antibiotics",
      followUp: "Recheck in 7 days",
    },
  ];

  const notifications = [
    "New appointment request from Jane Smith",
    "Message from Happy Tails Shelter regarding Max’s vaccination",
  ];

  return (
    <Layout breadcrumbTitle="Veterinarian Dashboard" breadcrumbSubtitle="Manage Appointments & Records">
      <section className="contact__area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="contact__form-wrap p-4">

                <h2 className="title mb-4">🩺 Welcome, Dr. [Your Name]!</h2>
                <p>Manage your appointments, update medical records, and view notifications.</p>

                {/* Profile Enhancement */}
                <div className="mb-4 p-3 border rounded bg-light">
                  <h5 className="mb-3">👤 Your Profile</h5>
                  <div className="row gutter-20">
                    <div className="col-md-4">
                      <div className="form-grp">
                        <input type="text" className="form-control" placeholder="Specialization" defaultValue="Canine Surgery" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-grp">
                        <input type="number" className="form-control" placeholder="Years Experience" defaultValue="5" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-grp">
                        <input type="text" className="form-control" placeholder="Available Slots" defaultValue="Mon-Fri 9AM-5PM" />
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-sm btn-outline-primary mt-2">Save Profile</button>
                </div>

                {/* Appointments */}
                <div className="mb-4">
                  <h5 className="mb-3">📅 Today’s Appointments</h5>
                  <div className="border rounded p-3 bg-white">
                    {appointments.map((appt) => (
                      <div key={appt.id} className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
                        <div>
                          <strong>{appt.pet}</strong> with {appt.owner}<br />
                          <small>{appt.date}</small>
                        </div>
                        <div className="d-flex gap-2">
                          <span className={`badge ${
                            appt.status === "Confirmed" ? "bg-success" : "bg-warning"
                          }`}>
                            {appt.status}
                          </span>
                          <button className="btn btn-sm btn-outline-primary">Reschedule</button>
                          <button className="btn btn-sm btn-outline-success">Approve</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Medical Records */}
                <div className="mb-4">
                  <h5 className="mb-3">📋 Patient Medical Records</h5>
                  {medicalRecords.map((record, idx) => (
                    <div key={idx} className="border rounded p-3 bg-white mb-3">
                      <h6>Pet: {record.pet} | Owner: {record.owner}</h6>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <strong>Symptoms:</strong> {record.symptoms}
                        </div>
                        <div className="col-md-6">
                          <strong>Diagnosis:</strong> {record.diagnosis}
                        </div>
                        <div className="col-md-6 mt-2">
                          <strong>Treatment:</strong> {record.treatment}
                        </div>
                        <div className="col-md-6 mt-2">
                          <strong>Follow-up:</strong> {record.followUp}
                        </div>
                      </div>
                      <button className="btn btn-sm btn-outline-primary mt-3">Add Notes</button>
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
                    View Your Ratings <img src={rightArrow} alt="" className="injectable ms-1" style={{ height: "12px" }} />
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