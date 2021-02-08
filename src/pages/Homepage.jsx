import React from 'react'
import Header from '../components/Header'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/images/meqasa-logo-final-transparent.png'

export default function Homepage() {
    return (
        <div>
            <Header />
            <Container className="hero" fluid>
                <Row>
                    <Col lg={6}>
                        <div className="heroContent">
                            <img src={logo} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
