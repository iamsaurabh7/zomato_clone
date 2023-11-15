import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="max-width header">
      <img
        className="zomato-header-logo"
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato-logo"
      />
      <div className="header-right">
        <div className="header-location-search-Container">
          <div className="location-wrapper ">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Banglore, Karnataka</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-seperator"></div>
          <div className="header-searchbar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png"
            alt="profile-pic"
            className="header-profile-image"
          />
          <span className="header-username">Saurabh</span>
          <i className="fi fi-rr-angle-down absolute-center header-profile-option-icon cursor-point"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
