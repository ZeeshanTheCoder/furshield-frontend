import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HomeOne } from "./pages/home/HomeOne";
import { useWow } from "./lib/hooks/useWow";
import { useAos } from "./lib/hooks/useAos";
import { useCircle } from "./lib/hooks/useCircles";
import { useSvgInject } from "./lib/hooks/useSvgInject";
import { HomeTwo } from "./pages/home/HomeTwo";
import { HomeThree } from "./pages/home/HomeThree";
import { HomeFour } from "./pages/home/HomeFour";
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

function App() {
  useWow();
  useAos();
  useCircle();
  useSvgInject();

  // on route change to top of the page
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeOne />} />
      <Route path="/home2" element={<HomeTwo />} />
      <Route path="/home3" element={<HomeThree />} />
      <Route path="/home4" element={<HomeFour />} />
      {/* <Route path="/home4" element={<>THIS IS HOME 4</>} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product-details" element={<ProductDetails />} />
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
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
