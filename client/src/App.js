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
import ApplicantPage from "./pages/ApplicantPage";
import { useEffect, useState } from "react";
import AdminPage from "./pages/AdminPage";
import SamplePage from "./pages/SamplePage";
import QuestionPage from "./components/QuestionPage";

function App() {
  axios.defaults.baseURL = "http://localhost:8000";

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage["token"]);
  // useEffect(()=>{
  //   setIsLoggedIn(lo)
  // }, [])

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
        <Route exact path="/register/:whoIsIt" element={<Register />} />
        <Route exact path="/login/:whoIsIt" element={<LoginPage />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/addJob" element={<CreateJob />} />
        <Route exact path="/company/dashboard" element={<CompanyPage />} />
        <Route exact path="/admin/dashboard" element={<AdminPage />} />
        <Route exact path="/dashboard" element={<ApplicantPage />} />
        <Route exact path="/question" element={<SamplePage />} />
        {/* <Route exact path="/startTest" element={<SamplePage />} /> */}
      </Routes>
    </>
  );
}

export default App;
