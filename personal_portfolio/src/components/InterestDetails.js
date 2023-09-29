import React from "react";
import Netflix from "../assets/icons/netflix.png";
import Gaming from "../assets/icons/controller.png";
import BasketBall from "../assets/icons/basketball.png";
import Digital from "../assets/icons/digital-art.png";
import GridDetails from "./GridDetails";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const intereststab = [
  { logo: Netflix, label: "Series" },
  { logo: Gaming, label: "Gaming" },
  { logo: BasketBall, label: "BasketBall" },
  { logo: Digital, label: "Digital art" },
];

const InterestDetails = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Box className="title-box">
        <Typography variant="h5" className="title" sx={{ py: 1 }}>
          {t("interests")}
        </Typography>
      </Box>
      <Typography variant="h6" className="title" sx={{ py: 1 }}>
          {t("interets-speech")}
        </Typography>
      <GridDetails id={"interests"} title={"interests"} tab={intereststab} />
    </Box>
  );
};

export default InterestDetails;
