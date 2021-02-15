import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { plans } from '../utils/data'
import PriceCard from './PriceCard'

export default function PricePlan() {
    return (
        <Container className="pricePlan" fluid>
            <div className="biggerText">Price plan</div>
            <Row>
            {
                plans.map((plan,i)=>{
                    return (

                        <PriceCard 
                            duration={plan.duration}
                            area={plan.area}
                            price={plan.price}
                            initialDeposit={plan.initialDeposit}
                            monthlyPayment={plan.monthlyPayment}
                            totalAmount={plan.totalAmount}
                        />
                    )
                })
            }
            </Row>
        </Container>
    )
}
