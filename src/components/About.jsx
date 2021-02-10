import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { BiCheckCircle } from 'react-icons/bi'
import igo from '../assets/images/go-img-1.jpg'

export default function About() {
    return (
        <Container className="about" fluid>
            <div className="filter"></div>
            <Row>
                <Col sm={12} lg={5}>
                    <div className="thickText">About Homeland Dev Co</div>
                    <p className="thickText">
                        At Homeland, we believe building a home is at the core of every family. 
                        Our goal is to develop real estate projects and infrastructure for individuals 
                        or groups of people to build a house they would love to call a home. We are 
                        purposeful of our real estate projects proving the best luxury within the 
                        best and affordable price point.
                    </p>
                    <div className="listWrapper">
                        <div className="icon"><BiCheckCircle /> </div>
                        Verified by Lagos Ministry of Housing
                    </div>
                    <div className="listWrapper">
                        <div className="icon"><BiCheckCircle /> </div>
                        Status: Verified Developer
                    </div>
                    <div style={{marginBottom:40}} className="listWrapper"> 
                        <div className="icon"><BiCheckCircle /> </div>
                        About Homeland Dev Co
                    </div>
                </Col>
                <Col sm={12} lg={7}>
                    <a href="/#" className="thickText">Visit Developer’s Website</a>
                    <Container className="aboutImagesWrapper">
                        <Row>
                            <Col style={{paddingLeft:0}} lg={6} sm={12}>
                                <div className="imgWrapper">
                                    <img alt="" src={igo} />
                                    <h1>SOLD OUT</h1>
                                </div>
                                <div className="thickText">SILVER SPRING RESIDENCE PHASE I</div>
                            </Col>
                            <Col style={{paddingLeft:0}} lg={6} sm={12}>
                                <div className="imgWrapper">
                                    <img alt="" src={igo} />
                                    <Button>Explore</Button>
                                </div>
                                <div className="thickText">SILVER SPRING RESIDENCE PHASE I</div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
