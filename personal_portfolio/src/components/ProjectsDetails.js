import React from "react";
import { useTranslation } from "react-i18next";
import Project1 from "../assets/images/project1Screen.png";
import Project2 from "../assets/images/project2Screen.png";
import BoxDetails from "./BoxDetails";
import ProjectCard from "./ProjectCard";
const ProjectsDetails = () => {
  const { t } = useTranslation();
  return (
    <BoxDetails className="section-offset" id={"projects"} title={"projects"}>
      <ProjectCard
        title={"myftjourney"}
        screen={Project1}
        vercelLink={" https://myfitjourney-app.vercel.app/"}
        githubLink={"https://github.com/CharbelMehou/FitnessApp"}
        descriptions={[
          { label: "myftjourney-d1" },
          { label: "myftjourney-d2" },
        ]}
        tags={[
          { label: "#React" },
          { label: "#JavaScript" },
          { label: "#CSS" },
        ]}
      />
      <ProjectCard
        title={"web-portfolio"}
        screen={Project2}
        vercelLink={"https://my-personal-portfolio-lyart.vercel.app/"}
        githubLink={"https://github.com/CharbelMehou/MyPersonalPortfolio"}
        descriptions={[{ label: "myportfolio-d1" },{ label: "myportfolio-d2" }]}
        tags={[
          { label: "#React" },
          { label: "#JavaScript" },
          { label: "#CSS" },
        ]}
      />
    </BoxDetails>
  );
};

export default ProjectsDetails;
