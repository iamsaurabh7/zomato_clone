import React from "react";
import Filters from "../Filters/Filters";
import DeliveryCollections from "./DeliveryCollections/DeliveryCollections";
import TopBrands from "./TopBrands/TopBrands";
import ExploreSection from "../common/ExploreSection/ExploreSection";
import { restaurants } from "../../data/restaurant";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },

  {
    id: 3,
    title: "Pure Veg",
  },
  {
    id: 4,
    title: "Cuisines",
    icon: <i className="fi fi-rr-angle-small-down absolute-center"></i>,
  },
];
const restaurantsList = restaurants;
function Delivery() {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection
        list={restaurantsList}
        collectionName={"Order food online in Koramangala, Bangalore"}
      />
    </div>
  );
}

export default Delivery;
