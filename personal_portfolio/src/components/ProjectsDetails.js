import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import Project1 from "../assets/images/project1Screen.png";
import Project2 from "../assets/images/project2Screen.png";
import ProjectJava1Screen3 from "../assets/images/projetJava1Screen3.png";
import BoxDetails from "./BoxDetails";
import ProjectCard from "./ProjectCard";
import { Box } from "@mui/material";

const ProjectsDetails = forwardRef((props, ref) => {
  const { t } = useTranslation();

  return (
    <Box ref={ref}>
      <BoxDetails className="section-offset" id={"projects"} title={"projects"}>
        <ProjectCard
          id={1}
          title={"myftjourney"}
          screen={Project1}
          vercelLink={" https://myfitjourney-app.vercel.app/"}
          vercelLinkdisplayed={true}
          githubLink={"https://github.com/CharbelMehou/FitnessApp"}
          githubLinkdisplayed={true}
          descriptions={[{ label: "myftjourney-d1" }]}
          tags={[
            { label: "#React" },
            { label: "#Node.js" },
            { label: "#JavaScript" },
            { label: "#CSS" }
          ]}
        />
        <ProjectCard
          id={2}
          title={"web-portfolio"}
          screen={Project2}
          vercelLink={"https://charbel-portfolio.vercel.app/"}
          vercelLinkdisplayed={true}
          githubLink={"https://github.com/CharbelMehou/MyPersonalPortfolio"}
          githubLinkdisplayed={true}
          descriptions={[{ label: "myportfolio-d1" }]}
          tags={[
            { label: "#React" },
            { label: "#Node.js" },
            { label: "#JavaScript" },
            { label: "#CSS" },
          ]}
        />
        <ProjectCard
          id={3}
          title={"infrastructur-sportive"}
          screen={ProjectJava1Screen3}
          vercelLink={""}
          vercelLinkdisplayed={false}
          githubLink={
            "https://github.com/CharbelMehou/Recensement-des-Infrastructures-Sportives"
          }
          githubLinkdisplayed={true}
          descriptions={[{ label: "infrastructur-sportive-p1" }]}
          tags={[{ label: "#JAVA" },
                { label: "#HTML" }, 
                { label: "#CSS" },
                { label: "#SQL" }
              ]}
        />
      </BoxDetails>
    </Box>
  );
});

export default ProjectsDetails;
