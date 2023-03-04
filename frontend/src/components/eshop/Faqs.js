import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import {Title} from '../common';
import { faqs_data } from '../../assets/data/data';
import Accordion from 'react-bootstrap/Accordion';


export const Faqs = () => {

    return (



        <>
           <Title title="faqs"/> 
            <div className='main-height px-4 px-lg-5 justify-content-center'>
                <Container className="col-sm-12 col-md-8 col-lg-8 form pb-4">
                    <Row>
                        <Col className="mg-top text-center">
                            <section>
                                <h1>
                                    Frequently Ask Questions
                                </h1>
                                <hr className="hr-text" />
                            </section>
                        </Col>
                    </Row>

                    <Row className="mt-3">
                        <Col className="justify-content-center">
                        <Accordion>
                        {faqs_data.map((faq,i)=>{return (  <Accordion.Item eventKey={i} key={i}>
                          <Accordion.Header>{faq[0]}</Accordion.Header>
                          <Accordion.Body>
                          {faq[1]}
                          </Accordion.Body>
                        </Accordion.Item>)

                    } )}
            
                        </Accordion>
                            

                            
                        </Col>
                    </Row>

                </Container>
            </div>


        </>
    )
}

