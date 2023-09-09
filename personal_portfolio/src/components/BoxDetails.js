import { Box, Typography } from "@mui/material";
import React, { Children } from "react";
import { useTranslation } from "react-i18next";
const BoxDetails = ({ id, title, children }) => {
  const { t } = useTranslation();

  return (
    <Box id={id} sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
      <Box className="title-box">
        <Typography variant="h5" className="title">
          {" "}
          {t(title)}
        </Typography>
      </Box>

      <Box
        className="bg-slate-900 bg-opacity-70"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          p: 2,
          mx: "12PX",
          gap: 2,
          flexWrap: { xs: "wrap", lg: "nowrap" },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default BoxDetails;