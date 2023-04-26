import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Record from "./pages/Record";
import Login from "./pages/Login";
import LoginForm from "./components/LoginForm";
import SignIn from "./pages/SignIn";
import LandingPage from "./pages/LandingPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route exact index path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/login/:type" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
