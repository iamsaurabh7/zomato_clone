import React from "react";
import "./TopBrands.css";
import topBrandsList from "./topBrandsList.json";
import NextArrow from "../../common/NextArrow";
import PrevArrow from "../../common/PrevArrow";
import Slider from "react-slick";

const settings = {
  //   dots: true,
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

function TopBrands() {
  return (
    <div className="max-width top-brands">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandsList.map((brand) => {
          return (
            <div key={brand.title}>
              <div className="top-brand-cover cursor-point">
                <img
                  src={brand.cover}
                  alt={brand.title}
                  className="top-brand-image"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default TopBrands;
