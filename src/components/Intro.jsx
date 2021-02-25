import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import unamed from "../assets/images/unnamed.jpg"

export default function Intro() {
    return (
        <Container className="intro" fluid>
            <Row>
                <Col sm={12} lg={6}>
                    <Container style={{marginBottom:40}}>
                        <Row>
                            <Col>
                                <div className="introWrapper">
                                    <div className="normalBoldText" style={{marginBottom:20}} >Introducing Nova Ridge</div>
                                    <p>
                                        Nova Ridge is a gated residential community within Appolonia City which covers a total area
                                        of 90 acres. It offers 700 serviced plots with fully serviced plots with clean land title to
                                        individuals who want to build homes to their preferred specifications.
                                    </p>
                                    <p>
                                        As a premium residential complex, Nova Ridge’s serviced plots come with good roads,
                                        drainage for even the most punishing floods and neighborhood planning that ensures your
                                        view will never change. Additionally, there is on-site electricity, running water, state of the art
                                        ICT networking and excellent security systems.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="introWrapper">
                                    <div className="normalBoldText" style={{marginBottom:20, marginTop:-30}} >Amenities</div>
                                    <ul>
                                        <li>
                                            Gated community with 24hr security
                                        </li>
                                        <li>
                                            Tarred roads with underground utilities: including water, power, sewage and ICT
                                        </li>
                                        <li>
                                            Landscaped common areas and club house with swimming pool
                                        </li>
                                        <li>
                                            Estate Management
                                        </li>
                                        <li>
                                            Club house
                                        </li>
                                        <li>
                                            Jogging &amp; biking trail
                                        </li>
                                        <li>
                                            On-site electricity
                                        </li>
                                        <li>
                                            Running water
                                        </li>
                                        <li>
                                            Connection to sewerage
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col sm={12} lg={6}>
                    <div className="youtubeVideo">
                        <img src={unamed} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
