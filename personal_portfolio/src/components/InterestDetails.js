import React from "react";
import Netflix from "../assets/icons/netflix.png";
import Gaming from "../assets/icons/controller.png";
import BasketBall from "../assets/icons/basketball.png";
import Digital from "../assets/icons/digital-art.png";
import GridDetails from "./GridDetails";

const intereststab = [
  { logo: Netflix, label: "Series" },
  { logo: Gaming, label: "Gaming" },
  { logo: BasketBall, label: "BasketBall" },
  { logo: Digital, label: "Digital art" },
];

const InterestDetails = () => {
  return ( <GridDetails id={"interests"} title={"interests"} tab={intereststab} />
  );
};

export default InterestDetails;
