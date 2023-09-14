import React from "react";
import BoxDetails from "./BoxDetails";
import { Box, Typography } from "@mui/material";
import ReactCertif from "../assets/images/ReactCertif.png";
import JavaScript from "../assets/images/JavascriptCertif.png";
import Csharp from "../assets/images/CsharpCertif.png"
import { useTranslation } from "react-i18next";
const certifstab = [
  { logo: ReactCertif, label: "React.js" },
  { logo: JavaScript, label: "Javascript" },
  { logo: Csharp, label: "C#" }
];
const CertificationsDetails = () => {
  const { t } = useTranslation();
  return (
    <BoxDetails className="section-offset" id="certifications" title="certifications">
      <Box sx={{ display: "flex", flexDirection: "row",flexWrap:{xs:'wrap',lg:'nowrap'}, flexGrow:1,gap: 2 ,width:{xs:'100%',lg:'auto'}}}>
        {certifstab?.map((certif, index) => (
          <Box
            className="certifCard"
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2
            }}
          >
            <img
              className="certifCard-img"
              src={certif.logo}
              alt="certif"
            ></img>
            <Typography variant="h5" color="white">
              {" "}
              {t("certif-complete")} {t(certif.label)}
            </Typography>
          </Box>
        ))}
      </Box>
    </BoxDetails>
  );
};

export default CertificationsDetails;
