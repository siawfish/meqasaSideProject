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
                                    <div className="normalBoldText" style={{marginBottom:20}} >Introducing Wala Park</div>
                                    <p>
                                        Wala Park is a new 76-acre residential neighbourhood by Appolonia Development Company Ltd, the owner and developer of 
                                        Appolonia City, in partnership with the Chiefs, leaders and residents of the Appolonia community.
                                    </p>
                                    <p>
                                        Wala Park is located between Oyibi and Afienya, bordering Appolonia City, Greater Accra’s new city where more than 700 homes 
                                        are already occupied or under construction, and schools and dozens of businesses are under development.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="introWrapper">
                                    <div className="normalBoldText" style={{marginBottom:20, marginTop:-30}} >Infrastructure</div>
                                    <ul>
                                        <li>
                                            The government, through the Electricity Company of Ghana, will provide power, as is
                                            its obligation once there is a critical mass of homeowners
                                        </li>
                                        <li>
                                            Cleared and provision of accessible roads but with no concrete drains and tarmac.
                                            The expectation is that over time the government will complete the roads with
                                            tarmac.
                                        </li>
                                        <li>
                                            Residents will still benefit from the services within Appolonia City, such as nearby
                                            shops, medical facilities, schools and parks and open spaces.
                                        </li>
                                        <li>
                                            Cleared site, Cut and levelled ground with allotted plots
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
