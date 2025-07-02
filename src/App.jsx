// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Import your page components (will create these next)
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import AcademicsPage from "./pages/AcademicsPage/AcademicsPage";
import ActivitiesPage from "./pages/ActivitiesPage/ActivitiesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
// Add AdmissionsPage if you want a separate one
// import AdmissionsPage from './pages/AdmissionsPage/AdmissionsPage';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/admissions" element={<AdmissionsPage />} /> */}
          {/* Add a 404 page later */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
