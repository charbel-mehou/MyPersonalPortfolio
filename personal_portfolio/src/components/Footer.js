import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box className="footer">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, pb: 2 }}>
        <Typography variant="h6" textAlign="center">
          {t("made-by")}
        </Typography>
        <Typography variant="h6" textAlign="center">
          {t("copyright")}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
