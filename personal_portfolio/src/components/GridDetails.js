import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

const GridDetails = ({ id, tab }) => {
  const [ref, inView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <Box
      id={id}
      ref={ref}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mx: "12px",
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="flex-start"
          sx={{ xs: "wrap", lg: "nowrap" }}
        >
          {tab?.map((tabItem, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                className={`skill-item bg-slate-900 bg-opacity-70 ${
                  isVisible ? "fade-in" : ""
                }`}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  p: 2,
                  gap: 2,
                }}
              >
                <img
                  style={{ width: "40px", height: "auto" }}
                  src={tabItem.logo}
                  alt={tabItem.label}
                />
                <Typography variant="h6" style={{ color: "white" }}>
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
