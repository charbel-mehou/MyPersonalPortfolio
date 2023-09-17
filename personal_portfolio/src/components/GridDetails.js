import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const GridDetails = ({id,title,tab}) => {
  const { t } = useTranslation();

  return (
    <Box
      className="section-offset"
      id={id}
      sx={{ display: "flex", flexDirection: "column", mt: 2 }}
    >
      <Box className="title-box" sx={{ py: 1 }}>
        <Typography variant="h5" className="title">
          {" "}
          {t(title)}
        </Typography>
      </Box>

      <Box
        className="section-box"
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 2,
          mx: "12px",
        }}
      >
        <Grid container spacing={2} alignItems="flex-start" sx={{xs:'wrap',lg:'nowrap'}}>
          {tab?.map((tabItem, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                className="skill-item bg-slate-900 bg-opacity-70 "
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  p: 2,
                  gap: 2,
                }}
              >
                <img
                  style={{ width: "70px", height: "70px" }}
                  src={tabItem.logo}
                  alt={tabItem.label}
                />
                <Typography variant="h5" style={{ color: "white" }}>
                  {tabItem.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default GridDetails;
