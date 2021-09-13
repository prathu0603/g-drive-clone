import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SiGoogledrive } from "react-icons/si";
const NavbarComponent = () => {
  return (
    <Navbar bg="light" className="px-2">
      <Navbar.Brand
        as={Link}
        to="/"
        className="d-flex align-items-center  flex-grow-1"
      >
        <SiGoogledrive style={{ marginRight: "0.5rem", color: "#623ea8" }} />{" "}
        Google Drive
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user">
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
