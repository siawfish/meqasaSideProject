import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import fp1 from '../assets/images/floor-plan.png'

export default function FloorPlan({
    backgroundColor
}) {
    return (
        <Container style={{backgroundColor, paddingRight:"10%", paddingLeft:"10%"}} className="section" fluid>
            <div style={{marginBottom:20}} className="bigText">Floor plan</div>
            <Row>
                <Col lg={12}>
                    <div className="floorplan">
                        <img alt="" src={fp1} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
