import React,{useEffect} from 'react'
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import { FaSignInAlt,FaSignOutAlt } from 'react-icons/fa';
import {GiHouse} from 'react-icons/gi';
import { useDispatch,useSelector } from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
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
    <header className='fixed-top'>
        <Navbar variant='dark' expand="lg" collapseOnSelect>
        
          <Container>
          <LinkContainer to="/">
            <Navbar.Brand><GiHouse className='nav-icon'/>Three in One Project</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
              <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link></LinkContainer>
                <LinkContainer to="/properties">
                <Nav.Link>Properties</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/eshop">
                <Nav.Link>Eshop</Nav.Link>
                </LinkContainer>
                {user ?(
                <LinkContainer to="/helpdesk">
                <Nav.Link>Helpdesk</Nav.Link>
                </LinkContainer>) :""}
                <LinkContainer to="/faqs">
                <Nav.Link>FAQs</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                <Nav.Link>Contact&nbsp;Us</Nav.Link>
                </LinkContainer>
                {user ? (<>                <Nav.Link>   <Image src={userprofile?.profile_photo} height='60px'  roundedCircle /></Nav.Link>
                <NavDropdown title={`Welcome ${userprofile?.first_name}`} id="username">
                
                <LinkContainer to="/profile">
                <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/changepassword">
                <NavDropdown.Item>Change Password</NavDropdown.Item>
                </LinkContainer>
                  
                  <NavDropdown.Item onClick={logoutHandler}>
                  <FaSignOutAlt/> Logout</NavDropdown.Item>
                  
                </NavDropdown></>
                ) :(<LinkContainer to="/login"><Nav.Link><FaSignInAlt/> Login</Nav.Link></LinkContainer>)}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <p className="moving-text">This is demo website. you may contact now to xxxx@gmail.com</p>
   
    </header>
  )
}

export default Header
