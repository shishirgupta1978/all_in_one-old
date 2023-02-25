import React,{useEffect} from 'react';
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import Image from "react-bootstrap/Image";
import { FaSignInAlt,FaSignOutAlt } from 'react-icons/fa';
import {GiHouse} from 'react-icons/gi';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {profile, logout,reset } from '../api/apiSlice';


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user,userprofile}= useSelector((state)=>state.api)
  const logoutHandler = ()=>{
    dispatch(logout());
    dispatch(reset());
    navigate("/")
  }

useEffect(()=>{
  if(user?.refresh)
  {
    dispatch(profile({"url": "/api/v1/auth/users/me/","private" :true}));
  }

},[user?.refresh,dispatch]);

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">My Ecommerce Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/properties">Properties</Nav.Link>
          <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
          <Nav.Link as={Link} to="/hhop">Helpdesk</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          
          {user ? (<>                
          <NavDropdown title={`Welcome ${userprofile?.first_name}`} id="username">
          <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/changepassword">Change Password</NavDropdown.Item>
          <NavDropdown.Item onClick={logoutHandler}><FaSignOutAlt/> Logout</NavDropdown.Item></NavDropdown></>
          ) :(<Nav.Link as={Link} to="/login"><FaSignInAlt/> Login</Nav.Link>)}

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;

