import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComp = () => {
  return (
    <>
      <Container fluid activeKey="/home">
        <Row className="py-3">
          <Col>
            <Navbar.Brand>Brand text</Navbar.Brand>
          </Col>

          <Col className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="dark" className="mx-2">
              Search
            </Button>
          </Col>
        </Row>

        <Row className="shadow-lg p-3  bg-body-tertiary  my-2 border-bottom border-danger rounded-pill bg-dark ">
          <Col>
            <Nav className="d-flex justify-content-start flex-nowrap ">
              <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Recently Viewed</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Contact Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Dropdown>
                  <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    All Products
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
            </Nav>
          </Col>

          <Col>
            <Nav className="d-flex justify-content-end">
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  <i className="fa-solid fa-user"></i>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Link-3">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NavbarComp;
