import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" style={{ borderTop: "2px solid black" }}>
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3>About Us</h3>
            <p>Some information about the company.</p>
          </div>

          <div className="footer__section">
            <h3>Customer Service</h3>
            <ul>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Shipping Information</li>
              {/* Add more customer service links */}
            </ul>
          </div>

          <div>
            &copy; Copy right all reserved. Made by{" "}
            <a href="#!">Prashmin Gurung</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div className="bg-dark text-light p-5 text-center">
      &copy; Copy right all reserved. Made by <a href="#!">Prashmin Gurung</a>
    </div> */
}
