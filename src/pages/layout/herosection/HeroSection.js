import React from "react";
import img1 from "./images/background.jpg";
import "./Hero.css";
import { Button, Col, Container, Row } from "react-bootstrap";

const Herosection = () => {
  return (
    <div className="title">
      <div className="title--text ">
        <div className="centered-content">
          <p>Shop Smart,</p>
          <h3>Shop Better.</h3>

          <a href="/men">
            <Button variant="dark" className="mx-2">
              Shop Men
            </Button>
          </a>
          <a href="/women">
            <Button variant="dark">Shop Women</Button>
          </a>
        </div>
      </div>

      <div className="title--img">
        <img src={img1} alt="backgroundimg" />
      </div>
    </div>
  );
};

export default Herosection;
