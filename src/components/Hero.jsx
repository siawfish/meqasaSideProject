import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/images/meqasa-logo-final-transparent.png'
import RevealButton from './RevealButton'

export default function Hero() {
    return (
        <Container className="hero" fluid>
            <Row>
                <Col sm={12} lg={7}>
                    <div className="heroContent">
                        <img src={logo} alt="" />
                        <div className="bigText">Presents</div>
                        <div className="biggestText">Silver Spring Residence Phase II</div>
                        <div>Serviced plot sales starts from</div>
                        <div className="bigColoredText">N4,500,000 per month (300sqm)</div>
                        <div style={{maxWidth:"60%"}}>Exclusive discount on plot sales available on meqasa.com</div>
                        <div className="callToActionWrapper">
                            <RevealButton 
                                label="0577**** View Phone"
                            />
                            <RevealButton 
                                label="0577**** View Phone"
                            />
                            <button>RESERVE PLOT</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
