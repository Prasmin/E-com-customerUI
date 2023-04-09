import React from "react";
import NavbarComp from "./Navbar";
import Footer from "./footer";
import Herosection from "./Herosection";

const customerLayout = () => {
  return (
    <>
      <div className="body">
        <NavbarComp />
        <main className="main">
          <Herosection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default customerLayout;
