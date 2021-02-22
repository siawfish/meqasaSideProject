import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import fp1 from '../assets/images/fp1.jpg'
import fp2 from '../assets/images/fp2.jpg'

export default function FloorPlan({
    backgroundColor
}) {
    return (
        <Container style={{backgroundColor, paddingRight:"10%", paddingLeft:"10%"}} className="section" fluid>
            <div style={{marginBottom:20}} className="bigText">Floor plan</div>
            <Row>
                <Col lg={6} sm={12}>
                    <div className="floorplan">
                        <div style={{fontWeight:500, fontSize:20, marginBottom:10, color:"#fd5573", textTransform:"capitalize"}}>Distance from Appolonia City</div>
                        <img src={fp1} alt="" />
                    </div>
                </Col>
                <Col lg={6} sm={12}>
                    <div style={{textAlign:"center"}} className="floorplan">
                        <div style={{fontWeight:500, fontSize:20, marginBottom:10, color:"#fd5573", textTransform:"capitalize"}}>Wala Park Site Master Plan</div>
                        <img style={{width:"90%", marginBottom:40}} src={fp2} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
