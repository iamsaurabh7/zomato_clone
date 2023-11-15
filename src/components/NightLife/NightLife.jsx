import React from "react";
import Collection from "../common/Collection/Collection";
import collectionList from "./NightLifeCollection.json";
import Filters from "../Filters/Filters";
import ExploreSection from "../common/ExploreSection/ExploreSection";
import { nightLifeData } from "../../data/nightLifeRestaurants";

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
    title: "Pubs & Bars",
  },
];

const collectionName = "Nightlife Restaurants in Koramangala, Bangalore";
// const diningList = diningData;
function NightLife() {
  return (
    <div>
      <Collection collectionList={collectionList} />
      <div className="max-width">
        <Filters filterList={diningFilters} />
      </div>
      <ExploreSection list={nightLifeData} collectionName={collectionName} />
    </div>
  );
}

export default NightLife;
