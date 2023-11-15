import React from "react";
import "./DeliveryCollections.css";
import data from "./deliveryItem.json";
import PrevArrow from "../../common/PrevArrow";
import NextArrow from "../../common/NextArrow";
import Slider from "react-slick";
import DeliveryItem from "./DeliveryItem/DeliveryItem";

const settings = {
  //   dots: true,
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

function DeliveryCollections() {
  return (
    <div className="delivery-collection">
      <div className="max-width">
        <div className="collection-title">Eat what makes you happy</div>
        <Slider {...settings}>
          {data &&
            data.map((item) => {
              return <DeliveryItem item={item} key={item.title} />;
            })}
        </Slider>
      </div>
      {/* <div>{console.log(data)}</div> */}
    </div>
  );
}

export default DeliveryCollections;
