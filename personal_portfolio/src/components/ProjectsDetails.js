import React from "react";
import { useTranslation } from "react-i18next";
import Project1 from "../assets/images/project1Screen.png";
import Project2 from "../assets/images/project2Screen.png";
import ProjectJava1Screen3 from "../assets/images/projetJava1Screen3.png";
import BoxDetails from "./BoxDetails";
import ProjectCard from "./ProjectCard";
const ProjectsDetails = () => {
  const { t } = useTranslation();
  return (
    <BoxDetails className="section-offset" id={"projects"} title={"projects"}>
      <ProjectCard
        id={1}
        title={"myftjourney"}
        screen={Project1}
        vercelLink={" https://myfitjourney-app.vercel.app/"}
        vercelLinkdisplayed={true}
        githubLink={"https://github.com/CharbelMehou/FitnessApp"}
        githubLinkdisplayed={true}
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
        id={2}
        title={"web-portfolio"}
        screen={Project2}
        vercelLink={"https://my-personal-portfolio-lyart.vercel.app/"}
        vercelLinkdisplayed={true}
        githubLink={"https://github.com/CharbelMehou/MyPersonalPortfolio"}
        githubLinkdisplayed={true}
        descriptions={[
          { label: "myportfolio-d1" },
          { label: "myportfolio-d2" },
        ]}
        tags={[
          { label: "#React" },
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
        githubLink={""}
        githubLinkdisplayed={true}
        descriptions={[{ label: "infrastructur-sportive-p1" }]}
        tags={[{ label: "#JAVA" }, { label: "#HTML" }, { label: "#CSS" }]}
      />
    </BoxDetails>
  );
};

export default ProjectsDetails;
