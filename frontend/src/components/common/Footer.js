import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  return (
    <footer>
      <Container className="py-4">
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>We are a leading ecommerce website that offers a wide range of products at competitive prices.</p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </Col>
          <Col md={5}>
            <h5>Connect with Us</h5>
            <Row><Col>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com"><FaFacebook /> Facebook</a></li>
              <li><a href="https://www.twitter.com"><FaTwitter /> Twitter</a></li>
              <li><a href="https://www.instagram.com"><FaInstagram /> Instagram</a></li>
              <li><a href="https://www.whatsapp.com"><FaWhatsapp /> Whatsapp</a></li>
            </ul>
            </Col><Col md={8}>
            <p>123 Main Street<br />
            Anytown, USA 12345<br />
            Phone: (555) 555-1234<br />
            Email: info@ecommercewebsite.com</p></Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="bg-dark text-white py-3">
        <Container>
          <Row>
            <Col className="text-center">
              <p className="mb-0">&copy; 2023 Ecommerce Website. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

