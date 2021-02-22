import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { planDuration } from '../utils/data'
import PriceCard from './PriceCard'

export default function PricePlan() {
    return (
        <Container className="pricePlan" fluid>
            <div className="biggerText">Price plan</div>
            <Row>
            {
                planDuration.map((plan,i)=>{
                    return (

                        <PriceCard 
                            duration={plan}
                        />
                    )
                })
            }
            </Row>
        </Container>
    )
}
