import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";

import "./index.css";

const NavbarMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Navbar className="navbar">
      <Container className="navbar-container" fluid>
        <Navbar.Brand className="navbar-brand" as={Link} to="/">
          <h1 className="text-brand">{"<SM />"}</h1>
        </Navbar.Brand>
        <div className="menu-icon" onClick={handleClick}>
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </div>
        <Nav
          className={
            mobileOpen ? "nav-container nav-menu-visible" : "nav-container"
          }
        >
          <Nav.Link as={Link} to="/" className="nav-link-a">
            <h6 className="nav-text">Home</h6>
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-link-a">
            <h6 className="nav-text">About</h6>
          </Nav.Link>
          <Nav.Link as={Link} to="/projects" className="nav-link-a">
            <h6 className="nav-text">Projects</h6>
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link-a">
            <h6 className="nav-text">Contact</h6>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
