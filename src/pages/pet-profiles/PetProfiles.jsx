import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { axiosInstance } from "../../services/BaseUrl";
import { Layout } from "../../layouts/Layout";
import { AppContext } from "../../Context/MainContext";
import { useNavigate } from "react-router-dom"; // 👈 Add this

const PetProfiles = () => {
  const { userdata } = useContext(AppContext);
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contextReady, setContextReady] = useState(false);

  console.log(userdata);

  // ✅ Wait for context
  useEffect(() => {
    const timer = setTimeout(() => {
      setContextReady(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const isLoggedIn = !!userdata;
  const isOwner = userdata?.role === "owner";

  const fetchPets = async () => {
    if (!isLoggedIn) {
      setLoading(false);
      return;
    }

    try {
      const res = await axiosInstance.get("/pets/fetchpetsbyowner");
      setPets(res.data.pets);
      console.log(res.data.pets);
    } catch (error) {
      console.error("Error fetching pets:", error.message);
      alert("Failed to load pets. Please login again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchPets();
    } else if (contextReady) {
      setLoading(false);
    }
  }, [isLoggedIn, contextReady]);

  const handleDeletePet = async (petId) => {
    if (!window.confirm("Are you sure you want to delete this pet?")) return;

    try {
      await axiosInstance.delete(`/pets/petsdelete/${petId}`);
      alert("Pet deleted successfully!");
      fetchPets();
    } catch (error) {
      console.error("Delete error:", error.response?.data || error.message);
      alert(
        "Failed to delete pet: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  // ✅ Redirect to create mode
  const handleCreatePet = () => {
    navigate("/petmanagement");
  };

  // ✅ Redirect to edit mode with pet ID
  const handleEditPet = (petId) => {
    navigate(`/petmanagement?id=${petId}`);
  };

  if (!contextReady) {
    return (
      <Layout>
        <div className="container mt-4 text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Checking login status...</span>
          </div>
          <p className="mt-2">Loading your session...</p>
        </div>
      </Layout>
    );
  }

  if (!isLoggedIn) {
    return (
      <Layout>
        <div className="container mt-4 text-center">
          <h3>Please login to view your pets.</h3>
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/login")}
          >
            Go to Login
          </button>
        </div>
      </Layout>
    );
  }

  // ✅ Agar login hai but role owner nahi hai
  if (isLoggedIn && !isOwner) {
    return (
      <Layout>
        <div className="container mt-4 text-center">
          <h3>Only owners can access Pet Profiles 🚫</h3>
          <button
            className="btn btn-secondary mt-3"
            onClick={() => navigate("/")}
          >
            Go to Home
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">🐾 Your Pets</h2>
          <button className="btn btn-success" onClick={handleCreatePet}>
            + Add New Pet
          </button>
        </div>

        {loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading pets...</span>
            </div>
          </div>
        ) : pets.length === 0 ? (
          <div className="alert alert-info text-center">No pets found.</div>
        ) : (
          <div className="row">
            {pets.map((pet) => (
              <div className="col-md-4 mb-4" key={pet._id}>
                <div className="card shadow-sm">
                  {pet.gallery && pet.gallery.length > 0 ? (
                    <img
                      src={pet.gallery[0]}
                      className="card-img-top"
                      alt={pet.name}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  ) : (
                    <div
                      className="d-flex align-items-center justify-content-center bg-light"
                      style={{ height: "200px" }}
                    >
                      <span className="text-muted">No Image</span>
                    </div>
                  )}

                  <div className="card-body">
                    <h5 className="card-title">{pet.name}</h5>
                    <p className="card-text">
                      <strong>Species:</strong> {pet.species} <br />
                      <strong>Breed:</strong> {pet.breed} <br />
                      <strong>Age:</strong> {pet.age} years
                    </p>
                    {pet.medicalHistory?.length > 0 && (
                      <p className="text-muted">
                        <strong>Medical History:</strong>{" "}
                        {pet.medicalHistory.join(", ")}
                      </p>
                    )}
                    <div className="d-flex col-lg-12 gap-2 mt-3">
                      <button
                        className="btn btn-sm btn-outline-primary px-4"
                        onClick={() => handleEditPet(pet._id)} // ✅ Redirect to edit
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger px-4"
                        onClick={() => handleDeletePet(pet._id)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-sm btn-outline-info px-4"
                        onClick={() => navigate(`/health-records/${pet._id}`)}
                      >
                        Health Records
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PetProfiles;
