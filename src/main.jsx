import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// necessary css
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/flaticon_pet_care.css";
import "./assets/css/fontawesome-all.min.css";
import "./assets/css/jquery-ui.css";
import "./assets/css/default.css";
import "./assets/css/animate.min.css";
import "./assets/css/responsive.css";
import "./assets/css/main.css";

// necessary js
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/js/jquery-ui.min.js";
import "./assets/js/jquery.appear.js";
import "./assets/js/svg-inject.min.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
