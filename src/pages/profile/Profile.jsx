import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../../layouts/Layout";
import { axiosInstance } from "../../services/BaseUrl";
import { AppContext } from "../../Context/MainContext";
import rightArrow from "../../assets/img/icon/right_arrow.svg";

export const Profile = () => {
  const { userdata, setuserdata } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    role: "",
    specialization: "",
    experience: "",
    availableSlots: [{ day: "", time: "" }], // ✅ Array
    shelterName: "",
    contactPerson: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // 🚀 Fetch user data on mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axiosInstance.get("/user/getuser");

        if (res.data.user) {
          setFormData({
            name: res.data.user.name || "",
            email: res.data.user.email || "",
            contactNumber: res.data.user.contactNumber || "",
            address: res.data.user.address || "",
            role: res.data.user.role || "owner",

            // Vet fields (from vetProfile)
            specialization: res.data.vetProfile?.specialization || "",
            experience: res.data.vetProfile?.experience || "",
            availableSlots: res.data.vetProfile?.availableSlots?.length
              ? res.data.vetProfile.availableSlots
              : [{ day: "", time: "" }],

            // Shelter fields
            shelterName: res.data.user.shelterName || "",
            contactPerson: res.data.user.contactPerson || "",
          });
        }
      } catch (error) {
        setMessage("Failed to load profile. Please try again.");
        console.error("Fetch Profile Error:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Handle change for slots
  const handleSlotChange = (index, field, value) => {
    const updatedSlots = [...formData.availableSlots];
    updatedSlots[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      availableSlots: updatedSlots,
    }));
  };

  const addSlot = () => {
    setFormData((prev) => ({
      ...prev,
      availableSlots: [...prev.availableSlots, { day: "", time: "" }],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsSuccess(false);

    try {
      let payload = {
        name: formData.name,
        contactNumber: formData.contactNumber,
        address: formData.address,
      };

      // Vet specific
      if (formData.role === "vet") {
        payload = {
          ...payload,
          specialization: formData.specialization,
          experience: formData.experience,
          availableSlots: formData.availableSlots,
        };
      }

      // Shelter specific
      if (formData.role === "shelter") {
        payload = {
          ...payload,
          shelterName: formData.shelterName,
          contactPerson: formData.contactPerson,
        };
      }

      // ✅ Send update to API
      const result = await axiosInstance.post("/vet/createvet", payload);

      if (result.data.isUpdated) {
        setIsSuccess(true);
        setMessage("Profile updated successfully!");

        setuserdata({
          ...userdata,
          user: {
            ...userdata.user,
            ...payload,
            email: formData.email,
            role: formData.role,
          },
        });

        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        setIsSuccess(false);
        setMessage(result.data.message || "Update failed. Please try again.");
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage(
        error.response?.data?.message || "Network error. Please try again."
      );
      console.error("Profile Update Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout breadcrumbTitle="My Profile" breadcrumbSubtitle={"Edit Profile"}>
      <section className="contact__area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact__form-wrap">
                <form onSubmit={handleSubmit} className="contact__form">
                  <h2 className="title">Edit Your Profile</h2>
                  <span>Update your details below.</span>

                  <div className="row gutter-20 mt-4">
                    {/* ===== COMMON FIELDS ===== */}
                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          name="name"
                          type="text"
                          placeholder="Full Name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={formData.email || ""}
                          disabled
                          style={{
                            backgroundColor: "#f8f9fa",
                            color: "#6c757d",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          name="contactNumber"
                          type="tel"
                          placeholder="Contact Number"
                          required
                          value={formData.contactNumber}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          name="address"
                          type="text"
                          placeholder="Address"
                          required
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* ===== VET FIELDS ===== */}
                    {formData.role === "vet" && (
                      <>
                        <div className="col-md-12">
                          <div className="form-grp">
                            <input
                              name="specialization"
                              type="text"
                              placeholder="Specialization"
                              value={formData.specialization}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-grp">
                            <input
                              name="experience"
                              type="number"
                              placeholder="Years of Experience"
                              value={formData.experience}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        {/* ✅ Dynamic Slots */}
                        <div className="col-md-12">
                          <label>Available Time Slots</label>
                          {formData.availableSlots.map((slot, index) => (
                            <div
                              key={index}
                              style={{
                                display: "flex",
                                gap: "10px",
                                marginBottom: "10px",
                              }}
                            >
                              <input
                                type="text"
                                placeholder="Day (e.g., Monday)"
                                value={slot.day}
                                onChange={(e) =>
                                  handleSlotChange(index, "day", e.target.value)
                                }
                              />
                              <input
                                type="text"
                                placeholder="Time (e.g., 9:00AM - 5:00PM)"
                                value={slot.time}
                                onChange={(e) =>
                                  handleSlotChange(
                                    index,
                                    "time",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={addSlot}
                            className="btn btn-sm"
                          >
                            + Add Slot
                          </button>
                        </div>
                      </>
                    )}

                    {/* ===== SHELTER FIELDS ===== */}
                    {formData.role === "shelter" && (
                      <>
                        <div className="col-md-12">
                          <div className="form-grp">
                            <input
                              name="shelterName"
                              type="text"
                              placeholder="Shelter Name"
                              required
                              value={formData.shelterName}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-grp">
                            <input
                              name="contactPerson"
                              type="text"
                              placeholder="Primary Contact Person"
                              required
                              value={formData.contactPerson}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {/* ===== ROLE DISPLAY ===== */}
                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          type="text"
                          placeholder="Your Role"
                          value={
                            formData.role === "owner"
                              ? "Pet Owner"
                              : formData.role === "vet"
                              ? "Veterinarian"
                              : formData.role === "shelter"
                              ? "Shelter Staff"
                              : "Unknown Role"
                          }
                          disabled
                          style={{
                            backgroundColor: "#f8f9fa",
                            color: "#6c757d",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn mt-4" disabled={loading}>
                    {loading ? "Saving..." : "Save Changes"}
                    <img src={rightArrow} alt="" className="injectable" />
                  </button>
                </form>

                {message && (
                  <p
                    className={`ajax-response mb-0 mt-3 ${
                      isSuccess ? "text-success" : "text-danger"
                    }`}
                    style={{ fontWeight: "500" }}
                  >
                    {message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
