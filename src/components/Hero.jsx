import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/images/groupLogo.png'
import RevealButton from './RevealButton'

export default function Hero({
    onReveal,
    number,
    onReserve
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
                        <div className="biggestText">Nova Ridge</div>
                        <div>Serviced plot sales starts from</div>
                        <div style={{marginTop:"20px"}} className="bigColoredText">40ft x 70ft for &#8373;130,790 (260sqm)</div>
                        <Row>
                            <Col>
                                <div className="callToActionWrapper">
                                    <RevealButton 
                                        label="0501**** View Phone"
                                        number={number}
                                        onReveal={onReveal}
                                    />
                                    <button onClick={onReserve}>RESERVE PLOT</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
