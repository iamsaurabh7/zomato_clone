import React, { useState } from "react";
import "./Popup.css";

function Popup() {
  const [isPopupVisible, setPopupVisibility] = useState(true);

  const closePopup = () => {
    setPopupVisibility(false);
  };

  return (
    <>
      {isPopupVisible && (
        <div className="popup-container">
          <div className="popup-content">
            <button className="close-button" onClick={closePopup}>
              &times;
            </button>
            <div className="popup-message">
              <h2>Explore the Zomato (Desktop) Clone Design</h2>
              <p>
                This website, a Zomato clone, is tailored for desktop and tablet
                users. For the best view, use a desktop, laptop, or a larger
                screen.
              </p>
              <p>
                Explore the carefully crafted design, perfect for a more
                immersive experience on bigger screens. Thank you for visiting!
              </p>
              <p>
                Made with ❤️ by{" "}
                <a
                  href="https://github.com/iamsaurabh7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saurabh Verma
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
