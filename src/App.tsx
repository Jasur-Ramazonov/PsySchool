import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Mainpage from "./Pages/Mainpage";
import LoginPage from "./Pages/LoginPage";
import { useEffect } from "react";

function App() {
  const token = localStorage.getItem("TOKEN");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);
  if (!token) {
    return <LoginPage />;
  }
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Mainpage />} />
    </Routes>
  );
}

export default App;
