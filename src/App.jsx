import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HomeOne } from "./pages/home/HomeOne";
import { useWow } from "./lib/hooks/useWow";
import { useAos } from "./lib/hooks/useAos";
import { useCircle } from "./lib/hooks/useCircles";
import { useSvgInject } from "./lib/hooks/useSvgInject";
import { About } from "./pages/about/About";
import { Product } from "./pages/product/Product";
import { ProductDetails } from "./pages/product/ProductDetails";
import { Animal } from "./pages/animal/Animal";
import { AnimalDetails } from "./pages/animal/AnimalDetails";
import { Gallery } from "./pages/gallery/Gallery";
import { Faq } from "./pages/faq/Faq";
import { Pricing } from "./pages/pricing/Pricing";
import { Reservation } from "./pages/reservation/Reservation";
import { Error } from "./pages/error/Error";
import { TeamDetails } from "./pages/team/TeamDetails";
import { Team } from "./pages/team/Team";
import { Blog } from "./pages/blog/Blog";
import { BlogDetails } from "./pages/blog/BlogDetails";
import { Contact } from "./pages/contact/Contact";
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/signup/Signup";
import { Profile } from "./pages/profile/Profile";
import ManagePets from "./pages/pet-profiles/ManagePets";
import PetProfiles from "./pages/pet-profiles/PetProfiles";
import { HealthRecords } from "./pages/health-records/HealthRecords";
import PetCareStatus from "./pages/pet-care-status/PetCareStatus";
import ViewPetCare from "./pages/view-pet-care/ViewPetCare";
import PetCare from "./pages/pet-care/PetCare";
import { AppointmentBooking } from "./pages/appointments/AppointmentBooking";
import Appointments from "./pages/appointments/Appointments";
import PetCareChatbot from "./pages/petchatbot/PetCareChatbot";
import CreateAdoptablePet from "./pages/adoptablepages/CreateAdoptablePet";
import PetMedicalHistory from "./pages/pet-medical-history/PetMedicalHistory";
import TreatmentLogForm from "./pages/log-treatments/TreatmentLogForm";
import TreatmentLogsByAppointment from "./pages/log-treatments/TreatmentLogsByAppointment";
import TreatmentLogsByPet from "./pages/log-treatments/TreatmentLogsByPet";
import UpdateTreatmentLog from "./pages/log-treatments/UpdateTreatmentLog";
import ManageAppointments from "./pages/appointments/ManageAppointments";
import UpdateAppointment from "./pages/appointments/UpdateAppointment";
import { CartPage } from "./pages/cart/CartPage";
import AdoptionRequestForm from "./pages/adoptablerequestSchema/AdotptableuserSide";
import AdoptablePets from "./pages/adoptablepages/Alladoptablepets";
import ShelterDashboard from "./pages/adoptablepages/ShelterDashboard";
import AdminApp from "./pages/adminPages/AdminApp";

// ProtectedRoute
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  useWow();
  useAos();
  useCircle();
  useSvgInject();

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeOne />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="/animal" element={<Animal />} />
      <Route path="/animal-details" element={<AnimalDetails />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/team" element={<Team />} />
      <Route path="/team-details" element={<TeamDetails />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-details" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={
        <ProtectedRoute allowedRoles={["admin","owner","vet","shelter"]}>
          <Profile />
        </ProtectedRoute>
      } />

      {/* Users */}
      <Route path="/petmanagement" element={
        <ProtectedRoute allowedRoles={["owner"]}>
          <ManagePets />
        </ProtectedRoute>
      } />
      <Route path="/pet-profiles" element={
        <ProtectedRoute allowedRoles={["owner"]}>
          <PetProfiles />
        </ProtectedRoute>
      } />
      <Route path="/health-records/:petId" element={
        <ProtectedRoute allowedRoles={["owner"]}>
          <HealthRecords />
        </ProtectedRoute>
      } />
      <Route path="/pet-care" element={
        <ProtectedRoute allowedRoles={["owner"]}>
          <PetCare />
        </ProtectedRoute>
      } />
      <Route path="/appointment-booking" element={
        <ProtectedRoute allowedRoles={["owner"]}>
          <AppointmentBooking />
        </ProtectedRoute>
      } />
      <Route path="/appointments" element={
        <ProtectedRoute allowedRoles={["owner"]}>
          <Appointments />
        </ProtectedRoute>
      } />
      <Route path="/cart/:id" element={
        <ProtectedRoute allowedRoles={["owner"]}>
          <CartPage />
        </ProtectedRoute>
      } />
      <Route path="/adotptionrequest" element={
        <ProtectedRoute allowedRoles={["owner"]}>
          <AdoptionRequestForm />
        </ProtectedRoute>
      } />
      <Route path="/alladopPets" element={
        <ProtectedRoute allowedRoles={["owner"]}>
          <AdoptablePets />
        </ProtectedRoute>
      } />

      {/* Vets */}
      <Route path="/pet-medical-history" element={
        <ProtectedRoute allowedRoles={["vet"]}>
          <PetMedicalHistory />
        </ProtectedRoute>
      } />
      <Route path="/treatment/create/:appointmentId" element={
        <ProtectedRoute allowedRoles={["vet"]}>
          <TreatmentLogForm />
        </ProtectedRoute>
      } />
      <Route path="/treatment/edit/:treatmentId" element={
        <ProtectedRoute allowedRoles={["vet"]}>
          <UpdateTreatmentLog />
        </ProtectedRoute>
      } />
      <Route path="/treatment/appointment/:treatmentId" element={
        <ProtectedRoute allowedRoles={["vet"]}>
          <TreatmentLogsByAppointment />
        </ProtectedRoute>
      } />
      <Route path="/treatment/pet/:petId" element={
        <ProtectedRoute allowedRoles={["vet"]}>
          <TreatmentLogsByPet />
        </ProtectedRoute>
      } />

      {/* Appointment for vets */}
      <Route path="/manage-appointments" element={
        <ProtectedRoute allowedRoles={["vet"]}>
          <ManageAppointments />
        </ProtectedRoute>
      } />
      <Route path="/appointment/:appointmentId" element={
        <ProtectedRoute allowedRoles={["vet"]}>
          <UpdateAppointment />
        </ProtectedRoute>
      } />

      {/* Shelter */}
      <Route path="/pet-care-status" element={
        <ProtectedRoute allowedRoles={["shelter"]}>
          <PetCareStatus />
        </ProtectedRoute>
      } />
      <Route path="/view-pet-care" element={
        <ProtectedRoute allowedRoles={["shelter"]}>
          <ViewPetCare />
        </ProtectedRoute>
      } />
      <Route path="/pet-care-status/:id" element={
        <ProtectedRoute allowedRoles={["shelter"]}>
          <PetCareStatus />
        </ProtectedRoute>
      } />
      <Route path="/adoptable" element={
        <ProtectedRoute allowedRoles={["shelter"]}>
          <CreateAdoptablePet />
        </ProtectedRoute>
      } />
      <Route path="/shelterDashboard" element={
        <ProtectedRoute allowedRoles={["shelter"]}>
          <ShelterDashboard />
        </ProtectedRoute>
      } />

      {/* Chat Bot (sab use kar sakte) */}
      <Route path="/petchat" element={<PetCareChatbot />} />

      {/* Admin */}
      <Route path="/admin/*" element={
        <ProtectedRoute allowedRoles={["admin"]}>
          <AdminApp />
        </ProtectedRoute>
      } />

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
