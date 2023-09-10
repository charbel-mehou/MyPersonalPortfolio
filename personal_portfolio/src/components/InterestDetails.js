import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Netflix from "../assets/icons/netflix.png";
import Gaming from "../assets/icons/controller.png";
import BasketBall from "../assets/icons/basketball.png";
import Digital from "../assets/icons/digital-art.png";
import BoxDetails from "./BoxDetails";

const intereststab = [
  { logo: Netflix, label: "Series" },
  { logo: Gaming, label: "Gaming" },
  { logo: BasketBall, label: "BasketBall" },
  { logo: Digital, label: "Digital art" },
];

const InterestDetails = () => {
  const { t } = useTranslation();
  return (
    <BoxDetails className="section-offset" id={"interests"} title={"interests"}>
      {intereststab?.map((skill, index) => (
        <Box
          key={index}
          className='interest-box'
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2
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

export default InterestDetails;
