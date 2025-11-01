import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../services/BaseUrl";
import { Layout } from "../../layouts/Layout";

const ShelterDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/adoption-request/shelter/requests");
      setRequests(res.data.requests || []);
      console.log("shelter data" , res.data)
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchRequests(); }, []);

  const handleStatusUpdate = async (id, status) => {
    try {
      await axiosInstance.put(`/adoption-request/updateadoptionrequest/${id}`, { status });
      fetchRequests();
    } catch (err) {
      console.error(err);
      toast("Failed to update request");
    }
  };

  return (
    <Layout>
      <div className="container mt-5">
        <h2 className="text-center mb-4">📝 Adopter Requests</h2>
        {loading ? <p className="text-center">Loading...</p> :
          requests.length === 0 ? <p className="text-center">No requests 🐾</p> :
          <div className="row">
            {requests.map(req => (
              <div key={req._id} className="col-md-6 mb-4">
                <div className="card shadow-sm h-100">
                  {req.petId.images?.[0] && (
                    <img src={req.petId.images[0]} className="card-img-top" alt={req.petId.name} style={{ height: "200px", objectFit: "cover" }} />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{req.petId.name}</h5>
                    <p><strong>Breed:</strong> {req.petId.breed} <br /> <strong>Age:</strong> {req.petId.age}</p>
                    <h6>Requester Info:</h6>
                    <p><strong>Name:</strong> {req.userId.name}<br /><strong>Email:</strong> {req.userId.email}</p>
                    <p><strong>Status:</strong> 
                      {req.status === "approved" ? <span className="badge bg-success">Approved</span> :
                       req.status === "rejected" ? <span className="badge bg-danger">Rejected</span> :
                       <span className="badge bg-warning text-dark">Pending</span>}
                    </p>
                    {req.status === "pending" && (
                      <div className="d-flex gap-2">
                        <button className="btn btn-success flex-fill" onClick={() => handleStatusUpdate(req._id, "approved")}>Approve</button>
                        <button className="btn btn-danger flex-fill" onClick={() => handleStatusUpdate(req._id, "rejected")}>Reject</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </Layout>
  );
};

export default ShelterDashboard;
