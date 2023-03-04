import React from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import { eshop_data,new_arrivals,featured_products } from '../../assets/data/data';

export const EshopPage = () => {
  
  return (
    <div>
      <Carousel>
      {eshop_data.map((props,i)=>{return (  <Carousel.Item key={i} interval={3000}>
     
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src={props[0]}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{props[1]}</h3>
            <p>{props[2]}</p>
          </Carousel.Caption>
        </Carousel.Item>)

} )}
      
      </Carousel>
      <Container>
        <Row>
          <Col>
            <h2>New Arrivals</h2>
          </Col>
        </Row>
        <Row>
        {new_arrivals.map((props,i)=>{return (  
          <Col key={i} md={3}>
            <Card>
              <Card.Img variant="top" src={props[0]} />
              <Card.Body>
                <Card.Title>{props[1]}</Card.Title>
                <Card.Text>
                {props[2]}
                </Card.Text>
                <Card.Link href="#">Add to Cart</Card.Link>
              </Card.Body>
            </Card>
          </Col>)

} )}
   
        </Row>

        <Row>
          <Col>
            <h2>Featured Products</h2>
          </Col>
        </Row>
        <Row>
        {featured_products.map((props,i)=>{return (            <Col key={i} md={3}>
            <Card >
              <Card.Img variant="top" src={props[0]} />
              <Card.Body>
                <Card.Title>{props[1]}</Card.Title>
                <Card.Text>
                {props[2]}
                </Card.Text>
                <Card.Link href="#">Add to Cart</Card.Link>
              </Card.Body>
            </Card>
          </Col>)

} )}
      </Row>
      </Container>
    </div>
  );
};


