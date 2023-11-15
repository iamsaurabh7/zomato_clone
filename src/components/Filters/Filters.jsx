import React from "react";
import "./Filters.css";
import FilterItem from "./FilterItem/FilterItem";
function Filters({ filterList }) {
  return (
    <div className="filters ">
      {filterList &&
        filterList.map((filter) => {
          return <FilterItem key={filter.id} filter={filter} />;
        })}
    </div>
  );
}

export default Filters;
