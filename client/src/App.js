import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage.jsx";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import CreateJob from "./components/CreateJob";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import CompanyPage from "./pages/CompanyPage";

function App() {
  axios.defaults.baseURL =
    "https://7098-2401-4900-5d38-6ffc-8921-e6b2-a57a-7f2d.ngrok-free.app";
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route exact index path="/" element={<LandingPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login/:whoIsIt" element={<LoginPage />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/addJob" element={<CreateJob />} />
        <Route exact path="/dashboard" element={<CompanyPage />} />
      </Routes>
    </>
  );
}

export default App;
