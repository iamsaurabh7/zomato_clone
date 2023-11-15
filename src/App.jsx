import React, { useState, useEffect } from "react";
import HomePage from "./pages/home/Home";
import PopUp from "./components/PopUp/PopUp";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowPopup(window.innerWidth < 1150);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {showPopup && (
        <div className="popup">
          <PopUp />
        </div>
      )}
      <HomePage />
    </div>
  );
}

export default App;
