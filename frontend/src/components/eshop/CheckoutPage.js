import React from 'react';
import { useFormik } from 'formik';
import {  Container, Row, Col,Form, Button } from 'react-bootstrap';

export const CheckoutPage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      cardNumber: '',
      cardExpiration: '',
      cardCvv: '',
    },
    onSubmit: values => {
      // Handle form submission and payment processing here
    },
  });

  return (




    <Container>
      <Row>
        <Col md={6}>
          <div className="checkout-form">
            <h2>Shipping Information</h2>        
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Col>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </Form.Group></Col><Col>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Form.Group>

</Col>
        </Row>


        <Form.Group controlId="address">
          <Form.Label>Address:</Form.Label>
          <Form.Control
            name="address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
        </Form.Group>

<Row><Col>        <Form.Group controlId="city">
          <Form.Label>City:</Form.Label>
          <Form.Control
            name="city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
        </Form.Group>
</Col><Col>
        <Form.Group controlId="state">
          <Form.Label>State:</Form.Label>
          <Form.Control
            name="state"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.state}
          />
        </Form.Group>
</Col><Col>
        <Form.Group controlId="zip">
          <Form.Label>ZIP Code:</Form.Label>
          <Form.Control
            name="zip"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.zip}
          />
        </Form.Group>
        </Col></Row>
        <Form.Group controlId="cardNumber">
          <Form.Label>Card Number:</Form.Label>
          <Form.Control
            name="cardNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.cardNumber}
          />
        </Form.Group>
<Row><Col>
        <Form.Group controlId="cardExpiration">
          <Form.Label>Card Expiration Date:</Form.Label>
          <Form.Control
            name="cardExpiration"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.cardExpiration}
          />
        </Form.Group></Col><Col>

        <Form.Group controlId="cardCvv">
          <Form.Label>Card CVV:</Form.Label>
          <Form.Control
            name="cardCvv"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.cardCvv}
          />
        </Form.Group></Col>
        </Row>
        
        </Form>
        </div>
        </Col>
        <Col md={6}>
          <div className="checkout-summary">
            <h2>Order Summary</h2>
            <ul>
              <li>
                <span>Product 1</span>
                <span>$10.00</span>
              </li>
              <li>
                <span>Product 2</span>
                <span>$20.00</span>
              </li>
              <li>
                <span>Product 3</span>
                <span>$30.00</span>
              </li>
            </ul>
            <div className="total">
              <span>Total:</span>
              <span>$60.00</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" type="submit">
            Place Order
          </Button>
        </Col>
      </Row>
    </Container>
);
};


