import React from "react";
import "./Nav.css";

import { Link } from "react-router-dom";
import {
  Nav,
  NavDropdown,
  Container,
  Navbar,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";

const NavbarComp = () => {
  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      className="d-flex justify-content-center"
      style={{ borderBottom: "2px solid black" }}
    >
      <Container>
        <Navbar.Brand href="/home">Navbar scroll</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className=" my-2 " style={{ maxHeight: "100px" }} navbarScroll>
            <NavDropdown title="Men">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Women">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Accessories">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Form className="d-flex ">
            <Form.Control type="search" placeholder="Search" />
            <Button variant="dark">Search</Button>
          </Form>
          <Nav.Link href="/login">SIGN IN </Nav.Link>
          <Nav.Link href="/cart">
            <i class="fa-regular fa-cart-shopping-fast">CART</i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
