import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = ({ setNavHeight }) => {
    const navRef = useRef(null);

    useEffect(() => {
        const height = navRef.current.clientHeight;
        setNavHeight(height);
      }, [setNavHeight]);
    
  return (
    <Navbar expand="lg" bg="dark" fixed="top" variant="dark" ref={navRef}>
      <Container>
        <Navbar.Brand as={NavLink} to="/">My Ecommerce Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
            <Nav.Link as={NavLink} to="/cart">Cart</Nav.Link>
            <Nav.Link as={NavLink} to="/checkout">Checkout</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
            <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
