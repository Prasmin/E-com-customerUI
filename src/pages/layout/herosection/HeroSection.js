import React from "react";
import img1 from "./images/background.jpg";

const Herosection = () => {
  return (
    <div className="hero-banner-container d-flex" fluid>
      <div>
        <p>Shop Smarter,</p>
        <h2>Live Better</h2>
      </div>

      <div>
        <img src={img1} alt="backgroundimg" width="100%" height="auto" />
      </div>
    </div>
  );
};

export default Herosection;
