import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import CsharpLogo from "../assets/icons/csharp-icon.png";
import Css from "../assets/icons/css.png";
import HmtlLogo from "../assets/icons/html-icon.png";
import Java from "../assets/icons/javaicon.png";
import JsLogo from "../assets/icons/js-icon.png";
import PhpLogo from "../assets/icons/php-icon.png";
import ReactLogo from "../assets/icons/react-icon.png";
import Sql from "../assets/icons/sql.png";
import TypeScriptLogo from "../assets/icons/typescript-icon.png";
import BoxDetails from "./BoxDetails";

const SkillsDetails = () => {
  const { t } = useTranslation();
  const skillstab = [
    { logo: CsharpLogo, label: "C#" },
    { logo: ReactLogo, label: "React" },
    { logo: JsLogo, label: "JavaScript" },
    { logo: TypeScriptLogo, label: "TypeScript" },
    { logo: PhpLogo, label: "Php" },
    { logo: HmtlLogo, label: "Html" },
    { logo: Css, label: "Css" },
    { logo: Java, label: "Java" },
    { logo: Sql, label: "SQL" },
  ];
  return (
    <BoxDetails className="section-offset" id={"skills"} title={"skills"}>
      {skillstab.map((skill, index) => (
        <Box
          key={index}
          className="projectCard-item"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <img
            style={{ width: "50px", height: "50px" }}
            src={skill.logo}
            alt={skill.label}
          />
          <Typography style={{ color: "white" }}>{skill.label}</Typography>
        </Box>
      ))}
    </BoxDetails>
  );
};

export default SkillsDetails;
