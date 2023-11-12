import React from "react";
import "./TabOption.css";
const tabs = [
  {
    id: 1,
    name: "Delivery",
    tag: "delivery",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
    active_color: "#FCEEC0",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
  },
  {
    id: 2,
    name: "Dining Out",
    tag: "dineOut",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    active_color: "#E5F3F3",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
  },
  {
    id: 3,
    name: "Nightlife",
    tag: "nightLife",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    active_color: "#EDF4FF",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
  },
];
function TabOption({ activeTab, setActiveTab }) {
  return (
    <div className="tab-option">
      {/* <button onClick={() => setActiveTab("delivery")}>delivery</button>
      <button onClick={() => setActiveTab("dineOut")}>dineOut</button>
      <button onClick={() => setActiveTab("nightLife")}>nightLife</button> */}
      <div className="tabOption-wrapper max-width">
        {tabs.map((tab) => {
          return (
            <div
              key={tab.id}
              className={`tab-item absolute-center cursor-point ${
                activeTab === tab.tag && "active-tab"
              }`}
              onClick={() => setActiveTab(tab.tag)}
            >
              <div
                className="tab-image-container absolute-center"
                style={{
                  backgroundColor: `${
                    activeTab === tab.tag ? tab.active_color : ""
                  }`,
                }}
              >
                <img
                  src={
                    activeTab === tab.tag ? tab.active_img : tab.inactive_img
                  }
                  alt={tab.name}
                  className="tab-image"
                />
              </div>
              <div className="tab-name">{tab.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TabOption;
