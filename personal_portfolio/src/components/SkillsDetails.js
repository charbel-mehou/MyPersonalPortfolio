import React from "react";
import CsharpLogo from "../assets/icons/csharp-icon.png";
import Css from "../assets/icons/css.png";
import HmtlLogo from "../assets/icons/html-icon.png";
import Java from "../assets/icons/javaicon.png";
import JsLogo from "../assets/icons/js-icon.png";
import PhpLogo from "../assets/icons/php-icon.png";
import ReactLogo from "../assets/icons/react-icon.png";
import Sql from "../assets/icons/sql.png";
import TypeScriptLogo from "../assets/icons/typescript-icon.png";
import NodeLogo from "../assets/icons/nodejs.png";
import GridDetails from "./GridDetails";
import Attlassian from "../assets/icons/attlassian.png";
import Git from "../assets/icons/git.png";
import Agile from "../assets/icons/agile.png";
import VS from "../assets/icons/VS.png";
import VsCode from "../assets/icons/VsCode.png";
import MySQL from "../assets/icons/MySql.png";
import MongoDB from "../assets/icons/MongoDb.png";
import Oracle from '../assets/icons/oracle.png'
import { Element } from "react-scroll";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const SkillsDetails = () => {
  const { t } = useTranslation();

  const skillstab = [
    { logo: ReactLogo, label: "React" },
    { logo: PhpLogo, label: "Php" },
    { logo: TypeScriptLogo, label: "TypeScript" },
    { logo: CsharpLogo, label: "C#" },
    { logo: HmtlLogo, label: "Html" },
    { logo: JsLogo, label: "JavaScript" },
    { logo: Java, label: "Java" },
    { logo: Sql, label: "SQL" },
    { logo: Css, label: "Css" },
    { logo: NodeLogo, label: "Node.js" },
  ];
  const projectManagementSkillstab = [
    { logo: Git, label: "Git & GitLab" },
    { logo: Agile, label: t("agile-methodology") },
    { logo: Attlassian, label: "Attlassian Jira" },
  ];
  const logicielstab = [
    { logo: VS, label: "Visual Studio" },
    { logo: VsCode, label: "Visual Studio Code" },
    { logo: MySQL, label: "MySQL" },
    { logo: MongoDB, label: "MongoDB" },
    { logo: Oracle, label: "Oracle" },
  ];

  return (
    <Box id="skills">
      <Element name="skills" className="skills-section">
        <Box className="title-box">
          <Typography variant="h5" className="title" sx={{ py: 1 }}>
            {t("skills")}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }} className="section-box">
          <Box sx={{ mb:1 }}>
            <Typography variant="h6" className="title" >
              {t("languages")}
            </Typography>
            <GridDetails id={"skills"} tab={skillstab} />
          </Box>
          <Box sx={{ mb:1 }}>
            <Typography variant="h6" className="title" >
              {t("logiciel")}
            </Typography>
            <GridDetails id={"logiciel"} tab={logicielstab} />
          </Box>
          <Box sx={{mb:1 }}>
            <Typography variant="h6" className="title" >
              {t("management")}
            </Typography>
            <GridDetails
              id={"projectManagement"}
              tab={projectManagementSkillstab}
            />
          </Box>
        </Box>
      </Element>
    </Box>
  );
};

export default SkillsDetails;
