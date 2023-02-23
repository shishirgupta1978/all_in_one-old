import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className='fixed-bottom'>
            <Container>
                <Row>
                    <Col className='text-center text-white my-auto'>Copyright &copy; Universal {new Date().getFullYear()}</Col>

                </Row>
            </Container>

        </footer>
    )
}

export default Footer
