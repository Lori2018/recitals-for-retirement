import React from "react";
import "../custom.scss";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar-container" variant="dark" fixed="top">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://img.icons8.com/windows/32/ffffff/apple-music.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Recitals for Retirement
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Directory" id="basic-nav-dropdown">
                <NavDropdown.Item href="/explore">Explore</NavDropdown.Item>
                <NavDropdown.Item href="/get-involved">
                  Get Involved
                </NavDropdown.Item>
                <NavDropdown.Item href="/contact-us">
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <a href="/">
            <img src="https://img.icons8.com/ios-filled/30/ffffff/home.png" />
          </a>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
