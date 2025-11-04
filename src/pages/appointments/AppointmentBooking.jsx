import React, { useState, useEffect, useContext } from "react";
import { Layout } from "../../layouts/Layout";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../services/BaseUrl";
import { AppContext } from "../../Context/MainContext";
import rightArrow from "../../assets/img/icon/right_arrow.svg";
import { getCurrentTime, getTodayDate } from "../../utils/helperFunction";

export const AppointmentBooking = () => {
  const navigate = useNavigate();
  const { userdata } = useContext(AppContext);

  const [pets, setPets] = useState([]);
  const [loadingPets, setLoadingPets] = useState(false);

  const [formData, setFormData] = useState({
    petId: "",
    // ownerId: userdata?.user.id || "",
    vetId: "",
    date: "",
    time: "",
    status: "pending",
    reason: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [vets, setVets] = useState([]);
  const [loadingVets, setLoadingVets] = useState(false);

  // Fetch pets when component mounts or userdata changes
  useEffect(() => {
    const fetchPetsByOwner = async () => {
      if (!userdata?._id) return; //   context ka correct key use karo
      setLoadingPets(true);
      try {
        const res = await axiosInstance.get("/pets/fetchpetsbyowner", {
          withCredentials: true, //   token bhejne ke liye zaroori
        });
        setPets(res.data.pets);
        console.log("Fetched Pets in AppointmentBooking:", res.data.pets);
      } catch (err) {
        console.error(
          "Error fetching pets:",
          err.response?.data || err.message
        );
        setPets([]);
      } finally {
        setLoadingPets(false);
      }
    };

    fetchPetsByOwner();
  }, [userdata]);

  // Fetch all Vets
  useEffect(() => {
    const fetchVets = async () => {
      setLoadingVets(true);
      try {
        const res = await axiosInstance.get("/vet"); // Replace with your route
        console.log(res);
        setVets(res.data || []);
      } catch (err) {
        console.error(
          "Error fetching vets:",
          err.response?.data || err.message
        );
        setVets([]);
      } finally {
        setLoadingVets(false);
      }
    };

    fetchVets();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting data:", formData); // 👈 yeh add karo

    setLoading(true);
    setMessage("");
    setIsSuccess(false);
    try {
      const result = await axiosInstance.post("/appointment", formData, {
        withCredentials: true,
      });

      if (result.data.success) {
        if (result.data.success) {
          setMessage("Appointment booked successfully!");
          setIsSuccess(true); // 👈 ye green text-success lagayega
        } else {
          setIsSuccess(false);
          setMessage(
            result.data.message || "Booking failed. Please try again."
          );
        }
        setTimeout(() => {
          navigate("/appointments");
        }, 1500);
        setFormData({
          petId: "",
          //   ownerId: userdata?.user.id || "",
          vetId: "",
          date: "",
          time: "",
          status: "pending",
          reason: "",
          notes: "",
        });
      } else {
        setIsSuccess(false);
        setMessage(result.data.message || "Booking failed. Please try again.");
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage(
        error.response?.data?.message || "Network error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      breadcrumbTitle="Book Appointment"
      breadcrumbSubtitle={"Schedule a new appointment"}
    >
      <section className="contact__area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact__form-wrap">
                <form
                  onSubmit={handleSubmit}
                  className="contact__form"
                  id="appointment-form"
                >
                  <h2 className="title mb-4">Book an Appointment</h2>
                  <div className="row g-3">
                    {/* Pet dropdown */}
                    <div className="col-md-6">
                      <div className="form-grp">
                        <label className="form-label">Select Pet</label>
                        <select
                          id="petId"
                          name="petId"
                          className="form-control w-100 p-3 border rounded-pill bg-white"
                          required
                          value={formData.petId}
                          onChange={handleChange}
                          disabled={loadingPets}
                        >
                          <option value="">Select Pet</option>
                          {pets.length > 0 ? (
                            pets.map((pet) => (
                              <option key={pet._id} value={pet._id}>
                                {pet.name} {/* Assuming pet has a name */}
                              </option>
                            ))
                          ) : (
                            <option disabled>No Pets Found</option>
                          )}
                        </select>
                        {loadingPets && <small>Loading pets...</small>}
                      </div>
                    </div>

                    {/* Vet dropdown */}
                    <div className="col-md-6">
                      <div className="form-grp">
                        <label className="form-label">Select Vet</label>
                        <select
                          id="vetId"
                          name="vetId"
                          className="form-control w-100 p-3 border rounded-pill bg-white"
                          required
                          value={formData.vetId}
                          onChange={handleChange}
                          disabled={loadingVets}
                        >
                          <option value="">Select Vet</option>
                          {loadingVets ? (
                            <option disabled>Loading vets...</option>
                          ) : vets.length > 0 ? (
                            vets.map((vet) => (
                              <option key={vet._id} value={vet._id}>
                                {vet.userId?.name || "Vet"}{" "}
                                {/* Adjust if needed */}
                              </option>
                            ))
                          ) : (
                            <option disabled>No Vets Found</option>
                          )}
                        </select>
                      </div>
                    </div>

                    {/* Date */}

                    <div className="col-md-6">
                      <label className="form-label">Select Date</label>
                      <div className="form-grp">
                        <input
                          name="date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          min={getTodayDate()}
                        />
                      </div>
                    </div>

                    {/* Time */}
                    <div className="col-md-6">
                      <label className="form-label">Select Time</label>
                      <div className="form-grp">
                        <input
                          name="time"
                          type="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          min={
                            formData.date === getTodayDate()
                              ? getCurrentTime()
                              : ""
                          }
                        />
                      </div>
                    </div>

                    {/* Reason */}
                    <div className="col-md-12">
                      <label className="form-label">Reason</label>
                      <div className="form-grp">
                        <input
                          name="reason"
                          type="text"
                          placeholder="Reason for Visit"
                          required
                          value={formData.reason}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="col-md-12">
                      <label className="form-label">Additional Notes</label>
                      <div className="form-grp">
                        <textarea
                          name="notes"
                          rows={3}
                          placeholder="Additional Notes"
                          value={formData.notes}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn mt-4" disabled={loading}>
                    {loading ? "Booking..." : "Book Appointment"}
                    {/* <img src={rightArrow} alt="" className="injectable ms-2" /> */}
                  </button>

                  {/* Success/Error message */}
                  <p
                    className={`ajax-response mb-0 mt-3 ${
                      isSuccess ? "text-success" : "text-danger"
                    }`}
                    style={{ fontWeight: "500" }}
                  >
                    {message}
                  </p>

                  {/* Optional: Link to view all appointments */}
                  <div className="mt-3 text-center">
                    <span>
                      <Link to="/appointments">View All Appointments</Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
