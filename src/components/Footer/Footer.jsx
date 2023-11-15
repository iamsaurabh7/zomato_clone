// components/Footer.js

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>Made with ❤️ Saurabh Verma</p>
      <a
        href="https://github.com/iamsaurabh7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="github-button"> GitHub </button>
      </a>

    </footer>
  );
}

export default Footer;
