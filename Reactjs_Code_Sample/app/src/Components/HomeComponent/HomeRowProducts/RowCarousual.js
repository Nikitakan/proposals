import React from "react";
import Carousel from "react-multi-carousel";
import "../../../../node_modules/react-multi-carousel/lib/styles.css";
import ItemRow from "./ItemRow";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const RowCarousual = ({ products , time }) => {
  const item = products.map(
    ({ detailUrl, tagline, discount, title: { shortTitle }, id }) => {
      return (
        <div key={id} className="m-2">
          <ItemRow
            dataiUrl={detailUrl}
            discount={discount}
            tagline={tagline}
            shortTitle={shortTitle}
          />
        </div>
      );
    }
  );

  return (
    <div className="shadow-sm">
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        infinite={true}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={time}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
      >
        {item}
      </Carousel>
    </div>
  );
};

export default RowCarousual;
