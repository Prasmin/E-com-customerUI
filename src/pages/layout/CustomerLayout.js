import React from "react";
import NavbarComp from "./navbar/Navbar";
import Footer from "./footer/footer";
import Herosection from "./herosection/HeroSection";

const customerLayout = () => {
  return (
    <>
      <NavbarComp />
      <Herosection />

      {/* <Footer /> */}
    </>
  );
};

export default customerLayout;
