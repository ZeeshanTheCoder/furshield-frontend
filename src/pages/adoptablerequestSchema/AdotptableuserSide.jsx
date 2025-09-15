import React, { useState } from "react";
import { axiosInstance } from "../../services/BaseUrl";
import { Layout } from "../../layouts/Layout";
import { toast } from "react-toastify";

const AdoptionRequestForm = ({ petId }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/adoption-request/createadoptionrequest", {
        petId,
        message,
      });
      toast("Adoption request submitted!");
      setMessage("");
    } catch (err) {
      toast(" Error: " + err.response?.data?.message);
    }
  };

  return (
    <Layout>
      <div className="card shadow-sm p-3 mb-4">
        <div className="card-body">
          <h5 className="card-title">Adopt this Pet</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Why do you want to adopt?</label>
              <textarea
                className="form-control"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Write your reason here..."
              />
            </div>
            <button type="submit" className="btn btn-success">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AdoptionRequestForm;
