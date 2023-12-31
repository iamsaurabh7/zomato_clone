import React from "react";
import "./FilterItem.css";
function FilterItem({ filter }) {
  return (
    <div className="filter-item cursor-point">
      {filter.icon && filter.icon}
      <div className="filter-name">{filter.title}</div>
    </div>
  );
}

export default FilterItem;
