import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TabOption from "../../components/TabOption/TabOption";
import Delivery from "../../components/Delivery/Delivery";
import DineOut from "../../components/DineOut/DineOut";
import NightLife from "../../components/NightLife/NightLife";

function HomePage() {
  const [activeTab, setActiveTab] = useState("delivery");
  return (
    <div>
      <Header />
      <TabOption activeTab={activeTab} setActiveTab={setActiveTab} />
      {currentScreen(activeTab)}
      <Footer />
    </div>
  );
}
const currentScreen = (tab) => {
  switch (tab) {
    case "delivery":
      return <Delivery />;
    case "dineOut":
      return <DineOut />;
    case "nightLife":
      return <NightLife />;

    default:
      return <Delivery />;
  }
};

export default HomePage;
