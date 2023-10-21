import { Box } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectCarousel = ({ projectScreenTab }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
      <Carousel
        className="box-projet-speech"
        showArrows={true}
        showStatus={false}
        autoPlay={true}
        showThumbs={true}
        infiniteLoop={true}
        showIndicators={true}
        interval={10000}
      >
        {projectScreenTab &&
          projectScreenTab?.map((projectScreen, index) => (
            <Box key={index}>
              <img
                src={projectScreen.src}
                alt={projectScreen.alt}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "flex-start", lg: "flex-end" },
                  alignItems: { xs: "flex-start", lg: "flex-end" },
                }}
              />
            </Box>
          ))}
      </Carousel>
    </Box>
  );
};

export default ProjectCarousel;
