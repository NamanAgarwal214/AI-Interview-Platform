import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Record from "./pages/Record";
import Login from "./pages/Login";
import LoginForm from "./components/LoginForm";
import SignIn from "./pages/SignIn";
import LandingPage from "./pages/LandingPage.jsx";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import CreateJob from "./components/CreateJob";

function App() {
  return (
    <>
      <Routes>
        <Route exact index path="/" element={<LandingPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/login/:whoIsIt" element={<Login />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/addJob" element={<CreateJob />} />
      </Routes>
    </>
  );
}

export default App;
