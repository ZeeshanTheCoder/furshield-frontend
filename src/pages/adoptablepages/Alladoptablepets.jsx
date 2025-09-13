import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../services/BaseUrl";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Layout } from "../../layouts/Layout";

const AdoptablePetsList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await axiosInstance.get("/adoptable/getadoptable");
        console.log(res)
        setPets(res.data.pets || []);
      } catch (err) {
        console.error("Error fetching pets:", err);
        alert("Failed to fetch pets ❌");
      }
    };

    fetchPets();
  }, []);

  // adopt request
  const handleAdoptNow = async (petId, shelterId) => {
    try {
      const res = await axiosInstance.post("/adoption-request/createadoptionrequest", {
        petId,
        shelterId,
      });
      alert(res.data.message || "Adoption request sent!");
    } catch (err) {
      console.error("Error in adoption request:", err);
      alert("Failed to send adoption request ❌");
    }
  };

  return (
    <Layout>
    <div className="container mt-5">
      <h2 className="text-center mb-4">🐾 Adoptable Pets</h2>
      <div className="row">
        {pets.length > 0 ? (
          pets.map((pet) => (
            <div key={pet._id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                {/* Pet Images Slider */}
                {pet.images && pet.images.length > 0 && (
                  <Carousel showThumbs={false} infiniteLoop autoPlay>
                    {pet.images.map((img, index) => (
                      <div key={index}>
                        <img
                          src={img}
                          alt={pet.name}
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                      </div>
                    ))}
                  </Carousel>
                )}

                <div className="card-body">
                  {/* Pet Info */}
                  <h5 className="card-title">{pet.name}</h5>
                  <p className="card-text">
                    <strong>Breed:</strong> {pet.breed} <br />
                    <strong>Age:</strong> {pet.age} years <br />
                    <strong>Health:</strong> {pet.healthStatus} <br />
                    <strong>Status:</strong>{" "}
                    {pet.isAdopted ? (
                      <span className="badge bg-danger">Adopted</span>
                    ) : (
                      <span className="badge bg-success">Available</span>
                    )}
                  </p>

                  {/* Shelter Info */}
                  {pet.shelterId && (
                    <div className="border-top pt-2 mt-2">
                      <h6>Shelter Info:</h6>
                      <p className="mb-1">
                        <strong>Name:</strong> {pet.shelterId.name}
                      </p>
                      <p className="mb-1">
                        <strong>Email:</strong> {pet.shelterId.email}
                      </p>
                      <p className="mb-1">
                        <strong>Phone:</strong> {pet.shelterId.contactNumber}
                      </p>
                      {pet.shelterId.address && (
                        <p className="mb-1">
                          <strong>Address:</strong> {pet.shelterId.address}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Adopt Button */}
                  {!pet.isAdopted && (
                    <button
                      className="btn btn-primary mt-3 w-100"
                      onClick={() => handleAdoptNow(pet._id, pet.shelterId?._id)}
                    >
                      🐶 Adopt Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">
            No adoptable pets available right now 🐕
          </p>
        )}
      </div>
    </div>
    </Layout>
  );
};

export default AdoptablePetsList;
