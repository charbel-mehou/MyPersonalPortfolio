import { Box } from "@mui/material";
import React from "react";
import AboutMe from "../components/AboutMe";
import ProjectsDetails from "../components/ProjectsDetails";
import SkillsDetails from "../components/SkillsDetails";
import InterestDetails from "../components/InterestDetails";
import CertificationsDetails from "../components/CertificationsDetails";
import { useEffect, useRef } from "react";

const Home = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <Box>
      <AboutMe />
      <SkillsDetails />
      <ProjectsDetails ref={projectsRef} />    
      <CertificationsDetails />
    </Box>
  );
};

export default Home;
