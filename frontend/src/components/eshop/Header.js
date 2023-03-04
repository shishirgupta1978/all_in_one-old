import React,{useEffect, useRef} from 'react'
import { Navbar, Container, Nav,NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Image from "react-bootstrap/Image";
import { FaSignInAlt,FaSignOutAlt } from 'react-icons/fa';
import {GiHouse} from 'react-icons/gi';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {profile, logout,reset } from '../../api/apiSlice';


export const Header=({ setNavHeight })=> {
  const navRef = useRef(null);

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user,userprofile}= useSelector((state)=>state.api)
  const logoutHandler = ()=>{
    dispatch(logout());
    dispatch(reset());
    navigate("/")
  }


 useEffect(() => {
    const height = navRef.current.clientHeight;
    setNavHeight(height);
  }, [setNavHeight]);


useEffect(()=>{
  if(user?.refresh)
  {
    dispatch(profile({"url": "/api/v1/auth/users/me/","private" :true}));
  }


},[user?.refresh,dispatch]);



  return (
    <div className="header">
      <Navbar fixed="top" ref={navRef} expand="md" bg="secondary">
        <Container>
          <Navbar.Brand href="/"><GiHouse className='nav-icon'/> Three in One</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/eshop">Home</Nav.Link>
              { user ?(<Nav.Link as={NavLink} to="/helpdesk">Helpdesk</Nav.Link>) :""}
              <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
              <Nav.Link as={NavLink} to="/eshop/cart">Cart</Nav.Link>

              {user ? (<>                
                <NavDropdown title={<Image src={userprofile?.profile_photo} height='25px'  roundedCircle />} id="username">
                
                <NavDropdown.Item as={NavLink} to="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/changepassword">Change Password</NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                  <FaSignOutAlt/> Logout</NavDropdown.Item>
                </NavDropdown></>
              ) :(<Nav.Link as={NavLink} to="/login"><FaSignInAlt/> Login</Nav.Link>)}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

