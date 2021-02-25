import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { proxy } from '../utils/data';
import ProxyCard from './ProxyCard'
import Investment from './Investment';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'

export default function Section({
    title="title",
    img=[],
    backgroundColor,
    carousel,
    neighbourhood,
    investment
}) {
    const [index, setIndex] = React.useState(0)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    const previous = ()=> {
        if(index<=0){
            setIndex(3)
            return
        }
        setIndex(index-1)
    }

    const next = ()=> {
        if(index>=3){
            setIndex(0)
            return
        }
        setIndex(index+1)
    }

    const renderImage = ()=> {
        if(!carousel){
            return (
                <img src={img[0]} alt="" />
            )
        } else {
            return (
                <Container>
                    <Row>
                        <Col lg={1}>
                            <div onClick={previous} className="arrows">
                                <FaArrowCircleLeft />
                            </div>
                        </Col>
                        <Col lg={10}>
                            <Carousel controls={false} activeIndex={index} onSelect={handleSelect}>
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
                        </Col>
                        <Col lg={1}>
                            <div onClick={next} className="arrows">
                                <FaArrowCircleRight />
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }

    const renderSection = ()=> {
        if(investment){
            return (
                <Investment 
                    title={title}
                />
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
