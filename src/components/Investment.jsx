import React from 'react'
import Infocard from '../components/Infocard'
import { investments } from '../utils/data'
import graph from '../assets/images/graph.png'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Investment({
    title="title"
}) {
    return (
        <Container className="neighbourhoodWrapper" fluid>
            <Row>
                <Col lg={6} sm={12}>
                    <div className="bigText">{title}</div>
                    <p>
                        Lagos Free Trade Zone is unquestionably the future commercial and industrial hub of Lagos State. 
                        It’s aimed at housing 116 local and foreign companies with over 5,000 residential apartments proposed in its environs.
                    </p>
                    <Row>
                        {
                            investments.map((invest,i)=>{
                                return (
                                    <Infocard
                                        key={i}
                                        caption={invest.caption}
                                        title={invest.title}
                                    />
                                )
                            })
                        }
                    </Row>
                    <Row>
                        <Col>
                            <div className="downloadBrochure">Download Brochure</div>
                            <Button>DOWNLOAD</Button>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} sm={12}>
                    <div className="graphWrapper">
                        <img src={graph} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
