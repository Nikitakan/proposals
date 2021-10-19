import React from "react";
import Carousel from "react-material-ui-carousel";
import { bannerData } from "../Utils/Data";

const Banner = () => {
  return (
    <div className="p-2 bg-light">
      <Carousel
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          style: {
            background: "white",
            color: "black",
            margin: 0,
          },
        }}
      >
        {bannerData.map((img, i) => (
          <img key={i} src={img} alt={img} width="100%" height="280px" />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
