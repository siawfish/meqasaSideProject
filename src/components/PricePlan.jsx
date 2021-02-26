import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PriceCard from './PriceCard'

export default function PricePlan() {
    return (
        <Container className="pricePlan" fluid>
            <div className="biggerText">Price plan</div>
            <Row>
                <PriceCard />
            </Row>
            <Row>
                <Col>
                    <div className="bigText">One Year Plan</div>
                    <p>20% initial deposit and remaining spread over 12 months</p>
                </Col>
                <Col>
                    <div className="bigText">Two Years Plan</div>
                    <p>20% initial deposit and remaining spread over 24 months</p>
                </Col>
            </Row>
        </Container>
    )
}
