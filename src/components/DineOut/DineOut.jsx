import React from "react";
import Collection from "../common/Collection/Collection";
import collectionList from "./DineOutCollection.json";
import { diningData } from "./../../data/diningRestaurant";
import Filters from "../Filters/Filters";
import ExploreSection from "./../common/ExploreSection/ExploreSection";

const diningFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    // icon: "https://b.zmtcdn.com/data/o2_assets/577bf55ff265ae45e11cfe6911d176941687789024.png",
    title: "Gold ",
  },
  {
    id: 3,
    title: "Rating: 4.0+",
  },

  {
    id: 4,
    title: "Outdoor Seating",
  },
  {
    id: 5,
    title: "Serves Alcohol",
  },
  {
    id: 6,
    title: "Open Now",
  },
];

const collectionName = "Trending dining restaurants in Koramangala, Bangalore";
const diningList = diningData;

function DineOut() {
  return (
    <div>
      <Collection collectionList={collectionList} />
      <div className="max-width">
        <Filters filterList={diningFilters} />
      </div>
      <ExploreSection list={diningList} collectionName={collectionName} />
    </div>
  );
}

export default DineOut;
