import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectsDetails from "./components/ProjectsDetails";
import SkillsDetails from "./components/SkillsDetails";
import InterestDetails from "./components/InterestDetails";
import CertificationsDetails from "./components/CertificationsDetails";
import Home from "./pages/Home";
import "./translation/i18n";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ px: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutMe" element={<AboutMe />} />
          <Route path="skills" element={<SkillsDetails />} />
          <Route path="projects" element={<ProjectsDetails />} />
          <Route path="certifications" element={<CertificationsDetails />} />
          <Route path="interests" element={<InterestDetails />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};
export default App;
