import React from "react";
import "./ExplroreCard.css";

function ExplroreCard({ restaurant }) {
  const name = restaurant?.info?.name ?? "";
  const cover = restaurant?.info?.image?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? [];
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  const bottomContainer = restaurant?.bottomContainers;
  const goldOff = restaurant?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : "Pro extra 10% OFF";
  //   const discount =
  //     offers.length > 1
  //       ? offers[1].text
  //       : offers.length > 1
  //       ? offers[0].text
  //       : null;
  const discount = restaurant?.bulkOffers[0]?.text;

  return (
    // <div>
    <div className="explore-card cursor-point">
      <div className="explore-card-cover">
        <img src={cover} className="explore-card-image" alt={name} />
        <div className="delivery-time">{deliveryTime}</div>
        {proOff && <div className="pro-off absolute-center">{proOff}</div>}
        {goldOff && <div className="gold-off absolute-center">{goldOff}</div>}
        {discount && <div className="discount absolute-center">{discount}</div>}
      </div>
      <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && (
          <div className="res-rating absolute-center">
            {rating} <i className="fi fi-rr-star absolute-center"></i>
          </div>
        )}
      </div>
      <div className="res-row">
        {cuisines.length && (
          <div className="res-cuisine">
            {cuisines.map((item, i) => (
              <span key={item} className="res-cuisine-tag">
                {item}
                {i != cuisines.length - 1 && ", "}
              </span>
            ))}
          </div>
        )}
        {approxPrice && <div className="approx-price">{approxPrice}</div>}
      </div>
      {bottomContainer.length > 0 && (
        <div>
          <div className="card-seperator"></div>
          <div className="explore-bottom">
            <img
              src={bottomContainer[0]?.image?.url}
              alt={bottomContainer[0]?.text}
              style={{ height: "18px" }}
            />
            <div className="res-bottom-text">{bottomContainer[0]?.text}</div>
          </div>
        </div>
      )}
    </div>
    // </div>
  );
}

export default ExplroreCard;
