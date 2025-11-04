import React, { useState } from "react";
import { axiosInstance } from "../../services/BaseUrl";
import { Layout } from "../../layouts/Layout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateAdoptablePet = () => {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    healthStatus: "",
    careLogs: [],
  });
  const [careLog, setCareLog] = useState({ activity: "", notes: "" });
  const [image, setImage] = useState(null); // file state

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Care log input change
  const handleCareLogChange = (e) => {
    const { name, value } = e.target;
    setCareLog({ ...careLog, [name]: value });
  };

  // Add care log
  const addCareLog = () => {
    if (careLog.activity) {
      setFormData({
        ...formData,
        careLogs: [...formData.careLogs, careLog],
      });
      setCareLog({ activity: "", notes: "" });
    }
  };

  // File change
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("breed", formData.breed);
      data.append("age", formData.age);
      data.append("healthStatus", formData.healthStatus);

      // append care logs
      data.append("careLogs", JSON.stringify(formData.careLogs));

      if (image) {
        data.append("image", image); // multer.single("image") handle karega
      }

      const token = localStorage.getItem("token");

      await axiosInstance.post("/adoptable/createadoptable", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      toast("Adoptable Pet Created Successfully ✅");
      useNavigate('/adoptable');
      setFormData({
        name: "",
        breed: "",
        age: "",
        healthStatus: "",
        careLogs: [],
      });
      setImage(null);
    } catch (error) {
      console.error(error);
      toast("Error creating pet ❌");
    }
  };

  return (
    <Layout breadcrumbTitle="Create Adoptable Page" breadcrumbSubtitle={"Create Adoptable"}>
      <div className="container mt-4">
        <h2>Create Adoptable Pet</h2>
        <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Pet Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Breed */}
          <div className="mb-3">
            <label className="form-label">Breed</label>
            <input
              type="text"
              className="form-control"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              required
            />
          </div>

          {/* Age */}
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          {/* Health Status */}
          <div className="mb-3">
            <label className="form-label">Health Status</label>
            <input
              type="text"
              className="form-control"
              name="healthStatus"
              value={formData.healthStatus}
              onChange={handleChange}
              required
            />
          </div>

          {/* File Upload */}
          <div className="mb-3">
            <label className="form-label">Upload Image</label>
            <input
              type="file"
              className="form-control"
              onChange={handleFileChange}
              accept="image/*"
            />
            {image && (
              <p className="mt-2 text-success">Selected: {image.name}</p>
            )}
          </div>

          {/* Care Logs */}
          <div className="mb-3">
            <label className="form-label">Care Log</label>
            <select
              className="form-select mb-2"
              name="activity"
              value={careLog.activity}
              onChange={handleCareLogChange}
            >
              <option value="">Select Activity</option>
              <option value="feeding">Feeding</option>
              <option value="grooming">Grooming</option>
              <option value="medical">Medical</option>
            </select>
            <textarea
              className="form-control mb-2"
              name="notes"
              placeholder="Notes"
              value={careLog.notes}
              onChange={handleCareLogChange}
            />
            <button
              type="button"
              className="btn btn-secondary"
              onClick={addCareLog}
            >
              Add Care Log
            </button>
            <ul className="mt-2">
              {formData.careLogs.map((log, idx) => (
                <li key={idx}>
                  <strong>{log.activity}</strong>: {log.notes}
                </li>
              ))}
            </ul>
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary">
            Create Pet
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreateAdoptablePet;