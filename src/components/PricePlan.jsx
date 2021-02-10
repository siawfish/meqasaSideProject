import React from 'react'
import { Container } from 'react-bootstrap'
import { plans } from '../utils/data'
import Table from './Table'

export default function PricePlan() {
    return (
        <Container className="pricePlan" fluid>
            <div className="biggerText">Price plan</div>
            {
                plans.map((plan,i)=>{
                    return (
                        <Table 
                            kei={i}
                            heading={plan.heading}
                            title={plan.title}
                            initialDeposit={plan.initialDeposit}
                            monthlyPayment={plan.monthlyPayment}
                            totalAmount={plan.totalAmount}
                        />
                    )
                })
            }
        </Container>
    )
}
