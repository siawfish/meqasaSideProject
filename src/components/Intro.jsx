import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Feature from '../components/Feature'
import { features } from '../utils/data'

export default function Intro() {
    return (
        <Container className="intro" fluid>
            <Row>
                <Col sm={12} lg={8}>
                    <Container style={{marginBottom:40}}>
                        <Row>
                            <Col>
                                <div className="introWrapper">
                                    <div className="normalBoldText">Introducing</div>
                                    <div style={{marginBottom:20}} className="normalBoldText">Silver Spring Residence Phase II</div>
                                    <p>
                                        Welcome to Silver Spring Residence Phase II, the future of living. Silver Spring 
                                        Residence is located within the axis of Ibeju-Lekki, just a mile away from The Free Trade Zone.
                                    </p>
                                    <p>Silver Spring Residence Phase II is designed to give you a larger than life perspective of living.</p>
                                </div>
                            </Col>
                        </Row>
                        <div className="introCardsWrapper">
                            <Row>
                                {
                                    features.map((feature,i)=>{
                                        return (
                                            <Col key={i} xs={6} lg={3}>
                                                <Feature 
                                                    type={feature.type} 
                                                    label={feature.label} 
                                                />
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </div>
                    </Container>
                </Col>
                <Col sm={0} style={{padding:0}} lg={4}>
                    <div className="darkBlueBg"></div>
                </Col>
            </Row>
        </Container>
    )
}
