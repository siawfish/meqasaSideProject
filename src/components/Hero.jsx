import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/images/groupLogo.png'
import RevealButton from './RevealButton'

export default function Hero({
    onReveal,
    showNumber
}) {
    return (
        <Container className="hero" fluid>
            <Row>
                <Col sm={12} lg={7}>
                    <div className="heroContent">
                        <div className="groupLogoWrapper">
                            <img src={logo} alt="" />
                        </div>
                        <div className="bigText">Presents</div>
                        <div className="biggestText">Silver Spring Residence Phase II</div>
                        <div>Serviced plot sales starts from</div>
                        <div style={{marginTop:"20px"}} className="bigColoredText">40ft x 70ft for &#8373;40,000 (260sqm)</div>
                        <div style={{marginBottom:"20px"}} className="bigColoredText">50ft x 70ft for &#8373;50,000 (325sqm)</div>
                        <div style={{maxWidth:"60%"}}>Exclusive discount on plot sales available on meqasa.com</div>
                        <Row>
                            <Col>
                                <div className="callToActionWrapper">
                                    <RevealButton 
                                        label="0577**** View Phone"
                                        show={showNumber}
                                        onReveal={onReveal}
                                    />
                                    <button>RESERVE PLOT</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
