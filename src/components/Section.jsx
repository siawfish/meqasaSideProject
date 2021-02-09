import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { proxy } from '../utils/data';
import ProxyCard from './ProxyCard'

export default function Section({
    title="title",
    img=[],
    backgroundColor,
    carousel,
    neighbourhood
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
        if(!neighbourhood){
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
        } else {
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
