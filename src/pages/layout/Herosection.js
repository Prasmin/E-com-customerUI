import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Herosection = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src={require("../../images/brett-jordan-Z0C2qRERUsA-unsplash.jpg")}
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 "
                src={require("../../images/nathan-dumlao-NXMZxygMw8o-unsplash.jpg")}
                alt="Second slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={require("../../images/victor-freitas-JbI04nYfaJk-unsplash.jpg")}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Herosection;
