import React from 'react'
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap'
import { proxy } from '../utils/data';
import ProxyCard from './ProxyCard'
import Infocard from '../components/Infocard'
import { investments } from '../utils/data'
import graph from '../assets/images/graph.png'

export default function Section({
    title="title",
    img=[],
    backgroundColor,
    carousel,
    neighbourhood,
    investment
}) {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    const renderImage = ()=> {
        if(!carousel){
            return (
                <img src={img[0]} alt="" />
            )
        } else {
            return (
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {
                        img.map((image,i)=>{
                            return (
                                <Carousel.Item key={i}>
                                    <img
                                        className="d-block w-100"
                                        src={image}
                                        alt=""
                                    />
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            )
        }
    }

    const renderSection = ()=> {
        if(investment){
            return (
                <>
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
                </>
            ) 
        }
        if(neighbourhood){
            return (
                <Col lg={12} sm={12}>
                    <Container className="neighbourhoodWrapper" fluid>
                        <div className="bigText">{title}</div>
                        <Row>
                            {
                                proxy.map((prox,i)=>{
                                    return (
                                        <ProxyCard 
                                            key={i}
                                            heading={prox.heading}
                                            eta={prox.eta}
                                            amount={prox.amount}
                                            mode={prox.mode}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </Col>
            ) 
        }
        return (
            <Col sm={12} lg={12}>
                <div className="sectionWrapper">
                    <div className="bigText">{title}</div>
                    {
                        renderImage()
                    }
                </div>
            </Col>
        )
    }
    return (
        <Container style={{backgroundColor}} className="section" fluid>
            <Row>
                {
                    renderSection()
                }
            </Row>
        </Container>
    )
}
