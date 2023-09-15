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

const SkillsDetails = () => {
  const skillstab = [
    { logo: CsharpLogo, label: "C#" },
    { logo: ReactLogo, label: "React" },
    { logo: TypeScriptLogo, label: "TypeScript" },
    { logo: JsLogo, label: "JavaScript" },
    { logo: HmtlLogo, label: "Html" },
    { logo: PhpLogo, label: "Php" },
    { logo: Css, label: "Css" },
    { logo: Java, label: "Java" },
    { logo: Sql, label: "SQL" },
    { logo: NodeLogo, label: "Node.js" },
  ];
  return <GridDetails id={"skills"} title={"skills"} tab={skillstab} />;
};

export default SkillsDetails;
