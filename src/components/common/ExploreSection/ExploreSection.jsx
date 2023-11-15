import React from "react";
import "./ExploreSection.css";
import ExplroreCard from "./ExplroreCard/ExplroreCard";

function ExploreSection({ list, collectionName }) {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explrore-grid">
        {list &&
          list.map((restaurant) => {
            return (
              <ExplroreCard
                restaurant={restaurant}
                key={restaurant.info.resId}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ExploreSection;
